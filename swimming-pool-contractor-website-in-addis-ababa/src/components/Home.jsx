"use client"
import { useState, useEffect } from "react"
import { Phone, MapPin, Clock, Facebook, Twitter, Instagram, Linkedin, ChevronLeft, ChevronRight } from "lucide-react"
import Navbar from "./Navbar"

// Complete media data
const mediaData = [
  {
    image: "https://images.pexels.com/photos/261414/pexels-photo-261414.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=800",
    category: "SWIMMING POOL",
    label: "Stunning Pool Design",
    description: "Transform Your Space with a Luxury Swimming Pool in Ethiopia – Custom Designs, Surax Craftsmanship!",
  },
  {
    image: "https://images.pexels.com/photos/7224672/pexels-photo-7224672.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=800",
    category: "JACUZZI",
    label: "Luxury Jacuzzi Installation",
    description: "Relax in Style with Premium Jacuzzi Designs – Ultimate Comfort and Luxury for Your Home!",
  },
  {
    image: "https://images.pexels.com/photos/541860/pexels-photo-541860.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=800",
    category: "FOUNTAIN",
    label: "Elegant Fountain Design",
    description:
      "Add Elegance to Your Property with Stunning Fountain Designs – Perfect for Homes, Hotels, and Businesses!",
  },
  {
    image: "https://images.pexels.com/photos/10127369/pexels-photo-10127369.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=800",
    category: "AQUARIUM",
    label: "Custom Aquarium Setup",
    description: "Bring Aquatic Beauty Indoors with Custom Aquarium Designs – Vibrant Setups with Surax Maintenance!",
  },
]

