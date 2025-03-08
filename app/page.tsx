import { LoginFooter } from "@/components/auth/login-footer";
import { LoginForm } from "@/components/auth/login-form";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-start h-full bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-sky-400 to-blue-800">
      <div className="w-[400px] flex flex-col space-y-4 ml-16">
        <LoginForm />
        <LoginFooter />
      </div>

      <div className="w-1/2 text-left self-start mt-[210px] ml-40">
        <h1 className="text-7xl font-extrabold text-[#3F2E91] drop-shadow-lg leading-tight">
          Dashboard <br />
          Keluarga <br />
          Jakarta
        </h1>
      </div>
    </main>
  );
}
