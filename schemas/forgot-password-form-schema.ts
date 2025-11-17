import { z } from "zod";

export const forgotPasswordFormSchema = z.discriminatedUnion("signupWith", [
  z.object({
    signupWith: z.literal("phone"),
    phone: z.string().min(1, "Phone is required"),
    email: z.string().optional(),
  }),
  z.object({
    signupWith: z.literal("email"),
    email: z.string().email("Enter a valid email"),
    phone: z.string().optional(),
  }),
]);
