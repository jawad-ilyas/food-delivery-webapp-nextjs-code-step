
import Link from "next/link"


const ResturantHeader = () => {
    return (
        <div className="flex flex-row justify-between items-center">
            <div>
                <img className="size-20 object-cover" src="https://imgs.search.brave.com/ARRE3pf-lowr5KlLpI46VajVxMzUfF-De5JW3QaEOAM/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAzLzEwLzk2Lzc2/LzM2MF9GXzMxMDk2/NzY2Nl9VUVFYUzFU/dHM5d2FrM2hKa2VM/Q2d3WllJYkNCSzZU/Zi5qcGc" alt="logo" />
            </div>
            <ul className="space-x-4 flex flex-row ">
                <Link href="/">Home</Link>
                <Link href="/login">Login </Link>
                <Link href="/signUp">Sign Up</Link>
                <Link href="/profile" >Profile</Link>
            </ul>
        </div>
    )
}

export default ResturantHeader