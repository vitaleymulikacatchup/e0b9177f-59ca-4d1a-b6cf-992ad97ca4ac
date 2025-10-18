"use client";

import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import SplitAbout from '@/components/sections/about/SplitAbout';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterBase from '@/components/sections/footer/FooterBase';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import { ThemeProvider } from '@/providers/ThemeProvider';
import { Coffee, Award } from 'lucide-react';

const assetMap = [
  {"id":"hero-image","url":"https://images.pexels.com/photos/6612575/pexels-photo-6612575.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"A close-up view of a professional espresso machine with syrup bottles in a coffee shop setting."},
  {"id":"about-image","url":"https://images.pexels.com/photos/6166751/pexels-photo-6166751.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"A hand pouring milk to create latte art in a coffee cup, top view."},
  {"id":"product-1","url":"https://images.pexels.com/photos/34344366/pexels-photo-34344366.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Close-up of an espresso cup on a rustic wooden table surrounded by a natural setting."},
  {"id":"product-2","url":"https://images.pexels.com/photos/34344366/pexels-photo-34344366.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Close-up of an espresso cup on a rustic wooden table surrounded by a natural setting."},
  {"id":"product-3","url":"https://images.pexels.com/photos/34321386/pexels-photo-34321386.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"cappuccino coffee - Photo by Novkov Visuals"},
  {"id":"testimonial-1","url":"https://images.pexels.com/photos/826349/pexels-photo-826349.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Woman enjoying remote work at a café, using a laptop and smartphone."},
  {"id":"testimonial-2","url":"https://images.pexels.com/photos/5710222/pexels-photo-5710222.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Happy ethnic female friends with shopping bags smiling while demonstrating goods to each other"},
  {"id":"testimonial-3","url":"https://images.pexels.com/photos/34321386/pexels-photo-34321386.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"coffee lover - Photo by Novkov Visuals"},
  {"id":"testimonial-4","url":"https://images.pexels.com/photos/30688912/pexels-photo-30688912.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"A woman enjoying grocery shopping in a vibrant Lagos supermarket aisle."},
  {"id":"testimonial-5","url":"https://images.pexels.com/photos/1549181/pexels-photo-1549181.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"A smiling man enjoys a cup of espresso outdoors, creating a lively and relaxed atmosphere."},
  {"id":"testimonial-6","url":"https://images.pexels.com/photos/5538618/pexels-photo-5538618.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Positive young Asian female student with earphones writing in copybook while doing homework at table with laptop in street cafeteria"}
];

export default function Page() {
  const findAssetById = (id) => {
    const asset = assetMap.find((a) => a.id === id);
    return {
      url: asset?.url || "/public/images/placeholder.webp",
      alt: asset?.alt || "Decorative image",
    };
  };

  return (
    <ThemeProvider
      defaultButtonVariant="icon-arrow"
      defaultTextAnimation="background-highlight"
      borderRadius="soft"
    >
      <div id="nav" data-section="nav" className={"scroll-mt-24 "}>
        <div className={"mx-auto px-4 md:px-6 "}>
          <NavbarStyleApple
            navItems={[
              { name: "Home", id: "home" },
              { name: "Menu", id: "menu" },
              { name: "About Us", id: "about" },
              { name: "Contact", id: "contact" }
            ]}
            brandName="Coffee Corner"
          />
        </div>
      </div>

      <div id="hero" data-section="hero" className={"scroll-mt-24 "}>
        <div className={"mx-auto px-4 md:px-6 "}>
          <HeroBillboard
            title="Welcome to Coffee Corner"
            description="Experience the finest brews and delightful ambiance at our café."
            imageSrc={findAssetById("hero-image").url}
            imageAlt={findAssetById("hero-image").alt}
          />
        </div>
      </div>

      <div id="about" data-section="about" className={"scroll-mt-24 "}>
        <div className={"mx-auto px-4 md:px-6 "}>
          <SplitAbout
            title="About Us"
            description="At Coffee Corner, we pride ourselves in sourcing the best beans to craft the perfect cup."
            bulletPoints={[
              { title: "Quality Beans", description: "Sourced from the finest farms.", icon: Coffee },
              { title: "Expert Baristas", description: "Crafting each cup with precision.", icon: Award }
            ]}
            imageSrc={findAssetById("about-image").url}
            imageAlt={findAssetById("about-image").alt}
          />
        </div>
      </div>

      <div id="product" data-section="product" className={"scroll-mt-24 "}>
        <div className={"mx-auto px-4 md:px-6 "}>
          <ProductCardOne
            title="Our Specialties"
            description="Explore our curated menu of delicious beverages."
            products={[
              { id: "1", name: "Latte", price: "$4.50", imageSrc: findAssetById("product-1").url, imageAlt: findAssetById("product-1").alt },
              { id: "2", name: "Espresso", price: "$3.00", imageSrc: findAssetById("product-2").url, imageAlt: findAssetById("product-2").alt },
              { id: "3", name: "Cappuccino", price: "$3.50", imageSrc: findAssetById("product-3").url, imageAlt: findAssetById("product-3").alt }
            ]}
          />
        </div>
      </div>

      <div id="testimonial" data-section="testimonial" className={"scroll-mt-24 "}>
        <div className={"mx-auto px-4 md:px-6 "}>
          <TestimonialCardTwo
            title="Customer Reviews"
            description="Hear what our customers have to say about us."
            testimonials={[
              { id: "1", name: "Sarah Johnson", role: "Customer", testimonial: "The best coffee in town!", imageSrc: findAssetById("testimonial-1").url, imageAlt: findAssetById("testimonial-1").alt },
              { id: "2", name: "Michael Chen", role: "Regular Client", testimonial: "I love the vibe here.", imageSrc: findAssetById("testimonial-2").url, imageAlt: findAssetById("testimonial-2").alt },
              { id: "3", name: "Emily Rodriguez", role: "Coffee Lover", testimonial: "A perfect place to relax.", imageSrc: findAssetById("testimonial-3").url, imageAlt: findAssetById("testimonial-3").alt },
              { id: "4", name: "David Kim", role: "Visitor", testimonial: "Highly recommend this café!", imageSrc: findAssetById("testimonial-4").url, imageAlt: findAssetById("testimonial-4").alt },
              { id: "5", name: "Jessica Brown", role: "Cafe Enthusiast", testimonial: "Every cup is a treat.", imageSrc: findAssetById("testimonial-5").url, imageAlt: findAssetById("testimonial-5").alt },
              { id: "6", name: "Oliver Smith", role: "Happy Customer", testimonial: "Amazing coffee and service!", imageSrc: findAssetById("testimonial-6").url, imageAlt: findAssetById("testimonial-6").alt }
            ]}
          />
        </div>
      </div>

      <div id="contact" data-section="contact" className={"scroll-mt-24 "}>
        <div className={"mx-auto px-4 md:px-6 "}>
          <ContactCenter
            tag="Get in Touch"
            title="We're here to help"
            description="Contact us for inquiries or visit our café for a delightful experience."
          />
        </div>
      </div>

      <div id="footer" data-section="footer" className={"scroll-mt-24 "}>
        <div className={"mx-auto px-4 md:px-6 "}>
          <FooterBase
            columns={[
              { title: "Quick Links", items: [ { label: "Home", href: "home" }, { label: "Menu", href: "menu" }, { label: "About Us", href: "about" } ] },
              { title: "Contact", items: [ { label: "Email Us", href: "mailto:contact@coffeecorner.com" }, { label: "Visit Us", href: "contact" } ] }
            ]}
            copyrightText="© 2023 Coffee Corner"
          />
        </div>
      </div>
    </ThemeProvider>
  );
}
