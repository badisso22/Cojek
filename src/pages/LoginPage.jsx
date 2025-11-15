import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function LoginPage() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    loginId: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setForm((prev) => ({ ...prev, [id]: value }));
    // clear error as user types
    setErrors((prev) => ({ ...prev, [id]: "" }));
  };

  const validate = () => {
    const newErrors = {};

    // loginId: required (can be email or username)
    if (!form.loginId.trim()) {
      newErrors.loginId = "Please enter your email or username.";
    } else if (form.loginId.includes("@")) {
      // simple email format check only if it looks like an email
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(form.loginId)) {
        newErrors.loginId = "Please enter a valid email address.";
      }
    }

    // password: required, min length
    if (!form.password) {
      newErrors.password = "Please enter your password.";
    } else if (form.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return;

    // Simulated login
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      // later: replace with real API + error handling
      navigate("/project-gen");
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F9F1EE]">
      <div className="w-full max-w-md bg-[#F9F1EE] border-4 border-[#C74A2C] px-10 py-12 rounded-md shadow-sm">
        <h1 className="text-3xl font-bold mb-10 text-center text-[#3B2621]">
          Login
        </h1>

        <form className="space-y-6" onSubmit={handleSubmit} noValidate>
          {/* Email / Username */}
          <div className="flex flex-col items-center">
            <label
              htmlFor="loginId"
              className="text-[#3B2621] text-sm mb-1 self-start"
            >
              Email or Username
            </label>
            <input
              id="loginId"
              type="text"
              value={form.loginId}
              onChange={handleChange}
              aria-invalid={!!errors.loginId}
              className={`w-full px-4 py-2 border rounded-full bg-white focus:outline-none focus:ring-2 ${
                errors.loginId
                  ? "border-red-500 focus:ring-red-400"
                  : "border-[#D8CAC2] focus:ring-[#C74A2C]"
              }`}
            />
            {errors.loginId && (
              <p className="mt-1 text-xs text-red-600 self-start">
                {errors.loginId}
              </p>
            )}
          </div>

          {/* Password */}
          <div className="flex flex-col items-center">
            <label
              htmlFor="password"
              className="text-[#3B2621] text-sm mb-1 self-start"
            >
              Password
            </label>

            <div className="w-full relative">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                value={form.password}
                onChange={handleChange}
                aria-invalid={!!errors.password}
                className={`w-full px-4 py-2 border rounded-full bg-white pr-20 focus:outline-none focus:ring-2 ${
                  errors.password
                    ? "border-red-500 focus:ring-red-400"
                    : "border-[#D8CAC2] focus:ring-[#C74A2C]"
                }`}
              />

              {/* Show / hide password toggle */}
              <button
                type="button"
                onClick={() => setShowPassword((s) => !s)}
                className="absolute inset-y-0 right-3 my-auto text-xs text-[#7B5A4A] hover:text-[#3B2621]"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>

            {errors.password && (
              <p className="mt-1 text-xs text-red-600 self-start">
                {errors.password}
              </p>
            )}

            {/* Forgot password link */}
            <div className="w-full mt-2 text-right">
              {/* TODO: wire this to a real route/page later */}
              <button
                type="button"
                className="text-xs text-[#7B5A4A] hover:underline"
                onClick={() =>
                  alert("Password reset flow coming soon for the hackathon demo ✨")
                }
              >
                Forgot password?
              </button>
            </div>
          </div>

          {/* Login button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-2.5 mt-4 rounded-full bg-[#3B2621] text-white font-semibold transition flex items-center justify-center ${
              isSubmitting
                ? "opacity-70 cursor-not-allowed"
                : "hover:bg-[#251613]"
            }`}
          >
            {isSubmitting ? (
              <span className="flex items-center gap-2 text-sm">
                <span className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                Logging in...
              </span>
            ) : (
              "Login"
            )}
          </button>
        </form>

        <p className="mt-8 text-center text-sm text-[#7B5A4A]">
          Don&apos;t have an account?{" "}
          <Link to="/signup" className="underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
