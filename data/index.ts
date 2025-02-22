'use client';
export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Testimonials", link: "#testimonials" },
    { name: "Contact", link: "Contact" },
  ];
  
  export const gridItems = [
    {
      id: 1,
      title: "",
      description: "",
      className: "xl:col-span-2 md:col-span-6 md:row-span-2 xl:min-h-[60vh]",
      imgClassName: "w-full h-full",
      titleClassName: "justify-end",
      img: "Pix 01.jpg",
      spareImg: "",
    },
    {
      id: 2,
      title: "",
      description: "",
      className: "lg:row-span-2 lg:col-span-1 md:col-span-3 md:row-span-auto", // Fixed spacing
      imgClassName: "",
      titleClassName: "justify-start",
      img: "Pix 04.jpg",
      spareImg: "",
    },
    {
      id: 5,
      title: "",
      description: "",
      className: "xl:col-span-2 xl:row-span-2 md:col-span-5 md:row-span-2",
      imgClassName: "w-full h-full object-cover",
      titleClassName: "justify-center md:justify-start lg:justify-center",
      img: "Pix 02.jpg",
      spareImg: "",
    },
    {
      id: 6,
      title: "",
      description: "",
      className: "xl:col-span-1 xl:row-span-2 md:col-span-3 md:row-span-6", // Fixed gap issue
      imgClassName: "",
      titleClassName: "justify-center md:max-w-full max-w-60 text-center",
      img: ["Foodindia Expo 01.jpg", "Foodindia Expo 02.jpg", "Foodindia Expo 03.jpg"],
      spareImg: "",
    },
  ];
  
  
  export const projects = [
    {
      id: 1,
      title: "Advertising & Marketing",
      des: "At CCOrigins we elevate brands with creative marketing and strategic advertising solutions.",
      img: "04.jpg",
      //iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
      link: "CCO-Advertising & Marketing.pdf",
    },
    {
      id: 2,
      title: "Digital Marketing",
      des: " At CCOrigins we transform brands with innovative digital marketing strategies that drive real results!",
      img: "01.jpg",
      //iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
      link: "/ui.yoom.com",
    },
    {
      id: 3,
      title: "Event & Exhibits",
      des: "At CCOrigins we craft unforgettable experiences through innovative events and exhibits",
      img: "02.jpg",
      //iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
      link: "CCO-Event & Exhibition.pdf",
    },
    {
      id: 4,
      title: "Interior & Exterior",
      des: "At CCOrigins we transform spaces with visionary interior and exterior design.",
      img: "03.jpg",
      //iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
      link: "CCO-Interior Profile.pdf",
    },
  ];
  
  export const testimonials = [
    {
      quote:
        "Coming Soon...",
      //name: "Michael Johnson",
      //title: "Director of AlphaStream Technologies",
    },
    {
      quote:
        "Coming Soon...",
      //name: "Michael Johnson",
      //title: "Director of AlphaStream Technologies",
    },
    {
      quote:
        "Coming Soon...",
      //name: "Michael Johnson",
      //title: "Director of AlphaStream Technologies",
    },
    {
      quote:
        "Coming Soon...",
      //name: "Michael Johnson",
      //title: "Director of AlphaStream Technologies",
    },
    {
      quote:
        "Coming Soon...",
      //name: "Michael Johnson",
      //title: "Director of AlphaStream Technologies",
    },
  ];
  
  export const companies = [
    {
      id: 1,
      name: "Kinectic",
      img: "Kinetic Logo1.png",
      nameImg: "/cloudName.svg",
    },
    {
      id: 2,
      name: "Crimson Paint",
      img: "CP Logo.png",
      nameImg: "/appName.svg",
    },
    {
      id: 3,
      name: "Vyana Sports",
      img: "Vyana Sports Logo.png",
      nameImg: "/hostName.svg",
    },
    {
      id: 4,
      name: "Vyana Wealth",
      img: "Vyana Welth Logo.png",
      nameImg: "/streamName.svg",
    },
    {
      id: 5,
      name: "BiswaKarma",
      img: "BM Logo.png",
      nameImg: "/dockerName.svg",
    },
    {
      id: 6,
      name: "Pragati",
      img: "Pragati Logo.png",
      nameImg: "/dockerName.svg",
    },
    {
      id: 7,
      name: "Duroplast",
      img: "Duroplast Logo.png",
      nameImg: "/appName.svg",
    },
    {
      id: 8,
      name: "Balaji",
      img: "Nalaji Niryaat Logo.png",
      nameImg: "/appName.svg",
    },
    {
      id: 9,
      name: "T&I",
      img: "T&I Logo.png",
      nameImg: "/appName.svg",
    },
    {
      id: 10,
      name: "Wadbros",
      img: "Wadbros Logo.png",
      nameImg: "/appName.svg",
    },
    
  ];
  
  export const workExperience = [
    {
      id: 1,
      title: "Exhibition Design",
      desc: "Crafting immersive, engaging, and visually compelling spaces that communicate a story, brand, or concept to captivate audiences.",
      className: "md:col-span-2",
      thumbnail: "/exp1.svg",
    },
    {
      id: 2,
      title: "Brand Development",
      desc: "We are a purpose-driven creative agency that crafts impactful concept to empower brands with the blend of tradition and innovation.",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "/exp2.svg",
    },
    {
      id: 3,
      title: "Media Production",
      desc: "Creating scripts & storyboards, Supreme video production, Photography & Editing.",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "/exp3.svg",
    },
    {
      id: 4,
      title: "Interior Design",
      desc: "At CCO when we take on a project, we also take on the reponsibilty not just of aesthetics, but also the functionality.",
      className: "md:col-span-2",
      thumbnail: "/exp4.svg",
    },
  ];
  
  export const socialMedia = [
    {
      id: 1,
      img: "/Fb Logo.png",
      alt: "Facebook",
      link : "https://www.facebook.com/ccoriginskol",
    },
    {
      id: 2,
      img: "/insta.svg",
      alt: "Instagram",
      link : "https://www.instagram.com/ccoriginskol",
    },
    {
      id: 3,
      img: "/P Logo.png",
      alt: "Pinterest",
      link : "https://pin.it/76RP9rrte",
    },
  ];