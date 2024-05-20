import { BiHomeAlt2 } from "react-icons/bi";
import { RiSearchLine } from "react-icons/ri";
import { TbSquarePlus } from "react-icons/tb";
import { FaRegHeart } from "react-icons/fa";
import { FiUser } from "react-icons/fi";

function Bottombar() {
  return (
    <nav className="flex md:hidden justify-center items-center fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full z-10 px-6 py-2 glassmorphism">
        <ul className="flex items-center justify-between w-full">
            <li className="rounded-md py-2   cursor-pointer">
            <BiHomeAlt2 size={28}/>
            </li>
            <li className="rounded-md py-4   cursor-pointer">
            <RiSearchLine size={28} color="#b8b8b8"/>
            </li>
            <li className="rounded-md py-4   cursor-pointer">
            <TbSquarePlus size={28} color="#b8b8b8"/>
            </li>
            <li className="rounded-md py-4   cursor-pointer">
            <FaRegHeart size={28} color="#b8b8b8"/>
            </li>
            <li className="rounded-md py-4   cursor-pointer">
            <FiUser size={28} color="#b8b8b8"/>
            </li>
        </ul>
    </nav>
  )
}

export default Bottombar