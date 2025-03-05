import { useEffect, useState } from 'react';
import AddIcon from '../assets/add-ico.png'
import MinIcon from '../assets/min-ico.png'
const Faq = () => {
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    useEffect(() => {
      const updateGradientPosition = () => {
      
      };
  
      updateGradientPosition(); // Run on mount
      window.addEventListener("resize", updateGradientPosition);
      return () => window.removeEventListener("resize", updateGradientPosition);
    }, []);
    const faqItems = [
        {
            id: 1,
            question: "What is Sally?",
            answer: "Sally is the FIRST Metabolic Health AI Agent. Think of her as your personal guide to a happier, healthier you, empowering you to take control of your well-being."
        },
        {
            id: 2,
            question: "How can Sally help me?",
            answer: "Sally provides actionable, evidence-based steps tailored to your individual needs. She helps you build sustainable habits, particularly for optimizing your A1C levels."
        },
        {
            id: 3,
            question: "What does Sally focus on?",
            answer: "Sally focuses on key metabolic markers to help prevent and potentially reverse certain chronic diseases (under the guidance of your healthcare professional). She also emphasizes enjoyable exercise, mindful eating, and effective stress management."
        },
        {
            id: 4,
            question: "Is Sally a replacement for my doctor?",
            answer: "No, Sally is not a replacement for professional medical advice. She is a tool to support your well-being journey and should be used in conjunction with your doctor’s guidance, especially when it comes to managing chronic diseases."
        },
        {
            id: 5,
            question: 'How does Sally personalize her recommendations?',
            answer: 'Sally utilizes her AI capabilities to understand your individual needs and preferences, allowing her to provide tailored and actionable steps for improving your metabolic health.'
        },
        {
            id: 6,
            question: 'What kind of results can I expect with Sally?',
            answer: 'With Sally, you can expect to gain a deeper understanding of your body, unlock your potential for vibrant energy, and embrace lasting health. You’ll receive support in building sustainable habits for improved metabolic health.'
        }
    ];
    const toggleFaq = (id: number) => {
        setOpenFaq(openFaq === id ? null : id);
    };
    return (
      <div className='custom-bg-faq'>
        <div className="w-full min-h-[1170px] pb-[120px] pt-[120px] lg:pt-0 px-[16px] md:px-[40px]">
        <div className="w-full min-h-[930px] space-y-[64px] flex flex-col">
          <div className="w-full space-y-[12px] flex flex-col">
            <span className="font-manrope font-bold text-[24px] leading-[32.78px] text-[#287CF1] text-center">FAQ</span>
            <h1 className="font-bold font-manrope text-[34px] leading-[46.44px] text-center md:text-[42px] lg:text-[56px] md:leading-[1.2] lg:leading-[76.5px]">Frequently Asked</h1>
            <h1 className="font-bold font-manrope text-[34px] leading-[46.44px] text-center md:text-[42px] lg:text-[56px] md:leading-[1.2] lg:leading-[76.5px]">Questions</h1>
          </div>
          <div className="w-full flex flex-col justify-center items-center  space-y-[24px] md:px-[5%] lg:px-[90px]">
            {faqItems.map((item, idx) => (
              <div data-aos={idx % 2 === 0 ? "fade-right" : "fade-left"} data-aos-duration="1000" key={item.id} className="w-full md:w-[574px] lg:w-[772px] rounded-[12px] border border-white/10 overflow-hidden bg-white/5">
                <div 
                  className="w-full min-h-[67px] p-[20px] flex justify-between items-center cursor-pointer"
                  onClick={() => toggleFaq(item.id)}
                >
                  <span className="font-manrope font-bold text-[18px] md:text-[20px] leading-[27.32px]">{item.question}</span>
                  <img 
                    src={openFaq === item.id ? MinIcon : AddIcon} 
                    alt={openFaq === item.id ? "Close" : "Open"} 
                    className="w-[24px] h-[24px] transition-transform duration-300 flex-shrink-0 ml-2"
                  />
                </div>
                {openFaq === item.id && (
                  <div className="p-[20px]">
                    <p className="font-manrope text-[16px] leading-[21.86px] font-normal opacity-[70%]">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        </div>
      </div>
        
    )
}
export default Faq