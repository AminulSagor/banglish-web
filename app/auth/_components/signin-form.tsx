"use client";

import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { GradientButton } from "@/components/custom-button";
import { signinFormSchema } from "@/schemas/sign-in-form";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";

type SigninFormValues = z.infer<typeof signinFormSchema>;

const SigninForm = () => {
  // keep rememberMe outside of zod/react-hook-form schema
  const [rememberMe, setRememberMe] = useState(false);

  const form = useForm<SigninFormValues>({
    resolver: zodResolver(signinFormSchema),
    defaultValues: {
      signupWith: "phone",
      phone: "",
      email: "",
      password: "",
    },
  });

  const signupWith = form.watch("signupWith");

  const onSubmit = (values: SigninFormValues) => {
    console.log("Form values:", {
      ...values,
      rememberMe, // you still get it here
    });

    // call API here, send rememberMe separately if needed
  };

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {/* Sign in with toggle */}
          <FormField
            control={form.control}
            name="signupWith"
            render={({ field }) => (
              <FormItem className="flex justify-between">
                <FormLabel className="text-[14px] font-medium text-[#7A3FAE]">
                  Sign In with:
                </FormLabel>
                <div className="mt-2 inline-flex rounded-full bg-[#F3E9FF] p-1">
                  <button
                    type="button"
                    onClick={() => field.onChange("phone")}
                    className={`px-6 py-2 rounded-full text-sm font-medium transition hover:cursor-pointer
                      ${
                        field.value === "phone"
                          ? "bg-gradient-to-r from-[#D5B3FF] to-[#7326B7] text-white shadow-sm"
                          : "text-[#7A3FAE]"
                      }`}
                  >
                    Phone
                  </button>
                  <button
                    type="button"
                    onClick={() => field.onChange("email")}
                    className={`px-6 py-2 rounded-full text-sm font-medium transition hover:cursor-pointer
                      ${
                        field.value === "email"
                          ? "bg-gradient-to-r from-[#D5B3FF] to-[#7326B7] text-white shadow-sm"
                          : "text-[#7A3FAE]"
                      }`}
                  >
                    Email
                  </button>
                </div>
              </FormItem>
            )}
          />

          {/* Phone OR Email based on toggle */}
          {signupWith === "phone" ? (
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[14px] font-medium leading-[1.38] text-[#7A3FAE]">
                    Phone <span className="ml-0.5 text-rose-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="tel"
                      className="border border-[#C99DFF] focus-visible:ring-[#C99DFF] py-6 rounded-[10px] px-6"
                      placeholder="Enter your phone number"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          ) : (
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[14px] font-medium leading-[1.38] text-[#7A3FAE]">
                    Email <span className="ml-0.5 text-rose-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      className="border border-[#C99DFF] focus-visible:ring-[#C99DFF] py-6 rounded-[10px] px-6"
                      placeholder="Enter your email address"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}

          {/* Password */}
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[14px] font-medium leading-[1.38] text-[#7A3FAE]">
                  Password <span className="ml-0.5 text-rose-500">*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    className="border border-[#C99DFF] focus-visible:ring-[#C99DFF] py-6 rounded-[10px] px-6"
                    placeholder="Enter your password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Remember me + Forgot password (manual checkbox) */}
          <div className="flex items-center justify-between">
            <label className="inline-flex items-center gap-2 text-[14px] font-medium text-[#7A3FAE] hover:cursor-pointer">
              <Checkbox
                checked={rememberMe}
                // shadcn Checkbox gives boolean | "indeterminate"
                onCheckedChange={(checked) => setRememberMe(checked === true)}
                className="h-4 w-4 rounded border border-[#C99DFF] data-[state=checked]:bg-[#7A3FAE] data-[state=checked]:text-white data-[state=checked]:border-[#7A3FAE]"
              />
              <span>Remember me</span>
            </label>

            <Link
              href="/auth/forgot-password"
              className="text-[14px] font-medium text-[#7A3FAE] hover:underline"
            >
              Forgot password?
            </Link>
          </div>

          {/* Submit */}
          <GradientButton type="submit" className="w-full py-4">
            Sign In
          </GradientButton>
        </form>
      </Form>
    </div>
  );
};

export default SigninForm;
