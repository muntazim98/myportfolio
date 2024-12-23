import Photo from "@/components/Photo";
import Socials from "@/components/Socials";
import { Button  } from "@/components/ui/button";
import {FiDownload} from "react-icons/fi";
import Stats from "@/components/Stats";
const Home = () => {
  return (
    <section>
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between
        xl:pt-8 xl:pb-24">
          {/* Text Section */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Senior Software Developer</span>
            <h1 className="h1 mb-6"> Hello I'm<br/><span className="text-accent">Muntazim Khan</span></h1>
            <p className="max-w-[500px] mb-9 text-white/80">
            I specialize in creating seamless digital solutions and have expertise in multiple programming languages and advanced technologies.
            </p>
            {/* Buttons and Socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button 
              variant="outline"
              size="lg"
              className="uppercase flex items-center gap-2">
                  <span>
                    Download Resume
                  </span>
                  <FiDownload className="text-xl"/>
              </Button>
              <div className="mb-8 xl:mb-0">
                <Socials containerStyles="flex gap-6" 
                iconStyles="w-9 h-9 border border-accent rounded-full flex 
                justify-center items-center text-accent text-base hover:bg-accent
                hover:text-primary hover:transition-all duration-500"/>
              </div>
            </div>
          </div>
          {/* Photo Section */}
          <div className="-order-1 xl:-order-none mb-8 xl:mb-0">
            <Photo/>
          </div>  
        </div>

      </div>
      <Stats/>
    </section>
  )
}

export default Home

