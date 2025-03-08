"use client";

import React, { useTransition } from "react";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { FormProvider, useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolder } from "@fortawesome/free-solid-svg-icons";

const DashboardHeader = () => {
  const [isPending, starTransition] = useTransition();

  const form = useForm({
    defaultValues: {
      search: "User / Dashboard",
    },
  });

  return (
    <FormProvider {...form}>
      <div className="flex flex-col items-start w-full mb-7 ">
        <h1 className="text-xs font-bold text-gray-900 mb-6 flex items-center gap-2">
          <FontAwesomeIcon icon={faFolder} className="text-gray-700" />
          Pendataan Keluarga Satu Pintu
        </h1>
        <h2 className="text-xs mb-4">
          Temukan informasi terkini mengenai keluarga dan Indvidu di DKI Jakarta
        </h2>

        <div className="space-y-4 w-full">
          <FormField
            control={form.control}
            name="search"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    {...field}
                    disabled={isPending}
                    placeholder="User / Dashboard"
                    type="text"
                    className="w-full bg-gray-100 text-gray-300 text-sm rounded-lg px-4 py-2 shadow-sm border-none focus:ring-2 focus:ring-indigo-200"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </div>
    </FormProvider>
  );
};

export default DashboardHeader;
