"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroBillboardRotatedCarousel from '@/components/sections/hero/HeroBillboardRotatedCarousel';
import SplitAboutCards from '@/components/sections/about/SplitAboutCards';
import ProductCardFive from '@/components/sections/product/ProductCardFive';
import TeamCardTwo from '@/components/sections/team/TeamCardTwo';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Sparkles, TrendingUp, Linkedin, Twitter, Globe, Github } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="bounce-effect"
      defaultTextAnimation="background-highlight"
      borderRadius="soft"
      contentWidth="medium"
      sizing="small"
      background="noiseGradient"
      cardStyle="solid-accent-light"
      primaryButtonStyle="neon-glow-border"
      secondaryButtonStyle="glass"
      headingFontWeight="light"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          brandName="TechVenture"
          navItems={[
            { name: "About", id: "about" },
            { name: "Portfolio", id: "portfolio" },
            { name: "Team", id: "team" },
            { name: "Contact", id: "contact" }
          ]}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardRotatedCarousel
          title="Invest in the Future of Technology"
          description="We fund bold founders building the next generation of transformative companies. Join us in shaping the future of tech innovation."
          tag="VC Fund"
          tagIcon={Sparkles}
          buttons={[
            { text: "Pitch Your Idea", href: "#contact" },
            { text: "Learn More", href: "#about" }
          ]}
          carouselItems={[
            { 
              id: "1", 
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_370wpi8QQFACXLdnYrz54L5DXgj/uploaded-1766053837514-1hj8t1em.jpg",
              imageAlt: "Tech startup office environment modern workspace"
            },
            { 
              id: "2", 
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_370wpi8QQFACXLdnYrz54L5DXgj/uploaded-1766053838642-4hcqbkqd.jpg",
              imageAlt: "Artificial intelligence technology innovation concept"
            },
            { 
              id: "3", 
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_370wpi8QQFACXLdnYrz54L5DXgj/uploaded-1766053839406-04w6vfh2.jpg",
              imageAlt: "Venture capital meeting discussion collaboration"
            },
            { 
              id: "4", 
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_370wpi8QQFACXLdnYrz54L5DXgj/uploaded-1766053840245-twsixk1b.jpg",
              imageAlt: "Startup founders pitching business presentation"
            },
            { 
              id: "5", 
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_370wpi8QQFACXLdnYrz54L5DXgj/uploaded-1766053841301-tlbin4wn.jpg",
              imageAlt: "Fintech cryptocurrency blockchain technology"
            },
            { 
              id: "6", 
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_370wpi8QQFACXLdnYrz54L5DXgj/uploaded-1766053842021-t1x15wlc.jpg",
              imageAlt: "Software development coding programming team"
            }
          ]}
          autoPlay={true}
          autoPlayInterval={4000}
        />
      </div>

      <div id="about" data-section="about">
        <SplitAboutCards
          title="About Our Fund"
          description="We believe exceptional founders deserve exceptional capital. With deep technical expertise and extensive networks, we provide more than just funding to our portfolio companies."
          tag="Who We Are"
          features={[
            {
              id: "thesis",
              title: "Our Investment Thesis",
              description: "We focus on early-stage companies solving critical problems in AI, fintech, and climate tech. Our mission is to empower founders with capital, mentorship, and strategic guidance.",
              label: "Early Stage Focus"
            },
            {
              id: "network",
              title: "Extensive Network",
              description: "Access to our network of 500+ successful founders, industry experts, and strategic partners. We connect portfolio companies with the resources they need to scale rapidly.",
              label: "500+ Partners"
            }
          ]}
          buttons={[
            { text: "View Thesis", href: "#" }
          ]}
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="portfolio" data-section="portfolio">
        <ProductCardFive
          title="Our Portfolio"
          description="A curated selection of innovative companies we've invested in across various sectors"
          tag="Featured Investments"
          tagIcon={TrendingUp}
          products={[
            {
              id: "1",
              button: { text: "Learn More" },
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_370wpi8QQFACXLdnYrz54L5DXgj/uploaded-1766053844592-pxf2t17i.jpg",
              imageAlt: "Cloud computing technology infrastructure"
            },
            {
              id: "2",
              button: { text: "Learn More" },
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_370wpi8QQFACXLdnYrz54L5DXgj/uploaded-1766053845404-zblv8bg1.jpg",
              imageAlt: "Mobile app development technology"
            },
            {
              id: "3",
              button: { text: "Learn More" },
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_370wpi8QQFACXLdnYrz54L5DXgj/uploaded-1766053846170-odb404no.jpg",
              imageAlt: "Machine learning artificial intelligence innovation"
            }
          ]}
          textboxLayout="default"
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          containerStyle="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardTwo
          title="Meet Our Team"
          description="Experienced investors and operators with a track record of building and scaling successful companies"
          tag="Leadership"
          members={[
            {
              id: "1",
              name: "Sarah Chen",
              role: "Managing Partner",
              description: "Former VP of Strategy at major tech conglomerate with 15+ years in venture capital",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_370wpi8QQFACXLdnYrz54L5DXgj/uploaded-1766053846906-l537eigi.jpg",
              imageAlt: "Professional business person portrait headshot",
              socialLinks: [
                { icon: Linkedin, url: "https://linkedin.com" },
                { icon: Twitter, url: "https://twitter.com" }
              ]
            },
            {
              id: "2",
              name: "Michael Rodriguez",
              role: "Partner",
              description: "Serial entrepreneur with 3 successful exits. Founder of two SaaS companies.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_370wpi8QQFACXLdnYrz54L5DXgj/uploaded-1766053848182-zqm0r3sk.jpg",
              imageAlt: "Female entrepreneur professional portrait",
              socialLinks: [
                { icon: Linkedin, url: "https://linkedin.com" },
                { icon: Globe, url: "https://website.com" }
              ]
            },
            {
              id: "3",
              name: "Jessica Park",
              role: "Partner",
              description: "AI researcher turned investor. PHD in Machine Learning from Stanford.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_370wpi8QQFACXLdnYrz54L5DXgj/uploaded-1766053848961-xhpo7rhd.jpg",
              imageAlt: "Business executive professional headshot",
              socialLinks: [
                { icon: Linkedin, url: "https://linkedin.com" },
                { icon: Github, url: "https://github.com" }
              ]
            },
            {
              id: "4",
              name: "David Thompson",
              role: "Associate",
              description: "Former product manager at leading fintech startup. Passionate about financial innovation.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_370wpi8QQFACXLdnYrz54L5DXgj/uploaded-1766053849832-arwr1nlk.jpg",
              imageAlt: "Tech founder professional portrait",
              socialLinks: [
                { icon: Linkedin, url: "https://linkedin.com" },
                { icon: Twitter, url: "https://twitter.com" }
              ]
            }
          ]}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          containerStyle="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="social-proof" data-section="social-proof">
        <SocialProofOne
          title="Trusted by Industry Leaders"
          description="Our portfolio companies have been backed by and partnered with the world's most innovative organizations"
          textboxLayout="default"
          useInvertedBackground="noInvert"
          logos={[
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_370wpi8QQFACXLdnYrz54L5DXgj/uploaded-1766053850637-chqisr89.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_370wpi8QQFACXLdnYrz54L5DXgj/uploaded-1766053851325-fm9kb3wn.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_370wpi8QQFACXLdnYrz54L5DXgj/uploaded-1766053852155-9vlwqfy6.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_370wpi8QQFACXLdnYrz54L5DXgj/uploaded-1766053852739-ea3fyfuu.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_370wpi8QQFACXLdnYrz54L5DXgj/uploaded-1766053853547-dtncg2oj.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_370wpi8QQFACXLdnYrz54L5DXgj/uploaded-1766053854226-qvyzv5a9.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_370wpi8QQFACXLdnYrz54L5DXgj/uploaded-1766053855223-kqfi9p0c.jpg"
          ]}
          speed={40}
          showCard={true}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Get in Touch"
          title="Ready to Build the Future?"
          description="Whether you're a founder seeking investment or an investor looking for opportunities, we'd love to hear from you. Reach out to our team and let's discuss how we can work together."
          useInvertedBackground="noInvert"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_370wpi8QQFACXLdnYrz54L5DXgj/uploaded-1766053855960-c5q2076n.jpg"
          imageAlt="Startup team collaboration meeting workspace"
          mediaPosition="right"
          inputPlaceholder="Enter your email"
          buttonText="Get Started"
          termsText="We respect your privacy. Unsubscribe at any time."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          logoText="TechVenture"
          copyrightText="© 2025 TechVenture Capital. All rights reserved."
          columns={[
            {
              title: "Fund",
              items: [
                { label: "About Us", href: "about" },
                { label: "Our Portfolio", href: "portfolio" },
                { label: "Investment Thesis", href: "#" }
              ]
            },
            {
              title: "For Founders",
              items: [
                { label: "How to Apply", href: "contact" },
                { label: "FAQ", href: "#" },
                { label: "Resources", href: "#" }
              ]
            },
            {
              title: "Company",
              items: [
                { label: "Team", href: "team" },
                { label: "Blog", href: "#" },
                { label: "Contact", href: "contact" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}