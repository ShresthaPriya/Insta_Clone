import {z} from 'zod';

export const registrationSchema = z.object({
  fullname: z.string().nonempty("All field required").min(3, "Full name must be 3 characters long"),
  username: z.string().nonempty("All field required").min(3, "Username must be 3 characters long"),
  phoneNumber: z.number().min(10, "Number should be of 10 digits"),
  password: z.string().nonempty( "All fields required" ).regex(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/ ), 
});

export type RegisterFormInput = z.infer<typeof registrationSchema>;

export const loginSchema = z.object({
      phoneNumber: z.number().min(10, "Number should be of 10 digits"),
  password: z.string().nonempty( "All fields required" ).min(8),

})

export type LoginInput = z.infer<typeof loginSchema>;