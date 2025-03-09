"use client";

import React, { startTransition, useState, useTransition } from "react";
import { CardWrapper } from "./card-wrapper";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema } from "@/app/schemas";
import { Input } from "../ui/input";
import { Eye, EyeOff } from "lucide-react";
import { FormError } from "../ui/form-error";
import { FormSuccess } from "../ui/form-success";
import { Button } from "../ui/button";
import { useSearchParams } from "next/navigation";
import { Lock } from "lucide-react";
import { useRouter } from "next/navigation";

export const LoginForm = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [showPassword, setShowPassword] = useState(false);
  const [isPending, starTransition] = useTransition();
  const urlError =
    searchParams.get("error") === "OAuthAccountNotLinked"
      ? "Email already in use with different provider!"
      : "";
  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    startTransition(() => {
      setTimeout(() => {
        router.push("/dashboard");
      }, 1000);
    });
  };

  return (
    <CardWrapper
      headerLabel=""
      backButtonLabel="Kembali ke halaman utama"
      backButtonHref="/dashboard"
      showSocial
    >
      <Form {...form}>
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="block text-left text-xs text-indigo-600">
                    Username
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isPending}
                      placeholder="guardians.asguard@gmail.com"
                      type="email"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="block text-left text-xs text-indigo-400">
                    Password
                  </FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input
                        {...field}
                        disabled={isPending}
                        placeholder="*******"
                        type={showPassword ? "text" : "password"}
                      />

                      <button
                        type="button"
                        className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-gray-700"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <EyeOff size={20} />
                        ) : (
                          <Eye size={20} />
                        )}
                      </button>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormError message={error || urlError} />
          <FormSuccess message={success} />
          <div className="flex justify-between space-x-4 mt-4">
            <Button
              type="submit"
              className="h-7 bg-indigo-400 text-white text-xs  font-montserrat py-3 rounded-lg hover:bg-blue-700"
              disabled={isPending}
            >
              <span className="mr-3"> LOGIN</span>
              <Lock size={10} />
            </Button>
            <Button
              type="button"
              className="h-7 bg-white-300 text-indigo-500 border-2 border-indigo-500 text-xs  font-montserrat py-3 px-3 rounded-sm hover:bg-indigo-400 hover:text-white transition-all"
            >
              REGISTRASI
            </Button>
          </div>
          <p className="text-left text-xs text-indigo-400 mt-4 hover:underline cursor-pointer">
            Lupa Password?
          </p>
        </form>
      </Form>
    </CardWrapper>
  );
};
