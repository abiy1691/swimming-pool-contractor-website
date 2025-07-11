"use client"
import { useState } from "react"
import { Waves } from "lucide-react"

// Navigation links
const navLinks = [
  { name: "Home", href: "#" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
]

export default function Navbar() {
  const [active, setActive] = useState("Home")

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        backgroundColor: "rgba(255,255,255,0.95)",
        backdropFilter: "blur(8px)",
        padding: "8px 24px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
        zIndex: 50,
        height: "50px",
      }}
    >
      {/* Logo Section */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
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
          <Waves style={{ width: "24px", height: "24px", color: "#3b82f6" }} />
        </div>
        <h1
          style={{
            fontSize: "18px",
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
          <span style={{ color: "#1e293b" }}>SUR</span>
          <span style={{ color: "#3b82f6" }}>AX</span>
        </h1>
      </div>

      {/* Navigation Links */}
      <ul style={{ display: "flex", gap: "24px", margin: 0, padding: 0, listStyle: "none" }}>
        {navLinks.map((link) => (
          <li key={link.name}>
            <a
              href={link.href}
              onClick={() => setActive(link.name)}
              style={{
                position: "relative",
                padding: "8px 16px",
                borderRadius: "8px",
                fontWeight: "600",
                fontSize: "14px",
                color: active === link.name ? "#3b82f6" : "#000",
                textDecoration: "none",
                transition: "all 0.4s ease",
                display: "inline-block",
                overflow: "hidden",
                cursor: "pointer",
                filter: active === link.name ? "drop-shadow(0 4px 16px rgba(59,130,246,0.4))" : "none",
              }}
              onMouseOver={(e) => {
                e.target.style.transform = "translateY(-2px) scale(1.05)"
                e.target.style.color = "#60a5fa"
                // Create water ripple effect
                const ripple = document.createElement("div")
                ripple.style.position = "absolute"
                ripple.style.top = "0"
                ripple.style.left = "0"
                ripple.style.right = "0"
                ripple.style.bottom = "0"
                ripple.style.background =
                  "radial-gradient(circle, rgba(59,130,246,0.3) 0%, rgba(59,130,246,0.1) 40%, transparent 70%)"
                ripple.style.borderRadius = "8px"
                ripple.style.animation = "waterRipple 0.8s ease-out"
                ripple.style.pointerEvents = "none"
                ripple.style.zIndex = "-1"
                e.target.appendChild(ripple)
                setTimeout(() => {
                  if (ripple.parentNode) {
                    ripple.parentNode.removeChild(ripple)
                  }
                }, 800)
              }}
              onMouseOut={(e) => {
                if (active !== link.name) {
                  e.target.style.transform = "translateY(0) scale(1)"
                  e.target.style.color = "#000"
                }
              }}
              onClick={(e) => {
                // Water splash effect on click
                const splash = document.createElement("div")
                splash.style.position = "absolute"
                splash.style.top = "0"
                splash.style.left = "0"
                splash.style.right = "0"
                splash.style.bottom = "0"
                splash.style.background =
                  "radial-gradient(circle, rgba(59,130,246,0.6) 0%, rgba(59,130,246,0.3) 30%, transparent 60%)"
                splash.style.borderRadius = "8px"
                splash.style.animation = "waterSplash 0.6s ease-out"
                splash.style.pointerEvents = "none"
                splash.style.zIndex = "-1"
                e.target.appendChild(splash)
                setTimeout(() => {
                  if (splash.parentNode) {
                    splash.parentNode.removeChild(splash)
                  }
                }, 600)
              }}
            >
              {link.name}
              {/* Water shadow effect for active link */}
              {active === link.name && (
                <span
                  style={{
                    position: "absolute",
                    left: 0,
                    right: 0,
                    bottom: "-2px",
                    height: "8px",
                    borderRadius: "0 0 8px 8px",
                    background:
                      "radial-gradient(ellipse at 50% 100%, rgba(59,130,246,0.6) 0%, rgba(59,130,246,0.3) 50%, transparent 80%)",
                    animation: "activeWaterGlow 2s ease-in-out infinite",
                    pointerEvents: "none",
                  }}
                />
              )}
            </a>
          </li>
        ))}
      </ul>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes waterRipple {
          0% { transform: scale(0); opacity: 0.8; }
          50% { transform: scale(1.2); opacity: 0.4; }
          100% { transform: scale(1.8); opacity: 0; }
        }
        @keyframes waterSplash {
          0% { transform: scale(0.8); opacity: 0.8; }
          50% { transform: scale(1.5); opacity: 0.3; }
          100% { transform: scale(2); opacity: 0; }
        }
        @keyframes activeWaterGlow {
          0%, 100% { opacity: 0.6; transform: scaleX(1); }
          50% { opacity: 0.3; transform: scaleX(1.2); filter: blur(1px); }
        }
      `}</style>
    </nav>
  )
}