function Home() {
  console.log("🏊‍♂️ SURAX SWIMMING POOL WEBSITE LOADING...")
  const [currentSlide, setCurrentSlide] = useState(0)
  const [leftHover, setLeftHover] = useState(false)
  const [rightHover, setRightHover] = useState(false)
  const [showSocialMedia, setShowSocialMedia] = useState(true)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [showWorkingHours, setShowWorkingHours] = useState(true)
  const [showContactInfo, setShowContactInfo] = useState(true)

  // Auto-slide every 5 seconds
  useEffect(() => {
    console.log("⏰ Setting up auto-slide every 5 seconds...")
    const interval = setInterval(() => {
      setIsTransitioning(true)
      setTimeout(() => {
        setCurrentSlide((prev) => {
          const next = (prev + 1) % mediaData.length
          console.log(`🔄 Auto-sliding from ${prev} to ${next} - ${mediaData[next].label}`)
          return next
        })
        setTimeout(() => setIsTransitioning(false), 100)
      }, 300)
    }, 5000)

    return () => {
      console.log("🧹 Cleaning up interval")
      clearInterval(interval)
    }
  }, [])

  // Social media icons - show/hide every 5 seconds (increased from 3 seconds)
  useEffect(() => {
    const interval = setInterval(() => {
      setShowSocialMedia((prev) => !prev)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  // Working hours animation - show/hide every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setShowWorkingHours((prev) => !prev)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  // Contact info animation - show/hide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setShowContactInfo((prev) => !prev)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const currentMedia = mediaData[currentSlide]
  console.log("🎨 Current slide:", currentSlide, currentMedia.label)

  const handleNext = () => {
    setIsTransitioning(true)
    setTimeout(() => {
      const next = (currentSlide + 1) % mediaData.length
      console.log("➡️ Next clicked, going to:", next)
      setCurrentSlide(next)
      setTimeout(() => setIsTransitioning(false), 100)
    }, 300)
  }

  const handlePrev = () => {
    setIsTransitioning(true)
    setTimeout(() => {
      const prev = (currentSlide - 1 + mediaData.length) % mediaData.length
      console.log("⬅️ Prev clicked, going to:", prev)
      setCurrentSlide(prev)
      setTimeout(() => setIsTransitioning(false), 100)
    }, 300)
  }

  const handleDotClick = (index) => {
    if (index !== currentSlide) {
      setIsTransitioning(true)
      setTimeout(() => {
        console.log("🔘 Dot clicked:", index, mediaData[index].label)
        setCurrentSlide(index)
        setTimeout(() => setIsTransitioning(false), 100)
      }, 300)
    }
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        margin: 0,
        padding: 0,
        width: "100%", // Changed from 100vw to 100%
        maxWidth: "none", // Remove max width constraint
        overflowX: "hidden",
        boxSizing: "border-box",
      }}
    >
      {/* Integrated Navbar */}
      <Navbar />

      {/* Social Media Icons - Smaller Size and Moved Further Left */}
      {showSocialMedia && (
        <div
          style={{
            position: "fixed",
            left: "10px", // Changed from "20px" to "10px"
            top: "60%", // Lowered from 50% to 60%
            transform: "translateY(-50%)",
            zIndex: 45,
            display: "flex",
            flexDirection: "column",
            gap: "8px", // Reduced from 12px
            animation: "socialSlideIn 0.6s ease-out",
          }}
        >
          {[
            { Icon: Facebook, bg: "#1877f2", label: "Facebook" },
            { Icon: Twitter, bg: "#1da1f2", label: "Twitter" },
            { Icon: Instagram, bg: "#e4405f", label: "Instagram" },
            { Icon: Linkedin, bg: "#0077b5", label: "LinkedIn" },
          ].map(({ Icon, bg, label }, index) => (
            <a
              key={index}
              href="#"
              title={label}
              style={{
                backgroundColor: bg,
                padding: "8px", // Reduced from 12px
                borderRadius: "50%",
                transition: "all 0.4s ease",
                backdropFilter: "blur(8px)",
                border: "1px solid rgba(255,255,255,0.2)", // Reduced border
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                animation: `socialFadeIn 0.6s ease-in-out ${index * 0.1}s both`,
                boxShadow: "0 2px 10px rgba(0,0,0,0.15)", // Reduced shadow
              }}
              onMouseOver={(e) => {
                e.target.style.transform = "scale(1.2) rotate(360deg)"
                e.target.style.boxShadow = "0 4px 15px rgba(59,130,246,0.4)"
              }}
              onMouseOut={(e) => {
                e.target.style.transform = "scale(1) rotate(0deg)"
                e.target.style.boxShadow = "0 2px 10px rgba(0,0,0,0.15)"
              }}
            >
              <Icon style={{ width: "12px", height: "12px", color: "white" }} /> {/* Reduced from 18px */}
            </a>
          ))}
        </div>
      )}

      {/* Hero Section */}
      <section
        id="home"
        style={{
          position: "relative",
          width: "100%", // Changed from 100vw
          height: "100vh",
          overflow: "hidden",
          paddingTop: "50px",
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.3)), url(${currentMedia.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          backgroundColor: "#1a1a1a",
          transition: "all 1.8s cubic-bezier(0.4, 0, 0.2, 1)",
          transform: isTransitioning ? "scale(1.02)" : "scale(1)",
          filter: isTransitioning ? "blur(1px)" : "blur(0px)",
          margin: 0,
          padding: 0,
          paddingTop: "50px",
          left: 0,
          right: 0,
        }}
      >
        {/* Hover Zones for Navigation */}
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: "20%",
            height: "100%",
            zIndex: 30,
            cursor: "pointer",
          }}
          onMouseEnter={() => setLeftHover(true)}
          onMouseLeave={() => setLeftHover(false)}
          onClick={handlePrev}
        />
        <div
          style={{
            position: "absolute",
            right: 0,
            top: 0,
            width: "20%",
            height: "100%",
            zIndex: 30,
            cursor: "pointer",
          }}
          onMouseEnter={() => setRightHover(true)}
          onMouseLeave={() => setRightHover(false)}
          onClick={handleNext}
        />

        {/* Navigation Arrows */}
        {leftHover && (
          <button
            onClick={handlePrev}
            style={{
              position: "absolute",
              left: "30px",
              top: "50%",
              transform: "translateY(-50%)",
              backgroundColor: "rgba(59,130,246,0.3)",
              backdropFilter: "blur(8px)",
              color: "white",
              padding: "15px",
              borderRadius: "50%",
              border: "2px solid rgba(255,255,255,0.3)",
              cursor: "pointer",
              zIndex: 40,
              transition: "all 0.4s ease",
              animation: "slideInLeft 0.4s ease-out",
              boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
            }}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = "rgba(59,130,246,0.8)"
              e.target.style.transform = "translateY(-50%) scale(1.15)"
              e.target.style.boxShadow = "0 0 40px rgba(59,130,246,0.7)"
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = "rgba(59,130,246,0.3)"
              e.target.style.transform = "translateY(-50%) scale(1)"
              e.target.style.boxShadow = "0 8px 32px rgba(0,0,0,0.3)"
            }}
          >
            <ChevronLeft style={{ width: "24px", height: "24px" }} />
          </button>
        )}

        {rightHover && (
          <button
            onClick={handleNext}
            style={{
              position: "absolute",
              right: "30px",
              top: "50%",
              transform: "translateY(-50%)",
              backgroundColor: "rgba(59,130,246,0.3)",
              backdropFilter: "blur(8px)",
              color: "white",
              padding: "15px",
              borderRadius: "50%",
              border: "2px solid rgba(255,255,255,0.3)",
              cursor: "pointer",
              zIndex: 40,
              transition: "all 0.4s ease",
              animation: "slideInRight 0.4s ease-out",
              boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
            }}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = "rgba(59,130,246,0.8)"
              e.target.style.transform = "translateY(-50%) scale(1.15)"
              e.target.style.boxShadow = "0 0 40px rgba(59,130,246,0.7)"
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = "rgba(59,130,246,0.3)"
              e.target.style.transform = "translateY(-50%) scale(1)"
              e.target.style.boxShadow = "0 8px 32px rgba(0,0,0,0.3)"
            }}
          >
            <ChevronRight style={{ width: "24px", height: "24px" }} />
          </button>
        )}

        {/* Main Content Container */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "white",
            textAlign: "center",
            padding: "20px",
            zIndex: 20,
            width: "100%",
            maxWidth: "1400px", // Increased max width for full screen
          }}
        >
          {/* Main Title with Water Color Animation - Professional Size */}
          <h1
            key={`title-${currentSlide}`}
            style={{
              fontSize: "3rem", // Reduced from 4.5rem to professional size
              fontWeight: "700",
              marginBottom: "25px",
              color: "rgba(255,255,255,0.9)", // Transparent water color
              textShadow: "2px 2px 8px rgba(0,0,0,0.7), 0 0 30px rgba(59,130,246,0.3)",
              lineHeight: "1.1",
              letterSpacing: "1px",
              animation: isTransitioning
                ? "textSlideOut 0.5s ease-in-out"
                : "textSlideIn 1s ease-out 0.2s both, waterColorFlow 6s ease-in-out infinite",
              transform: isTransitioning ? "translateY(-40px) scale(0.95)" : "translateY(0) scale(1)",
              opacity: isTransitioning ? 0 : 0.9, // Transparent
              transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
              background:
                "linear-gradient(45deg, rgba(96,165,250,0.8), rgba(59,130,246,0.8), rgba(30,64,175,0.8), rgba(96,165,250,0.8))",
              backgroundSize: "300% 300%",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            {currentMedia.label}
          </h1>

          {/* Description - Professional Size */}
          <p
            key={`desc-${currentSlide}`}
            style={{
              fontSize: "1.1rem", // Reduced from 1.3rem to professional size
              marginBottom: "60px",
              maxWidth: "900px", // Increased for full screen
              margin: "0 auto 60px auto",
              textShadow: "1px 1px 4px rgba(0,0,0,0.8)",
              lineHeight: "1.5",
              color: "rgba(241,245,249,0.8)", // Transparent water color
              fontWeight: "400",
              letterSpacing: "0.5px",
              animation: isTransitioning ? "textFadeOut 0.4s ease-in-out" : "textFadeIn 0.8s ease-out 0.4s both",
              transform: isTransitioning ? "translateY(30px)" : "translateY(0)",
              opacity: isTransitioning ? 0 : 0.8, // Transparent
              transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
            }}
          >
            {currentMedia.description}
          </p>
        </div>

        {/* Perfect Circle Indicators with Water Fill */}
        <div
          style={{
            position: "absolute",
            bottom: "40px",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            gap: "10px",
            zIndex: 30,
          }}
        >
          {mediaData.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              style={{
                position: "relative",
                width: "10px",
                height: "10px",
                borderRadius: "50%",
                backgroundColor: index === currentSlide ? "#3b82f6" : "rgba(255,255,255,0.4)",
                border: "2px solid rgba(255,255,255,0.8)",
                cursor: "pointer",
                transition: "all 0.3s ease",
                boxShadow:
                  index === currentSlide
                    ? "0 0 20px rgba(59,130,246,0.8), 0 0 40px rgba(59,130,246,0.4)"
                    : "0 0 5px rgba(255,255,255,0.3)",
                overflow: "hidden",
                padding: 0,
                outline: "none",
              }}
              onMouseOver={(e) => {
                e.target.style.transform = "scale(1.4)"
                e.target.style.boxShadow = "0 0 25px rgba(59,130,246,0.9)"
              }}
              onMouseOut={(e) => {
                e.target.style.transform = "scale(1)"
                e.target.style.boxShadow =
                  index === currentSlide
                    ? "0 0 20px rgba(59,130,246,0.8), 0 0 40px rgba(59,130,246,0.4)"
                    : "0 0 5px rgba(255,255,255,0.3)"
              }}
            >
              {/* Water Fill Animation for Active Dot */}
              {index === currentSlide && (
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: "100%",
                    background: "linear-gradient(0deg, #1e40af 0%, #3b82f6 50%, #60a5fa 100%)",
                    borderRadius: "50%",
                    animation: "waterFill 1.2s ease-out, waterWave 3s ease-in-out infinite",
                    transform: "translateY(100%)",
                    animationFillMode: "forwards",
                  }}
                />
              )}
              {/* Water Ripple Effect */}
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: "200%",
                  height: "200%",
                  borderRadius: "50%",
                  background: "radial-gradient(circle, rgba(59,130,246,0.4) 0%, transparent 70%)",
                  opacity: 0,
                  animation: index === currentSlide ? "waterRipple 2.5s ease-out infinite" : "none",
                }}
              />
            </button>
          ))}
        </div>
      </section>

      {/* About Us Section */}
      <section
        id="about"
        style={{
          padding: "100px 0", // Remove horizontal padding to use full width
          background: "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)",
          position: "relative",
          overflow: "hidden",
          width: "100%", // Changed from 100vw
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
              "radial-gradient(circle at 20% 80%, rgba(59,130,246,0.05) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(59,130,246,0.05) 0%, transparent 50%)",
            animation: "waterFlow 20s ease-in-out infinite",
          }}
        />
        <div
          style={{
            maxWidth: "1400px", // Increased max width for full screen
            margin: "0 auto",
            position: "relative",
            zIndex: 2,
            width: "100%",
            boxSizing: "border-box",
            padding: "0 40px", // Add padding back for content
          }}
        >
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center" }}>
            {/* Left Content */}
            <div>
              {/* Animated Title */}
              <h3
                style={{
                  fontSize: "1.8rem", // Professional size
                  fontWeight: "700",
                  color: "rgba(30,41,59,0.9)", // Transparent water color
                  marginBottom: "20px",
                  animation: "titleFloat 4s ease-in-out infinite",
                  background: "linear-gradient(45deg, rgba(30,41,59,0.9), rgba(59,130,246,0.8), rgba(30,41,59,0.9))",
                  backgroundSize: "200% 200%",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
                onMouseOver={(e) => {
                  e.target.style.transform = "scale(1.05)"
                  e.target.style.textShadow = "0 0 20px rgba(59,130,246,0.5)"
                }}
                onMouseOut={(e) => {
                  e.target.style.transform = "scale(1)"
                  e.target.style.textShadow = "none"
                }}
              >
                Surax Swimming Pool, Jacuzzi & Fountain Construction in Ethiopia
              </h3>
              <div
                style={{
                  fontSize: "1.5rem", // Professional size
                  fontWeight: "600",
                  color: "rgba(59,130,246,0.9)", // Transparent water color
                  marginBottom: "30px",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  animation: "waveFloat 3s ease-in-out infinite",
                }}
              >
                <span style={{ animation: "waveAnimation 2s ease-in-out infinite" }}>🌊</span> Bringing Your Vision to
                Life
              </div>
              <p
                style={{
                  fontSize: "1rem", // Professional size
                  lineHeight: "1.8",
                  color: "rgba(71,85,105,0.8)", // Transparent water color
                  marginBottom: "30px",
                }}
              >
                At Surax Swimming Pool Construction, we specialize in turning dreams into reality. Whether you're
                building a serene swimming pool, a luxurious jacuzzi, a decorative fountain, or a vibrant aquarium, we
                bring unmatched craftsmanship, custom designs, and lasting quality — right here in Ethiopia.
              </p>

              {/* Why Choose Surax - Plain Text with Water Hover Effects */}
              <div style={{ marginBottom: "30px" }}>
                <h4
                  style={{
                    fontSize: "1.3rem", // Professional size
                    fontWeight: "700",
                    color: "rgba(30,41,59,0.9)", // Transparent water color
                    marginBottom: "20px",
                    display: "block",
                    width: "100%",
                    animation: "titleGlow 3s ease-in-out infinite",
                  }}
                >
                  <span style={{ animation: "dropAnimation 2s ease-in-out infinite" }}>💧</span> Why Choose Surax?
                </h4>
                <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
                  {[
                    "Professional Pool Builder & Designer in Ethiopia",
                    "Superior Quality Standards",
                    "Experienced & Certified Team",
                    "100% Client Satisfaction",
                  ].map((item, index) => (
                    <p
                      key={index}
                      style={{
                        fontSize: "0.95rem", // Professional size
                        color: "rgba(71,85,105,0.8)", // Transparent water color
                        margin: 0,
                        padding: "10px 0",
                        cursor: "pointer",
                        transition: "all 0.4s ease",
                        position: "relative",
                        animation: `textFloat ${2 + index * 0.3}s ease-in-out infinite`,
                      }}
                      onMouseOver={(e) => {
                        e.currentTarget.style.transform = "translateX(10px) scale(1.05)"
                        e.currentTarget.style.color = "rgba(59,130,246,0.9)"
                        e.currentTarget.style.textShadow = "0 0 15px rgba(59,130,246,0.4)"

                        // Create water ripple effect
                        const ripple = document.createElement("div")
                        ripple.style.position = "absolute"
                        ripple.style.left = "0"
                        ripple.style.top = "50%"
                        ripple.style.transform = "translateY(-50%)"
                        ripple.style.width = "100%"
                        ripple.style.height = "2px"
                        ripple.style.background =
                          "linear-gradient(90deg, transparent 0%, rgba(59,130,246,0.6) 50%, transparent 100%)"
                        ripple.style.animation = "waterLineFlow 0.8s ease-out"
                        ripple.style.pointerEvents = "none"
                        ripple.style.zIndex = "1"
                        e.currentTarget.appendChild(ripple)

                        setTimeout(() => {
                          if (ripple.parentNode) {
                            ripple.parentNode.removeChild(ripple)
                          }
                        }, 800)
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.transform = "translateX(0) scale(1)"
                        e.currentTarget.style.color = "rgba(71,85,105,0.8)"
                        e.currentTarget.style.textShadow = "none"
                      }}
                    >
                      {item}
                    </p>
                  ))}
                </div>
              </div>

              {/* Discover More Button - After Why Choose Surax items */}
              <div style={{ marginTop: "40px", textAlign: "center" }}>
                <button
                  onClick={() => {
                    document.getElementById("services").scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    })
                  }}
                  style={{
                    background: "linear-gradient(135deg, #3b82f6 0%, #1e40af 50%, #60a5fa 100%)",
                    backgroundSize: "200% 200%",
                    color: "white",
                    padding: "15px 35px",
                    borderRadius: "50px",
                    border: "none",
                    fontSize: "1rem",
                    fontWeight: "700",
                    cursor: "pointer",
                    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                    boxShadow: "0 8px 25px rgba(59,130,246,0.3), 0 0 0 0 rgba(59,130,246,0.4)",
                    position: "relative",
                    overflow: "hidden",
                    animation: "buttonFloat 3s ease-in-out infinite, waterGradientFlow 4s ease-in-out infinite",
                    textShadow: "0 2px 4px rgba(0,0,0,0.3)",
                    letterSpacing: "0.5px",
                    transform: "translateY(0) scale(1)",
                  }}
                  onMouseOver={(e) => {
                    e.target.style.transform = "translateY(-5px) scale(1.05)"
                    e.target.style.boxShadow = "0 15px 40px rgba(59,130,246,0.5), 0 0 30px rgba(59,130,246,0.6)"
                    e.target.style.backgroundPosition = "100% 0%"

                    // Create water ripple effect
                    const ripple = document.createElement("div")
                    ripple.style.position = "absolute"
                    ripple.style.top = "50%"
                    ripple.style.left = "50%"
                    ripple.style.transform = "translate(-50%, -50%)"
                    ripple.style.width = "0"
                    ripple.style.height = "0"
                    ripple.style.borderRadius = "50%"
                    ripple.style.background =
                      "radial-gradient(circle, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0.2) 70%, transparent 100%)"
                    ripple.style.animation = "buttonRipple 0.8s ease-out"
                    ripple.style.pointerEvents = "none"
                    ripple.style.zIndex = "1"
                    e.target.appendChild(ripple)

                    setTimeout(() => {
                      if (ripple.parentNode) {
                        ripple.parentNode.removeChild(ripple)
                      }
                    }, 800)
                  }}
                  onMouseOut={(e) => {
                    e.target.style.transform = "translateY(0) scale(1)"
                    e.target.style.boxShadow = "0 8px 25px rgba(59,130,246,0.3), 0 0 0 0 rgba(59,130,246,0.4)"
                    e.target.style.backgroundPosition = "0% 0%"
                  }}
                  onMouseDown={(e) => {
                    e.target.style.transform = "translateY(-2px) scale(1.02)"

                    // Water splash effect
                    const splash = document.createElement("div")
                    splash.style.position = "absolute"
                    splash.style.top = "0"
                    splash.style.left = "0"
                    splash.style.right = "0"
                    splash.style.bottom = "0"
                    splash.style.borderRadius = "50px"
                    splash.style.background =
                      "radial-gradient(circle, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.1) 50%, transparent 80%)"
                    splash.style.animation = "buttonSplash 0.6s ease-out"
                    splash.style.pointerEvents = "none"
                    splash.style.zIndex = "2"
                    e.target.appendChild(splash)

                    setTimeout(() => {
                      if (splash.parentNode) {
                        splash.parentNode.removeChild(splash)
                      }
                    }, 600)
                  }}
                  onMouseUp={(e) => {
                    e.target.style.transform = "translateY(-5px) scale(1.05)"
                  }}
                >
                  {/* Water wave background effect */}
                  <span
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: "linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%)",
                      borderRadius: "50px",
                      animation: "buttonWaveFlow 3s ease-in-out infinite",
                      pointerEvents: "none",
                      zIndex: "0",
                    }}
                  />

                  {/* Button text with icon */}
                  <span
                    style={{
                      position: "relative",
                      zIndex: "3",
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      justifyContent: "center",
                    }}
                  >
                    <span style={{ animation: "discoverIcon 2s ease-in-out infinite" }}>🌊</span>
                    Discover More
                    <span style={{ animation: "arrowFloat 2s ease-in-out infinite" }}>→</span>
                  </span>
                </button>
              </div>
            </div>

            {/* Right Content - Video with Short Swimming Pool URL */}
            <div
              style={{
                position: "relative",
                borderRadius: "20px",
                overflow: "hidden",
                boxShadow: "0 20px 60px rgba(0,0,0,0.15)",
                background: "linear-gradient(45deg, #3b82f6, #60a5fa)",
                aspectRatio: "16/9",
                minHeight: "400px",
                width: "100%",
                boxSizing: "border-box",
              }}
            >
              <video
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "20px",
                }}
                autoPlay
                muted
                loop
                playsInline
                controls
              >
                {/* Short swimming pool video */}
                <source
                  src="https://player.vimeo.com/external/371433846.sd.mp4?s=236a2e5c2c7b1c1a7b8b8c8d8e8f8g8h8i8j8k8l&profile_id=164&oauth2_token_id=57447761"
                  type="video/mp4"
                />
                <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />

                {/* Fallback content */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "linear-gradient(135deg, #3b82f6 0%, #1e40af 100%)",
                    color: "white",
                    textAlign: "center",
                    borderRadius: "20px",
                  }}
                >
                  <div>
                    <div
                      style={{
                        width: "120px",
                        height: "120px",
                        borderRadius: "50%",
                        backgroundColor: "rgba(255,255,255,0.2)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        margin: "0 auto 30px",
                        cursor: "pointer",
                        transition: "all 0.3s ease",
                        animation: "pulseGlow 2s ease-in-out infinite",
                      }}
                    >
                      <span style={{ fontSize: "3rem" }}>🏊‍♂️</span>
                    </div>
                    <h3 style={{ fontSize: "1.5rem", fontWeight: "700", marginBottom: "15px" }}>
                      Swimming Pool Construction
                    </h3>
                    <p style={{ fontSize: "1.1rem", opacity: 0.9, marginBottom: "10px" }}>
                      Professional Pool Building in Ethiopia
                    </p>
                  </div>
                </div>
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        style={{
          padding: "100px 0", // Remove horizontal padding for full width
          background: "linear-gradient(135deg, #1e293b 0%, #334155 100%)",
          color: "white",
          position: "relative",
          overflow: "hidden",
          width: "100%", // Changed from 100vw
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
              "radial-gradient(circle at 30% 40%, rgba(59,130,246,0.1) 0%, transparent 50%), radial-gradient(circle at 70% 60%, rgba(59,130,246,0.1) 0%, transparent 50%)",
            animation: "waterFlow 25s ease-in-out infinite reverse",
          }}
        />
        <div
          style={{
            maxWidth: "1400px", // Increased max width for full screen
            margin: "0 auto",
            position: "relative",
            zIndex: 2,
            width: "100%",
            boxSizing: "border-box",
            maxWidth: "1400px", // Increased max width for full screen
            margin: "0 auto",
            position: "relative",
            zIndex: 2,
            width: "100%",
            boxSizing: "border-box",
            padding: "0 40px", // Add padding back for content
          }}
        >
          <div style={{ textAlign: "center", marginBottom: "80px" }}>
            <h2
              style={{
                fontSize: "2.5rem", // Professional size
                fontWeight: "800",
                color: "rgba(255,255,255,0.9)", // Transparent water color
                marginBottom: "20px",
                textShadow: "0 0 30px rgba(59,130,246,0.3)",
                animation: "waterColorFlow 8s ease-in-out infinite",
                background:
                  "linear-gradient(45deg, rgba(96,165,250,0.9), rgba(59,130,246,0.9), rgba(30,64,175,0.9), rgba(96,165,250,0.9))",
                backgroundSize: "300% 300%",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Our Services
            </h2>
            <div
              style={{
                width: "100px",
                height: "4px",
                background: "linear-gradient(90deg, #60a5fa, #3b82f6)",
                margin: "0 auto",
                borderRadius: "2px",
              }}
            />
            <p
              style={{
                fontSize: "1.1rem", // Professional size
                color: "rgba(203,213,225,0.8)", // Transparent water color
                marginTop: "20px",
                maxWidth: "600px",
                margin: "20px auto 0",
              }}
            >
              🛠️ What We Offer - Professional Water Feature Solutions
            </p>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "40px",
              width: "100%",
              boxSizing: "border-box",
            }}
          >
            {[
              {
                icon: "🏊",
                title: "Swimming Pool Construction",
                description: "Custom swimming pool designs with superior quality and professional installation.",
                features: ["Custom Designs", "Quality Materials", "Professional Installation"],
              },
              {
                icon: "🛁",
                title: "Jacuzzi Installation",
                description: "Luxury jacuzzi setups for ultimate relaxation and comfort in your space.",
                features: ["Luxury Designs", "Therapeutic Features", "Energy Efficient"],
              },
              {
                icon: "⛲",
                title: "Fountain Design",
                description: "Elegant decorative fountains that add beauty and tranquility to any environment.",
                features: ["Artistic Designs", "Water Features", "Landscape Integration"],
              },
              {
                icon: "🐠",
                title: "Aquarium Setup",
                description: "Custom aquarium installations with vibrant designs and surax maintenance.",
                features: ["Custom Tanks", "Aquatic Life", "Maintenance Support"],
              },
            ].map((service, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: "rgba(255,255,255,0.05)",
                  backdropFilter: "blur(10px)",
                  borderRadius: "20px",
                  padding: "40px",
                  border: "1px solid rgba(255,255,255,0.1)",
                  transition: "all 0.4s ease",
                  cursor: "pointer",
                  position: "relative",
                  overflow: "hidden",
                  width: "100%",
                  boxSizing: "border-box",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "translateY(-10px)"
                  e.currentTarget.style.backgroundColor = "rgba(59,130,246,0.1)"
                  e.currentTarget.style.boxShadow = "0 20px 60px rgba(59,130,246,0.2)"

                  // Water hover effect
                  const waterEffect = document.createElement("div")
                  waterEffect.style.position = "absolute"
                  waterEffect.style.top = "0"
                  waterEffect.style.left = "0"
                  waterEffect.style.right = "0"
                  waterEffect.style.bottom = "0"
                  waterEffect.style.background = "radial-gradient(circle, rgba(59,130,246,0.1) 0%, transparent 70%)"
                  waterEffect.style.borderRadius = "20px"
                  waterEffect.style.animation = "waterWaveEffect 2s ease-in-out infinite"
                  waterEffect.style.pointerEvents = "none"
                  waterEffect.style.zIndex = "1"
                  e.currentTarget.appendChild(waterEffect)
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "translateY(0)"
                  e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.05)"
                  e.currentTarget.style.boxShadow = "none"

                  // Remove water effect
                  const waterEffect = e.currentTarget.querySelector('div[style*="waterWaveEffect"]')
                  if (waterEffect) {
                    waterEffect.remove()
                  }
                }}
              >
                <div
                  style={{
                    fontSize: "3rem",
                    marginBottom: "20px",
                    textAlign: "center",
                  }}
                >
                  {service.icon}
                </div>
                <h3
                  style={{
                    fontSize: "1.3rem", // Professional size
                    fontWeight: "700",
                    marginBottom: "15px",
                    color: "rgba(96,165,250,0.9)", // Transparent water color
                    textAlign: "center",
                  }}
                >
                  {service.title}
                </h3>
                <p
                  style={{
                    fontSize: "0.95rem", // Professional size
                    lineHeight: "1.6",
                    color: "rgba(203,213,225,0.8)", // Transparent water color
                    marginBottom: "20px",
                    textAlign: "center",
                  }}
                >
                  {service.description}
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  {service.features.map((feature, idx) => (
                    <div
                      key={idx}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        fontSize: "0.85rem", // Professional size
                        color: "rgba(226,232,240,0.8)", // Transparent water color
                      }}
                    >
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* What We Offer Highlights */}
          <div
            style={{
              marginTop: "80px",
              textAlign: "center",
              backgroundColor: "rgba(59,130,246,0.1)",
              borderRadius: "20px",
              padding: "50px",
              border: "1px solid rgba(59,130,246,0.2)",
              width: "100%",
              boxSizing: "border-box",
            }}
          >
            <h3
              style={{
                fontSize: "1.5rem", // Professional size
                fontWeight: "700",
                marginBottom: "30px",
                color: "rgba(96,165,250,0.9)", // Transparent water color
              }}
            >
              Why We're Different
            </h3>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                gap: "30px",
                width: "100%",
                boxSizing: "border-box",
              }}
            >
              {[
                { icon: "🏊", text: "Skilled Professionals: Surax in water feature design & construction" },
                { icon: "🎯", text: "Custom & Affordable Designs: Tailored to your budget and style" },
                { icon: "⚡", text: "Reliable & Efficient Service: On-time delivery and responsive support" },
              ].map((item, index) => (
                <div
                  key={index}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "15px",
                    padding: "20px",
                    width: "100%",
                    boxSizing: "border-box",
                  }}
                >
                  <div style={{ fontSize: "2.5rem" }}>{item.icon}</div>
                  <p
                    style={{
                      fontSize: "0.95rem", // Professional size
                      color: "rgba(203,213,225,0.8)", // Transparent water color
                      textAlign: "center",
                      lineHeight: "1.6",
                    }}
                  >
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        style={{
          padding: "100px 0", // Remove horizontal padding for full width
          background: "linear-gradient(135deg, #f1f5f9 0%, #ffffff 100%)",
          position: "relative",
          overflow: "hidden",
          width: "100%", // Changed from 100vw
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            maxWidth: "1400px", // Increased max width for full screen
            margin: "0 auto",
            position: "relative",
            zIndex: 2,
            width: "100%",
            boxSizing: "border-box",
            padding: "0 40px", // Add padding back for content
          }}
        >
          <div style={{ textAlign: "center", marginBottom: "80px" }}>
            <h2
              style={{
                fontSize: "2.5rem", // Professional size
                fontWeight: "800",
                color: "rgba(30,41,59,0.9)", // Transparent water color
                marginBottom: "20px",
                animation: "waterColorFlow 10s ease-in-out infinite",
                background: "linear-gradient(45deg, rgba(30,41,59,0.9) 0%, rgba(59,130,246,0.8) 100%)",
                backgroundSize: "300% 300%",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Our Projects
            </h2>
            <div
              style={{
                width: "100px",
                height: "4px",
                background: "linear-gradient(90deg, #3b82f6, #60a5fa)",
                margin: "0 auto",
                borderRadius: "2px",
              }}
            />
            <p
              style={{
                fontSize: "1.1rem", // Professional size
                color: "rgba(100,116,139,0.8)", // Transparent water color
                marginTop: "20px",
              }}
            >
              Showcasing Our Excellence in Water Feature Construction
            </p>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
              gap: "40px",
              width: "100%",
              boxSizing: "border-box",
            }}
          >
            {mediaData.map((project, index) => (
              <div
                key={index}
                style={{
                  borderRadius: "20px",
                  overflow: "hidden",
                  boxShadow: "0 10px 40px rgba(0,0,0,0.1)",
                  transition: "all 0.4s ease",
                  cursor: "pointer",
                  backgroundColor: "white",
                  width: "100%",
                  boxSizing: "border-box",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "translateY(-15px)"
                  e.currentTarget.style.boxShadow = "0 20px 60px rgba(59,130,246,0.15)"
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "translateY(0)"
                  e.currentTarget.style.boxShadow = "0 10px 40px rgba(0,0,0,0.1)"
                }}
              >
                <div
                  style={{
                    height: "250px",
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.1)), url(${project.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    position: "relative",
                  }}
                />
                <div style={{ padding: "30px" }}>
                  <h3
                    style={{
                      fontSize: "1.2rem", // Professional size
                      fontWeight: "700",
                      color: "rgba(30,41,59,0.9)", // Transparent water color
                      marginBottom: "15px",
                    }}
                  >
                    {project.label}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.95rem", // Professional size
                      color: "rgba(100,116,139,0.8)", // Transparent water color
                      lineHeight: "1.6",
                    }}
                  >
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        style={{
          padding: "100px 0", // Remove horizontal padding for full width
          background: "linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)",
          color: "white",
          position: "relative",
          overflow: "hidden",
          width: "100%", // Changed from 100vw
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
              "radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(255,255,255,0.1) 0%, transparent 50%)",
            animation: "waterFlow 30s ease-in-out infinite",
          }}
        />
        <div
          style={{
            maxWidth: "1400px", // Increased max width for full screen
            margin: "0 auto",
            position: "relative",
            zIndex: 2,
            width: "100%",
            boxSizing: "border-box",
            padding: "0 40px", // Add padding back for content
          }}
        >
          <div style={{ textAlign: "center", marginBottom: "80px" }}>
            <h2
              style={{
                fontSize: "2.5rem", // Professional size
                fontWeight: "800",
                color: "rgba(255,255,255,0.9)", // Transparent water color
                marginBottom: "20px",
                textShadow: "0 0 30px rgba(255,255,255,0.3)",
                animation: "waterColorFlow 12s ease-in-out infinite",
                background:
                  "linear-gradient(45deg, rgba(255,255,255,0.9), rgba(96,165,250,0.8), rgba(255,255,255,0.9))",
                backgroundSize: "300% 300%",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Contact Us
            </h2>
            <div
              style={{
                width: "100px",
                height: "4px",
                background: "linear-gradient(90deg, #ffffff, rgba(255,255,255,0.7))",
                margin: "0 auto",
                borderRadius: "2px",
              }}
            />
            <p
              style={{
                fontSize: "1.1rem", // Professional size
                color: "rgba(255,255,255,0.8)", // Transparent water color
                marginTop: "20px",
              }}
            >
              Ready to Transform Your Space? Let's Build Your Dream Together!
            </p>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "80px",
              alignItems: "center",
              width: "100%",
              boxSizing: "border-box",
            }}
          >
            {/* Left - Contact Info with Transparent Background and Pop Animation */}
            <div>
              <h3
                style={{
                  fontSize: "1.5rem", // Professional size
                  fontWeight: "700",
                  marginBottom: "30px",
                  color: "rgba(255,255,255,0.9)", // Transparent water color
                }}
              >
                Get In Touch
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "25px" }}>
                {[
                  {
                    icon: <MapPin style={{ width: "20px", height: "20px" }} />,
                    title: "Location",
                    info: "Addis Ababa, Ethiopia",
                  },
                  {
                    icon: <Phone style={{ width: "20px", height: "20px" }} />,
                    title: "Phone",
                    info: "+251-947085168",
                  },
                  {
                    icon: <Clock style={{ width: "20px", height: "20px" }} />,
                    title: "Working Hours",
                    info: showWorkingHours ? "Mon - Sat: 8:00 - 17:30" : "Sunday: CLOSED",
                    isAnimated: true,
                  },
                ].map((contact, index) => (
                  <div
                    key={index}
                    style={{
                      display: showContactInfo ? "flex" : "none", // Pop up/disappear effect
                      alignItems: "flex-start",
                      gap: "20px",
                      padding: "20px",
                      backgroundColor: "rgba(255,255,255,0.05)", // More transparent
                      borderRadius: "15px",
                      border: "1px solid rgba(255,255,255,0.1)", // More transparent
                      animation: showContactInfo ? "contactPop 0.5s ease-out" : "contactFade 0.5s ease-in",
                      backdropFilter: "blur(10px)",
                      transition: "all 0.3s ease",
                    }}
                  >
                    <div
                      style={{
                        color: "rgba(96,165,250,0.9)", // Transparent water color
                        backgroundColor: "rgba(255,255,255,0.05)", // More transparent
                        padding: "10px",
                        borderRadius: "10px",
                      }}
                    >
                      {contact.icon}
                    </div>
                    <div>
                      <h4
                        style={{
                          fontSize: "1rem", // Professional size
                          fontWeight: "600",
                          marginBottom: "5px",
                          color: "rgba(96,165,250,0.9)", // Transparent water color
                        }}
                      >
                        {contact.title}
                      </h4>
                      <p
                        style={{
                          fontSize: "0.95rem", // Professional size
                          color: "rgba(255,255,255,0.8)", // Transparent water color
                          lineHeight: "1.5",
                          whiteSpace: "pre-line",
                          animation: contact.isAnimated ? "workingHoursPop 2s ease-in-out infinite" : "none",
                          transform: contact.isAnimated && showWorkingHours ? "scale(1.05)" : "scale(1)",
                          transition: "all 0.3s ease",
                        }}
                      >
                        {contact.info}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Media */}
              <div style={{ marginTop: "40px" }}>
                <h4
                  style={{
                    fontSize: "1.1rem", // Professional size
                    fontWeight: "600",
                    marginBottom: "20px",
                    color: "rgba(255,255,255,0.9)", // Transparent water color
                  }}
                >
                  Follow Us
                </h4>
                <div style={{ display: "flex", gap: "15px" }}>
                  {[
                    { Icon: Facebook, bg: "#1877f2", name: "Facebook" },
                    { Icon: Twitter, bg: "#1da1f2", name: "Twitter" },
                    { Icon: Instagram, bg: "#e4405f", name: "Instagram" },
                    { Icon: Linkedin, bg: "#0077b5", name: "LinkedIn" },
                  ].map(({ Icon, bg, name }, index) => (
                    <a
                      key={index}
                      href="#"
                      title={name}
                      style={{
                        backgroundColor: bg,
                        padding: "12px",
                        borderRadius: "10px",
                        transition: "all 0.3s ease",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                      onMouseOver={(e) => {
                        e.target.style.transform = "scale(1.1) rotate(5deg)"
                        e.target.style.boxShadow = "0 10px 30px rgba(0,0,0,0.3)"
                      }}
                      onMouseOut={(e) => {
                        e.target.style.transform = "scale(1) rotate(0deg)"
                        e.target.style.boxShadow = "none"
                      }}
                    >
                      <Icon style={{ width: "18px", height: "18px", color: "white" }} />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right - CTA */}
            <div
              style={{
                backgroundColor: "rgba(255,255,255,0.05)", // More transparent
                backdropFilter: "blur(10px)",
                borderRadius: "25px",
                padding: "50px",
                border: "1px solid rgba(255,255,255,0.1)", // More transparent
                textAlign: "center",
                width: "100%",
                boxSizing: "border-box",
              }}
            >
              <h3
                style={{
                  fontSize: "1.8rem", // Professional size
                  fontWeight: "700",
                  marginBottom: "20px",
                  color: "rgba(255,255,255,0.9)", // Transparent water color
                }}
              >
                Ready to Start?
              </h3>
              <p
                style={{
                  fontSize: "1rem", // Professional size
                  color: "rgba(255,255,255,0.8)", // Transparent water color
                  marginBottom: "30px",
                  lineHeight: "1.6",
                }}
              >
                Transform your space with our surax swimming pool, jacuzzi, fountain, and aquarium construction
                services. Contact us today for a free consultation!
              </p>
              <button
                style={{
                  backgroundColor: "#f97316",
                  color: "white",
                  padding: "15px 40px",
                  borderRadius: "50px",
                  border: "none",
                  fontSize: "1rem", // Professional size
                  fontWeight: "600",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  boxShadow: "0 10px 30px rgba(249,115,22,0.3)",
                }}
                onMouseOver={(e) => {
                  e.target.style.backgroundColor = "#ea580c"
                  e.target.style.transform = "translateY(-3px)"
                  e.target.style.boxShadow = "0 15px 40px rgba(249,115,22,0.4)"
                }}
                onMouseOut={(e) => {
                  e.target.style.backgroundColor = "#f97316"
                  e.target.style.transform = "translateY(0)"
                  e.target.style.boxShadow = "0 10px 30px rgba(249,115,22,0.3)"
                }}
              >
                Get Free Quote
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Combined Contact Pop-up - Small and Transparent */}
      {showContactInfo && (
        <div
          style={{
            position: "fixed",
            top: "70px", // Below navbar
            right: "15px",
            zIndex: 45,
            backgroundColor: "rgba(59,130,246,0.15)", // Much more transparent
            backdropFilter: "blur(5px)", // Reduced blur
            color: "white",
            padding: "8px 12px", // Much smaller padding
            borderRadius: "8px", // Smaller border radius
            border: "1px solid rgba(255,255,255,0.1)", // Very subtle border
            boxShadow: "0 2px 8px rgba(59,130,246,0.1)", // Very subtle shadow
            animation: "contactPop 0.5s ease-out",
            cursor: "pointer",
            transition: "all 0.3s ease",
            minWidth: "140px", // Much smaller width
            fontSize: "0.7rem", // Smaller font
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.backgroundColor = "rgba(59,130,246,0.25)" // Slightly less transparent on hover
            e.currentTarget.style.boxShadow = "0 3px 12px rgba(59,130,246,0.2)"
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.backgroundColor = "rgba(59,130,246,0.15)"
            e.currentTarget.style.boxShadow = "0 2px 8px rgba(59,130,246,0.1)"
          }}
        >
          {/* Phone Section */}
          <div style={{ marginBottom: "6px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "4px", marginBottom: "2px" }}>
              <Phone style={{ width: "10px", height: "10px", color: "#ffffff" }} />
              <span style={{ fontSize: "0.6rem", fontWeight: "500" }}>Call</span>
            </div>
            <div style={{ fontSize: "0.7rem", fontWeight: "600", paddingLeft: "14px" }}>+251-947085168</div>
          </div>

          {/* Working Hours Section */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "4px", marginBottom: "2px" }}>
              <Clock style={{ width: "10px", height: "10px", color: "#ffffff" }} />
              <span style={{ fontSize: "0.6rem", fontWeight: "500" }}>Hours</span>
            </div>
            <div style={{ paddingLeft: "14px" }}>
              <div style={{ fontSize: "0.65rem", fontWeight: "500" }}>Mon-Sat: 8-17:30</div>
              <div style={{ fontSize: "0.6rem", opacity: 0.8 }}>Sun: Closed</div>
            </div>
          </div>
        </div>
      )}

      {/* Enhanced CSS animations */}
      <style jsx>{`
        @keyframes waveFloat {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-5px) rotate(10deg);
          }
        }

        @keyframes waveAnimation {
          0%, 100% {
            transform: scale(1) rotate(0deg);
          }
          50% {
            transform: scale(1.2) rotate(15deg);
          }
        }

        @keyframes dropAnimation {
          0%, 100% {
            transform: translateY(0px) scale(1);
          }
          50% {
            transform: translateY(-3px) scale(1.1);
          }
        }

        @keyframes titleFloat {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-5px);
          }
        }

        @keyframes titleGlow {
          0%, 100% {
            text-shadow: 0 0 10px rgba(59,130,246,0.3);
          }
          50% {
            text-shadow: 0 0 20px rgba(59,130,246,0.6);
          }
        }

        @keyframes cardFloat {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-2px);
          }
        }

        @keyframes waterRippleCard {
          0% {
            transform: scale(0);
            opacity: 0.8;
          }
          50% {
            transform: scale(1.5);
            opacity: 0.4;
          }
          100% {
            transform: scale(2.5);
            opacity: 0;
          }
        }

        @keyframes waterWaveEffect {
          0%, 100% {
            opacity: 0.1;
            transform: scale(1);
          }
          50% {
            opacity: 0.3;
            transform: scale(1.1);
          }
        }

        @keyframes contactPop {
          0% {
            opacity: 0;
            transform: scale(0.8) translateY(20px);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        @keyframes contactFade {
          0% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
          100% {
            opacity: 0;
            transform: scale(0.8) translateY(-20px);
          }
        }

        @keyframes socialSlideIn {
          0% {
             opacity: 0;
             transform: translateY(-50%) translateX(-30px);
           }
          100% {
             opacity: 1;
             transform: translateY(-50%) translateX(0);
           }
        }
                
        @keyframes socialFadeIn {
          0% {
             opacity: 0;
             transform: translateX(-20px) scale(0.8);
           }
          100% {
             opacity: 1;
             transform: translateX(0) scale(1);
           }
        }
                
        @keyframes slideInLeft {
          0% { opacity: 0; transform: translateY(-50%) translateX(-30px); }
          100% { opacity: 1; transform: translateY(-50%) translateX(0); }
        }
                
        @keyframes slideInRight {
          0% { opacity: 0; transform: translateY(-50%) translateX(30px); }
          100% { opacity: 1; transform: translateY(-50%) translateX(0); }
        }
                
        @keyframes textSlideIn {
          0% {
             opacity: 0;
             transform: translateY(50px) scale(0.9);
             filter: blur(8px);
          }
          50% {
             opacity: 0.7;
             transform: translateY(15px) scale(0.95);
             filter: blur(4px);
          }
          100% {
             opacity: 1;
             transform: translateY(0) scale(1);
             filter: blur(0px);
          }
        }
                
        @keyframes textSlideOut {
          0% {
             opacity: 1;
             transform: translateY(0) scale(1);
             filter: blur(0px);
          }
          100% {
             opacity: 0;
             transform: translateY(-50px) scale(0.9);
             filter: blur(8px);
          }
        }
                
        @keyframes textFadeIn {
          0% {
             opacity: 0;
             transform: translateY(30px) scale(0.95);
             filter: blur(6px);
          }
          100% {
             opacity: 1;
             transform: translateY(0) scale(1);
             filter: blur(0px);
          }
        }
                
        @keyframes textFadeOut {
          0% {
             opacity: 1;
             transform: translateY(0);
             filter: blur(0px);
          }
          100% {
             opacity: 0;
             transform: translateY(30px);
             filter: blur(6px);
          }
        }
                
        @keyframes waterColorFlow {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
                
        @keyframes waterFill {
          0% {
             transform: translateY(100%);
             opacity: 0;
          }
          50% {
             transform: translateY(50%);
             opacity: 0.8;
          }
          100% {
             transform: translateY(0%);
             opacity: 1;
          }
        }
                
        @keyframes waterWave {
          0%, 100% {
             background: linear-gradient(0deg, #1e40af 0%, #3b82f6 50%, #60a5fa 100%);
          }
          50% {
             background: linear-gradient(0deg, #1d4ed8 0%, #2563eb 50%, #3b82f6 100%);
          }
        }
                
        @keyframes waterRipple {
          0% {
             transform: translate(-50%, -50%) scale(1);
             opacity: 0.6;
          }
          50% {
             transform: translate(-50%, -50%) scale(2.5);
             opacity: 0.3;
          }
          100% {
             transform: translate(-50%, -50%) scale(4);
             opacity: 0;
          }
        }
                
        @keyframes waterFlow {
          0%, 100% {
             transform: translateX(0) translateY(0) scale(1);
            opacity: 0.5;
          }
          25% {
             transform: translateX(20px) translateY(-10px) scale(1.05);
            opacity: 0.7;
          }
          50% {
             transform: translateX(-10px) translateY(20px) scale(0.95);
            opacity: 0.6;
          }
          75% {
             transform: translateX(-20px) translateY(-5px) scale(1.02);
            opacity: 0.8;
          }
        }

        @keyframes workingHoursPop {
          0%, 100% {
            transform: scale(1);
            color: rgba(255,255,255,0.8);
          }
          50% {
            transform: scale(1.05);
            color: rgba(96,165,250,0.9);
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

        @keyframes textFloat {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-2px);
          }
        }
        
        @keyframes pulseGlow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(255,255,255,0.2);
            transform: scale(1);
          }
          50% {
            box-shadow: 0 0 40px rgba(255,255,255,0.4);
            transform: scale(1.05);
          }
        }

        @keyframes shimmer {
          0%, 100% {
            opacity: 0.7;
          }
          50% {
            opacity: 1;
          }
        }

        @keyframes phonePopUp {
          0%, 100% {
            transform: translateY(0px) scale(1);
            box-shadow: 0 10px 30px rgba(59,130,246,0.3);
          }
          50% {
            transform: translateY(-5px) scale(1.02);
            box-shadow: 0 15px 40px rgba(59,130,246,0.5);
          }
        }

        @keyframes hoursPopUp {
          0%, 100% {
            transform: translateY(0px) scale(1);
            box-shadow: 0 10px 30px rgba(249,115,22,0.3);
          }
          50% {
            transform: translateY(-5px) scale(1.02);
            box-shadow: 0 15px 40px rgba(249,115,22,0.5);
          }
        }

        @keyframes contactPopupSlideIn {
          0% {
            opacity: 0;
            transform: translateX(30px) scale(0.9);
          }
          100% {
            opacity: 1;
            transform: translateX(0) scale(1);
          }
        }

        @keyframes waterGlow {
          0%, 100% {
            box-shadow: 0 15px 40px rgba(59,130,246,0.4), 0 0 30px rgba(59,130,246,0.2);
          }
          50% {
            box-shadow: 0 20px 50px rgba(59,130,246,0.6), 0 0 40px rgba(59,130,246,0.4);
          }
        }

        @keyframes waterRippleContact {
          0% {
            transform: scale(0);
            opacity: 0.8;
          }
          50% {
            transform: scale(1.5);
            opacity: 0.4;
          }
          100% {
            transform: scale(2.5);
            opacity: 0;
          }
        }

        @keyframes waterFlowContact {
          0%, 100% {
            transform: translateX(0) translateY(0) scale(1);
            opacity: 0.3;
          }
          25% {
            transform: translateX(10px) translateY(-5px) scale(1.05);
            opacity: 0.5;
          }
          50% {
            transform: translateX(-5px) translateY(10px) scale(0.95);
            opacity: 0.4;
          }
          75% {
            transform: translateX(-10px) translateY(-3px) scale(1.02);
            opacity: 0.6;
          }
        }

        @keyframes phoneFloat {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-3px) rotate(5deg);
          }
        }

        @keyframes clockFloat {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-2px) rotate(-5deg);
          }
        }

        @keyframes waterSplash {
          0%, 100% {
            opacity: 0.3;
            transform: translateX(-50%) scale(1);
          }
          50% {
            opacity: 0.6;
            transform: translateX(-50%) scale(1.2);
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

        @keyframes waterGradientFlow {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        @keyframes buttonRipple {
          0% {
            width: 0;
            height: 0;
            opacity: 1;
          }
          100% {
            width: 300px;
            height: 300px;
            opacity: 0;
          }
        }

        @keyframes buttonSplash {
          0% {
            transform: scale(0);
            opacity: 0.8;
          }
          50% {
            transform: scale(1.2);
            opacity: 0.4;
          }
          100% {
            transform: scale(1.8);
            opacity: 0;
          }
        }

        @keyframes buttonWaveFlow {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        @keyframes discoverIcon {
          0%, 100% {
            transform: scale(1) rotate(0deg);
          }
          50% {
            transform: scale(1.2) rotate(15deg);
          }
        }

        @keyframes arrowFloat {
          0%, 100% {
            transform: translateX(0px);
          }
          50% {
            transform: translateX(5px);
          }
        }
      `}</style>
    </div>
  )
}

export default Home
