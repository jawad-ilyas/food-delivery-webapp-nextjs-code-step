"use client"


import { useState } from "react";
import { ResturantFooter, ResturantHeader, ResturantLogin, ResturantRejester } from "../_components"

const page = () => {
  const [login, setLogin] = useState(true);
  return (
    <div className="container mx-auto">
      <ResturantHeader />
      {login ? <ResturantLogin /> : <ResturantRejester />}
      <div className="text-center mt-4">
        <button className="  mx-auto" onClick={() => setLogin(!login)}>   {login ? <p className=" font-semibold text-black hover:underline">I dont have any account ? Sign up Please </p> : <p className=" font-semibold text-black hover:underline"> I have already account please Login In </p>}</button>
      </div>
      <ResturantFooter />
    </div>
  )
}

export default page