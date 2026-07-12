import CTASection from "./Components/Action";
import BannerPage from "./Components/Banner";
import FAQSection from "./Components/Faqsection";
import NewsletterSection from "./Components/NewsLetter";
import ServicesSection from "./Components/Services";
import StatisticsSection from "./Components/Statistic";
import TestimonialsSection from "./Components/Testiomonial";


export default function Home() {
  return (
   <>
   <BannerPage></BannerPage>
   <ServicesSection></ServicesSection>
   <StatisticsSection></StatisticsSection>
   
   
   <CTASection></CTASection>
   <TestimonialsSection></TestimonialsSection>
   <FAQSection></FAQSection>
   <NewsletterSection></NewsletterSection>

   </>
  );
}
