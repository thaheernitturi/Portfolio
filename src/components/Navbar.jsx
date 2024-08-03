
import logo from "../assets/logo.png"
import {FaInstagram} from "react-icons/fa"
import {FaLinkedin} from "react-icons/fa"
import {FaGithub} from "react-icons/fa"
const Navbar = () => {
  return <nav className=" mb-20 flex items-center justify-between py-6">
    <div className="flex flex-shrink-0 items-center">
        <img class="size-10" src={logo} alt="logo" ></img>
    </div>
    <div className="m-8 flex items-center justify-center gap-4 text-2xl">
      <a href="https://www.instagram.com/thaheernitturi"><FaInstagram/></a>
      <a href="https://www.linkedin.com/in/thaheernitturi"><FaLinkedin/></a>
      <a href="https://github.com/thaheernitturi"><FaGithub/></a>
    </div>
  </nav>
    
  
}

export default Navbar