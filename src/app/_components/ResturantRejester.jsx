import React from 'react'
import { useForm } from 'react-hook-form'
const ResturantRejester = () => {
    const { register, reset, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = (data) => {
        console.log("form data of the register form ", data)
    }
    return (
        <div className='container mx-auto h-full flex flex-col justify-center items-center '>
            <h3 className='text-center font-semibold text-3xl my-4'>Resturant Regester</h3>
            <form className='max-w-3xl  mx-auto space-y-2 w-full text-center' onSubmit={handleSubmit(onSubmit)}>


                <div className=''>
                    <input  className='w-full border border-gray-500 p-2 rounded-xl' type="email" placeholder="Enter Your Email " {...register("email", { required: "email is required field" })} />
                    {errors.email && <span className='text-red-400 text-sm font-medium  capitalize'>{errors?.email?.message}</span>}
                </div>
                <div>
                    <input className='w-full border border-gray-500 p-2 rounded-xl' type="password" placeholder="Enter Your Password " {...register("password", { required: "password is required field" })} />
                    {errors.password && <span className='text-red-400 text-sm font-medium  capitalize'>{errors?.password?.message}</span>}
                </div>
                <div>
                    <input className='w-full border border-gray-500 p-2 rounded-xl' type="text" placeholder="Enter Your ResturantName " {...register("ResturantName", { required: "ResturantName is required field" })} />
                    {errors.ResturantName && <span className='text-red-400 text-sm font-medium  capitalize'>{errors?.ResturantName?.message}</span>}
                </div>
                <div>
                    <input className='w-full border border-gray-500 p-2 rounded-xl' type="text" placeholder="Enter Your city " {...register("city", { required: "city is required field" })} />
                    {errors.city && <span className='text-red-400 text-sm font-medium  capitalize'>{errors?.city?.message}</span>}
                </div>
                <div>
                    <input className='w-full border border-gray-500 p-2 rounded-xl' type="text" placeholder="Enter Your zipCode " {...register("zipCode", { required: "zipCode is required field" })} />
                    {errors.zipCode && <span className='text-red-400 text-sm font-medium  capitalize'>{errors?.zipCode?.message}</span>}
                </div>
                <div>
                    <button className='bg-red-500 p-3 text-white rounded-md hover:rounded-lg cursor-pointer' type="submit">Submit Form</button>
                </div>
            </form>
        </div>
    )
}

export default ResturantRejester