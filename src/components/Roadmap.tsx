import Divider from "../assets/divider.png";

const Roadmap = () => {
    return (
        <div id="5" className="w-full min-h-[1091px] md:min-h-[1193px] md:px-[40px] py-[120px] px-[16px]">
            <div className="w-full min-h-[851px] space-y-[124px] flex flex-col">
                <div className="w-full space-y-[12px] flex flex-col justify-center">
                    <span className="font-manrope font-bold text-[24px] leading-[32.78px] text-[#287CF1] text-center">ROADMAP</span>
                    <h1 className="font-bold font-manrope text-[34px] md:text-[56px] md:leading-[76.5px] leading-[46.44px] text-center bg-gradient-to-r to-[#287CF1]  from-[#FFFFFF] bg-clip-text text-transparent">The Journey of AskSally</h1>
                    <p className="font-manrope font-normal md:text-[24px] md:leading-[32.78px] text-[20px] leading-[27.32px] opacity-[72%] text-center">Explore the journey we're taking to bring personalized, evidence-based health advice to your fingertips.</p>
                </div>
                
                <div className="relative grid grid-cols-1 space-y-[40px] md:grid-cols-2 md:gap-x-[20px] md:gap-y-[20px] md:pr-[20px]">
                    {/* First card - left side */}
                    <div data-aos="fade-right" data-aos-duration="1000" className="flex justify-end lg:mr-[15px]">
                    <div className="bg-[#30303080] w-full h-[238px] p-[20px] rounded-[12px] border flex flex-col space-y-[12px]  lg:w-[516px] lg:min-h-[288px]">
                        <h1 className="font-manrope font-bold text-[20px] leading-[27.32px] text-[#287CF1]">2024</h1>
                        <h1 className="font-manrope font-extrabold text-[20px] leading-[27.32px] bg-gradient-to-r from-[#287CF1] via-white to-[#FFFFFF] bg-clip-text text-transparent">Core Features Development</h1>
                        <ol className="list-disc pl-5">
                            <li className="font-manrope font-normal text-[14px] leading-[20px] opacity-[70%]">Wallet Integration</li>
                            <li className="font-manrope font-normal text-[14px] leading-[20px] opacity-[70%]">API Development</li>
                            <li className="font-manrope font-normal text-[14px] leading-[20px] opacity-[70%]">Knowledge Base Update</li>
                            <li className="font-manrope font-normal text-[14px] leading-[20px] opacity-[70%]">Responsive Terminal for both Website & Telegram</li>
                            <li className="font-manrope font-normal text-[14px] leading-[20px] opacity-[70%]">OCR Capabilities on Terminal</li>
                        </ol>
                    </div>
                    </div>
                    

                 

                    {/* Second card - right side */}
                    <div className="hidden md:block"></div>
                    
                    <div className="hidden md:block"></div>
                    <div data-aos="fade-left" data-aos-duration="1000" className="flex justify-start  md:ml-[15px]">
                    <div className="bg-[#30303080] w-full h-[238px] p-[20px] rounded-[12px] border flex flex-col space-y-[12px] md:col-start-2 md:row-start-2 md:ml-[20px] lg:w-[516px] lg:min-h-[288px]">
                        <h1 className="font-manrope font-bold text-[20px] leading-[27.32px] text-[#287CF1]">2024</h1>
                        <h1 className="font-manrope font-extrabold text-[20px] leading-[27.32px] bg-gradient-to-r from-[#287CF1] via-white to-[#FFFFFF] bg-clip-text text-transparent">Security Measures</h1>
                        <p className="font-manrope font-normal text-[14px] leading-[20px] opacity-[70%]">Implement robust security protocols for user data protection and wallet information. Use blockchain for transparent and immutable transaction records. Ensure AI ethics and compliance for health-related queries.</p>
                    </div>
                    </div>
                    
                    
                    {/* Center divider - positioned in the middle of the grid */}
                    <div className="hidden md:absolute left-1/2 top-0 bottom-0 -translate-x-1/2 md:flex justify-center items-center h-full pointer-events-none">
                        <img src={Divider} alt="Divider" className="h-full w-auto object-contain" />
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Roadmap;