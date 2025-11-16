import { z } from "zod";

const baseFields = {
  password: z.string().min(6, "Password must be at least 6 characters"),
};

export const signinFormSchema = z.discriminatedUnion("signupWith", [
  z.object({
    signupWith: z.literal("phone"),
    phone: z.string().min(1, "Phone is required"),
    email: z.string().optional(),
    ...baseFields,
  }),
  z.object({
    signupWith: z.literal("email"),
    email: z.string().email("Enter a valid email"),
    phone: z.string().optional(),
    ...baseFields,
  }),
]);
