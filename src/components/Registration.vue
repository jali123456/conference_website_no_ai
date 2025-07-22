<template>
  <v-container class="py-8">
    <v-card class="mx-auto" max-width="500">
      <v-card-title>{{ isLogin ? 'Login' : 'Register' }}</v-card-title>
      <v-card-text>
        <v-form @submit.prevent="handleSubmit">
          <v-text-field v-model="email" label="Email" type="email" required />
          <v-text-field v-model="password" label="Password" type="password" required />

          <v-checkbox v-if="isLogin" v-model="remember" label="Remember me" />

          <v-btn type="submit" color="primary" class="mt-4" block>
            {{ isLogin ? 'Login' : 'Register' }}
          </v-btn>

          <div class="mt-2 text-center">
            <a v-if="isLogin" href="#">Forgot password?</a>
          </div>
        </v-form>
      </v-card-text>
      <v-card-actions class="justify-center">
        <v-btn variant="text" @click="isLogin = !isLogin">
          {{ isLogin ? "Don't have an account? Register" : "Already have an account? Login" }}
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth';

const baseurl = import.meta.env.VITE_API_BASE_URL;
const isLogin = ref(false)
const email = ref('')
const password = ref('')
const remember = ref(false)
const router = useRouter()
const authStore = useAuthStore()

const handleSubmit = async () => {
  const endpoint = isLogin.value ? 'Login_Account.php' : 'Register_Account.php'

  const response = await fetch(`${baseurl}/${endpoint}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email: email.value, password: password.value }),
  })

  const result = await response.json()

  if (result.success) {
    if (isLogin.value) {
      authStore.login({ email: email.value }, remember.value)
      router.push('/profile')
    } else {
      alert('Registration successful. You can now log in.')
      isLogin.value = true
    }
  } else {
    alert(result.message || 'Something went wrong.')
  }
}
</script>
