import BgBanner from '../assets/bg-banner.png';
import TeleIcon from '../assets/telegram-2-fill.png';
import XIcon from '../assets/twitter-x-line.png';
import GarudaIcon from '../assets/garuda.png';
import DinoIcon from '../assets/dino.png';
import Sosmed1 from '../assets/sosmed1.png';
import BgBannerLg from '../assets/bgbannerlg-full.jpg'

const Banner = () => {
    return (
      <div className="relative w-full min-h-[800px] lg:min-h-[700px] md:min-h-[900px] flex flex-col py-[80px] px-[16px] md:px-[40px] md:py-0 bg-black">

  {/* Background layers for different screens */}
  <div 
    className="absolute inset-0 h-full bg-cover bg-center md:hidden" 
    style={{ backgroundImage: `url(${BgBanner})` }} 
  />
  <div 
    className="absolute inset-0 h-full bg-cover bg-center hidden md:block" 
    style={{ backgroundImage: `url(${BgBannerLg})`, backgroundPosition: 'center top' }} 
  />

  {/* Content wrapper to ensure text stays visible */}
  <div className="relative w-full flex flex-col items-center lg:w-full lg:h-[200px]">
    {/* Content Box */}
    <div className="relative w-full max-w-[600px] lg:p-[80px] md:max-w-[754px] lg:min-h-[444px] lg:max-w-[1012px] md:min-h-[470px] min-h-[410px] flex flex-col space-y-[24px] px-[24px] md:px-[20px] md:py-[80px] py-[40px] bg-neutral-800/50 rounded-[16px]">
      {/* Gradient Border */}
      <div 
        className="absolute inset-0 rounded-[16px] p-[2px]"
        style={{
          background: "linear-gradient(to right, #287CF1, #FFFFFF)",
          WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
        }}
      ></div>

      {/* Form Content */}
      <div className="w-full flex flex-col space-y-[14px] md:px-[60px] max-h-[410px]">
        <h1 className="font-manrope font-extrabold md:text-[42px] lg:text-[56px] md:leading-[1.2] lg:leading-[73px] text-[29px] text-center bg-gradient-to-r from-[#FFFFFF] to-[#287CF1] bg-clip-text text-transparent">
          Be the First to <br/> Experience AskSally
        </h1>
        <p className="opacity-[72%] font-manrope text-[14px] md:text-[16px] md:leading-[26px] font-normal leading-[20px] text-center">
          Join our exclusive waiting list and get early access to AI-powered health insights and blockchain-driven wellness solutions. Enter your email below and we'll notify you as soon as we're live!
        </p>
      </div>
      <div className="w-full flex flex-col md:flex-row md:space-x-[16px] md:space-y-0 space-y-[16px] justify-center">
        <input 
          className="w-full md:max-w-[372px] px-[24px] py-[13px] min-h-[48px] rounded-[10px] font-manrope text-[14px] font-normal leading-[20px] text-[#FFFFFF] bg-white/10" 
          placeholder="Your email" 
        />
        <button className="w-full md:w-auto min-h-[48px] px-[40px] py-[13px] font-manrope font-semibold text-[16px] text-[#141414] bg-white rounded-[10px]"> 
          Join Now
        </button>
      </div>
    </div>
  </div>

  {/* Footer positioned absolutely to avoid padding from parent */}
  <div className="absolute lg:px-[120px] lg:py-[24px] bottom-0 left-0 right-0 w-full min-h-[164px] md:flex-row md:justify-between flex flex-col items-center justify-center space-y-[16px] md:space-y-0 md:px-[40px] py-[24px] border-t border-t-white/20 backdrop-blur-md bg-black/10">
    <h1 className="text-center font-manrope font-extrabold text-[32px] bg-gradient-to-r from-[#FFFFFF] to-[#287CF1] bg-clip-text text-transparent">
      AskSally
    </h1>
    <div className="flex items-center justify-center space-x-[24px] max-w-[262px] min-h-[48px] rounded-[70px] border border-white/20 bg-black/80 py-[12px] px-[24px]">
      <img src={Sosmed1} alt="Telegram" className="w-[22px] h-[22px]" />
      <img src={GarudaIcon} alt="Garuda" className="w-[22px] h-[22px]" />
      <img src={DinoIcon} alt="Dino" className="w-[22px] h-[22px]" />
      <img src={XIcon} alt="Twitter X" className="w-[22px] h-[22px]" />
      <img src={TeleIcon} alt="Telegram" className="w-[22px] h-[22px]" />
    </div>
  </div>
</div>
    );
  };

export default Banner;

