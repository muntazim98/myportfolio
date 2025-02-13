import { JetBrains_Mono } from "next/font/google";
import "./globals.css";


//Components
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";

const jetbrainsmono = JetBrains_Mono({
   subsets: ["latin"],
   weight:["100","200","300","400","500","600","700","800"],
   variable: "--font-jetbrainsmono",
   });

export const metadata = {
  title: "Muntazim Ali Khan",
  description: "Personal Portfolio of Muntazim Ali Khan",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className={jetbrainsmono.variable}>
         <Header />
         <StairTransition/>
         <PageTransition>
         {children}
         </PageTransition>
        
      </body>
    </html>
  );
}
