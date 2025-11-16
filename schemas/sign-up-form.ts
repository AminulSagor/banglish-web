import { z } from "zod";

export const baseFields = {
  fullName: z.string().min(1, "Name is required"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  country: z.string().min(1, "Country is required"),
  division: z.string().optional(),
  district: z.string().optional(),
};

export const signupFormSchema = z
  .discriminatedUnion("signupWith", [
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
  ])
  .superRefine((data, ctx) => {
    // If country is Bangladesh (assuming code "BD"), require division & district
    if (data.country === "BD") {
      if (!data.division) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["division"],
          message: "Division is required for Bangladesh",
        });
      }
      if (!data.district) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["district"],
          message: "District is required for Bangladesh",
        });
      }
    }
  });
