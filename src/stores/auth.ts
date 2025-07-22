import { defineStore } from 'pinia';
import router from '@/router';
import axios, { AxiosError } from 'axios';

const baseurl = import.meta.env.VITE_API_BASE_URL;

// Interfaces
interface LoginSession {
    id: string;
    email: string;
    created_at: string;
    is_verified: boolean;
    token: string;
    token_expiry: string;
}

interface User {
    id: string;
    email: string;
    created_at: string;
    is_verified: boolean;
    token: string;
    token_expiry: string;
}

interface AuthState {
    user: User | null;
    returnUrl: string | null;
}

// Helper function to safely parse JSON from localStorage
const safeJSONParse = <T>(key: string, defaultValue: T): T => {
    try {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : defaultValue;
    } catch {
        return defaultValue;
    }
};

// Login Session Store
export const useLoginSessionStore = defineStore('loginSession', {
    state: (): LoginSession => {
        const user = safeJSONParse<Partial<User>>('user', {});
        return {
            id: user.id ?? '',
            email: user.email ?? '',
            created_at: user.created_at ?? '',
            is_verified: user.is_verified ?? false,
            token: user.token ?? '',
            token_expiry: user.token_expiry ?? ''
        };
    },

    actions: {
        updateSession(user: User): void {
            this.$patch({
                id: user.id,
                email: user.email,
                created_at: user.created_at,
                is_verified: user.is_verified,
                token: user.token,
                token_expiry: user.token_expiry
            });
        }
    }
});

// Auth Store
export const useAuthStore = defineStore('auth', {
    state: (): AuthState => ({
        user: safeJSONParse<User | null>('user', null),
        returnUrl: null
    }),

    actions: {
        async login(email: string, password: string): Promise<void> {
            try {
                const { data } = await axios.post<User>(`${baseurl}/Login_Account.php`, {
                    email,
                    password
                }, {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });

                this.user = data;
                localStorage.setItem('user', JSON.stringify(data));

                const loginSessionStore = useLoginSessionStore();
                loginSessionStore.updateSession(data);

                router.push(this.returnUrl || '/registration/profile');
            } catch (error) {
                let errorMessage = 'An unexpected error occurred';
                if (error instanceof AxiosError) {
                    if (error.response && error.response.status === 401) {
                        errorMessage = error.response.data?.message || 'Invalid email or password';
                        throw new Error(errorMessage);
                    } else {
                        errorMessage = error.response?.data?.message || 'Network error occurred';
                    }
                }
                console.error('Login error:', error);
                throw new Error(errorMessage);
            }
        },

        async register(email: string, password: string): Promise<void> {
            try {
                const { data } = await axios.post<User>(`${baseurl}/Register_Account.php`, {
                    email,
                    password
                }, {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });

                this.user = data;
                localStorage.setItem('user', JSON.stringify(data));

                const loginSessionStore = useLoginSessionStore();
                loginSessionStore.updateSession(data);

                router.push('/registration/profile');
            } catch (error) {
                let errorMessage = 'An unexpected error occurred';
                if (error instanceof AxiosError) {
                    if (error.response && error.response.status === 409) {
                        errorMessage = error.response.data?.message || 'An account with this email already exists';
                    } else if (error.response) {
                        errorMessage = error.response.data?.message || 'Registration failed';
                    }
                }
                console.error('Registration error:', error);
                throw new Error(errorMessage);
            }
        },

        logout(): void {
            this.user = null;
            localStorage.removeItem('user');
            const loginSessionStore = useLoginSessionStore();
            loginSessionStore.$reset();
            router.push('/');
        }
    }
});

// Axios interceptor setup
axios.interceptors.request.use(
    (config) => {
        const user = safeJSONParse<User | null>('user', null);
        if (user?.token) {
            config.headers.Authorization = `Bearer ${user.token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

axios.interceptors.response.use(
    (response) => response,
    (error: AxiosError) => {
        const isLoginRequest = error.config?.url?.includes('/Login_Account.php');
        const isRegisterRequest = error.config?.url?.includes('/Register_Account.php');
        if (error.response?.status === 401 && !isLoginRequest && !isRegisterRequest) {
            const authStore = useAuthStore();
            authStore.logout();
        }
        return Promise.reject(error);
    }
);