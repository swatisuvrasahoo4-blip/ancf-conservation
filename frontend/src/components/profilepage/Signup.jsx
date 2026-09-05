import { useState } from "react";
import axios from "axios";
import {
  FiMail,
  FiLock,
  FiUser,
  FiPhone,
} from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";

import logo from "../profilepage/profimg/slogo.png";
import impact from "../profilepage/profimg/simpact.png";
import connect from "../profilepage/profimg/sconnect.png";
import contribute from "../profilepage/profimg/scontribute.png";

const features = [
  {
    image: connect,
    title: "Connect",
    description: "with like-minded individuals",
  },
  {
    image: contribute,
    title: "Contribute",
    description: "to meaningful causes",
  },
  {
    image: impact,
    title: "Create Impact",
    description: "in communities that matter",
  },
];

const Signup = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setError("");
    setSuccess("");
  };

  // Handle signup
  const handleSignUp = async (e) => {
    e.preventDefault();

    setError("");
    setSuccess("");

    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      setError("Please fill in all required fields.");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    if (formData.password.length < 6) {
      setError(
        "Password must be at least 6 characters long."
      );
      return;
    }

    try {
      setLoading(true);

      const response = await axios.post(
        "http://localhost:5000/api/auth/register",
        {
          name: formData.name.trim(),
          email: formData.email.trim(),
          password: formData.password,
          phone: formData.phone.trim(),
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      setSuccess(
        response.data?.message ||
          "Account created successfully!"
      );

      setFormData({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        phone: "",
      });

      navigate("/signin");
    } catch (err) {
      console.error("Signup error:", err);

      if (err.response) {
        setError(
          err.response.data?.message ||
            "Unable to create account. Please try again."
        );
      } else if (err.request) {
        setError(
          "Unable to connect to the server. Please check that your backend is running."
        );
      } else {
        setError(
          "Something went wrong. Please try again."
        );
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex min-h-screen w-full items-center justify-center bg-amber-50 px-4 py-8 sm:px-6 lg:px-8">
      <div className="flex w-full max-w-6xl flex-col overflow-hidden rounded-2xl shadow-2xl lg:flex-row">
        
        {/* Left side */}
        <section className="w-full bg-[#1f3c28] p-6 text-amber-50 sm:p-8 lg:w-1/2 lg:p-10">
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt="ANCF logo"
              className="h-11 w-11 rounded-full border border-[#66390A] object-contain sm:h-12 sm:w-12"
            />

            <div>
              <h1 className="font-serif text-lg font-bold sm:text-xl">
                ANCF
              </h1>

              <p className="text-xs font-light text-[#8fbd58] sm:text-sm">
                Care. Connect. Empower
              </p>
            </div>
          </div>

          <div className="mt-10 sm:mt-14 lg:mt-20">
            <h2 className="max-w-md font-serif text-3xl font-bold leading-tight sm:text-4xl">
              Create Your ANCF Account
            </h2>

            <hr className="mt-5 w-14 border-amber-600" />

            <p className="mt-5 max-w-md font-serif text-sm leading-6 sm:text-base">
              Join our community and be a part of something
              meaningful.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-7 sm:grid-cols-3 lg:mt-14">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="text-center"
              >
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="mx-auto h-16 object-contain sm:h-20"
                />

                <h3 className="mt-3 font-serif text-lg font-semibold">
                  {feature.title}
                </h3>

                <p className="mt-1 text-xs font-light leading-5 text-amber-50/80">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Right side */}
        <section className="w-full bg-amber-100 p-6 sm:p-8 lg:w-1/2 lg:p-10">
          <div className="flex flex-col gap-2 text-sm sm:flex-row sm:items-center sm:justify-end">
            <p className="text-[#1f3c28]">
              Already have an account?
            </p>

            <Link
              to="/signin"
              className="w-fit rounded-md bg-[#1f3c28] px-5 py-2 font-medium text-white transition hover:bg-[#2c5538]"
            >
              Sign In
            </Link>
          </div>

          <div className="mt-8">
            <h2 className="font-serif text-3xl font-bold text-[#1f3c28] sm:text-4xl">
              Sign Up
            </h2>

            <hr className="mt-3 w-14 border-amber-600" />

            <p className="mt-3 font-serif text-sm text-[#1f3c28]">
              Please fill in the details to create your account.
            </p>
          </div>

          <form
            onSubmit={handleSignUp}
            className="mt-8"
          >
            {error && (
              <div className="mb-5 rounded-lg border border-red-300 bg-red-100 px-4 py-3 text-sm text-red-700">
                {error}
              </div>
            )}

            {success && (
              <div className="mb-5 rounded-lg border border-green-300 bg-green-100 px-4 py-3 text-sm text-green-700">
                {success}
              </div>
            )}

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              <div>
                <label
                  htmlFor="upuser"
                  className="mb-2 block font-serif text-sm font-bold text-[#1f3c28]"
                >
                  Full Name
                </label>

                <div className="relative">
                  <FiUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />

                  <input
                    type="text"
                    id="upuser"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    autoComplete="name"
                    required
                    placeholder="Enter your name"
                    className="w-full rounded-lg border border-gray-300 bg-amber-50 py-3 pl-10 pr-3 text-black outline-none transition focus:border-[#1f3c28] focus:ring-1 focus:ring-[#1f3c28]"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="upemail"
                  className="mb-2 block font-serif text-sm font-bold text-[#1f3c28]"
                >
                  Email Address
                </label>

                <div className="relative">
                  <FiMail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />

                  <input
                    type="email"
                    id="upemail"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    autoComplete="email"
                    required
                    placeholder="Enter your email"
                    className="w-full rounded-lg border border-gray-300 bg-amber-50 py-3 pl-10 pr-3 text-black outline-none transition focus:border-[#1f3c28] focus:ring-1 focus:ring-[#1f3c28]"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="uppassword"
                  className="mb-2 block font-serif text-sm font-bold text-[#1f3c28]"
                >
                  Password
                </label>

                <div className="relative">
                  <FiLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />

                  <input
                    type="password"
                    id="uppassword"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    autoComplete="new-password"
                    required
                    placeholder="Enter your password"
                    className="w-full rounded-lg border border-gray-300 bg-amber-50 py-3 pl-10 pr-3 text-black outline-none transition focus:border-[#1f3c28] focus:ring-1 focus:ring-[#1f3c28]"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="uconfpassword"
                  className="mb-2 block font-serif text-sm font-bold text-[#1f3c28]"
                >
                  Confirm Password
                </label>

                <div className="relative">
                  <FiLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />

                  <input
                    type="password"
                    id="uconfpassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    autoComplete="new-password"
                    required
                    placeholder="Confirm your password"
                    className="w-full rounded-lg border border-gray-300 bg-amber-50 py-3 pl-10 pr-3 text-black outline-none transition focus:border-[#1f3c28] focus:ring-1 focus:ring-[#1f3c28]"
                  />
                </div>
              </div>

              <div className="md:col-span-2">
                <label
                  htmlFor="upphone"
                  className="mb-2 block font-serif text-sm font-bold text-[#1f3c28]"
                >
                  Phone Number
                  <span className="font-normal text-gray-600">
                    {" "}
                    (Optional)
                  </span>
                </label>

                <div className="relative">
                  <FiPhone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />

                  <input
                    type="tel"
                    id="upphone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    autoComplete="tel"
                    placeholder="Enter your phone number"
                    className="w-full rounded-lg border border-gray-300 bg-amber-50 py-3 pl-10 pr-3 text-black outline-none transition focus:border-[#1f3c28] focus:ring-1 focus:ring-[#1f3c28]"
                  />
                </div>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="mt-6 w-full cursor-pointer rounded-lg bg-[#1f3c28] py-3 text-sm font-semibold text-white transition hover:bg-[#2c5538] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading
                ? "Creating Account..."
                : "Sign Up →"}
            </button>
          </form>
        </section>
      </div>
    </main>
  );
};

export default Signup;