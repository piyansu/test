import React, { useState } from "react";
import { Mail, Lock, Globe, Eye, EyeOff, ArrowRight } from "lucide-react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [ip, setIp] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      alert(`Email: ${email}\nPassword: ${password}\nIP Address: ${ip}`);
      setIsLoading(false);
    }, 1000);
  };

  const handleGoogleLogin = () => {
    setMessage("Google login is not implemented.");
  };

  return (
    <div className="flex h-screen w-full bg-gradient-to-br from-gray-900 to-gray-800 overflow-hidden">
      {/* Left side with background image and branding */}
      <div
        className="hidden lg:flex lg:w-1/2 bg-cover bg-center relative"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')",
        }}
      >
        {/* Black overlay */}
        <div className="absolute inset-0 bg-black opacity-75"></div>

        <div className="w-full h-full flex flex-col justify-center items-center p-8 text-center relative z-10">
          <div>
            <h1 className="text-3xl font-bold text-white">
              Enterprise Resource Planning
            </h1>
            <p className="text-white text-base mt-2">
              Streamline your business operations with our comprehensive ERP
              solution
            </p>
          </div>
          <div className="absolute bottom-8 text-white text-xs">
            <p>© 2025 Your Company. All rights reserved.</p>
          </div>
        </div>
      </div>

      {/* Right side with login form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-4">
        <div className="max-w-md w-full">
          {/* Mobile logo - visible only on mobile */}
          <div className="block lg:hidden text-center mb-4">
            <h1 className="text-2xl font-bold text-white">Enterprise ERP</h1>
          </div>

          <div className="bg-gray-800 rounded-2xl shadow-2xl overflow-hidden">
            {/* Login header */}
            <div className="bg-gray-700 p-4 border-b border-gray-600">
              <h2 className="text-xl font-bold text-white">Sign In</h2>
              <p className="text-gray-300 text-sm mt-1">
                Access your ERP dashboard
              </p>
            </div>

            {/* Login form */}
            <div className="p-4 space-y-3">
              <form onSubmit={handleLogin} className="space-y-3">
                {/* Email input */}
                <div>
                  <label
                    className="block text-gray-300 text-xs font-medium mb-1"
                    htmlFor="email"
                  >
                    Email Address
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail size={18} className="text-gray-400" />
                    </div>
                    <input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="bg-gray-700 text-white pl-10 pr-4 py-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                      placeholder="your.email@company.com"
                      required
                    />
                  </div>
                </div>

                {/* Password input */}
                <div>
                  <label
                    className="block text-gray-300 text-xs font-medium mb-1"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Lock size={18} className="text-gray-400" />
                    </div>
                    <input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="bg-gray-700 text-white pl-10 pr-12 py-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                      placeholder="••••••••"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    >
                      {showPassword ? (
                        <EyeOff
                          size={18}
                          className="text-gray-400 hover:text-gray-200"
                        />
                      ) : (
                        <Eye
                          size={18}
                          className="text-gray-400 hover:text-gray-200"
                        />
                      )}
                    </button>
                  </div>
                </div>

                {/* IP Address input */}
                <div>
                  <label
                    className="block text-gray-300 text-xs font-medium mb-1"
                    htmlFor="ip"
                  >
                    IP Address
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Globe size={18} className="text-gray-400" />
                    </div>
                    <input
                      id="ip"
                      type="text"
                      value={ip}
                      onChange={(e) => setIp(e.target.value)}
                      className="bg-gray-700 text-white pl-10 pr-4 py-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                      placeholder="192.168.1.1"
                      required
                    />
                  </div>
                </div>

                {/* Remember me and forgot password */}
                <div className="flex justify-between items-center">
                  <div className="text-sm">
                    <a
                      href="#"
                      className="text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      Forgot password?
                    </a>
                  </div>
                </div>

                {/* Login button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 px-4 rounded-lg flex items-center justify-center space-x-2 transition-all duration-300 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-70 cursor-pointer"
                >
                  {isLoading ? (
                    <svg
                      className="animate-spin h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                  ) : (
                    <>
                      <span>Sign In</span>
                      <ArrowRight size={18} />
                    </>
                  )}
                </button>
              </form>

              {/* Show login message */}
              {message && (
                <div className="text-center text-sm text-red-400 mt-2">
                  {message}
                </div>
              )}

              {/* Divider */}
              <div className="relative my-3">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-600"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-gray-800 text-gray-400">
                    Or continue with
                  </span>
                </div>
              </div>

              {/* Google login button */}
              <button
                type="button"
                onClick={handleGoogleLogin}
                disabled={isLoading}
                className="w-full bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 rounded-lg border border-gray-300 flex items-center justify-center space-x-2 transition-all duration-200 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-70 cursor-pointer"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path
                    fill="#EA4335"
                    d="M5.26620003,9.76452941 C6.19878754,6.93863203 8.85444915,4.90909091 12,4.90909091 C13.6909091,4.90909091 15.2181818,5.50909091 16.4181818,6.49090909 L19.9090909,3 C17.7818182,1.14545455 15.0545455,0 12,0 C7.27006974,0 3.1977497,2.69829785 1.23999023,6.65002441 L5.26620003,9.76452941 Z"
                  />
                  <path
                    fill="#34A853"
                    d="M16.0407269,18.0125889 C14.9509167,18.7163016 13.5660892,19.0909091 12,19.0909091 C8.86648613,19.0909091 6.21911939,17.076871 5.27698177,14.2678769 L1.23746264,17.3349879 C3.19279051,21.2936293 7.26500293,24 12,24 C14.9328362,24 17.7353462,22.9573905 19.834192,20.9995801 L16.0407269,18.0125889 Z"
                  />
                  <path
                    fill="#4A90E2"
                    d="M19.834192,20.9995801 C22.0291676,18.9520994 23.4545455,15.903663 23.4545455,12 C23.4545455,11.2909091 23.3454545,10.5818182 23.1272727,9.90909091 L12,9.90909091 L12,14.7272727 L18.4363636,14.7272727 C18.1187732,16.2818182 17.2945455,17.5772222 16.0407269,18.0125889 L19.834192,20.9995801 Z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.27698177,14.2678769 C5.03832634,13.556323 4.90909091,12.7937589 4.90909091,12 C4.90909091,11.2182781 5.03443647,10.4668121 5.26620003,9.76452941 L1.23999023,6.65002441 C0.43658717,8.26043162 0,10.0753848 0,12 C0,13.9195484 0.444780743,15.7301709 1.23746264,17.3349879 L5.27698177,14.2678769 Z"
                  />
                </svg>
                <span>Sign in with Google</span>
              </button>

              {/* Footer */}
              <div className="text-center text-xs">
                <p className="text-gray-400">
                  Don't have an account?{" "}
                  <a
                    href="#"
                    className="text-blue-400 hover:text-blue-300 font-medium transition-colors"
                  >
                    Contact administrator
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
