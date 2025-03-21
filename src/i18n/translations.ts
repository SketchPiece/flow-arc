import { automationSupport } from "./pages/automation-support";
import { home } from "./pages/home";
import { implementation } from "./pages/implementation";
import { webDevelopment } from "./pages/web-development";

export const languages = {
  en: "English",
  uk: "Українська",
};

export const defaultLang = "uk";

export const translations = {
  en: {
    "nav.about": "About Us",
    "nav.services": "Services",
    "nav.services.implementation.title": "Implementation & Optimization",
    "nav.services.implementation.description":
      "Learn how our automation solutions can help you optimize your business",
    "nav.services.automation-support.title": "Automation Support",
    "nav.services.automation-support.description":
      "Support your automation solutions with our expert maintenance, continuous monitoring, and performance updates",
    "nav.services.web-development.title": "Custom Web Development",
    "nav.services.web-development.description":
      "Get started with our custom web development services to help you build your business",
    "nav.case-studies": "Case Studies",
    "nav.blog": "Blog",
    "common.cta": "Book a consultation",
    "common.learn-more": "Learn more",
    "blog.title": "Our Blog",
    "blog.description":
      "Explore expert insights, tips, and trends on business automation.",
    "blog.read-more": "Read more",
    "blog.previous": "Previous",
    "blog.next": "Next",
    "footer.terms-of-service": "Terms of Service",
    "footer.privacy-policy": "Privacy Policy",
    "footer.email": "Email",
    "footer.phone": "Phone",
    ...home.en,
    ...implementation.en,
    ...automationSupport.en,
    ...webDevelopment.en,
  },
  uk: {
    "nav.about": "Про Нас",
    "nav.services": "Послуги",
    "nav.services.implementation.title": "Впровадження Автоматизації",
    "nav.services.implementation.description":
      "Дізнайтеся, як ми можемо посилити ваші бізнес-процеси за допомогою наших рішень з автоматизації",
    "nav.services.automation-support.title": "Технічна Підтримка",
    "nav.services.automation-support.description":
      "Підтримайте ваші рішення з автоматизації за допомогою нашої експертної підтримки, постійної моніторингу та оновлення продуктивності",
    "nav.services.web-development.title": "Розробка Веб-Рішень",
    "nav.services.web-development.description":
      "Почніть роботу з нашими сервісами для створення веб-застосунків, щоб допомогти вам побудувати бізнес",
    "nav.case-studies": "Кейси",
    "nav.blog": "Блог",
    "common.cta": "Замовити консультацію",
    "common.learn-more": "Дізнатися більше",
    "hero.subheadline": "Спрощуйте, Автоматизуйте та Зростайте",
    "blog.title": "Наш Блог",
    "blog.description":
      "Ділимось експертизою, порадами та трендами у сфері бізнес-автоматизації.",
    "blog.read-more": "Читати далі",
    "blog.previous": "Попередня",
    "blog.next": "Наступна",
    "footer.terms-of-service": "Правила користування",
    "footer.privacy-policy": "Політика конфідеційності",
    "footer.email": "Электронна пошта",
    "footer.phone": "Телефон",
    ...home.uk,
    ...implementation.uk,
    ...automationSupport.uk,
    ...webDevelopment.uk,
  },
} as const;
