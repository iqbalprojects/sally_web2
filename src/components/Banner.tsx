import BgBanner from '../assets/bg-banner.png';
import TeleIcon from '../assets/telegram-2-fill.png';
import XIcon from '../assets/twitter-x-line.png';
import GarudaIcon from '../assets/garuda.png';
import DinoIcon from '../assets/dino.png';
import Sosmed1 from '../assets/sosmed1.png';
import BgBannerLg from '../assets/bgbannerlg-full.jpg'
import { useState, FormEvent } from 'react';

interface StatusMessageType {
  type: 'success' | 'error';
  message: string;
}

interface FormDataPayload {
  email: string;
  page_id: string;
}

const Banner = () => {
  const [statusMessage, setStatusMessage] = useState<StatusMessageType | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMessage(null);

    const formData = new FormData(e.currentTarget);
    const email = formData.get("form_fields[email]") as string;

    try {
      const response = await postData(
        "https://app.menuju.co.id/api/v1/sallya1c.menuju.id/leads",
        {
          email: email,
          page_id: "293af77a-9ac1-4ce5-bc7c-8cc2bfec789d",
        }
      );

      if (response.status === 200) {
        console.log('mantap');
        
        setStatusMessage({ type: 'success', message: 'Email sent successfully' });
      } else if (response.status === 422) {
        setStatusMessage({ type: 'error', message: 'The email must be a valid email address' });
      } else {
        setStatusMessage({ type: 'error', message: 'Email failed to send' });
      }
    } catch (error) {
      console.log(error);
      setStatusMessage({ type: 'error', message: 'An error occurred while submitting' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const postData = async (url: string, data: FormDataPayload): Promise<Response> => {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "accept": "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return response;
  };

  const StatusMessage = ({ type, message }: StatusMessageType) => (
    <div className={`${type === 'success' ? 'text-green-500' : 'text-red-500'} flex items-center gap-x-1.5`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 36 36"
      >
        {type === 'success' ? (
          <path
            fill="currentColor"
            d="M13.72 27.69L3.29 17.27a1 1 0 0 1 1.41-1.41l9 9L31.29 7.29A1 1 0 0 1 32.7 8.7Z"
          />
        ) : (
          <path
            fill="currentColor"
            d="m19.41 18l8.29-8.29a1 1 0 0 0-1.41-1.41L18 16.59l-8.29-8.3a1 1 0 0 0-1.42 1.42l8.3 8.29l-8.3 8.29A1 1 0 1 0 9.7 27.7l8.3-8.29l8.29 8.29a1 1 0 0 0 1.41-1.41Z"
          />
        )}
        <path fill="none" d="M0 0h36v36H0z" />
      </svg>
      <span style={{ fontSize: '10px' }}>{message}</span>
    </div>
  );
    return (
      <div
      id='banner'
      className="relative w-full min-h-[800px] lg:min-h-[700px] md:min-h-[900px] flex flex-col py-[80px] px-[16px] md:px-[40px] md:py-0 bg-black">

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
      <form 
            method='post' 
            onSubmit={handleSubmit}
            className="z-50 w-full flex flex-col md:flex-row md:space-x-[16px] md:space-y-0 space-y-[16px] justify-center"
          >
            <input 
              className="w-full md:max-w-[372px] px-[24px] py-[13px] min-h-[48px] rounded-[10px] font-manrope text-[14px] font-normal leading-[20px] text-[#FFFFFF] bg-white/10" 
              type="email"
              name="form_fields[email]"
              id="form-field-email"
              placeholder="Your email" 
              required
            />
            <button 
              type="submit" 
              className="w-full md:w-auto min-h-[48px] px-[40px] py-[13px] font-manrope font-semibold text-[16px] text-[#141414] bg-white rounded-[10px]"
              disabled={isSubmitting}
            > 
              {isSubmitting ? 'Submitting...' : 'Join Now'}
            </button>
          </form>
          <div className="text-xs mb-0.5 mx-auto">
              {statusMessage && (
                <StatusMessage
                  type={statusMessage.type}
                  message={statusMessage.message}
                />
              )}
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

