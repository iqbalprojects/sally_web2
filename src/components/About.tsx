import Social1 from "../assets/sosmed1.png";
import Dino from "../assets/dino.png";
import Garuda from "../assets/garuda.png";
import X from "../assets/twitter-x-line.png";
import Telegram from "../assets/telegram-2-fill.png";
import GrainyBg from "../assets/grainy-gradient-bg.png";
import Base from "../assets/base.png";
import { useState } from "react";
import Wrapper from "./WrapperAos";
const About = () => {
    const [copied, setCopied] = useState(false);
    const handleCopyContractAddress = async () => {
        try {
            // Get the contract address from the hidden <p> element
            const tokenElement = document.getElementById("token");
            if (!tokenElement) {
                console.error("Token element not found");
                return;
            }

            const contractAddress = tokenElement.textContent || "";
            await navigator.clipboard.writeText(contractAddress);

             // Update state to show feedback
             setCopied(true);

             // Reset the feedback after 2 seconds
             setTimeout(() => setCopied(false), 2000);
        
        } catch (error) {
            console.error("Failed to copy contract address: ", error);
        }
    };
    return (
        <div id="2" className="py-[120px] px-[16px] bg-about lg:bg-aboutTablet bg-cover bg-center relative flex justify-center md:px-[40px] md:py-[120px]">
        <div
               className="absolute top-0 left-0 h-[564px] w-full"
               style={{
                   backgroundImage:
                       "linear-gradient(360deg, rgba(1, 2, 1, 0) 0%, #010201 100%)",
               }}
           ></div>
           <div
               className="absolute bottom-0 left-0 h-[564px] w-full"
               style={{
                   backgroundImage:
                       "linear-gradient(180deg, rgba(1, 2, 1, 0) 0%, #010201 100%)",
               }}
           ></div>
           <Wrapper animation="fade-up">
           <div
               className="rounded-[30px] bg-center bg-cover lg:w-[1040px] w-full min-h-[867px] md:h-[613px] lg:min-h-[644px] border-2 border-gray-700 bg-white/5 backdrop-blur-sm p-6 gap-6 grid md:flex md:flex-col grid-cols-1 md:p-[60px]"
               style={{ backgroundImage: `url(${GrainyBg})` }}
           >
               <div className="min-h-[101px] w-full">
                   <h2 className="font-manrope font-bold text-lg md:text-[24px] md:leading-[32.78px] leading-[24px]">
                       ABOUT
                   </h2>
                   <h1 className="font-manrope font-bold text-[56px] leading-[77px] bg-gradient-to-r from-[#B5D4FF] to-[#FFFFFF] bg-clip-text text-transparent">
                       AskSally
                   </h1>
               </div>
               <p className="font-manrope text-base leading-[26px] font-normal text-white/80 md:max-w-[800px] border-b border-b-white/20 pb-6">
                   Chronic diseases like diabetes, obesity, and metabolic
                   syndrome are rising globally, often due to lifestyle
                   imbalances and fragmented healthcare systems. Sally A1C aims
                   to bridge this gap as a Web3-integrated metabolic health
                   co-pilot, combining AI-driven insights, crypto community as
                   primary distribution means, and personalized holistic health
                   management to empower users to prevent, manage, and reverse
                   chronic conditions.<br></br>
                   <br></br> By leveraging conversational AI, real-time health
                   data integration, and evidence-based functional medicine
                   principles, Sally A1C acts as a 24/7 health
                   companion—answering questions, analyzing medical records,
                   and offering actionable recommendations to build sustainable
                   healthy habits.
               </p>
               <div className="flex flex-col gap-y-6">
                   <div className="flex flex-col gap-y-6 md:grid md:grid-cols-2">
                       <div className="flex flex-col gap-y-2">
                           <p className="uppercase text-white/40 font-bold text-sm">
                               Contract address
                           </p>
                           <div className="flex items-center gap-x-5">
                               <span className="text-lg">
                                   <p id="token" className="hidden">
                                       0x1F1c695f6b4A3F8B05f2492ceF9474Afb6d6Ad69
                                   </p>
                                   <p>0x1F....Ad69</p>
                               </span>
                               <button onClick={handleCopyContractAddress}>
                                    {copied ? (
                                        <svg
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"
                                                fill="white"
                                            />
                                        </svg>
                                    ) : (
                                        <svg
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M20 8H10C8.89543 8 8 8.89543 8 10V20C8 21.1046 8.89543 22 10 22H20C21.1046 22 22 21.1046 22 20V10C22 8.89543 21.1046 8 20 8Z"
                                                stroke="white"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M4 16C2.9 16 2 15.1 2 14V4C2 2.9 2.9 2 4 2H14C15.1 2 16 2.9 16 4"
                                                stroke="white"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    )}
                                </button>

                           </div>
                       </div>
                       <div className="flex flex-col gap-y-2">
                           <p className="uppercase text-white/40 font-bold text-sm">
                               network
                           </p>
                           <div className="flex items-center gap-x-4 text-lg">
                               <img src={Base} width={24} height={24} alt="" />
                               Base
                           </div>
                       </div>
                   </div>
                   <div className="flex flex-col gap-y-2 ">
                       <p className="uppercase text-white/40 font-bold text-sm">
                           Links
                       </p>
                       <div className="flex items-center gap-x-5">
                           <a href="https://creator.bid/agents/678648cdba2b8db95be3f5bb" target="_blank"><img src={Social1} width={24} height={24} alt="" /></a>
                           <a href="https://dexscreener.com/base/0x7dc3662f4c2c41c5752652e8b417a9024c2b1f63" target="_blank"><img src={Garuda} width={24} height={24} alt="" /></a>
                           <a href="https://www.coingecko.com/en/coins/sally-a1c" target="_blank"><img src={Dino} width={24} height={24} alt="" /></a>
                           <a href="https://x.com/Sally_A1c" target="_blank"><img src={X} width={24} height={24} alt="" /></a>
                           {/* <img src={Discord} width={24} height={24} alt="" /> */}
                           <a href="https://t.me/sallya1c" target="_blank"><img src={Telegram} width={24} height={24} alt="" /></a>
                       </div>
                   </div>
               </div>
           </div>
           </Wrapper>
           
       </div>
    );
};

export default About;
