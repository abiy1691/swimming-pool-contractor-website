"use client"
import { useState } from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"

export default function Services() {
  const [selectedService, setSelectedService] = useState(0)

  const services = [
    {
      id: "pool-construction",
      title: "Swimming Pool Construction",
      icon: "🏊‍♂️",
      image: "https://images.pexels.com/photos/261414/pexels-photo-261414.jpeg?auto=compress&cs=tinysrgb&w=800",
      description:
        "Transform your backyard into a luxury oasis with our custom swimming pool designs and professional construction services.",
      features: [
        "Custom Design & Planning",
        "Excavation & Site Preparation",
        "Premium Materials & Equipment",
        "Professional Installation",
        "Quality Testing & Commissioning",
        "Maintenance Training",
      ],
      process: [
        "Initial Consultation & Site Survey",
        "Custom Design Development",
        "Permit & Approval Process",
        "Construction & Installation",
        "Quality Testing & Handover",
      ],
      pricing: "Starting from 500,000 ETB",
    },
    {
      id: "jacuzzi-installation",
      title: "Jacuzzi Installation",
      icon: "🛁",
      image: "https://images.pexels.com/photos/7224672/pexels-photo-7224672.jpeg?auto=compress&cs=tinysrgb&w=800",
      description:
        "Experience ultimate relaxation with our luxury jacuzzi installations, featuring therapeutic benefits and premium comfort.",
      features: [
        "Therapeutic Jet Systems",
        "Temperature Control Technology",
        "Energy Efficient Heating",
        "Premium Filtration Systems",
        "LED Lighting Integration",
        "Smart Control Systems",
      ],
      process: [
        "Space Assessment & Planning",
        "Equipment Selection & Ordering",
        "Site Preparation & Utilities",
        "Professional Installation",
        "System Testing & Training",
      ],
      pricing: "Starting from 200,000 ETB",
    },
    {
      id: "fountain-design",
      title: "Fountain Design & Construction",
      icon: "⛲",
      image: "https://images.pexels.com/photos/541860/pexels-photo-541860.jpeg?auto=compress&cs=tinysrgb&w=800",
      description:
        "Add elegance and tranquility to any environment with our stunning decorative fountains, perfect for homes, hotels, and businesses.",
      features: [
        "Artistic Design Concepts",
        "Water Feature Engineering",
        "Pump & Filtration Systems",
        "Lighting Integration",
        "Natural Stone & Materials",
        "Automated Control Systems",
      ],
      process: [
        "Concept Design & Visualization",
        "Engineering & Technical Planning",
        "Material Selection & Sourcing",
        "Construction & Installation",
        "Final Testing & Commissioning",
      ],
      pricing: "Starting from 150,000 ETB",
    },
    {
      id: "aquarium-setup",
      title: "Aquarium Setup & Maintenance",
      icon: "🐠",
      image: "https://images.pexels.com/photos/10127369/pexels-photo-10127369.jpeg?auto=compress&cs=tinysrgb&w=800",
      description:
        "Bring the underwater world into your space with our custom aquarium installations and expert maintenance services.",
      features: [
        "Custom Tank Design & Build",
        "Advanced Filtration Systems",
        "Aquatic Life Selection",
        "Aquascaping & Decoration",
        "Water Quality Management",
        "Regular Maintenance Service",
      ],
      process: [
        "Aquarium Design & Planning",
        "Tank Construction & Setup",
        "System Installation & Testing",
        "Aquascaping & Fish Introduction",
        "Ongoing Maintenance Support",
      ],
      pricing: "Starting from 75,000 ETB",
    },
  ]

  const additionalServices = [
    {
      id: "maintenance",
      title: "Pool Maintenance Services",
      icon: "🧽",
      description:
        "Keep your pool in perfect condition with our comprehensive maintenance packages, ensuring crystal-clear water and optimal equipment performance.",
      features: [
        "Weekly Cleaning",
        "Chemical Balancing",
        "Equipment Servicing",
        "Seasonal Maintenance",
        "Algae Treatment",
        "Filter Cleaning",
      ],
    },
    {
      id: "repair",
      title: "Water Feature Repair",
      icon: "🔧",
      description:
        "Expert repair services for all types of water features and equipment. We diagnose and fix issues efficiently to minimize downtime.",
      features: [
        "Pump Repair & Replacement",
        "Leak Detection & Sealing",
        "Pipe & Plumbing Fixes",
        "Electrical System Troubleshooting",
        "Equipment Upgrades",
        "Structural Repairs",
      ],
    },
    {
      id: "consultation",
      title: "Consultation Services",
      icon: "💡",
      description:
        "Professional consultation for water feature planning and design. Our experts guide you through every step, from concept to completion.",
      features: [
        "Site Assessment & Feasibility",
        "Custom Design Consultation",
        "Technical Planning & Blueprints",
        "Budget & Cost Estimation",
        "Material Selection Guidance",
        "Project Management Advice",
      ],
    },
    {
      id: "equipment-supply",
      title: "Equipment Supply",
      icon: "⚙️",
      description:
        "High-quality equipment and materials for water feature construction and maintenance. We source durable and efficient products.",
      features: [
        "Pumps & Filtration Systems",
        "Heating & Cooling Solutions",
        "Lighting & Automation",
        "Water Treatment Chemicals",
        "Cleaning & Maintenance Tools",
        "Decorative Elements",
      ],
    },
  ]

  return (
    <div style={{ minHeight: "100vh", width: "100%", overflowX: "hidden" }}>
      <Navbar />

      {/* Hero Section */}
      <section
        style={{
          padding: window.innerWidth > 768 ? "120px 0 80px" : "100px 0 60px",
          background: "linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)",
          color: "white",
          textAlign: "center",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: window.innerWidth > 768 ? "0 40px" : "0 20px",
          }}
        >
          <h1
            style={{
              fontSize: window.innerWidth > 768 ? "3.5rem" : "2.5rem",
              fontWeight: "800",
              marginBottom: "20px",
              textShadow: "0 4px 8px rgba(0,0,0,0.3)",
            }}
          >
            Our Professional Services
          </h1>
          <p
            style={{
              fontSize: window.innerWidth > 768 ? "1.3rem" : "1.1rem",
              maxWidth: "800px",
              margin: "0 auto",
              lineHeight: "1.6",
              opacity: 0.9,
            }}
          >
            Comprehensive Water Feature Solutions - From Design to Installation and Maintenance
          </p>
        </div>
      </section>

      {/* Main Services Section */}
      <section
        style={{
          padding: window.innerWidth > 768 ? "100px 0" : "60px 0",
          background: "#ffffff",
        }}
      >
        <div
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
            padding: window.innerWidth > 768 ? "0 40px" : "0 20px",
          }}
        >
          {/* Service Navigation */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: window.innerWidth > 768 ? "60px" : "40px",
              flexWrap: "wrap",
              gap: "10px",
            }}
          >
            {services.map((service, index) => (
              <button
                key={service.id}
                onClick={() => setSelectedService(index)}
                style={{
                  padding: window.innerWidth > 768 ? "12px 24px" : "10px 20px",
                  borderRadius: "25px",
                  border: selectedService === index ? "2px solid #3b82f6" : "2px solid #e2e8f0",
                  backgroundColor: selectedService === index ? "#3b82f6" : "white",
                  color: selectedService === index ? "white" : "#64748b",
                  fontSize: window.innerWidth > 768 ? "1rem" : "0.9rem",
                  fontWeight: "600",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
                onMouseOver={(e) => {
                  if (selectedService !== index) {
                    e.target.style.borderColor = "#3b82f6"
                    e.target.style.color = "#3b82f6"
                  }
                }}
                onMouseOut={(e) => {
                  if (selectedService !== index) {
                    e.target.style.borderColor = "#e2e8f0"
                    e.target.style.color = "#64748b"
                  }
                }}
              >
                <span>{services[index].icon}</span>
                <span style={{ display: window.innerWidth > 480 ? "inline" : "none" }}>{service.title}</span>
              </button>
            ))}
          </div>

          {/* Selected Service Details */}
          <div
            id={services[selectedService].id} // Add ID for deep linking
            style={{
              display: "grid",
              gridTemplateColumns: window.innerWidth > 768 ? "1fr 1fr" : "1fr",
              gap: window.innerWidth > 768 ? "60px" : "40px",
              alignItems: "center",
            }}
          >
            {/* Service Image */}
            <div
              style={{
                borderRadius: "20px",
                overflow: "hidden",
                boxShadow: "0 20px 60px rgba(0,0,0,0.15)",
                aspectRatio: "4/3",
              }}
            >
              <img
                src={services[selectedService].image || "/placeholder.svg"}
                alt={services[selectedService].title}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </div>

            {/* Service Details */}
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "15px", marginBottom: "20px" }}>
                <span style={{ fontSize: "3rem" }}>{services[selectedService].icon}</span>
                <h2
                  style={{
                    fontSize: window.innerWidth > 768 ? "2.5rem" : "2rem",
                    fontWeight: "700",
                    color: "#1e293b",
                    margin: 0,
                  }}
                >
                  {services[selectedService].title}
                </h2>
              </div>

              <p
                style={{
                  fontSize: "1.1rem",
                  lineHeight: "1.7",
                  color: "#475569",
                  marginBottom: "30px",
                }}
              >
                {services[selectedService].description}
              </p>

              <div style={{ marginBottom: "30px" }}>
                <h3
                  style={{
                    fontSize: "1.3rem",
                    fontWeight: "700",
                    color: "#1e293b",
                    marginBottom: "15px",
                  }}
                >
                  What's Included:
                </h3>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: window.innerWidth > 768 ? "1fr 1fr" : "1fr",
                    gap: "10px",
                  }}
                >
                  {services[selectedService].features.map((feature, index) => (
                    <div
                      key={index}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        padding: "8px 0",
                      }}
                    >
                      <span style={{ color: "#10b981", fontSize: "1.2rem" }}>✓</span>
                      <span style={{ color: "#475569", fontSize: "0.95rem" }}>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ marginBottom: "30px" }}>
                <h3
                  style={{
                    fontSize: "1.3rem",
                    fontWeight: "700",
                    color: "#1e293b",
                    marginBottom: "15px",
                  }}
                >
                  Our Process:
                </h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  {services[selectedService].process.map((step, index) => (
                    <div
                      key={index}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "15px",
                        padding: "10px 0",
                      }}
                    >
                      <div
                        style={{
                          width: "30px",
                          height: "30px",
                          borderRadius: "50%",
                          backgroundColor: "#3b82f6",
                          color: "white",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "0.9rem",
                          fontWeight: "600",
                          flexShrink: 0,
                        }}
                      >
                        {index + 1}
                      </div>
                      <span style={{ color: "#475569", fontSize: "0.95rem" }}>{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div
                style={{
                  backgroundColor: "#f0f9ff",
                  padding: "20px",
                  borderRadius: "15px",
                  border: "1px solid #bae6fd",
                  marginBottom: "30px",
                }}
              >
                <h4
                  style={{
                    fontSize: "1.1rem",
                    fontWeight: "700",
                    color: "#1e293b",
                    marginBottom: "10px",
                  }}
                >
                  Investment Range:
                </h4>
                <p
                  style={{
                    fontSize: "1.2rem",
                    fontWeight: "600",
                    color: "#3b82f6",
                    margin: 0,
                  }}
                >
                  {services[selectedService].pricing}
                </p>
                <p
                  style={{
                    fontSize: "0.9rem",
                    color: "#64748b",
                    margin: "5px 0 0 0",
                  }}
                >
                  *Final pricing depends on size, complexity, and materials
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services Section */}
      <section
        style={{
          padding: window.innerWidth > 768 ? "100px 0" : "60px 0",
          background: "linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%)",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: window.innerWidth > 768 ? "0 40px" : "0 20px",
          }}
        >
          <div style={{ textAlign: "center", marginBottom: window.innerWidth > 768 ? "60px" : "40px" }}>
            <h2
              style={{
                fontSize: window.innerWidth > 768 ? "2.5rem" : "2rem",
                fontWeight: "800",
                color: "#1e293b",
                marginBottom: "20px",
              }}
            >
              Other Services We Offer
            </h2>
            <p
              style={{
                fontSize: "1.1rem",
                color: "#64748b",
                maxWidth: "600px",
                margin: "0 auto",
              }}
            >
              Beyond construction, we provide comprehensive support for all your water feature needs.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: window.innerWidth > 768 ? "repeat(2, 1fr)" : "1fr",
              gap: window.innerWidth > 768 ? "40px" : "20px",
            }}
          >
            {additionalServices.map((service, index) => (
              <div
                key={service.id}
                id={service.id} // Add ID for deep linking
                style={{
                  backgroundColor: "white",
                  padding: window.innerWidth > 768 ? "40px" : "30px",
                  borderRadius: "20px",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)"
                  e.currentTarget.style.boxShadow = "0 15px 40px rgba(59,130,246,0.15)"
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "translateY(0)"
                  e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.08)"
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "20px", marginBottom: "20px" }}>
                  <span style={{ fontSize: "3rem" }}>{service.icon}</span>
                  <h3
                    style={{
                      fontSize: window.innerWidth > 768 ? "1.8rem" : "1.5rem",
                      fontWeight: "700",
                      color: "#1e293b",
                      margin: 0,
                    }}
                  >
                    {service.title}
                  </h3>
                </div>
                <p
                  style={{
                    fontSize: "1rem",
                    lineHeight: "1.7",
                    color: "#475569",
                    marginBottom: "20px",
                  }}
                >
                  {service.description}
                </p>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        marginBottom: "8px",
                        fontSize: "0.95rem",
                        color: "#475569",
                      }}
                    >
                      <span style={{ color: "#10b981", fontSize: "1.2rem" }}>✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        style={{
          padding: window.innerWidth > 768 ? "100px 0" : "60px 0",
          background: "linear-gradient(135deg, #3b82f6 0%, #1e40af 100%)",
          color: "white",
          textAlign: "center",
        }}
      >
        <div
          style={{
            maxWidth: "800px",
            margin: "0 auto",
            padding: window.innerWidth > 768 ? "0 40px" : "0 20px",
          }}
        >
          <h2
            style={{
              fontSize: window.innerWidth > 768 ? "2.5rem" : "2rem",
              fontWeight: "800",
              marginBottom: "20px",
            }}
          >
            Ready to Get Started?
          </h2>
          <p
            style={{
              fontSize: "1.2rem",
              marginBottom: "40px",
              opacity: 0.9,
              lineHeight: "1.6",
            }}
          >
            Contact us today for a free consultation and let's discuss your project needs.
          </p>
          <div style={{ display: "flex", gap: "20px", justifyContent: "center", flexWrap: "wrap" }}>
            <button
              onClick={() => (window.location.href = "/contact")}
              style={{
                backgroundColor: "white",
                color: "#3b82f6",
                padding: "15px 35px",
                borderRadius: "50px",
                border: "none",
                fontSize: "1rem",
                fontWeight: "700",
                cursor: "pointer",
                transition: "all 0.3s ease",
                boxShadow: "0 8px 25px rgba(0,0,0,0.2)",
              }}
              onMouseOver={(e) => {
                e.target.style.transform = "translateY(-3px)"
                e.target.style.boxShadow = "0 12px 35px rgba(0,0,0,0.3)"
              }}
              onMouseOut={(e) => {
                e.target.style.transform = "translateY(0)"
                e.target.style.boxShadow = "0 8px 25px rgba(0,0,0,0.2)"
              }}
            >
              Get Free Quote
            </button>
            <button
              onClick={() => (window.location.href = "/projects")}
              style={{
                backgroundColor: "transparent",
                color: "white",
                padding: "15px 35px",
                borderRadius: "50px",
                border: "2px solid white",
                fontSize: "1rem",
                fontWeight: "700",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = "white"
                e.target.style.color = "#3b82f6"
                e.target.style.transform = "translateY(-3px)"
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = "transparent"
                e.target.style.color = "white"
                e.target.style.transform = "translateY(0)"
              }}
            >
              View Our Work
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
