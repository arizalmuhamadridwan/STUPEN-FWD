import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login, useDecodeToken } from "../../_services/auth";

export default function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const token = localStorage.getItem("accessToken");
  const decodeToken = useDecodeToken(token);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await login(formData);
      console.log("Login Response:", response);

      // Sesuaikan dengan struktur backend-mu
      const token = response.token || response.data?.token;
      const user = response.user || response.data?.user;

      if (!token) throw new Error("Token tidak ditemukan di response.");

      localStorage.setItem("accessToken", token);
      localStorage.setItem("userInfo", JSON.stringify(user));

      navigate(user.role === "admin" ? "/admin" : "/");
    } catch (error) {
      console.error("Login Error:", error);
      setError(error.response?.data?.message || "Login gagal. Periksa email/password.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (token && decodeToken) {
      if (decodeToken.role === "admin") {
        navigate("/admin");
      } else {
        navigate("/");
      }
    }
  }, [token, decodeToken, navigate]);

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold text-gray-900 md:text-2xl dark:text-white">
              Sign in to your account
            </h1>

            {error && <div className="text-red-500 text-sm">{error}</div>}

            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  placeholder="name@company.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5"
              >
                {loading ? "Signing in..." : "Sign In"}
              </button>

              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Don’t have an account yet?{" "}
                <Link to="/register" className="font-medium text-indigo-600 hover:underline dark:text-indigo-500">
                  Sign up
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
