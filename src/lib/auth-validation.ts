export type SignUpValues = { fullName: string; email: string; password: string; confirmPassword: string };

export function validateEmail(email: string) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? "" : "Enter a valid email address."; }
export function validatePassword(password: string) { return password.length >= 8 ? "" : "Use at least 8 characters for your password."; }
export function validateSignUp(values: SignUpValues) {
  if (values.fullName.trim().length < 2) return "Enter your full name.";
  return validateEmail(values.email) || validatePassword(values.password) || (values.password !== values.confirmPassword ? "Passwords do not match." : "");
}
