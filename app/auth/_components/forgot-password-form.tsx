"use client";
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

import { forgotPasswordFormSchema } from "@/schemas/forgot-password-form";

type ForgotPasswordFormValues = z.infer<typeof forgotPasswordFormSchema>;

const ForgotPasswordForm = () => {
  const form = useForm<ForgotPasswordFormValues>({
    resolver: zodResolver(forgotPasswordFormSchema),
    defaultValues: {
      signupWith: "phone",
      phone: "",
      email: "",
    },
  });

  const signupWith = form.watch("signupWith");

  const onSubmit = (values: ForgotPasswordFormValues) => {
    console.log("Form values:", values);
    // call API here
  };

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {/* Sign up with toggle */}
          <FormField
            control={form.control}
            name="signupWith"
            render={({ field }) => (
              <FormItem className="flex justify-between">
                <FormLabel className="text-[14px] font-medium  text-[#7A3FAE]">
                  Forgot password with:
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

          {/* Submit */}
          <GradientButton type="submit" className="w-full py-4">
            Forgot Password
          </GradientButton>
        </form>
      </Form>
    </div>
  );
};

export default ForgotPasswordForm;
