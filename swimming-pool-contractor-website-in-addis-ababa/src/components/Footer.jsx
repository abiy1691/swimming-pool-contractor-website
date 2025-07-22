"use client"
import { Phone, Waves } from "lucide-react"
import { FaLinkedin, FaTelegram, FaPhone } from "react-icons/fa6"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer
      style={{
        background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
        color: "white",
        position: "relative",
        overflow: "hidden",
        width: "100%",
        boxSizing: "border-box",
      }}
    >
      {/* Background Water Effect */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background:
            "radial-gradient(circle at 20% 80%, rgba(59,130,246,0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(59,130,246,0.1) 0%, transparent 50%)",
        }}
      />

      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          position: "relative",
          zIndex: 2,
          width: "100%",
          boxSizing: "border-box",
          padding: "80px 40px 0",
        }}
      >
        {/* Main Footer Content */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "50px",
            marginBottom: "50px",
          }}
        >
          {/* Company Info */}
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                marginBottom: "25px",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "scale(1.05)"
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "scale(1)"
              }}
            >
              <div
                style={{
                  transition: "all 0.3s ease",
                  position: "relative",
                  overflow: "hidden",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "rotate(360deg) scale(1.2)"
                  e.currentTarget.style.filter = "drop-shadow(0 0 20px rgba(59,130,246,0.8))"
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "rotate(0deg) scale(1)"
                  e.currentTarget.style.filter = "none"
                }}
              >
                <Waves style={{ width: "32px", height: "32px", color: "#3b82f6" }} />
              </div>
              <h2
                style={{
                  fontSize: "24px",
                  fontWeight: "bold",
                  transition: "all 0.3s ease",
                }}
                onMouseOver={(e) => {
                  e.target.style.textShadow = "0 0 20px rgba(59,130,246,0.6)"
                  e.target.style.transform = "scale(1.05)"
                }}
                onMouseOut={(e) => {
                  e.target.style.textShadow = "none"
                  e.target.style.transform = "scale(1)"
                }}
              >
                <span style={{ color: "#ffffff" }}>SUR</span>
                <span style={{ color: "#3b82f6" }}>AX</span>
              </h2>
            </div>
            <p
              style={{
                fontSize: "1rem",
                lineHeight: "1.6",
                color: "rgba(203,213,225,0.8)",
                marginBottom: "25px",
                maxWidth: "300px",
              }}
            >
              Leading swimming pool, jacuzzi, fountain, and aquarium construction company in Ethiopia. Transforming
              spaces with professional water feature installations since 2017.
            </p>

            {/* Social Media Links */}
            <div style={{ display: "flex", gap: "15px" }}>
              <a
                href="https://www.linkedin.com/in/abiy-girma-6409401b5/"
                title="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  backgroundColor: "#0077b5",
                  padding: "12px",
                  borderRadius: "10px",
                  transition: "all 0.3s ease",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                onMouseOver={(e) => {
                  e.target.style.transform = "scale(1.2) rotate(10deg)"
                  e.target.style.boxShadow = "0 10px 30px rgba(0,0,0,0.3)"
                }}
                onMouseOut={(e) => {
                  e.target.style.transform = "scale(1) rotate(0deg)"
                  e.target.style.boxShadow = "none"
                }}
              >
                <FaLinkedin style={{ width: "18px", height: "18px", color: "white" }} />
              </a>
              <a
                href="https://t.me/scripted0"
                title="Telegram"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  backgroundColor: "#0088cc",
                  padding: "12px",
                  borderRadius: "10px",
                  transition: "all 0.3s ease",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                onMouseOver={(e) => {
                  e.target.style.transform = "scale(1.2) rotate(10deg)"
                  e.target.style.boxShadow = "0 10px 30px rgba(0,0,0,0.3)"
                }}
                onMouseOut={(e) => {
                  e.target.style.transform = "scale(1) rotate(0deg)"
                  e.target.style.boxShadow = "none"
                }}
              >
                <FaTelegram style={{ width: "18px", height: "18px", color: "white" }} />
              </a>
              <a
                href="tel:+251928994480"
                title="Phone"
                style={{
                  backgroundColor: "#10b981",
                  padding: "12px",
                  borderRadius: "10px",
                  transition: "all 0.3s ease",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                onMouseOver={(e) => {
                  e.target.style.transform = "scale(1.2) rotate(10deg)"
                  e.target.style.boxShadow = "0 10px 30px rgba(0,0,0,0.3)"
                }}
                onMouseOut={(e) => {
                  e.target.style.transform = "scale(1) rotate(0deg)"
                  e.target.style.boxShadow = "none"
                }}
              >
                <FaPhone style={{ width: "18px", height: "18px", color: "white" }} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3
              style={{
                fontSize: "1.3rem",
                fontWeight: "700",
                marginBottom: "25px",
                color: "#60a5fa",
              }}
            >
              Our Services
            </h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {[
                "Swimming Pool Construction",
                "Jacuzzi Installation",
                "Fountain Design & Build",
                "Aquarium Setup & Maintenance",
                "Pool Maintenance Services",
                "Water Feature Repair",
              ].map((service, index) => (
                <li
                  key={index}
                  style={{
                    marginBottom: "12px",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    padding: "8px 0",
                    position: "relative",
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = "translateX(10px)"
                    e.currentTarget.style.color = "#60a5fa"
                    e.currentTarget.style.textShadow = "0 0 10px rgba(96,165,250,0.5)"
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = "translateX(0)"
                    e.currentTarget.style.color = "rgba(203,213,225,0.8)"
                    e.currentTarget.style.textShadow = "none"
                  }}
                >
                  <a
                    href="#services"
                    style={{
                      color: "rgba(203,213,225,0.8)",
                      textDecoration: "none",
                      fontSize: "0.95rem",
                      display: "block",
                    }}
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3
              style={{
                fontSize: "1.3rem",
                fontWeight: "700",
                marginBottom: "25px",
                color: "#60a5fa",
              }}
            >
              Quick Links
            </h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {[
                { name: "Home", href: "#home" },
                { name: "About Us", href: "#about" },
                { name: "Our Services", href: "#services" },
                { name: "Projects", href: "#projects" },
                { name: "Testimonials", href: "#testimonials" },
                { name: "Contact Us", href: "#contact" },
              ].map((link, index) => (
                <li
                  key={index}
                  style={{
                    marginBottom: "12px",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    padding: "8px 0",
                    position: "relative",
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = "translateX(10px)"
                    e.currentTarget.style.color = "#60a5fa"
                    e.currentTarget.style.textShadow = "0 0 10px rgba(96,165,250,0.5)"
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = "translateX(0)"
                    e.currentTarget.style.color = "rgba(203,213,225,0.8)"
                    e.currentTarget.style.textShadow = "none"
                  }}
                >
                  <a
                    href={link.href}
                    style={{
                      color: "rgba(203,213,225,0.8)",
                      textDecoration: "none",
                      fontSize: "0.95rem",
                      display: "block",
                    }}
                    onClick={(e) => {
                      e.preventDefault()
                      document.querySelector(link.href)?.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      })
                    }}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.1)",
            paddingTop: "30px",
            paddingBottom: "30px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "20px",
          }}
        >
          {/* Copyright */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "20px",
              flexWrap: "wrap",
            }}
          >
            <p
              style={{
                fontSize: "0.9rem",
                color: "rgba(203,213,225,0.7)",
                margin: 0,
              }}
            >
              © {currentYear} Surax Swimming Pool Construction. All rights reserved.
            </p>
            <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item, index) => (
                <a
                  key={index}
                  href="#"
                  style={{
                    fontSize: "0.85rem",
                    color: "rgba(203,213,225,0.6)",
                    textDecoration: "none",
                    transition: "all 0.3s ease",
                    position: "relative",
                  }}
                  onMouseOver={(e) => {
                    e.target.style.color = "#60a5fa"
                    e.target.style.textShadow = "0 0 10px rgba(96,165,250,0.5)"
                  }}
                  onMouseOut={(e) => {
                    e.target.style.color = "rgba(203,213,225,0.6)"
                    e.target.style.textShadow = "none"
                  }}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <span style={{ fontSize: "0.85rem", color: "rgba(203,213,225,0.6)" }}>
              Designed and developed by{" "}
              <a
                href="https://abiy1691.github.io/portfolio_website/"
                style={{
                  color: "#60a5fa",
                  textDecoration: "none",
                  fontWeight: "600",
                  transition: "all 0.3s ease",
                }}
                target="_blank"
                rel="noopener noreferrer"
                onMouseOver={(e) => {
                  e.target.style.color = "#3b82f6"
                  e.target.style.textShadow = "0 0 10px rgba(59,130,246,0.5)"
                }}
                onMouseOut={(e) => {
                  e.target.style.color = "#60a5fa"
                  e.target.style.textShadow = "none"
                }}
              >
                Abiy Girma
              </a>
              {/* Social icons next to name */}
              <span style={{ marginLeft: "8px", display: "inline-flex", gap: "4px", alignItems: "center" }}>
                <a
                  href="https://www.linkedin.com/in/abiy-girma-6409401b5/"
                  title="LinkedIn"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontSize: "14px", color: "#60a5fa", textDecoration: "none", transition: "all 0.3s ease" }}
                  onMouseOver={(e) => {
                    e.target.style.transform = "scale(1.2)"
                    e.target.style.color = "#0077b5"
                  }}
                  onMouseOut={(e) => {
                    e.target.style.transform = "scale(1)"
                    e.target.style.color = "#60a5fa"
                  }}
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://t.me/scripted0"
                  title="Telegram"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontSize: "14px", color: "#60a5fa", textDecoration: "none", transition: "all 0.3s ease" }}
                  onMouseOver={(e) => {
                    e.target.style.transform = "scale(1.2)"
                    e.target.style.color = "#0088cc"
                  }}
                  onMouseOut={(e) => {
                    e.target.style.transform = "scale(1)"
                    e.target.style.color = "#60a5fa"
                  }}
                >
                  <FaTelegram />
                </a>
                <a
                  href="tel:+251928994480"
                  title="Phone"
                  style={{ fontSize: "14px", color: "#60a5fa", textDecoration: "none", transition: "all 0.3s ease" }}
                  onMouseOver={(e) => {
                    e.target.style.transform = "scale(1.2)"
                    e.target.style.color = "#10b981"
                  }}
                  onMouseOut={(e) => {
                    e.target.style.transform = "scale(1)"
                    e.target.style.color = "#60a5fa"
                  }}
                >
                  <FaPhone />
                </a>
              </span>
            </span>
          </div>

          {/* Back to Top Button */}
          <button
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" })
            }}
            style={{
              background: "linear-gradient(135deg, #3b82f6 0%, #1e40af 100%)",
              color: "white",
              padding: "12px 20px",
              borderRadius: "25px",
              border: "none",
              fontSize: "0.9rem",
              fontWeight: "600",
              cursor: "pointer",
              transition: "all 0.3s ease",
              boxShadow: "0 5px 15px rgba(59,130,246,0.3)",
            }}
            onMouseOver={(e) => {
              e.target.style.transform = "translateY(-3px) scale(1.05)"
              e.target.style.boxShadow = "0 10px 25px rgba(59,130,246,0.5)"
            }}
            onMouseOut={(e) => {
              e.target.style.transform = "translateY(0) scale(1)"
              e.target.style.boxShadow = "0 5px 15px rgba(59,130,246,0.3)"
            }}
          >
            ↑ Back to Top
          </button>
        </div>
      </div>

      {/* Enhanced CSS animations */}
      <style jsx>{`
        @keyframes waterFlow {
          0%, 100% {
             transform: translateX(0) translateY(0) scale(1);
            opacity: 0.3;
          }
          25% {
             transform: translateX(15px) translateY(-8px) scale(1.02);
            opacity: 0.5;
          }
          50% {
             transform: translateX(-8px) translateY(15px) scale(0.98);
            opacity: 0.4;
          }
          75% {
             transform: translateX(-15px) translateY(-5px) scale(1.01);
            opacity: 0.6;
          }
        }
        @keyframes socialFloat {
          0%, 100% {
            transform: translateY(0px) scale(1);
          }
          50% {
            transform: translateY(-3px) scale(1.02);
          }
        }
        @keyframes titleGlow {
          0%, 100% {
            text-shadow: 0 0 10px rgba(96,165,250,0.3);
          }
          50% {
            text-shadow: 0 0 20px rgba(96,165,250,0.6);
          }
        }
        @keyframes textFloat {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-2px);
          }
        }
        @keyframes contactFloat {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-2px);
          }
        }
        @keyframes iconFloat {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-2px) rotate(5deg);
          }
        }
        @keyframes buttonFloat {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-3px);
          }
        }
        @keyframes waterLineFlow {
          0% {
            width: 0%;
            opacity: 0;
          }
          50% {
            width: 100%;
            opacity: 1;
          }
          100% {
            width: 100%;
            opacity: 0;
          }
        }
      `}</style>
    </footer>
  )
}
