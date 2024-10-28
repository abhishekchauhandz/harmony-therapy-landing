import { Montserrat, Poppins } from 'next/font/google';
import "./globals.css";
import Footer from './components/Footer';
import Header from './components/Header';

const poppins = Poppins({
  weight: ['400', '600'],
  subsets: ['latin'],
});

const montserrat = Montserrat({
  weight: ['400', '600'],
  subsets: ['latin'],
});

export const metadata = {
  title: "Harmony Therapy",
  description: "Your trusted Mental Health Care/support",  
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel='icon' href='/favicon.ico' />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Harmony Therapy",
            "url": "https://yourwebsite.com", // Replace with your actual URL
            "logo": "https://yourwebsite.com/logo.png", // Replace with your logo URL
            "sameAs": [
              "https://www.facebook.com/yourprofile", // Replace with your social media links
              "https://www.twitter.com/yourprofile",
              "https://www.linkedin.com/in/yourprofile"
            ],
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+1-800-555-0123", // Replace with your phone number
              "contactType": "Customer Service",
              "areaServed": "US",
              "availableLanguage": "English"
            },
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "123 Harmony St", // Replace with your street address
              "addressLocality": "Your City",
              "addressRegion": "Your State",
              "postalCode": "12345",
              "addressCountry": "US"
            },
            "description": "Your trusted Mental Health Care/support",
          })}
        </script>
      </head>
      <body
        className={`${poppins.variable} ${montserrat.variable}`}
      >
        <div className="w-full px-4 md:px-20">
          <Header />
        </div>
        {children}
        <Footer />
      </body>
    </html>
  );
}