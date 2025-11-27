import { Controller, useForm, type SubmitHandler } from "react-hook-form";
import InputForm from "../components/FormInput";
import { FormMessage } from "../components/FormMessage";
import { zodResolver } from "@hookform/resolvers/zod";
import { registrationSchema } from "../validator/formValidation";
import type { RegisterFormInput } from "../validator/formValidation";
import { FormButton } from "../components/Button";
import { Link } from "react-router-dom";

import profile from "../assets/Vector.png";

// type LoginFormInputs = {
//     email: string;
// }

const Login = () => {
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
    <div className="flex flex-col justify-center items-center p-4 gap-8 h-screen">
      <img src={profile} alt="Insta Logo" className="object-contain" />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-6 w-sm"
      >
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

      <FormButton
        type="submit"
        text="Login"
        color="primary"
        size="md"
        rounded="none"
        isHovered={true}
        className="w-sm "
      />
      <div className="flex flex-col gap-8 items-center">
        <span className="text-gray-600">OR</span>
        <Link to="/reset-password" className="text-blue-500">
          Forgot Password?
        </Link>
        <div className="flex justify-around gap-3 w-sm">
          <p className="">Don't have an account?</p>
          <Link to="/register" className="text-blue-500">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
