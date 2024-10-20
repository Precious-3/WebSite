const languages = {
    en: {
        home: "Home",
        services: "Services",
        contact: "Contact",
        products: "Products",
        language: "Language",
        welcome: "Welcome to AgriNeeds",
        slogan: "Your one-stop solution for all agricultural needs",
        about: "About AgriNeeds",
        "about-text": "AgriNeeds is your trusted partner in agriculture, providing comprehensive solutions for farmers, gardeners, and agricultural enthusiasts. We offer a wide range of products, services, and expert advice to help you grow your crops efficiently and sustainably. From high-quality seeds and fertilizers to cutting-edge farming equipment and personalized consultations, AgriNeeds is here to support your agricultural journey every step of the way.",
        team: "About Our Team",
        "team-text": "Our dedicated team of agricultural experts and enthusiasts is committed to providing you with the best products and services. With years of experience in the field, we understand the unique challenges faced by farmers and are here to support you in achieving your agricultural goals.",
        "contact-us": "Contact Us",
        email: "Email: info@agrineeds.com",
        phone: "Phone: (123) 456-7890",
        address: "Address: 123 Farm Road, Agriville, AG 12345"
    },
    fr: {
        home: "Accueil",
        services: "Services",
        contact: "Contact",
        products: "Produits",
        language: "Langue",
        welcome: "Bienvenue chez AgriNeeds",
        slogan: "Votre solution tout-en-un pour tous les besoins agricoles",
        about: "À propos d'AgriNeeds",
        "about-text": "AgriNeeds est votre partenaire de confiance en agriculture, fournissant des solutions complètes pour les agriculteurs, les jardiniers et les passionnés d'agriculture. Nous offrons une large gamme de produits, de services et de conseils d'experts pour vous aider à cultiver vos récoltes de manière efficace et durable. Des semences et engrais de haute qualité aux équipements agricoles de pointe et aux consultations personnalisées, AgriNeeds est là pour soutenir votre parcours agricole à chaque étape.",
        team: "À propos de notre équipe",
        "team-text": "Notre équipe dévouée d'experts et de passionnés d'agriculture s'engage à vous fournir les meilleurs produits et services. Avec des années d'expérience dans le domaine, nous comprenons les défis uniques auxquels sont confrontés les agriculteurs et sommes là pour vous soutenir dans la réalisation de vos objectifs agricoles.",
        "contact-us": "Contactez-nous",
        email: "Email : info@agrineeds.com",
        phone: "Téléphone : (123) 456-7890",
        address: "Adresse : 123 Rue de la Ferme, Agriville, AG 12345"
    },
    ar: {
        home: "Inicio",
        services: "Servicios",
        contact: "Contacto",
        products: "Productos",
        language: "Idioma",
        welcome: "Bienvenido a AgriNeeds",
        slogan: "Su solución integral para todas las necesidades agrícolas",
        about: "Acerca de AgriNeeds",
        "about-text": "AgriNeeds es su socio de confianza en agricultura, proporcionando soluciones integrales para agricultores, jardineros y entusiastas de la agricultura. Ofrecemos una amplia gama de productos, servicios y asesoramiento experto para ayudarle a cultivar sus cosechas de manera eficiente y sostenible. Desde semillas y fertilizantes de alta calidad hasta equipos agrícolas de vanguardia y consultas personalizadas, AgriNeeds está aquí para apoyar su viaje agrícola en cada paso del camino.",
        team: "Acerca de nuestro equipo",
        "team-text": "Nuestro dedicado equipo de expertos y entusiastas de la agricultura está comprometido a proporcionarle los mejores productos y servicios. Con años de experiencia en el campo, entendemos los desafíos únicos que enfrentan los agricultores y estamos aquí para apoyarle en el logro de sus objetivos agrícolas.",
        "contact-us": "Contáctenos",
        email: "Correo electrónico: info@agrineeds.com",
        phone: "Teléfono: (123) 456-7890",
        address: "Dirección: 123 Calle de la Granja, Agriville, AG 12345"
    }
};

function changeLanguage(lang) {
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-lang]').forEach(element => {
        const key = element.getAttribute('data-lang');
        if (languages[lang] && languages[lang][key]) {
            element.textContent = languages[lang][key];
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const languageItems = document.querySelectorAll('[data-lang-switch]');
    languageItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const lang = item.getAttribute('data-lang-switch');
            changeLanguage(lang);
        });
    });
});

// Set default language
changeLanguage('en');
