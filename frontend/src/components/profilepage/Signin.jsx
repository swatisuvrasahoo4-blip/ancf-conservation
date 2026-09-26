import { useState } from "react";
import axios from "axios";
import { FiMail, FiLock } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";

import logo from "../profilepage/profimg/slogo.png";
import impact from "../profilepage/profimg/simpact.png";
import connect from "../profilepage/profimg/sconnect.png";
import contribute from "../profilepage/profimg/scontribute.png";

const API_URL = import.meta.env.VITE_API_URL;

const Signin = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
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

  // Handle sign in
  const handleSignIn = async (e) => {
    e.preventDefault();

    setError("");
    setSuccess("");

    if (!formData.email.trim() || !formData.password) {
      setError("Please enter your email and password.");
      return;
    }

    try {
      setLoading(true);

      const response = await axios.post(
        `${API_URL}/api/auth/login`,
        {
          email: formData.email.trim(),
          password: formData.password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
      }

      if (response.data.user) {
        localStorage.setItem(
          "user",
          JSON.stringify(response.data.user)
        );
      }

      setSuccess(
        response.data?.message || "Login successful!"
      );

      navigate("/dashboard");
    } catch (err) {
      console.error("Login error:", err);

      if (err.response) {
        setError(
          err.response.data?.message ||
            "Invalid email or password."
        );
      } else if (err.request) {
        setError(
          "Unable to connect to the server. Please try again."
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
            <h2 className="font-serif text-3xl font-bold sm:text-4xl">
              Welcome Back!
            </h2>

            <p className="mt-2 font-serif text-base sm:text-lg">
              Glad to see you again.
            </p>

            <hr className="mt-5 w-14 border-amber-600" />

            <p className="mt-5 max-w-md font-serif text-sm leading-6 sm:text-base">
              Sign in to your account and continue your journey
              with ANCF.
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
              Don't have an account?
            </p>

            <Link
              to="/signup"
              className="w-fit rounded-md bg-[#1f3c28] px-5 py-2 font-medium text-white transition hover:bg-[#2c5538]"
            >
              Sign Up
            </Link>
          </div>

          <div className="mt-8">
            <h2 className="font-serif text-3xl font-bold text-[#1f3c28] sm:text-4xl">
              Sign In
            </h2>

            <hr className="mt-3 w-14 border-amber-600" />

            <p className="mt-3 font-serif text-sm text-[#1f3c28]">
              Welcome back! Please enter your details.
            </p>
          </div>

          <form
            onSubmit={handleSignIn}
            className="mt-8 w-full max-w-md"
          >
            {error && (
              <div className="mb-4 rounded-md border border-red-300 bg-red-100 px-4 py-3 text-sm text-red-700">
                {error}
              </div>
            )}

            {success && (
              <div className="mb-4 rounded-md border border-green-300 bg-green-100 px-4 py-3 text-sm text-green-700">
                {success}
              </div>
            )}

            <label
              htmlFor="inmail"
              className="mb-2 block font-serif text-sm font-bold text-[#1f3c28]"
            >
              Email Address
            </label>

            <div className="relative w-full">
              <FiMail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />

              <input
                type="email"
                id="inmail"
                name="email"
                value={formData.email}
                onChange={handleChange}
                autoComplete="email"
                required
                placeholder="Enter your email"
                className="w-full rounded-md border border-gray-300 bg-amber-50 py-3 pl-10 pr-3 text-black outline-none transition focus:border-[#1f3c28] focus:ring-1 focus:ring-[#1f3c28]"
              />
            </div>

            <label
              htmlFor="inpassword"
              className="mb-2 mt-5 block font-serif text-sm font-bold text-[#1f3c28]"
            >
              Password
            </label>

            <div className="relative w-full">
              <FiLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />

              <input
                type="password"
                id="inpassword"
                name="password"
                value={formData.password}
                onChange={handleChange}
                autoComplete="current-password"
                required
                placeholder="Enter your password"
                className="w-full rounded-md border border-gray-300 bg-amber-50 py-3 pl-10 pr-3 text-black outline-none transition focus:border-[#1f3c28] focus:ring-1 focus:ring-[#1f3c28]"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="mt-6 w-full cursor-pointer rounded-md bg-[#1f3c28] py-3 text-sm font-semibold text-white transition hover:bg-[#2c5538] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? "Signing In..." : "Sign In →"}
            </button>
          </form>
        </section>
      </div>
    </main>
  );
};

export default Signin;