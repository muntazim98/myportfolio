import Link from "next/link";
import { FaGithub,FaLinkedinIn,FaYoutube,FaInstagram } from "react-icons/fa";   

const socials=[
    {icon :<FaGithub/>,link:"https://github.com/MuntazimKhan"},
    {icon :<FaLinkedinIn/>,link:"https://www.linkedin.com/in/muntazim-khan-5b9b25237/"},
    {icon :<FaYoutube/>,link:"https://www.youtube.com/@muntazimkhan"},
    {icon :<FaInstagram/>,link:"https://www.instagram.com/muntazimkhan/"},
]
const Socials = ({containerStyles,iconStyles}) => {
  return (
    <div className={containerStyles}>
      {
        socials.map((item,index)=>{
            return(
                <Link key={index} href={item.link} className={iconStyles}>{item.icon}</Link>
            )
        })
      }
      
    </div>
  )
}

export default Socials
