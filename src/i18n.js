import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      "home": "Home",
      "about-us": "About us",
      "our-services" : "Our Services",
      "blog": 'Blog',
      "contact-us": "Contact us",
      "schedule-free-consultation": "Schdule Free Consultation",
      "experienced-lawyers": "Experienced Lawyers,",
      "proven": "Proven",
      "results": "Results",
      "our-expertise": "Our Expertise",
      "learn-more-about": "Learn More About",
      "firm-journey-values": "Our Firm's Journey and Values",
      "learn-more": "Learn More",
      "our-expertise-2" : "Our Expertise :",
      "solutions-tailored": "Solutions Tailored to Your Legal Needs",
      "bankruptcy": "Bankruptcy",
      "financial-claims": "Financial Claims",
      "commercial-arbitration": "Commercial Arbitration",
      "drafting-and-reviewing": "Drafting and Reviewing",
      "debt-collection": "Debt Collection",
      "civil-cases": "Civil Cases",
      "legal-risk-analysis" : "Legal Risk Analysis",
      "memorandums-and-regulations": "Writing Memorandums and Regulations",
      "documentation": "Documentation",
      "legal-consultations": "Legal Consultations",
      "corporate-governance": "Corporate Governance",
      "more-services": "Check more services",
      "meet-our-team": "Meet Our Team",
      "see-more": "See More",
      "mustapha-ahmed": "Mustapha Ahmed",
      "lawyer": "Lawyer",
      "case-studies": "Case Studies",
      "check-our-blog": "Check Our Blog",
      "Free Consulation": "Free consultation",
      "Name":"Name",
      "Email":"Email",
      "Phone":"Phone",
      "Case Description":"Phone Description",
      "Pick Case Area":"Pivk Case Area",
      "Send": "Send",
      "Stay updated to the":"Stay updated to the",
      "Newest":"Newest",
      "legal":"legal",
      "information":"information",
      "Mithaq Al Tashrie: Article collection":"Mithaq Al Tashrie: Article collection",
      "Pick a writer you want to read to":"Pick a writer you want to read to",
      "Search an article":"Search an article"
    }
  },
  ar: {
    translation: {
      "home": "الصفحة الرئيسية",
      "about-us": "نبذة عنّا",
      "our-services": "خدماتنا",
      "blog": "المدوّنة",
      "contact-us": "اتصل بنا",
      "schedule-free-consultation": "حجز استشارة مجانية",
      "experienced-lawyers": "محامون ذوو خبرة,",
      "proven": "نتائج",
      "results": "مثبتة",
      "our-expertise": "خبرتنا",
      "learn-more-about": "تعرّف أكثر على",
      "firm-journey-values": "مسيرتنا وقيمنا",
      "learn-more": "تعرّف على المزيد",
      "our-expertise-2" : "خبرتنا :",
      "solutions-tailored": "حلول مُصممة خصيصًا لتلبية احتياجاتك القانونية",
      "bankruptcy": "الإعسار المالي",
      "financial-claims": "قضايا النزاعات المالية",
      "commercial-arbitration": "التحكيم التجاري",
      "drafting-and-reviewing": "صياغة ومراجعة العقود",
      "debt-collection": "تحصيل الديون",
      "civil-cases": "قضايا مدنية",
      "legal-risk-analysis" : "تحديد وتقييم المخاطر القانونية",
      "memorandums-and-regulations": "كتابة المذكرات واللوائح",
      "documentation": "تنظيم وإدارة الوثائق",
      "legal-consultations": "استشارات قانونية",
      "corporate-governance": "حوكمة الشركات",
      "more-services": "المزيد من الخدمات",
      "meet-our-team": "كوادرنا القانونية المتميزة",
      "see-more": "المزيد",
      "mustapha-ahmed": "مصطفى أحمد",
      "lawyer": "محامي",
      "case-studies": "المدونة",
      "check-our-blog": "اطلع على مدونتنا",
      "Free Consulation": "طلب إستشارة",
      "Name":"الإسم",
      "Email":"البريد الإلكتروني",
      "Phone":"الهاتف",
      "Case Description":"وصف القضية",
      "Pick Case Area":"اختيار المجال",
      "Send":"إرسال",
      "Stay updated to the":"ابق على ",
      "Newest":"اطلاع",
      "legal":"دائم",
      "information":"على آخر المسجدات القانونية",
      "Mithaq Al Tashrie: Article collection":"ميثاق التشريع : مجموعة المدونات",
      "Pick a writer you want to read to":"اختر كاتب",
      "Search an article": "ابحث عن مقال"


    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage']
    },
    interpolation: {
      escapeValue: false // React already escapes values
    }
  });

export default i18n;
