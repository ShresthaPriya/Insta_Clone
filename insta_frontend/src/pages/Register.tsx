import { Controller, useForm, type SubmitHandler } from "react-hook-form";
import InputForm from "../components/FormInput";
import { FormMessage } from "../components/FormMessage";
import { zodResolver } from "@hookform/resolvers/zod";
import { registrationSchema } from "../validator/formValidation";
import type { RegisterFormInput } from "../validator/formValidation";
import { FormButton } from "../components/Button";

import profile from "../assets/Vector.png";

// type RegisterFormInputs = {
//     email: string;
// }

const Register = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<RegisterFormInput>({
    resolver: zodResolver(registrationSchema),
  });

  const onSubmit: SubmitHandler<RegisterFormInput> = async (
    data: RegisterFormInput
  ) => {};
  return (
    <div className="flex flex-col justify-center items-center p-4 gap-8">
        <img src={profile} alt="Insta Logo" className="object-contain" />
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-6 w-sm"
    >
      

      <Controller
        name="fullname"
        control={control}
        render={({ field }) => {
          return (
            <>
              <InputForm
                type="text"
                placeholder="Full Name"
                {...field}
                className=""
              />
              {errors.fullname && (
                <FormMessage
                  variant="error"
                  message={errors.fullname.message}
                />
              )}
            </>
          );
        }}
      />

      <Controller
        name="username"
        control={control}
        render={({ field }) => {
          return (
            <>
              <InputForm
                type="text"
                placeholder="Username"
                {...field}
                className=""
              />
              {errors.username && (
                <FormMessage
                  variant="error"
                  message={errors.username.message}
                />
              )}
            </>
          );
        }}
      />

      <Controller
        name="phoneNumber"
        control={control}
        render={({ field }) => {
          return (
            <>
              <InputForm
                type="text"
                placeholder="Phone Number"
                {...field}
                className=""
              />
              {errors.phoneNumber && (
                <FormMessage
                  variant="error"
                  message={errors.phoneNumber.message}
                />
              )}
            </>
          );
        }}
      />

      <Controller
        name="password"
        control={control}
        render={({ field }) => {
          return (
            <>
              <InputForm
                type="text"
                placeholder="Enter your password"
                {...field}
                className=""
              />
              {errors.password && (
                <FormMessage
                  variant="error"
                  message={errors.password.message}
                />
              )}
            </>
          );
        }}
      />
      </form>

      <FormButton type="submit" text="Register" color="primary" size="md" rounded="none"   isHovered={true}
className="w-sm " />



            <div className="flex justify-around gap-3 w-sm">
                <p className="">Already have an account?</p>
                <a href="" className="text-blue-500">Login</a>
                
                </div>

    
    </div>
  );
};


export default Register;
