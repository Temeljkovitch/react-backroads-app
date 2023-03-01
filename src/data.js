import img1 from "./images/tour-1.jpeg";
import img2 from "./images/tour-2.jpeg";
import img3 from "./images/tour-3.jpeg";
import img4 from "./images/tour-4.jpeg";
// import img5 from "./images/tour-5.jpeg";
// import img6 from "./images/tour-6.jpeg";

export const pageLinks = [
  { id: 1, href: "#home", text: "home" },
  { id: 2, href: "#about", text: "about" },
  { id: 3, href: "#services", text: "services" },
  { id: 4, href: "#tours", text: "tours" },
];

export const socialLinks = [
  { id: 1, href: "https://www.facebook.com", icon: "facebook" },
  { id: 2, href: "https://www.twitter.com", icon: "twitter" },
  { id: 3, href: "https://www.squarespace.com", icon: "squarespace" },
];

export const serviceLinks = [
  {
    id: 1,
    icon: "fas fa-wallet fa-fw",
    title: "saving money",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic, officia?",
  },
  {
    id: 2,
    icon: "fas fa-tree fa-fw",
    title: "endless hiking",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic, officia?",
  },
  {
    id: 3,
    icon: "fas fa-socks fa-fw",
    title: "amazing confort",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic, officia?",
  },
];

export const toursLink = [
  {
    id: 1,
    img: img1,
    date: "august 26th, 2020",
    title: "tibet adventure",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    icon: "fas fa-map",
    country: "China",
    days: 6,
    price: 2100,
  },
  {
    id: 2,
    img: img2,
    date: "october 1th, 2020",
    title: "best of java",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    icon: "fas fa-map",
    country: "Indonesia",
    days: 11,
    price: 1400,
  },
  {
    id: 3,
    img: img3,
    date: "september 15th, 2020",
    title: "explore hong kong",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    icon: "fas fa-map",
    country: "Hong Kong",
    days: 8,
    price: 5000,
  },
  {
    id: 4,
    img: img4,
    date: "december 5th, 2019",
    title: "kenya highlights",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    icon: "fas fa-map",
    country: "Kenya",
    days: 20,
    price: 3300,
  },
];

