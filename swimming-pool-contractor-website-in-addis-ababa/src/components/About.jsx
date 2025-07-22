"use client"
import { useState, useEffect } from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"

export default function About() {
  const [counters, setCounters] = useState({
    customers: 0,
    experience: 0,
    projects: 0,
    engineers: 0,
  })

  const [hasAnimated, setHasAnimated] = useState(false)

  // Counter animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            animateCounters()
            setHasAnimated(true)
          }
        })
      },
      { threshold: 0.3 },
    )

    const statsSection = document.getElementById("about-stats")
    if (statsSection) {
      observer.observe(statsSection)
    }

    return () => {
      observer.disconnect()
    }
  }, [hasAnimated])

  const animateCounters = () => {
    const targets = { customers: 50, experience: 8, projects: 35, engineers: 15 }
    const duration = 2000
    const steps = 60
    const stepTime = duration / steps

    Object.keys(targets).forEach((key) => {
      let current = 0
      const increment = targets[key] / steps
      const timer = setInterval(() => {
        current += increment
        if (current >= targets[key]) {
          current = targets[key]
          clearInterval(timer)
        }
        setCounters((prev) => ({ ...prev, [key]: Math.floor(current) }))
      }, stepTime)
    })
  }

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
            About Surax Swimming Pool Construction
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
            Ethiopia's Premier Water Feature Construction Company - Building Dreams Since 2017
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section
        style={{
          padding: window.innerWidth > 768 ? "100px 0" : "60px 0",
          background: "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: window.innerWidth > 768 ? "0 40px" : "0 20px",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: window.innerWidth > 768 ? "1fr 1fr" : "1fr",
              gap: window.innerWidth > 768 ? "80px" : "40px",
              alignItems: "center",
            }}
          >
            <div>
              <h2
                style={{
                  fontSize: window.innerWidth > 768 ? "2.5rem" : "2rem",
                  fontWeight: "700",
                  color: "#1e293b",
                  marginBottom: "30px",
                }}
              >
                Our Story
              </h2>
              <p
                style={{
                  fontSize: "1.1rem",
                  lineHeight: "1.8",
                  color: "#475569",
                  marginBottom: "25px",
                }}
              >
                Founded in 2017, Surax Swimming Pool Construction began with a simple vision: to bring world-class water
                feature construction to Ethiopia. What started as a small team of passionate engineers has grown into
                the country's most trusted name in swimming pool, jacuzzi, fountain, and aquarium construction.
              </p>
              <p
                style={{
                  fontSize: "1.1rem",
                  lineHeight: "1.8",
                  color: "#475569",
                  marginBottom: "25px",
                }}
              >
                Our journey has been marked by continuous innovation, unwavering commitment to quality, and a deep
                understanding of our clients' unique needs. From residential pools to commercial water features, we've
                transformed countless spaces across Ethiopia.
              </p>
              <p
                style={{
                  fontSize: "1.1rem",
                  lineHeight: "1.8",
                  color: "#475569",
                }}
              >
                Today, we stand proud as Ethiopia's leading water feature construction company, with a portfolio that
                spans luxury villas, hotels, restaurants, and commercial complexes. Our success is built on the
                foundation of exceptional craftsmanship, innovative design, and unmatched customer service.
              </p>
            </div>
            <div
              style={{
                position: "relative",
                borderRadius: "20px",
                overflow: "hidden",
                boxShadow: "0 20px 60px rgba(0,0,0,0.15)",
                aspectRatio: "4/3",
              }}
            >
              <img
                src="https://images.pexels.com/photos/261414/pexels-photo-261414.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Our Story"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section
        style={{
          padding: window.innerWidth > 768 ? "100px 0" : "60px 0",
          background: "#ffffff",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: window.innerWidth > 768 ? "0 40px" : "0 20px",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: window.innerWidth > 768 ? "1fr 1fr" : "1fr",
              gap: window.innerWidth > 768 ? "60px" : "40px",
            }}
          >
            {/* Mission */}
            <div
              style={{
                backgroundColor: "#f8fafc",
                padding: window.innerWidth > 768 ? "50px" : "30px",
                borderRadius: "20px",
                border: "1px solid #e2e8f0",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontSize: "4rem",
                  marginBottom: "20px",
                }}
              >
                🎯
              </div>
              <h3
                style={{
                  fontSize: "1.8rem",
                  fontWeight: "700",
                  color: "#1e293b",
                  marginBottom: "20px",
                }}
              >
                Our Mission
              </h3>
              <p
                style={{
                  fontSize: "1.1rem",
                  lineHeight: "1.7",
                  color: "#475569",
                }}
              >
                To transform spaces and enrich lives through exceptional water feature construction, delivering
                innovative designs, superior craftsmanship, and unparalleled customer service that exceeds expectations
                and creates lasting value for our clients across Ethiopia.
              </p>
            </div>

            {/* Vision */}
            <div
              style={{
                backgroundColor: "#f0f9ff",
                padding: window.innerWidth > 768 ? "50px" : "30px",
                borderRadius: "20px",
                border: "1px solid #bae6fd",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontSize: "4rem",
                  marginBottom: "20px",
                }}
              >
                🌟
              </div>
              <h3
                style={{
                  fontSize: "1.8rem",
                  fontWeight: "700",
                  color: "#1e293b",
                  marginBottom: "20px",
                }}
              >
                Our Vision
              </h3>
              <p
                style={{
                  fontSize: "1.1rem",
                  lineHeight: "1.7",
                  color: "#475569",
                }}
              >
                To be recognized as East Africa's premier water feature construction company, setting industry standards
                for quality, innovation, and sustainability while expanding our reach to serve clients across the region
                with world-class aquatic solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
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
          <div style={{ textAlign: "center", marginBottom: window.innerWidth > 768 ? "80px" : "50px" }}>
            <h2
              style={{
                fontSize: window.innerWidth > 768 ? "2.5rem" : "2rem",
                fontWeight: "800",
                color: "#1e293b",
                marginBottom: "20px",
              }}
            >
              Our Core Values
            </h2>
            <p
              style={{
                fontSize: "1.2rem",
                color: "#64748b",
                maxWidth: "600px",
                margin: "0 auto",
              }}
            >
              The principles that guide everything we do
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                window.innerWidth > 1024 ? "repeat(4, 1fr)" : window.innerWidth > 768 ? "repeat(2, 1fr)" : "1fr",
              gap: window.innerWidth > 768 ? "40px" : "30px",
            }}
          >
            {[
              {
                icon: "🏆",
                title: "Excellence",
                description:
                  "We strive for perfection in every project, ensuring the highest quality standards in materials, craftsmanship, and service delivery.",
              },
              {
                icon: "🤝",
                title: "Integrity",
                description:
                  "We conduct business with honesty, transparency, and ethical practices, building trust through reliable and consistent performance.",
              },
              {
                icon: "💡",
                title: "Innovation",
                description:
                  "We embrace cutting-edge technologies and creative solutions to deliver unique, modern water features that exceed expectations.",
              },
              {
                icon: "🌱",
                title: "Sustainability",
                description:
                  "We prioritize environmentally responsible practices, using eco-friendly materials and energy-efficient systems in our constructions.",
              },
            ].map((value, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: "white",
                  padding: window.innerWidth > 768 ? "40px 30px" : "30px 20px",
                  borderRadius: "20px",
                  textAlign: "center",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "translateY(-10px)"
                  e.currentTarget.style.boxShadow = "0 20px 40px rgba(59,130,246,0.2)"
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "translateY(0)"
                  e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.1)"
                }}
              >
                <div style={{ fontSize: "3rem", marginBottom: "20px" }}>{value.icon}</div>
                <h3
                  style={{
                    fontSize: "1.3rem",
                    fontWeight: "700",
                    color: "#1e293b",
                    marginBottom: "15px",
                  }}
                >
                  {value.title}
                </h3>
                <p
                  style={{
                    fontSize: "0.95rem",
                    lineHeight: "1.6",
                    color: "#64748b",
                  }}
                >
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section
        id="about-stats"
        style={{
          padding: window.innerWidth > 768 ? "100px 0" : "60px 0",
          background: "linear-gradient(135deg, #1e293b 0%, #334155 100%)",
          color: "white",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: window.innerWidth > 768 ? "0 40px" : "0 20px",
          }}
        >
          <div style={{ textAlign: "center", marginBottom: window.innerWidth > 768 ? "80px" : "50px" }}>
            <h2
              style={{
                fontSize: window.innerWidth > 768 ? "2.5rem" : "2rem",
                fontWeight: "800",
                marginBottom: "20px",
              }}
            >
              Our Achievements
            </h2>
            <p
              style={{
                fontSize: "1.2rem",
                opacity: 0.9,
                maxWidth: "600px",
                margin: "0 auto",
              }}
            >
              Numbers that reflect our commitment to excellence
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: window.innerWidth > 768 ? "repeat(4, 1fr)" : "repeat(2, 1fr)",
              gap: window.innerWidth > 768 ? "40px" : "30px",
            }}
          >
            {[
              {
                icon: "😊",
                number: counters.customers,
                suffix: "+",
                title: "Happy Customers",
                description: "Satisfied clients across Ethiopia",
              },
              {
                icon: "📅",
                number: counters.experience,
                suffix: "+",
                title: "Years of Experience",
                description: "Professional expertise in water features",
              },
              {
                icon: "🏗️",
                number: counters.projects,
                suffix: "+",
                title: "Completed Projects",
                description: "Successfully delivered installations",
              },
              {
                icon: "👷",
                number: counters.engineers,
                suffix: "+",
                title: "Expert Team Members",
                description: "Qualified professionals",
              },
            ].map((stat, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: "rgba(255,255,255,0.1)",
                  padding: window.innerWidth > 768 ? "40px 30px" : "30px 20px",
                  borderRadius: "20px",
                  textAlign: "center",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255,255,255,0.2)",
                }}
              >
                <div style={{ fontSize: window.innerWidth > 768 ? "3rem" : "2.5rem", marginBottom: "20px" }}>
                  {stat.icon}
                </div>
                <div
                  style={{
                    fontSize: window.innerWidth > 768 ? "2.5rem" : "2rem",
                    fontWeight: "800",
                    color: "#60a5fa",
                    marginBottom: "10px",
                  }}
                >
                  {stat.number}
                  {stat.suffix}
                </div>
                <h3
                  style={{
                    fontSize: window.innerWidth > 768 ? "1.2rem" : "1rem",
                    fontWeight: "700",
                    marginBottom: "10px",
                  }}
                >
                  {stat.title}
                </h3>
                <p
                  style={{
                    fontSize: window.innerWidth > 768 ? "0.9rem" : "0.8rem",
                    opacity: 0.8,
                    lineHeight: "1.5",
                  }}
                >
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section
        style={{
          padding: window.innerWidth > 768 ? "100px 0" : "60px 0",
          background: "#ffffff",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: window.innerWidth > 768 ? "0 40px" : "0 20px",
          }}
        >
          <div style={{ textAlign: "center", marginBottom: window.innerWidth > 768 ? "80px" : "50px" }}>
            <h2
              style={{
                fontSize: window.innerWidth > 768 ? "2.5rem" : "2rem",
                fontWeight: "800",
                color: "#1e293b",
                marginBottom: "20px",
              }}
            >
              Meet Our Expert Team
            </h2>
            <p
              style={{
                fontSize: "1.2rem",
                color: "#64748b",
                maxWidth: "600px",
                margin: "0 auto",
              }}
            >
              The skilled professionals behind every successful project
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                window.innerWidth > 1024 ? "repeat(3, 1fr)" : window.innerWidth > 768 ? "repeat(2, 1fr)" : "1fr",
              gap: window.innerWidth > 768 ? "40px" : "30px",
            }}
          >
            {[
              {
                name: "Abiy Girma",
                role: "Founder & CEO",
                image: "/placeholder.svg?height=300&width=300",
                description:
                  "Visionary leader with 8+ years of experience in water feature construction and business development.",
              },
              {
                name: "Engineer Dawit",
                role: "Lead Construction Engineer",
                image: "/placeholder.svg?height=300&width=300",
                description:
                  "Expert in structural engineering and project management with extensive experience in complex installations.",
              },
              {
                name: "Designer Sarah",
                role: "Creative Design Director",
                image: "/placeholder.svg?height=300&width=300",
                description:
                  "Award-winning designer specializing in innovative water feature concepts and aesthetic excellence.",
              },
            ].map((member, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: "#f8fafc",
                  borderRadius: "20px",
                  overflow: "hidden",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "translateY(-10px)"
                  e.currentTarget.style.boxShadow = "0 20px 40px rgba(59,130,246,0.2)"
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "translateY(0)"
                  e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.1)"
                }}
              >
                <div
                  style={{
                    width: "100%",
                    height: "300px",
                    backgroundColor: "#3b82f6",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "4rem",
                    color: "white",
                  }}
                >
                  👤
                </div>
                <div style={{ padding: window.innerWidth > 768 ? "30px" : "20px", textAlign: "center" }}>
                  <h3
                    style={{
                      fontSize: "1.3rem",
                      fontWeight: "700",
                      color: "#1e293b",
                      marginBottom: "10px",
                    }}
                  >
                    {member.name}
                  </h3>
                  <p
                    style={{
                      fontSize: "1rem",
                      color: "#3b82f6",
                      fontWeight: "600",
                      marginBottom: "15px",
                    }}
                  >
                    {member.role}
                  </p>
                  <p
                    style={{
                      fontSize: "0.9rem",
                      lineHeight: "1.6",
                      color: "#64748b",
                    }}
                  >
                    {member.description}
                  </p>
                </div>
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
