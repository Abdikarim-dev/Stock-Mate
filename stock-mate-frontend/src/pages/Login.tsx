import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/User/User";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import toast from "react-hot-toast";
// import logo from "../assets/stockmate-logo.png"; // Ensure you have a logo file in assets

// Validation Schema
const loginSchema = z.object({
  identifier: z
    .string()
    .min(1, { message: "Username or Phone cannot be empty" })
    .min(6, {
      message: "Username or Phone must be at least 6 characters long",
    }),
  password: z
    .string()
    .min(1, { message: "Password cannot be empty" })
    .min(6, { message: "Password must be at least 6 characters long" })
    .max(20, { message: "Password must be at maximum 20 characters long" }),
});

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/dashboard");
      toast.success("Login Successful");
    }
  }, [navigate, isAuthenticated]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  return (
    <div className="flex flex-col h-screen justify-center items-center bg-gray-100 p-4">
      {/* Logo Section */}
      <div className="mb-6 flex flex-col items-center">
        {/* <img
          src={logo || "https://via.placeholder.com/240"}
          alt="StockMate Logo"
          className="w-24 h-24"
        /> */}
        <h1 className="text-3xl font-bold text-gray-800 mt-2">StockMate</h1>
      </div>

      {/* Login Form */}
      <form
        onSubmit={handleSubmit((d) => dispatch(login(d)))}
        className="w-96 bg-white shadow-lg rounded-xl p-8 flex flex-col gap-5"
      >
        <h3 className="text-2xl font-semibold text-center text-blue-900">
          Login
        </h3>

        {/* Username / Phone Input */}
        <div className="flex flex-col">
          <input
            className="border border-gray-300 px-4 py-2 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            type="text"
            placeholder="Enter Username or Phone"
            {...register("identifier")}
          />
          {errors.identifier && (
            <p className="text-red-500 text-xs mt-1">
              {errors.identifier.message}
            </p>
          )}
        </div>

        {/* Password Input */}
        <div className="flex flex-col">
          <input
            className="border border-gray-300 px-4 py-2 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            type="password"
            placeholder="Enter Password"
            {...register("password")}
          />
          {errors.password && (
            <p className="text-red-500 text-xs mt-1">
              {errors.password.message}
            </p>
          )}
        </div>

        {/* Login Button */}
        <button
          className="bg-blue-600 hover:bg-blue-700 transition text-white px-4 py-2 rounded-lg text-lg font-semibold shadow-md"
          type="submit"
        >
          Login
        </button>

        {/* Extra Links */}
        <p className="text-center text-gray-500 text-sm">
          Forgot password?{" "}
          <span className="text-blue-600 cursor-pointer">Reset</span>
        </p>
      </form>
    </div>
  );
};

export default Login;
