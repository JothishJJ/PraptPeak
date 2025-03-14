import SignupForm from "./Signupform";

export default function LoginPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col md:flex-row bg-white dark:bg-gray-800 rounded-2xl shadow-lg w-full max-w-4xl overflow-hidden">
        {/* Left panel with marketing content */}
        <div className="hidden md:flex flex-col items-center justify-center p-16 bg-gradient-to-br from-purple-600 to-blue-500 text-white w-1/2">
          <h2 className="text-4xl text-center font-bold mb-4">Welcome to InsightAI</h2>
          <p className="mb-6 text-lg text-center">
            Discover a smarter way to research and get insights powered by AI.
            Dive into the future of information with ease.
          </p>
        </div>

        {/* Right panel with login form */}
        <div className="flex flex-col items-center justify-center p-16 w-full md:w-1/2">
          <SignupForm />
          <div className="mt-6 text-center text-gray-500 dark:text-gray-400">
            <p>
              Already have an account?{" "}
              <a
                href="/login"
                className="text-purple-600 dark:text-purple-400 font-medium hover:underline"
              >
                Login now
              </a>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

