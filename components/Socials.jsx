import Link from "next/link";
import { FaGithub,FaLinkedinIn,FaTwitter,FaInstagram, FaEnvelope } from "react-icons/fa";   

const socials=[
    {icon :<FaGithub/>,link:"https://github.com/muntazim98"},
    {icon :<FaLinkedinIn/>,link:"https://www.linkedin.com/in/muntazim-ali-khan/"},
    {icon :<FaEnvelope/>,link:"mailto:muntazimalikhan@gmail.com"},
]
const Socials = ({containerStyles,iconStyles}) => {
  return (
    <div className={containerStyles}>
      {
        socials.map((item,index)=>{
            return(
                <Link key={index} href={item.link} 
                target={item.link.startsWith("mailto:")?"_self":"_blank"} 
                rel="noopener noreferrer" className={iconStyles}>{item.icon}</Link>
            )
        })
      }
      
    </div>
  )
}

export default Socials
