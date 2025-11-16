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
import { newPasswordSchema } from "@/schemas/new-password-form";

type NewPasswordValues = z.infer<typeof newPasswordSchema>;

const NewPasswordForm = () => {
  const form = useForm<NewPasswordValues>({
    resolver: zodResolver(newPasswordSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = (values: NewPasswordValues) => {
    console.log("Form values:", {
      ...values,
    });

    // call API here, send rememberMe separately if needed
  };

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
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

          {/* Confirm Password */}
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[14px] font-medium leading-[1.38] text-[#7A3FAE]">
                  Confirm Password{" "}
                  <span className="ml-0.5 text-rose-500">*</span>
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

          {/* Submit */}
          <GradientButton type="submit" className="w-full py-4">
            Continue
          </GradientButton>
        </form>
      </Form>
    </div>
  );
};

export default NewPasswordForm;
