
export interface RegistrationStep {
  title: string;
  description: string;
  color: string;
}

export const registrationSteps: RegistrationStep[] = [
  {
    title: 'Fill the Form',
    description: 'Complete the registration form with your details',
    color: 'primary'
  },
  {
    title: 'Payment',
    description: 'Process the payment for your registration category',
    color: 'secondary'
  },
  {
    title: 'Confirmation',
    description: 'Receive confirmation email with registration details',
    color: 'success'
  }
]