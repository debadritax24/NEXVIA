import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 px-4">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <h1 className="text-2xl font-bold text-slate-900">Welcome back</h1>
          <p className="mt-2 text-sm text-slate-600">
            Sign in to continue to NEXVIA
          </p>
        </div>
        <SignIn
          routing="path"
          path="/sign-in"
          appearance={{
            elements: {
              rootBox: "w-full",
              card: "shadow-lg border border-slate-200",
            },
          }}
        />
      </div>
    </div>
  );
}
