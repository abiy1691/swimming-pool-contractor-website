"use client"
import { useState, useEffect } from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"

const projectCategories = [
  { name: "All", filter: "all" },
  { name: "Swimming Pools", filter: "pool" },
  { name: "Jacuzzis", filter: "jacuzzi" },
  { name: "Fountains", filter: "fountain" },
  { name: "Aquariums", filter: "aquarium" },
  { name: "Residential", filter: "residential" },
  { name: "Commercial", filter: "commercial" },
]

const allProjects = [
  {
    id: 1,
    image: "https://images.pexels.com/photos/261414/pexels-photo-261414.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=800",
    title: "Luxury Villa Pool",
    description:
      "A stunning infinity pool designed for a private villa, featuring integrated lighting and a waterfall.",
    category: ["pool", "residential"],
    location: "Addis Ababa",
    year: 2023,
  },
  {
    id: 2,
    image: "https://images.pexels.com/photos/7224672/pexels-photo-7224672.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=800",
    title: "Hotel Rooftop Jacuzzi",
    description: "Custom-built rooftop jacuzzi with panoramic city views for a boutique hotel.",
    category: ["jacuzzi", "commercial"],
    location: "Bishoftu",
    year: 2022,
  },
  {
    id: 3,
    image: "https://images.pexels.com/photos/541860/pexels-photo-541860.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=800",
    title: "Grand Plaza Fountain",
    description: "An elaborate multi-tiered fountain with dynamic water jets and LED illumination for a public plaza.",
    category: ["fountain", "commercial"],
    location: "Hawassa",
    year: 2023,
  },
  {
    id: 4,
    image: "https://images.pexels.com/photos/10127369/pexels-photo-10127369.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=800",
    title: "Office Lobby Aquarium",
    description: "A large custom-built saltwater aquarium serving as a vibrant centerpiece in a corporate lobby.",
    category: ["aquarium", "commercial"],
    location: "Adama",
    year: 2021,
  },
  {
    id: 5,
    image: "https://images.pexels.com/photos/1579053/pexels-photo-1579053.jpeg?auto=compress&cs=tinysrgb&w=800",
    title: "Backyard Oasis Pool",
    description: "Compact and elegant swimming pool for a modern residential backyard, perfect for relaxation.",
    category: ["pool", "residential"],
    location: "Gondar",
    year: 2022,
  },
  {
    id: 6,
    image: "https://images.pexels.com/photos/1001965/pexels-photo-1001965.jpeg?auto=compress&cs=tinysrgb&w=800",
    title: "Spa Center Jacuzzi",
    description: "Multiple large jacuzzis installed in a luxury spa and wellness center, designed for high traffic.",
    category: ["jacuzzi", "commercial"],
    location: "Dire Dawa",
    year: 2023,
  },
  {
    id: 7,
    image: "https://images.pexels.com/photos/1001965/pexels-photo-1001965.jpeg?auto=compress&cs=tinysrgb&w=800",
    title: "Garden Water Feature",
    description: "A serene and natural-looking fountain integrated into a lush garden landscape.",
    category: ["fountain", "residential"],
    location: "Bahir Dar",
    year: 2021,
  },
  {
    id: 8,
    image: "https://images.pexels.com/photos/1001965/pexels-photo-1001965.jpeg?auto=compress&cs=tinysrgb&w=800",
    title: "Restaurant Feature Aquarium",
    description: "A unique cylindrical aquarium enhancing the dining experience in a high-end restaurant.",
    category: ["aquarium", "commercial"],
    location: "Mekelle",
    year: 2022,
  },
]

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [filteredProjects, setFilteredProjects] = useState(allProjects)

  useEffect(() => {
    if (activeCategory === "all") {
      setFilteredProjects(allProjects)
    } else {
      setFilteredProjects(allProjects.filter((project) => project.category.includes(activeCategory)))
    }
  }, [activeCategory])

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
            Our Completed Projects
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
            Explore our portfolio of stunning swimming pools, luxurious jacuzzis, elegant fountains, and vibrant
            aquariums.
          </p>
        </div>
      </section>

      {/* Project Categories */}
      <section
        style={{
          padding: window.innerWidth > 768 ? "60px 0" : "40px 0",
          background: "#f8fafc",
        }}
      >
        <div
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
            padding: window.innerWidth > 768 ? "0 40px" : "0 20px",
            textAlign: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "10px",
              marginBottom: window.innerWidth > 768 ? "40px" : "20px",
            }}
          >
            {projectCategories.map((category) => (
              <button
                key={category.filter}
                onClick={() => setActiveCategory(category.filter)}
                style={{
                  padding: window.innerWidth > 768 ? "10px 20px" : "8px 16px",
                  borderRadius: "25px",
                  border: `2px solid ${activeCategory === category.filter ? "#3b82f6" : "#cbd5e1"}`,
                  backgroundColor: activeCategory === category.filter ? "#3b82f6" : "white",
                  color: activeCategory === category.filter ? "white" : "#475569",
                  fontSize: window.innerWidth > 768 ? "0.9rem" : "0.8rem",
                  fontWeight: "600",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  boxShadow: activeCategory === category.filter ? "0 4px 15px rgba(59,130,246,0.3)" : "none",
                }}
                onMouseOver={(e) => {
                  if (activeCategory !== category.filter) {
                    e.target.style.borderColor = "#3b82f6"
                    e.target.style.color = "#3b82f6"
                  }
                }}
                onMouseOut={(e) => {
                  if (activeCategory !== category.filter) {
                    e.target.style.borderColor = "#cbd5e1"
                    e.target.style.color = "#475569"
                  }
                }}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section
        style={{
          padding: window.innerWidth > 768 ? "80px 0" : "40px 0",
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
          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                window.innerWidth > 1024 ? "repeat(3, 1fr)" : window.innerWidth > 768 ? "repeat(2, 1fr)" : "1fr",
              gap: window.innerWidth > 768 ? "40px" : "20px",
            }}
          >
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                style={{
                  backgroundColor: "#f8fafc",
                  borderRadius: "20px",
                  overflow: "hidden",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "translateY(-10px) scale(1.02)"
                  e.currentTarget.style.boxShadow = "0 20px 40px rgba(59,130,246,0.2)"
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "translateY(0) scale(1)"
                  e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.1)"
                }}
              >
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  style={{
                    width: "100%",
                    height: window.innerWidth > 768 ? "280px" : "200px",
                    objectFit: "cover",
                    borderBottom: "1px solid #e2e8f0",
                  }}
                />
                <div style={{ padding: window.innerWidth > 768 ? "30px" : "20px" }}>
                  <h3
                    style={{
                      fontSize: window.innerWidth > 768 ? "1.5rem" : "1.3rem",
                      fontWeight: "700",
                      color: "#1e293b",
                      marginBottom: "10px",
                    }}
                  >
                    {project.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.95rem",
                      lineHeight: "1.6",
                      color: "#475569",
                      marginBottom: "15px",
                    }}
                  >
                    {project.description}
                  </p>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      fontSize: "0.85rem",
                      color: "#64748b",
                    }}
                  >
                    <span>📍 {project.location}</span>
                    <span>🗓️ {project.year}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {filteredProjects.length === 0 && (
            <p style={{ textAlign: "center", fontSize: "1.2rem", color: "#64748b", marginTop: "40px" }}>
              No projects found for this category.
            </p>
          )}
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
            Ready to Start Your Dream Project?
          </h2>
          <p
            style={{
              fontSize: "1.2rem",
              marginBottom: "40px",
              opacity: 0.9,
              lineHeight: "1.6",
            }}
          >
            Let's work together to create the perfect water feature for your space. Contact us today for a free
            consultation and quote.
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
              onClick={() => (window.location.href = "/about")}
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
              Learn More About Us
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
