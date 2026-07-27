import { forwardRef, type InputHTMLAttributes } from "react";

type AuthInputProps = InputHTMLAttributes<HTMLInputElement> & { error?: string };

const AuthInput = forwardRef<HTMLInputElement, AuthInputProps>(({ error, id, ...props }, ref) => <><input aria-invalid={Boolean(error)} aria-describedby={error ? `${id}-error` : undefined} id={id} ref={ref} {...props} />{error && <p className="auth-error" id={`${id}-error`}>{error}</p>}</>);
AuthInput.displayName = "AuthInput";

export { AuthInput };
