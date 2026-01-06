import z from "zod";

export const ProfileDetailsSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.email().min(1, "Valid emailId is required"),
  age: z.number().min(18, "First name is required"),
  gender: z.enum(["male", "female", "other"], {
    error: () => ({ message: "Gender is required" }),
  }),
  address: z.object({
    city: z.string().min(1, "City is required"),
    state: z.string().min(1, "State is required"),
  }),
});
