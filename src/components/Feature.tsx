import HeartIcon from "../assets/heart-feature.png";
import DiamondIcon from "../assets/diamond-icon.png";
import NoteIcon from "../assets/note-icon.png";
import MedicineIcon from "../assets/medicines 1.png";
import HealthInsuranceIcon from "../assets/health-insurance 1.png";
const Feature = () => {
    return (
        <div className="w-full min-h-[1834px] lg:py-[120px] lg:h-[1054px] lg:px-[80px] lg:min-h-[1054px] md:min-h-[1407px] md:px-[40px] md:py-[90px] pt-[120px] px-[16px]">
            <div className="w-full min-h-[1167px]">
                {/* Feature Section */}
                <div className="flex flex-col items-center justify-center">
                    <span className="font-manrope uppercase text-[24px]  leading-[32.78px]  font-bold text-[#287CF1]">
                        Features
                    </span>
                    <h1 className="font-manrope text-[34px] md:text-[56px] md:leading-[76.5px] leading-[46.44px] font-bold bg-gradient-to-r from-[#287CF1] to-[#FFFFFF] bg-clip-text text-transparent text-center">
                        Sally’s Cutting-Edge Features:{" "}
                        <br className="hidden lg:inline" /> Your Health, Our
                        Priority
                    </h1>
                    <p className="font-manrope text-[20px] md:text-[24px] md:leading-[32.78px] font-medium leading-[27.32px] text-center text-[#FFFFFF99]">
                        Innovative solutions designed to enhance your health
                        journey.
                    </p>
                </div>

                {/* Feature Cards */}
                <div className="grid grid-cols-1 bg-radial lg:bg-radialDesktop md:grid-cols-2 lg:grid-cols-6 lg:grid-rows-2 gap-[24px] h-auto pt-16 pb-[120px]">
                    {/* Top Row - First Two Items Stretched */}
                    <div data-aos='fade-right' data-aos-duration="1000" className="backdrop-blur-3xl w-full max-h-[237px] p-[24px] space-y-[24px] border-[1.5px] border-gray-700 rounded-[12px] md:col-span-2 lg:col-span-3 lg:row-span-1 bg-white/5">
                    <img
                            src={HeartIcon}
                            alt="Heart Icon"
                            className="w-[56px] h-[56px]"
                        />
                        <div className="space-y-[12px]">
                            <h2 className="font-manrope font-bold text-[20px] leading-[27.32px]">
                                AI Health Co-Pilot
                            </h2>
                            <p className="font-manrope text-[16px] font-normal leading-[21.86px] text-[#FFFFFF99]">
                                Delivers evidence-based guidance on nutrition,
                                lifestyle,
                                <br className="hidden md:inline" /> exercise,
                                and mental well-being.
                            </p>
                        </div>
                    </div>

                    <div data-aos='fade-left' data-aos-duration="1000" className="backdrop-blur-3xl w-full max-h-[237px] p-[24px] space-y-[24px] border-[1.5px] border-gray-700 rounded-[12px] lg:col-span-3 lg:row-span-1 bg-white/5">
                        <img
                            src={DiamondIcon}
                            alt="Diamond Icon"
                            className="w-[56px] h-[56px]"
                        />
                        <div className="space-y-[12px]">
                            <h2 className="font-manrope font-bold text-[20px] leading-[27.32px]">
                                Premium Features
                            </h2>
                            <p className="font-manrope text-[16px] font-normal leading-[21.86px] text-[#FFFFFF99]">
                                Unlock tools like the Wellness Terminal by
                                verifying ownership{" "}
                                <br className="hidden md:inline" /> of specific
                                $A1C tokens.
                            </p>
                        </div>
                    </div>

                    {/* Bottom Row - Rest of the Items */}
                    <div data-aos='fade-right' data-aos-duration="1000" className="backdrop-blur-3xl w-full max-h-[237px] p-[24px] space-y-[24px] border-[1.5px] border-gray-700 rounded-[12px] lg:col-span-2 lg:row-start-2 bg-white/5">
                        <img
                            src={NoteIcon}
                            alt="Note Icon"
                            className="w-[56px] h-[56px]"
                        />
                        <div className="space-y-[12px]">
                            <h2 className="font-manrope font-bold text-[20px] leading-[27.32px]">
                                Secure Medical Analysis
                            </h2>
                            <p className="font-manrope text-[16px] font-normal leading-[21.86px] text-[#FFFFFF99]">
                                Answers health questions and analyzes medical
                                documents with a focus on data security.
                            </p>
                        </div>
                    </div>

                    <div data-aos='fade-down' data-aos-duration="1000" className="backdrop-blur-3xl w-full max-h-[237px] p-[24px] space-y-[24px] border-[1.5px] border-gray-700 rounded-[12px] lg:col-span-2 lg:row-start-2 bg-white/5">
                        <img
                            src={MedicineIcon}
                            alt="Medicine Icon"
                            className="w-[56px] h-[56px]"
                        />
                        <div className="space-y-[12px]">
                            <h2 className="font-manrope font-bold text-[20px] leading-[27.32px]">
                                Metabolic Health Support
                            </h2>
                            <p className="font-manrope text-[16px] font-normal leading-[21.86px] text-[#FFFFFF99]">
                                Aids in managing metabolic health (e.g.,
                                diabetes) alongside traditional healthcare.
                            </p>
                        </div>
                    </div>

                    <div data-aos='fade-left' data-aos-duration="1000" className="backdrop-blur-3xl w-full max-h-[237px] p-[24px] space-y-[24px] border-[1.5px] border-gray-700 rounded-[12px] lg:col-span-2 lg:row-start-2 bg-white/5">
                        <img
                            src={HealthInsuranceIcon}
                            alt="Health Insurance Icon"
                            className="w-[56px] h-[56px]"
                        />
                        <div className="space-y-[12px]">
                            <h2 className="font-manrope font-bold text-[20px] leading-[27.32px]">
                                Complementary Care
                            </h2>
                            <p className="font-manrope text-[16px] font-normal leading-[21.86px] text-[#FFFFFF99]">
                                Designed to enhance, not replace, consultations
                                with medical professionals.
                            </p>
                        </div>
                    </div>
                </div>

                {/* <div className="w-full max-h-[237px] p-[24px] bg-white/5 backdrop-blur-sm space-y-[24px] border border-gray-700  rounded-[12px]">
                        <img
                            src={HealthInsuranceIcon}
                            alt="Heart Icon"
                            className="w-[56px] h-[56px]"
                        />
                        <div className="space-y-[12px]">
                            <h2 className="font-manrope font-bold text-[20px] leading-[27.32px]">
                                Complementary Care
                            </h2>
                            <p className="font-manrope text-[16px] font-normal leading-[21.86px] text-[#FFFFFF99]">
                                Designed to enhance, not replace, consultations
                                with medical professionals.
                            </p>
                        </div>
                    </div> */}
            </div>
        </div>
    );
};

export default Feature;
