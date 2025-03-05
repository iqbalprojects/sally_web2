import SettingsIcon from "../assets/settings-icon.png";
import DistributeIcon from "../assets/options (1).png";
import StartupIcon from "../assets/startup (5).png";
import SystemIntegrationIcon from "../assets/system-integration.png";
const Specialties = () => {
  return (
    <div id="3" className="custom-bg">
     <div className="relative w-full min-h-[1959px] lg:min-h-[873px] md:min-h-[1301px] md:px-[40px] md:py-[90px] py-[120px] px-[16px] space-y-[42px]">
        {/* Radial Gradient Ellipse */}
        {/* <div className="absolute w-[651px] h-[304px] rounded-full 
        bg-[radial-gradient(ellipse_at_center,_rgba(40,124,241,1)_0%,_transparent_70%)] 
        top-[433px] left-[178px] 
        md:top-[407px] md:left-[433px]
        ">
    </div> */}

        <div className="relative flex flex-col">
          <span className="font-manrope uppercase text-[24px] leading-[32.78px] font-bold text-[#287CF1] text-center">
            Specialties
          </span>
          <h1 className="font-manrope font-bold text-[34px] md:text-[56px] lg:text-[64px] md:leading-[76.5px] lg:leading-[87.42px] leading-[46.44px] lg:max-w-6xl lg:mx-auto bg-gradient-to-r to-[#287CF1] from-[#FFFFFF] bg-clip-text text-transparent text-center">
            Complete Solutions for Personalized Health and Wellness
          </h1>
        </div>

        <div className="relative max-h-[1472px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 space-y-[24px] md:space-y-0 gap-[24px]">
          <div data-aos="fade-right" data-aos-duration="1000" className="w-full max-h-[350px] rounded-[12px] border border-white/10 p-[32px] space-y-[20px] flex flex-col items-center bg-white/5">
            <div className="p-12 flex justify-center">
              <img
                src={SettingsIcon}
                alt="Settings Icon"
                className="w-[56px] h-[56px]"
              />
            </div>
            <div className="flex flex-col items-center space-y-[12px]">
              <h2 className="font-manrope font-bold text-[20px] leading-[27.32px] text-center">
                Personalized
              </h2>
              <p className="font-manrope text-[16px] font-normal leading-[21.86px] text-[#FFFFFF99] text-center">
                Sally provides evidence-based, personalized health guidance
                tailored to your unique needs and lifestyle.
              </p>
            </div>
          </div>

          <div data-aos="fade-left" data-aos-duration="1000" className="w-full max-h-[350px] rounded-[12px] border border-white/10 p-[32px] space-y-[20px] flex flex-col items-center bg-white/5">
            <div className="p-12 flex justify-center">
              <img
                src={DistributeIcon}
                alt="Settings Icon"
                className="w-[56px] h-[56px]"
              />
            </div>
            <div className="flex flex-col items-center space-y-[12px]">
              <h2 className="font-manrope font-bold text-[20px] leading-[27.32px] text-center">
                Distributed
              </h2>
              <p className="font-manrope text-[16px] font-normal leading-[21.86px] text-[#FFFFFF99] text-center">
                Sally uses $A1C as her primary distribution means to reach out
                to users.
              </p>
            </div>
          </div>

          <div data-aos="fade-right" data-aos-duration="1000" className="w-full max-h-[350px] rounded-[12px] border border-white/10 p-[32px] space-y-[20px] flex flex-col items-center bg-white/5">
            <div className="p-12 flex justify-center">
              <img
                src={StartupIcon}
                alt="Settings Icon"
                className="w-[56px] h-[56px]"
              />
            </div>
            <div className="flex flex-col items-center space-y-[12px]">
              <h2 className="font-manrope font-bold text-[20px] leading-[27.32px] text-center">
                Optimal
              </h2>
              <p className="font-manrope text-[16px] font-normal leading-[21.86px] text-[#FFFFFF99] text-center">
                Sally takes a comprehensive approach to health, covering
                nutrition, fitness, mental well-being, and more.
              </p>
            </div>
          </div>

          <div data-aos="fade-left" data-aos-duration="1000" className="w-full max-h-[350px] rounded-[12px] border border-white/10 p-[32px] space-y-[20px] flex flex-col items-center bg-white/5">
            <div className="p-12 flex justify-center">
              <img
                src={SystemIntegrationIcon}
                alt="Settings Icon"
                className="w-[56px] h-[56px]"
              />
            </div>
            <div className="flex flex-col items-center space-y-[12px]">
              <h2 className="font-manrope font-bold text-[20px] leading-[27.32px] text-center">
                Integrated
              </h2>
              <p className="font-manrope text-[16px] font-normal leading-[21.86px] text-[#FFFFFF99] text-center">
                Ask questions, upload medical documents, and receive actionable
                insights—all in one seamless platform.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Specialties;
