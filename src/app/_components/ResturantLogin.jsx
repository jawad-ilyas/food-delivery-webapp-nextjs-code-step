import { useForm } from "react-hook-form";

const ResturantLogin = () => {
    const { register, reset, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data)
    }
    return (
        <div className='container mx-auto h-full flex flex-col justify-center items-center '>
            <h3 className='text-center font-semibold text-3xl my-4'>Resturant Login</h3>

            <form className='max-w-3xl  mx-auto space-y-2 w-full text-center' onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <input className='w-full border border-gray-500 p-2 rounded-xl' type="email" placeholder="Enter Your Email " {...register("email", { required: "email is required field" })} />
                    {errors.email && <span>{errors?.email?.message}</span>}
                </div>
                <div>
                    <input className='w-full border border-gray-500 p-2 rounded-xl' type="password" placeholder="Enter Your Password " {...register("password", { required: "password is required field" })} />
                    {errors.password && <span>{errors?.password?.message}</span>}
                </div>
                <div>
                    <button className='bg-red-500 p-3 text-white rounded-md hover:rounded-lg cursor-pointer' type="submit">Submit Form</button>
                </div>
            </form>
        </div>
    )
}

export default ResturantLogin