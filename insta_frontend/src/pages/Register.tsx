import { Controller, useForm, type SubmitHandler } from 'react-hook-form';
import InputForm from "../components/FormInput";
import { FormMessage } from '../components/FormMessage';
import { zodResolver } from "@hookform/resolvers/zod";
import { registrationSchema } from "../validator/formValidation";
import type {RegisterFormInput} from "../validator/formValidation"

// type RegisterFormInputs = {
//     email: string;
// }

const Register = () => {
    const {
        handleSubmit,
        control,
        formState: { errors }
    } = useForm<RegisterFormInput>({
        resolver: zodResolver(registrationSchema)
    })

    const onSubmit: SubmitHandler<RegisterFormInput> =  async (data: RegisterFormInput) => {

    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Controller
                name="fullname"
                control={control}
                render={({ field }) => {
                    return <>
                        <InputForm type="text" placeholder='Full name' {...field} className='' />
                        {errors.fullname && <FormMessage variant='error' message={errors.fullname.message} />}
                    </>;
                    
                }} 
            />

              <Controller
                name="username"
                control={control}
                render={({ field }) => {
                    return <>
                        <InputForm type="text" placeholder='Full name' {...field} className='' />
                        {errors.username && <FormMessage variant='error' message={errors.username.message} />}
                    </>;
                    
                }} 
            />

              <Controller
                name="phoneNumber"
                control={control}
                render={({ field }) => {
                    return <>
                        <InputForm type="text" placeholder='Phone Number' {...field} className='' />
                        {errors.phoneNumber && <FormMessage variant='error' message={errors.phoneNumber.message} />}
                    </>;
                    
                }} 
            />

              <Controller
                name="password"
                control={control}
                render={({ field }) => {
                    return <>
                        <InputForm type="text" placeholder='Enter your password' {...field} className='' />
                        {errors.password && <FormMessage variant='error' message={errors.password.message} />}
                    </>;
                    
                }} 
            />
            
            

        </form>
    )

}

export default Register;

