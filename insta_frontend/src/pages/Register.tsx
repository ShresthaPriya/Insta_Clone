import { Controller, useForm, type SubmitHandler } from 'react-hook-form';
import InputForm from "../components/FormInput";
import { FormMessage } from '../components/FormMessage';

type RegisterFormInputs = {
    email: string;
}

const Register = () => {
    const {
        handleSubmit,
        control,
        formState: { errors }
    } = useForm<RegisterFormInputs>()

    const onSubmit: SubmitHandler<RegisterFormInputs> = () => {

    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Controller
                name="email"
                control={control}
                render={({ field }) => {
                    return <>
                        <InputForm type="email" placeholder='Enter email address' {...field} className='' />
                        {errors.email && <FormMessage variant='error' message={errors.email.message} />}
                    </>;
                }}
            />

        </form>
    )

}

export default Register;

