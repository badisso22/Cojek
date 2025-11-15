import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function SignUpPage() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    country: "",
    email: "",
    username: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setForm((prev) => ({ ...prev, [id]: value }));
    setErrors((prev) => ({ ...prev, [id]: "" })); // clear error as user types
  };

  const validate = () => {
    const newErrors = {};

    // First name
    if (!form.firstName.trim()) {
      newErrors.firstName = "Please enter your first name.";
    }

    // Last name
    if (!form.lastName.trim()) {
      newErrors.lastName = "Please enter your last name.";
    }

    // Date of birth
    if (!form.dateOfBirth) {
      newErrors.dateOfBirth = "Please select your date of birth.";
    }

    // Country
    if (!form.country) {
      newErrors.country = "Please select your country.";
    }

    // Email
    if (!form.email.trim()) {
      newErrors.email = "Please enter your email.";
    } else {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(form.email)) {
        newErrors.email = "Please enter a valid email address.";
      }
    }

    // Username
    if (!form.username.trim()) {
      newErrors.username = "Please choose a username.";
    } else if (form.username.trim().length < 3) {
      newErrors.username = "Username must be at least 3 characters.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return;

    // fake async signup
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      // later: replace with real sign-up logic
      navigate("/login");
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F9F1EE]">
      {/* Outer border box */}
      <div className="w-full max-w-md bg-[#F9F1EE] border-4 border-[#C74A2C] px-10 py-12 rounded-md">
        {/* Title */}
        <h1 className="text-3xl font-bold mb-10 text-center text-[#3B2621]">
          Sign Up
        </h1>

        <form className="space-y-6" onSubmit={handleSubmit} noValidate>
          {/* First Name */}
          <div className="flex flex-col items-center">
            <label htmlFor="firstName" className="text-[#3B2621] text-sm mb-1 self-start">
              First Name
            </label>
            <input
              id="firstName"
              type="text"
              value={form.firstName}
              onChange={handleChange}
              aria-invalid={!!errors.firstName}
              className={`w-full px-4 py-2 border rounded-full bg-white focus:outline-none focus:ring-2 ${
                errors.firstName
                  ? "border-red-500 focus:ring-red-400"
                  : "border-[#D8CAC2] focus:ring-[#C74A2C]"
              }`}
            />
            {errors.firstName && (
              <p className="mt-1 text-xs text-red-600 self-start">
                {errors.firstName}
              </p>
            )}
          </div>

          {/* Last Name */}
          <div className="flex flex-col items-center">
            <label htmlFor="lastName" className="text-[#3B2621] text-sm mb-1 self-start">
              Last Name
            </label>
            <input
              id="lastName"
              type="text"
              value={form.lastName}
              onChange={handleChange}
              aria-invalid={!!errors.lastName}
              className={`w-full px-4 py-2 border rounded-full bg-white focus:outline-none focus:ring-2 ${
                errors.lastName
                  ? "border-red-500 focus:ring-red-400"
                  : "border-[#D8CAC2] focus:ring-[#C74A2C]"
              }`}
            />
            {errors.lastName && (
              <p className="mt-1 text-xs text-red-600 self-start">
                {errors.lastName}
              </p>
            )}
          </div>

          {/* Date of Birth */}
          <div className="flex flex-col items-center">
            <label
              htmlFor="dateOfBirth"
              className="text-[#3B2621] text-sm mb-1 self-start"
            >
              Date of Birth
            </label>
            <input
              id="dateOfBirth"
              type="date"
              value={form.dateOfBirth}
              onChange={handleChange}
              aria-invalid={!!errors.dateOfBirth}
              className={`w-full px-4 py-2 border rounded-full bg-white focus:outline-none focus:ring-2 ${
                errors.dateOfBirth
                  ? "border-red-500 focus:ring-red-400"
                  : "border-[#D8CAC2] focus:ring-[#C74A2C]"
              }`}
            />
            {errors.dateOfBirth && (
              <p className="mt-1 text-xs text-red-600 self-start">
                {errors.dateOfBirth}
              </p>
            )}
          </div>

          {/* Country */}
          <div className="flex flex-col items-center">
            <label htmlFor="country" className="text-[#3B2621] text-sm mb-1 self-start">
              Country
            </label>
            <select
              id="country"
              value={form.country}
              onChange={handleChange}
              aria-invalid={!!errors.country}
              className={`w-full px-4 py-2 border rounded-full bg-white text-[#3B2621] focus:outline-none focus:ring-2 appearance-none ${
                errors.country
                  ? "border-red-500 focus:ring-red-400"
                  : "border-[#D8CAC2] focus:ring-[#C74A2C]"
              }`}
            >
              <option value="">Select your country</option>
              <option value="Saudi Arabia">Saudi Arabia</option>
              <option value="Kuwait">Kuwait</option>
              <option value="France">France</option>
              <option value="UK">UK</option>
              <option value="Sri Lanka">Sri Lanka</option>
              <option value="India">India</option>
              <option value="US">US</option>
              <option value="Pakistan">Pakistan</option>
              <option value="Bangladesh">Bangladesh</option>
              <option value="Ghana">Ghana</option>
              <option value="Egypt">Egypt</option>
              <option value="UAE">United Arab Emirates</option>
              <option value="Other">Other</option>
            </select>
            {errors.country && (
              <p className="mt-1 text-xs text-red-600 self-start">
                {errors.country}
              </p>
            )}
          </div>

          {/* Email */}
          <div className="flex flex-col items-center">
            <label htmlFor="email" className="text-[#3B2621] text-sm mb-1 self-start">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              aria-invalid={!!errors.email}
              className={`w-full px-4 py-2 border rounded-full bg-white focus:outline-none focus:ring-2 ${
                errors.email
                  ? "border-red-500 focus:ring-red-400"
                  : "border-[#D8CAC2] focus:ring-[#C74A2C]"
              }`}
            />
            {errors.email && (
              <p className="mt-1 text-xs text-red-600 self-start">
                {errors.email}
              </p>
            )}
          </div>

          {/* Username */}
          <div className="flex flex-col items-center">
            <label htmlFor="username" className="text-[#3B2621] text-sm mb-1 self-start">
              Username
            </label>
            <input
              id="username"
              type="text"
              value={form.username}
              onChange={handleChange}
              aria-invalid={!!errors.username}
              className={`w-full px-4 py-2 border rounded-full bg-white focus:outline-none focus:ring-2 ${
                errors.username
                  ? "border-red-500 focus:ring-red-400"
                  : "border-[#D8CAC2] focus:ring-[#C74A2C]"
              }`}
            />
            {errors.username && (
              <p className="mt-1 text-xs text-red-600 self-start">
                {errors.username}
              </p>
            )}
          </div>

          {/* Submit Button */}
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
                Creating account...
              </span>
            ) : (
              "Submit"
            )}
          </button>
        </form>

        {/* Bottom text */}
        <p className="mt-8 text-center text-sm text-[#7B5A4A]">
          Already have an account?{" "}
          <Link to="/login" className="underline">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}
