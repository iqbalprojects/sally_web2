import Lightbulb from '../assets/light-bulb 1.png'
import Coding from '../assets/coding (1) 1.png'
import Crown from '../assets/crown (1) 1.png'
import Heart from '../assets/heart (1) 1.png'
import video from '../assets/second.mp4'

const Experience = () => {
    return (
      <div id='4' className="py-[120px] lg:py-[120px] lg:px-[80px] px-[16px] md:py-[90px] md:px-[40px] w-full min-h-[1807px] md:min-h-[1660px] lg:min-h-[1065px] flex flex-col  lg:flex-row lg:gap-x-[64px] space-y-[32px]">
        <div className="flex flex-col space-y-[32px] w-full lg:min-h-[825px]">
          <div className="flex flex-col space-y-[12px]">
            <span className="font-manrope text-[24px] font-bold leading-[32.78px] text-[#287CF1]">Experience</span>
            <h1 className="font-manrope font-bold max-w-xs md:max-w-md lg:max-w-xl text-[36px] md:text-[42px] lg:text-[56px] md:leading-[1.2] lg:leading-[76.5px] leading-[49.18px] bg-gradient-to-r from-[#FFFFFF] to-[#287CF1] bg-clip-text text-transparent">Personalized Health at Your Fingertips</h1>
            <p className="font-manrope text-[20px] font-normal leading-[32px] text-[#FFFFFF99]">See how easy it is to get personalized health insights with AskSally.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-[10px] md:gap-[24px]">
            <div className="w-full p-4 lg:p-[22px] gap-x-5 flex">
              <div className='min-w-[56px] h-[56px] rounded-[14px] border-2 border-white/10 bg-white/5 flex items-center justify-center'>
                <img src={Lightbulb} alt="Lightbulb" className='w-[32px] h-[32px]' />
              </div>
              <div className='flex flex-col space-y-[12px]'>
                <h1 className='font-manrope font-bold text-lg leading-[24.59px]'>Personalized Health Insights</h1>
                <p className='opacity-70 font-manrope text-sm lg:text-base font-normal leading-[19.12px]'>Get AI-driven recommendations based on your unique health data and lifestyle needs.</p>
              </div>
            </div>
  
            <div className="w-full p-4 lg:p-[22px] gap-x-5 flex rounded-2xl bg-[#30303080]">
              <div className='min-w-[56px] h-[56px] rounded-[14px] bg-black/20 flex items-center justify-center'>
                <img src={Coding} alt="Coding" className='w-[32px] h-[32px]' />
              </div>
              <div className='flex flex-col space-y-[12px]'>
                <h1 className='font-manrope font-bold text-lg leading-[24.59px]'>AI Wellness Terminal</h1>
                <p className='opacity-70 font-manrope text-sm lg:text-base font-normal leading-[19.12px]'>Ask questions, upload documents, and receive instant, evidence-based health insights.</p>
              </div>
            </div>

              <div className="w-full p-4 lg:p-[22px] gap-x-5 flex">
              <div className='min-w-[56px] h-[56px] rounded-[14px] border-2 border-white/10 bg-white/5 flex items-center justify-center'>
                <img src={Crown} alt="Lightbulb" className='w-[32px] h-[32px]' />
              </div>
              <div className='flex flex-col space-y-[12px]'>
                <h1 className='font-manrope font-bold text-lg leading-[24.59px]'>Exclusive $A1C Benefits</h1>
                <p className='opacity-70 font-manrope text-sm lg:text-base font-normal leading-[19.12px]'>Holding $A1C tokens unlocks premium features, deeper analytics, and priority AI support.</p>
              </div>
            </div>
  
            <div className="w-full p-4 lg:p-[22px] gap-x-5 flex">
              <div className='min-w-[56px] h-[56px] rounded-[14px] border-2 border-white/10 bg-white/5 flex items-center justify-center'>
                <img src={Heart} alt="Lightbulb" className='w-[32px] h-[32px]' />
              </div>
              <div className='flex flex-col space-y-[12px]'>
                <h1 className='font-manrope font-bold text-lg leading-[24.59px]'>Holistic Wellness Approach</h1>
                <p className='opacity-70 font-manrope text-sm lg:text-base font-normal leading-[19.12px]'>Beyond medicine—AskSally integrates nutrition, lifestyle, and mental well-being into your health strategy.</p>
              </div>
            </div>
          </div>
        </div>
        <div className='relative w-full h-[608px] aspect-video md:h-[825px] flex justify-center rounded-xl border border-gray-700 overflow-hidden bg-radialDesktop2'>
                <div className='absolute bottom-0 left-1/2 md:scale-[1.8] transform -translate-x-1/2 translate-y-[5%] w-[263px] h-auto border-2 border-white rounded-[20px] overflow-hidden'>
                    <video 
                        className='w-full h-auto object-cover' 
                        playsInline autoPlay loop muted
                    >
                        <source src={video} type="video/mp4" />
                    </video>
                </div>
        </div>
      </div>
    );
  };

export default Experience;
