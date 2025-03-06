"use client";

import React, { useState, useTransition } from "react";
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

export const LoginForm = () => {
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
  return (
    <CardWrapper
      headerLabel=""
      backButtonLabel="Kembali ke halaman utama"
      backButtonHref="/dashboard"
      showSocial
    >
      <Form {...form}>
        <div className="space-y-4">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="block text-left text-indigo-600">
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
                <FormLabel className="block text-left text-indigo-400">
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
                      {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
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
        <div className="flex space-x-4 mt-4">
          <Button
            type="submit"
            className="bg-indigo-400 text-white w-full py-2 rounded-md hover:bg-blue-700"
            disabled={isPending}
          >
            LOGIN
          </Button>
          <Button className="bg-white-300 text-gray-700 w-full py-2 rounded-md hover:bg-gray-400">
            REGISTRASI
          </Button>
        </div>
        <p className="text-left text-sm text-indigo-400 mt-4 hover:underline cursor-pointer">
          Lupa Password?
        </p>
      </Form>
    </CardWrapper>
  );
};
