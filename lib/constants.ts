import { title } from "process";

type Plan = {
  id: number;
  plan: string;
  desc?: string;
  price?: number;
  included: string[];
  notIncluded?: string[];
};

export const logos = [
    {
        id: 1,
       src: "/acme-corp-logo.svg",
       alt:"Acme",
    },{
                id: 2,
        src: "/apex-logo.svg",
       alt:"Apex",

    },
    {
                id: 3,
        src: "/celestial-logo.svg",
       alt:"Celestial",

    },
    {
                id: 4,
        src: "/echo-valley-logo.svg",
       alt:"Acme",
    },{
        id: 5,
        src: "outside-logo.svg",
        alt: "Outside",
    },
    {
        id: 6,
        src: "pulse-logo.svg",
        alt: "Pulse",
    },
    {
        id: 7,
        src: "quantum-logo.svg",
        alt: "Quantum",
    },
 
   
]

export const Plans:Plan[] = [
    {
        id: 1,
        plan: "free plan",
        desc:"Free for everyone",
        included:[
            "Task Management",

"Data Encryption",

"Deadline Alerts",


        ],
        notIncluded:[
            "Collaboration Tools",

"Task Management",

"Custom Workflows",

"Real-Time Sync",
        ]
    },

    {
         
        id: 2,
        plan: "Pro plan",
        price: 12,
        included:[
            "Task Management",

"Data Encryption",

"Deadline Alerts",

"Collaboration Tools",

        ],
        notIncluded:[

"Task Management",

"Custom Workflows",

"Real-Time Sync",
        ]
    },
     {
        id: 3,
        plan: "Advanced Plan",
        price: 19,  
        included:[
            "Task Management",

"Data Encryption",

"Deadline Alerts",

"Collaboration Tools",

"Task Management",

"Custom Workflows",

"Real-Time Sync",

        ],
      
    },
    
]


export const Links = [
    {
        id: 1,
        title: "Home",
        link: "#"
    },  
    {
        id: 2,
        title: "About",
        link: "#about"

    },
    {
        id: 3,
        title:"pricing",
        link: "#pricing"

    },
    {
        id: 4,
        title: "get started",
        link: "#getstarted"

    },
    {
        id: 5,
          title: "FAQ's",
        link: "#faqs"

    }
]

export const Faq = [
    {
 id: 1,
 title: "What is Spherical?",
 ans: "Spherical is a cloud-based platform that offers a suite of software as a service (SaaS) solutions designed to streamline business operations, enhance collaboration, and drive productivity."
    },
    {
        id: 2,
        title: "What services does Shperical offer?",
        ans: "Shperical is a cloud-based platform that offers a suite of software as a service (SaaS) solutions designed to streamline business operations, enhance collaboration, and drive productivity."
    },
    {
        id: 3,
        title: "What are the core features of Spherical?",
        ans: "Spherical is a cloud-based platform that offers a suite of software as a service (SaaS) solutions designed to streamline business operations, enhance collaboration, and drive productivity."
    },
    {
        id: 4,
        title: "How can Spherical help my business?",
        ans: "Spherical is a cloud-based platform that offers a suite of software as a service (SaaS) solutions designed to streamline business operations, enhance collaboration, and drive productivity."
    
    },
    {
        id: 5,
        title: "Is Spherical suitable for businesses of all sizes?",
                ans: "Spherical is a cloud-based platform that offers a suite of software as a service (SaaS) solutions designed to streamline business operations, enhance collaboration, and drive productivity."

    }
]