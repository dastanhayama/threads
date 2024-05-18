import { BsThreads } from "react-icons/bs";
import { BiHomeAlt2 } from "react-icons/bi";
import { RiSearchLine } from "react-icons/ri";
import { TbSquarePlus } from "react-icons/tb";
import { FaRegHeart } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import Button from "./Button";
function Navbar() {
  return (
    <nav className="flex justify-between items-center fixed top-0 left-0 w-full z-10 lg:px-20 px-6 py-2 glassmorphism">
        <div className="cursor-pointer">
        <BsThreads size={32}/>

        </div>
        <ul className="md:flex gap-2 items-center hidden">
            <li className="rounded-md px-8 py-4  hover:bg-gray-100 transition duration-200 cursor-pointer">
            <BiHomeAlt2 size={28}/>
            </li>
            <li className="rounded-md px-8 py-4  hover:bg-gray-100 transition duration-200 cursor-pointer">
            <RiSearchLine size={28} color="#b8b8b8"/>
            </li>
            <li className="rounded-md px-8 py-4  hover:bg-gray-100 transition duration-200 cursor-pointer">
            <TbSquarePlus size={28} color="#b8b8b8"/>
            </li>
            <li className="rounded-md px-8 py-4  hover:bg-gray-100 transition duration-200 cursor-pointer">
            <FaRegHeart size={28} color="#b8b8b8"/>
            </li>
            <li className="rounded-md px-8 py-4  hover:bg-gray-100 transition duration-200 cursor-pointer">
            <FiUser size={28} color="#b8b8b8"/>
            </li>
        </ul>
        <Button text="Log in" type="button" color="black" />
    </nav>
  )
}

export default Navbar