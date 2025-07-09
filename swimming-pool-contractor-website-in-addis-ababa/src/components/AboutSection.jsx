// import React, { useEffect, useRef, useState } from "react";
// import { motion, useInView } from "framer-motion";
// import {
//   FaAward,
//   FaTools,
//   FaSmile,
//   FaWater,
//   FaLeaf,
//   FaUserTie,
//   FaSpa,
//   FaFish
// } from "react-icons/fa";

// // Use one of your images
// const aboutImage = "https://images.pexels.com/photos/261414/pexels-photo-261414.jpeg";

// const highlights = [
//   { icon: <FaAward className="text-cyan-600 text-4xl mb-2" />, label: "Years Experience", value: 10 },
//   { icon: <FaSmile className="text-cyan-600 text-4xl mb-2" />, label: "Happy Customers", value: 20 },
//   { icon: <FaUserTie className="text-cyan-600 text-4xl mb-2" />, label: "Qualified Engineers", value: 10 },
//   { icon: <FaTools className="text-cyan-600 text-4xl mb-2" />, label: "Completed Projects", value: 20 },
// ];

// const services = [
//   { icon: <FaWater className="text-cyan-600 text-2xl" />, text: "Swimming Pool Construction" },
//   { icon: <FaSpa className="text-cyan-600 text-2xl" />, text: "Jacuzzi Installation & Maintenance" },
//   { icon: <FaWater className="text-cyan-600 text-2xl" />, text: "Fountain Design & Installation" },
//   { icon: <FaFish className="text-cyan-600 text-2xl" />, text: "Custom Aquarium Setup & Accessories" },
//   { icon: <FaTools className="text-cyan-600 text-2xl" />, text: "Pool Renovation & Repairs" },
//   { icon: <FaLeaf className="text-cyan-600 text-2xl" />, text: "Eco-Friendly Water Features" },
// ];

// const team = [
//   {
//     name: "Eng. Samuel T.",
//     role: "Lead Engineer",
//     icon: <FaUserTie className="text-cyan-600 text-4xl mx-auto mb-2" />,
//   },
//   {
//     name: "Marta G.",
//     role: "Project Manager",
//     icon: <FaUserTie className="text-cyan-600 text-4xl mx-auto mb-2" />,
//   },
//   {
//     name: "Daniel K.",
//     role: "Aquatic Designer",
//     icon: <FaUserTie className="text-cyan-600 text-4xl mx-auto mb-2" />,
//   },
// ];

// const timeline = [
//   {
//     year: "2013",
//     title: "Founded",
//     desc: "Started with a vision to bring world-class aquatic design to Ethiopia.",
//   },
//   {
//     year: "2016",
//     title: "Expanded Services",
//     desc: "Added jacuzzi, fountain, and aquarium solutions to our portfolio.",
//   },
//   {
//     year: "2020",
//     title: "20+ Projects Completed",
//     desc: "Celebrated our 20th successful installation for homes and businesses.",
//   },
//   {
//     year: "Today",
//     title: "Leading the Industry",
//     desc: "Proud to be Ethiopia's go-to experts for luxury water features.",
//   },
// ];

// // Animation variants
// const fadeInUp = {
//   hidden: { opacity: 0, y: 60 },
//   visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
// };
// const stagger = {
//   visible: {
//     transition: {
//       staggerChildren: 0.2,
//     },
//   },
// };

// // Pure React animated counter, no framer-motion hooks
// const AnimatedCounter = ({ to, duration = 1200 }) => {
//   const [count, setCount] = useState(0);
//   const ref = useRef();
//   useEffect(() => {
//     let start = 0;
//     const end = parseInt(to);
//     if (start === end) {
//       setCount(end);
//       return;
//     }
//     let current = start;
//     const increment = end > start ? 1 : -1;
//     const stepTime = Math.abs(Math.floor(duration / (end - start)));
//     const timer = setInterval(() => {
//       current += increment;
//       setCount(current);
//       if (current === end) clearInterval(timer);
//     }, stepTime);
//     return () => clearInterval(timer);
//   }, [to, duration]);
//   return <span ref={ref}>{count}</span>;
// };

// const AboutSection = () => (
//   <section
//     id="about"
//     className="w-full bg-white py-24 px-2 md:px-0"
//   >
//     <div className="max-w-7xl mx-auto">
//       {/* Company Story with Image */}
//       {/* ...rest of the component... */}
//     </div>
//   </section>
// );

// export default AboutSection; 