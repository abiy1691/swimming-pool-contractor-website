import React from "react";

const services = [
  {
    label: "Swimming Pool",
    image: "https://images.pexels.com/photos/2227774/pexels-photo-2227774.jpeg",
    description: "Transform your space with a custom swimming pool, expertly crafted for beauty, durability, and endless enjoyment."
  },
  {
    label: "Jacuzzi",
    image: "https://images.pexels.com/photos/8845113/pexels-photo-8845113.jpeg",
    description: "Relax in style with our premium jacuzzi installations, designed for ultimate comfort and luxury."
  },
  {
    label: "Fountain",
    image: "https://images.pexels.com/photos/541860/pexels-photo-541860.jpeg",
    description: "Add elegance to your property with our stunning fountain designs, perfect for homes, hotels, and businesses."
  },
  {
    label: "Aquarium",
    image: "https://images.pexels.com/photos/2446439/pexels-photo-2446439.jpeg",
    description: "Bring aquatic beauty indoors with our custom aquarium setups, featuring vibrant designs and expert maintenance."
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="w-full py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-blue-700">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <div
              key={service.label}
              className="group relative rounded-2xl overflow-hidden shadow-lg bg-white cursor-pointer transform transition duration-300 hover:scale-105 hover:shadow-2xl"
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-all duration-500"
                style={{
                  backgroundImage: `url(${service.image})`,
                  filter: "brightness(0.95)"
                }}
              />
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-500" />
              
              {/* Card Content */}
              <div className="relative flex flex-col h-full justify-between p-6 z-10">
                {/* Label at the top */}
                <div className="text-lg font-bold text-white mb-4 drop-shadow-lg tracking-wide">
                  {service.label}
                </div>
                {/* Details, only visible on hover */}
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-white text-base font-medium mb-8">
                  {service.description}
                </div>
                {/* Read More Button */}
                <button
                  className="mt-auto w-full py-2 px-4 rounded-lg bg-blue-600 text-white font-semibold shadow-md transition-all duration-300
                    hover:bg-blue-700 hover:scale-105 active:bg-blue-800 active:scale-95
                    focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
                >
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
        {/* Discover More Button */}
        <div className="flex justify-center mt-12">
          <button
            className="py-3 px-8 rounded-full bg-gradient-to-r from-blue-500 to-blue-700 text-white font-bold text-lg shadow-lg transition-all duration-300
              hover:from-blue-600 hover:to-blue-800 hover:scale-105 active:scale-95
              focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
          >
            Discover More
          </button>
        </div>
      </div>
    </section>
  );
} 