"use client"
import { useState, useEffect } from "react"
import { Facebook, Instagram, Linkedin, ChevronLeft, ChevronRight } from "lucide-react"
import Navbar from "./Navbar"
import Footer from "./Footer"

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

// Service background images
const serviceImages = [
  "https://images.pexels.com/photos/2227774/pexels-photo-2227774.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/8845113/pexels-photo-8845113.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/1058282/pexels-photo-1058282.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/2446439/pexels-photo-2446439.jpeg?auto=compress&cs=tinysrgb&w=800",
]

// Testimonials data
const testimonials = [
  {
    name: "Ahmed Hassan",
    role: "Villa Owner",
    image: "/placeholder.svg?height=80&width=80",
    text: "Surax built an amazing swimming pool for our villa. The quality and attention to detail exceeded our expectations. Highly recommended!",
    rating: 5,
  },
  {
    name: "Sarah Mekonnen",
    role: "Hotel Manager",
    image: "/placeholder.svg?height=80&width=80",
    text: "The fountain they installed at our hotel lobby is absolutely stunning. It has become the centerpiece that guests always admire.",
    rating: 5,
  },
  {
    name: "David Tadesse",
    role: "Restaurant Owner",
    image: "/placeholder.svg?height=80&width=80",
    text: "Our aquarium installation was completed on time and within budget. The fish are thriving and customers love the ambiance it creates.",
    rating: 5,
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
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  // Contact form state
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Counter states
  const [counters, setCounters] = useState({
    customers: 0,
    experience: 0,
    projects: 0,
    engineers: 0,
  })

  const [hasAnimated, setHasAnimated] = useState(false)

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

  // Social media icons - show/hide every 5 seconds
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

  // Testimonial auto-slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  // Counter animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCounters() // Remove hasAnimated condition
          }
        })
      },
      { threshold: 0.3 }, // Lower threshold
    )

    const statsSection = document.getElementById("stats-section")
    if (statsSection) {
      observer.observe(statsSection)
    }

    // Also trigger on page load
    const timer = setTimeout(() => {
      const statsElement = document.getElementById("stats-section")
      if (statsElement) {
        const rect = statsElement.getBoundingClientRect()
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          animateCounters()
        }
      }
    }, 1000)

    return () => {
      observer.disconnect()
      clearTimeout(timer)
    }
  }, []) // Remove hasAnimated dependency

  const animateCounters = () => {
    const targets = { customers: 18, experience: 8, projects: 15, engineers: 12 } // Change from higher numbers
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

  const handleContactSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Create mailto link with form data
      const subject = encodeURIComponent(`Contact Form Submission from ${contactForm.name}`)
      const body = encodeURIComponent(`
Name: ${contactForm.name}
Email: ${contactForm.email}
Phone: ${contactForm.phone}

Message:
${contactForm.message}
      `)

      const mailtoLink = `mailto:abiy1691@gmail.com?subject=${subject}&body=${body}`
      window.open(mailtoLink)

      // Reset form
      setContactForm({
        name: "",
        email: "",
        phone: "",
        message: "",
      })

      alert("Email client opened! Please send the email from your email application.")
    } catch (error) {
      console.error("Error:", error)
      alert("There was an error. Please try again or contact us directly.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setContactForm((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

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
        width: "100%",
        maxWidth: "none",
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
            left: "10px",
            top: "60%",
            transform: "translateY(-50%)",
            zIndex: 45,
            display: "flex",
            flexDirection: "column",
            gap: "8px",
            animation: "socialSlideIn 0.6s ease-out",
          }}
        >
          {[
            { Icon: Facebook, bg: "#1877f2", label: "Facebook" },
            { Icon: Instagram, bg: "#e4405f", label: "Instagram" },
            { Icon: Linkedin, bg: "#0077b5", label: "LinkedIn" },
          ].map(({ Icon, bg, label }, index) => (
            <a
              key={index}
              href="#"
              title={label}
              style={{
                backgroundColor: bg,
                padding: "8px",
                borderRadius: "50%",
                transition: "all 0.4s ease",
                backdropFilter: "blur(8px)",
                border: "1px solid rgba(255,255,255,0.2)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                animation: `socialFadeIn 0.6s ease-in-out ${index * 0.1}s both`,
                boxShadow: "0 2px 10px rgba(0,0,0,0.15)",
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
              <Icon style={{ width: "12px", height: "12px", color: "white" }} />
            </a>
          ))}
          {/* X (Twitter) Icon */}
          <a
            href="#"
            title="X (Twitter)"
            style={{
              backgroundColor: "#000000",
              padding: "8px",
              borderRadius: "50%",
              transition: "all 0.4s ease",
              backdropFilter: "blur(8px)",
              border: "1px solid rgba(255,255,255,0.2)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              animation: `socialFadeIn 0.6s ease-in-out 0.3s both`,
              boxShadow: "0 2px 10px rgba(0,0,0,0.15)",
              fontSize: "12px",
              fontWeight: "bold",
              color: "white",
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
            𝕏
          </a>
        </div>
      )}

      {/* Hero Section */}
      <section
        id="home"
        style={{
          position: "relative",
          width: "100%",
          height: "100vh",
          overflow: "hidden",
          paddingTop: "40px",
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
          paddingTop: "40px",
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
            maxWidth: "1400px",
          }}
        >
          {/* Main Title with Water Color Animation */}
          <h1
            key={`title-${currentSlide}`}
            style={{
              fontSize: "3rem",
              fontWeight: "700",
              marginBottom: "25px",
              color: "white", // Changed to white
              textShadow: "2px 2px 8px rgba(0,0,0,0.8), 0 0 30px rgba(255,255,255,0.3)",
              lineHeight: "1.1",
              letterSpacing: "1px",
              animation: isTransitioning
                ? "textSlideOut 0.5s ease-in-out"
                : "textSlideIn 1s ease-out 0.2s both, waterColorFlow 6s ease-in-out infinite",
              transform: isTransitioning ? "translateY(-40px) scale(0.95)" : "translateY(0) scale(1)",
              opacity: isTransitioning ? 0 : 1,
              transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
            }}
          >
            {currentMedia.label}
          </h1>
          {/* Description */}
          <p
            key={`desc-${currentSlide}`}
            style={{
              fontSize: "1.1rem",
              marginBottom: "60px",
              maxWidth: "900px",
              margin: "0 auto 60px auto",
              textShadow: "1px 1px 4px rgba(0,0,0,0.8)",
              lineHeight: "1.5",
              color: "white", // Changed to white
              fontWeight: "400",
              letterSpacing: "0.5px",
              animation: isTransitioning ? "textFadeOut 0.4s ease-in-out" : "textFadeIn 0.8s ease-out 0.4s both",
              transform: isTransitioning ? "translateY(30px)" : "translateY(0)",
              opacity: isTransitioning ? 0 : 1,
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
          padding: "100px 0",
          background: "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)",
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
              "radial-gradient(circle at 20% 80%, rgba(59,130,246,0.05) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(59,130,246,0.05) 0%, transparent 50%)",
            animation: "waterFlow 20s ease-in-out infinite",
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
            padding: "0 40px",
          }}
        >
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center" }}>
            {/* Left Content */}
            <div>
              {/* Animated Title */}
              <h3
                style={{
                  fontSize: "1.8rem",
                  fontWeight: "700",
                  color: "rgba(30,41,59,0.9)",
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
                  fontSize: "1.5rem",
                  fontWeight: "600",
                  color: "rgba(59,130,246,0.9)",
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
                  fontSize: "1rem",
                  lineHeight: "1.8",
                  color: "rgba(71,85,105,0.8)",
                  marginBottom: "30px",
                }}
              >
                At Surax Swimming Pool Construction, we specialize in turning dreams into reality. Whether you're
                building a serene swimming pool, a luxurious jacuzzi, a decorative fountain, or a vibrant aquarium, we
                bring unmatched craftsmanship, custom designs, and lasting quality — right here in Ethiopia.
              </p>
              {/* Why Choose Surax */}
              <div style={{ marginBottom: "30px" }}>
                <h4
                  style={{
                    fontSize: "1.3rem",
                    fontWeight: "700",
                    color: "rgba(30,41,59,0.9)",
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
                        fontSize: "0.95rem",
                        color: "rgba(71,85,105,0.8)",
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
              {/* Discover More Button */}
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
                  }}
                  onMouseOut={(e) => {
                    e.target.style.transform = "translateY(0) scale(1)"
                    e.target.style.boxShadow = "0 8px 25px rgba(59,130,246,0.3), 0 0 0 0 rgba(59,130,246,0.4)"
                    e.target.style.backgroundPosition = "0% 0%"
                  }}
                >
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
            {/* Right Content - Video */}
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
                <source
                  src="https://videos.pexels.com/video-files/853872/853872-hd_1920_1080_25fps.mp4"
                  type="video/mp4"
                />
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

      {/* Enhanced Services Section with Background Images */}
      <section
        id="services"
        style={{
          padding: "100px 0",
          background: "#ffffff", // White background as requested
          color: "#1e293b",
          position: "relative",
          overflow: "hidden",
          width: "100%",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
            position: "relative",
            zIndex: 2,
            width: "100%",
            boxSizing: "border-box",
            padding: "0 40px",
          }}
        >
          <div style={{ textAlign: "center", marginBottom: "80px" }}>
            <h2
              style={{
                fontSize: "2.5rem",
                fontWeight: "800",
                color: "#1e293b",
                marginBottom: "20px",
                textShadow: "0 0 30px rgba(59,130,246,0.3)",
                animation: "waterColorFlow 8s ease-in-out infinite",
                background: "linear-gradient(45deg, #1e293b, #3b82f6, #1e293b)",
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
                fontSize: "1.1rem",
                color: "#64748b",
                marginTop: "20px",
                maxWidth: "600px",
                margin: "20px auto 0",
              }}
            >
              🛠️ What We Offer - Professional Water Feature Solutions
            </p>
          </div>

          {/* Service Cards with Background Images */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "40px",
              width: "100%",
              boxSizing: "border-box",
              marginBottom: "60px",
            }}
          >
            {[
              {
                title: "Swimming Pool Construction",
                description:
                  "Custom swimming pool designs with superior quality and professional installation. Transform your backyard into a luxury oasis with our expert craftsmanship.",
                image: serviceImages[0],
              },
              {
                title: "Jacuzzi Installation",
                description:
                  "Luxury jacuzzi setups for ultimate relaxation and comfort in your space. Experience therapeutic benefits with our premium installations.",
                image: serviceImages[1],
              },
              {
                title: "Fountain Design",
                description:
                  "Elegant decorative fountains that add beauty and tranquility to any environment. Perfect for hotels, restaurants, and residential properties.",
                image: serviceImages[2],
              },
              {
                title: "Aquarium Setup",
                description:
                  "Custom aquarium installations with vibrant designs and expert maintenance. Bring the underwater world into your home or office space.",
                image: serviceImages[3],
              },
            ].map((service, index) => (
              <div
                key={index}
                style={{
                  position: "relative",
                  height: "400px",
                  borderRadius: "20px",
                  overflow: "hidden",
                  cursor: "pointer",
                  transition: "all 0.4s ease",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                  backgroundImage: `url(${service.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  animation: "waterFloat 6s ease-in-out infinite",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "translateY(-15px) scale(1.02)"
                  e.currentTarget.style.boxShadow = "0 25px 50px rgba(59,130,246,0.3)"

                  // Show description overlay
                  const overlay = e.currentTarget.querySelector(".service-overlay")
                  if (overlay) {
                    overlay.style.opacity = "1"
                    overlay.style.transform = "translateY(0)"
                  }
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "translateY(0) scale(1)"
                  e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.1)"

                  // Hide description overlay
                  const overlay = e.currentTarget.querySelector(".service-overlay")
                  if (overlay) {
                    overlay.style.opacity = "0"
                    overlay.style.transform = "translateY(20px)"
                  }
                }}
              >
                {/* Water ripple effect */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: "radial-gradient(circle, rgba(59,130,246,0.1) 0%, transparent 70%)",
                    animation: "waterRippleService 4s ease-in-out infinite",
                    pointerEvents: "none",
                  }}
                />

                {/* Title overlay - always visible */}
                <div
                  style={{
                    position: "absolute",
                    bottom: "0",
                    left: "0",
                    right: "0",
                    background: "linear-gradient(transparent, rgba(0,0,0,0.8))",
                    padding: "40px 30px 30px",
                    color: "white",
                  }}
                >
                  <h3
                    style={{
                      fontSize: "1.4rem",
                      fontWeight: "700",
                      marginBottom: "10px",
                      textShadow: "0 2px 4px rgba(0,0,0,0.8)",
                    }}
                  >
                    {service.title}
                  </h3>
                </div>

                {/* Description overlay - shown on hover */}
                <div
                  className="service-overlay"
                  style={{
                    position: "absolute",
                    top: "0",
                    left: "0",
                    right: "0",
                    bottom: "0",
                    background: "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.9))",
                    padding: "40px 30px",
                    color: "white",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                    opacity: "0",
                    transform: "translateY(20px)",
                    transition: "all 0.4s ease",
                    backdropFilter: "blur(5px)",
                  }}
                >
                  <h3
                    style={{
                      fontSize: "1.4rem",
                      fontWeight: "700",
                      marginBottom: "20px",
                      textShadow: "0 2px 4px rgba(0,0,0,0.8)",
                    }}
                  >
                    {service.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "1rem",
                      lineHeight: "1.6",
                      textShadow: "0 1px 2px rgba(0,0,0,0.8)",
                    }}
                  >
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Discover More Button */}
          <div style={{ textAlign: "center", marginBottom: "80px" }}>
            <button
              onClick={() => {
                document.getElementById("stats-section").scrollIntoView({
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
                boxShadow: "0 8px 25px rgba(59,130,246,0.3)",
                position: "relative",
                overflow: "hidden",
                animation: "buttonFloat 3s ease-in-out infinite, waterGradientFlow 4s ease-in-out infinite",
                textShadow: "0 2px 4px rgba(0,0,0,0.3)",
                letterSpacing: "0.5px",
              }}
              onMouseOver={(e) => {
                e.target.style.transform = "translateY(-5px) scale(1.05)"
                e.target.style.boxShadow = "0 15px 40px rgba(59,130,246,0.5)"
                e.target.style.backgroundPosition = "100% 0%"
              }}
              onMouseOut={(e) => {
                e.target.style.transform = "translateY(0) scale(1)"
                e.target.style.boxShadow = "0 8px 25px rgba(59,130,246,0.3)"
                e.target.style.backgroundPosition = "0% 0%"
              }}
            >
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
      </section>

      {/* Stats Section */}
      <section
        id="stats-section"
        style={{
          padding: "100px 0",
          background: "linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%)",
          position: "relative",
          overflow: "hidden",
          width: "100%",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
            position: "relative",
            zIndex: 2,
            width: "100%",
            boxSizing: "border-box",
            padding: "0 40px",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "40px",
              width: "100%",
              boxSizing: "border-box",
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
                title: "Qualified Engineers",
                description: "Expert team members",
              },
            ].map((stat, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: "white",
                  borderRadius: "20px",
                  padding: "40px 30px",
                  textAlign: "center",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                  transition: "all 0.4s ease",
                  cursor: "pointer",
                  position: "relative",
                  overflow: "hidden",
                  animation: `statFloat ${3 + index * 0.5}s ease-in-out infinite`,
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "translateY(-15px) scale(1.05)"
                  e.currentTarget.style.boxShadow = "0 25px 50px rgba(59,130,246,0.2)"

                  // Water ripple effect
                  const ripple = document.createElement("div")
                  ripple.style.position = "absolute"
                  ripple.style.top = "50%"
                  ripple.style.left = "50%"
                  ripple.style.transform = "translate(-50%, -50%)"
                  ripple.style.width = "0"
                  ripple.style.height = "0"
                  ripple.style.borderRadius = "50%"
                  ripple.style.background = "radial-gradient(circle, rgba(59,130,246,0.3) 0%, transparent 70%)"
                  ripple.style.animation = "statRipple 1s ease-out"
                  ripple.style.pointerEvents = "none"
                  ripple.style.zIndex = "1"
                  e.currentTarget.appendChild(ripple)
                  setTimeout(() => {
                    if (ripple.parentNode) {
                      ripple.parentNode.removeChild(ripple)
                    }
                  }, 1000)
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "translateY(0) scale(1)"
                  e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.1)"
                }}
              >
                <div
                  style={{
                    fontSize: "3rem",
                    marginBottom: "20px",
                    animation: `iconBounce ${2 + index * 0.3}s ease-in-out infinite`,
                  }}
                >
                  {stat.icon}
                </div>
                <div
                  style={{
                    fontSize: "2.5rem",
                    fontWeight: "800",
                    color: "#3b82f6",
                    marginBottom: "10px",
                    textShadow: "0 2px 4px rgba(59,130,246,0.3)",
                  }}
                >
                  {stat.number}
                  {stat.suffix}
                </div>
                <h3
                  style={{
                    fontSize: "1.2rem",
                    fontWeight: "700",
                    color: "#1e293b",
                    marginBottom: "10px",
                  }}
                >
                  {stat.title}
                </h3>
                <p
                  style={{
                    fontSize: "0.9rem",
                    color: "#64748b",
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

      {/* Enhanced Projects Section */}
      <section
        id="projects"
        style={{
          padding: "100px 0",
          background: "linear-gradient(135deg, #f1f5f9 0%, #ffffff 100%)",
          position: "relative",
          overflow: "hidden",
          width: "100%",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
            position: "relative",
            zIndex: 2,
            width: "100%",
            boxSizing: "border-box",
            padding: "0 40px",
          }}
        >
          <div style={{ textAlign: "center", marginBottom: "80px" }}>
            <h2
              style={{
                fontSize: "2.5rem",
                fontWeight: "800",
                color: "rgba(30,41,59,0.9)",
                marginBottom: "20px",
                animation: "waterColorFlow 10s ease-in-out infinite",
                background: "linear-gradient(45deg, rgba(30,41,59,0.9) 0%, rgba(59,130,246,0.8) 100%)",
                backgroundSize: "300% 300%",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Our Completed Projects
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
                fontSize: "1.1rem",
                color: "rgba(100,116,139,0.8)",
                marginTop: "20px",
                maxWidth: "700px",
                margin: "20px auto 0",
              }}
            >
              Showcasing Our Excellence in Water Feature Construction - From Swimming Pools to Luxury Aquariums
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "20px",
              width: "100%",
              boxSizing: "border-box",
              marginBottom: "60px",
            }}
          >
            {mediaData.map((project, index) => (
              <div
                key={index}
                style={{
                  borderRadius: "15px",
                  overflow: "hidden",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                  transition: "all 0.4s ease",
                  cursor: "pointer",
                  width: "100%",
                  height: "250px",
                  boxSizing: "border-box",
                  animation: `projectFloat ${4 + index * 0.5}s ease-in-out infinite`,
                }}
                onClick={() => {
                  // Create modal for large image display
                  const modal = document.createElement("div")
                  modal.style.position = "fixed"
                  modal.style.top = "0"
                  modal.style.left = "0"
                  modal.style.width = "100%"
                  modal.style.height = "100%"
                  modal.style.backgroundColor = "rgba(0,0,0,0.9)"
                  modal.style.display = "flex"
                  modal.style.alignItems = "center"
                  modal.style.justifyContent = "center"
                  modal.style.zIndex = "1000"
                  modal.style.cursor = "pointer"

                  const img = document.createElement("img")
                  img.src = project.image
                  img.style.maxWidth = "90%"
                  img.style.maxHeight = "90%"
                  img.style.objectFit = "contain"
                  img.style.borderRadius = "10px"

                  modal.appendChild(img)
                  modal.onclick = () => document.body.removeChild(modal)
                  document.body.appendChild(modal)
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "scale(1.05)"
                  e.currentTarget.style.boxShadow = "0 20px 40px rgba(59,130,246,0.2)"
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "scale(1)"
                  e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.1)"
                }}
              >
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.label}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>
            ))}
          </div>

          {/* More Projects Button */}
          <div style={{ textAlign: "center" }}>
            <button
              onClick={() => {
                document.getElementById("testimonials").scrollIntoView({
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
                boxShadow: "0 8px 25px rgba(59,130,246,0.3)",
                position: "relative",
                overflow: "hidden",
                animation: "buttonFloat 3s ease-in-out infinite, waterGradientFlow 4s ease-in-out infinite",
                textShadow: "0 2px 4px rgba(0,0,0,0.3)",
                letterSpacing: "0.5px",
              }}
              onMouseOver={(e) => {
                e.target.style.transform = "translateY(-5px) scale(1.05)"
                e.target.style.boxShadow = "0 15px 40px rgba(59,130,246,0.5)"
                e.target.style.backgroundPosition = "100% 0%"
              }}
              onMouseOut={(e) => {
                e.target.style.transform = "translateY(0) scale(1)"
                e.target.style.boxShadow = "0 8px 25px rgba(59,130,246,0.3)"
                e.target.style.backgroundPosition = "0% 0%"
              }}
            >
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
                <span style={{ animation: "discoverIcon 2s ease-in-out infinite" }}>🏗️</span>
                More Projects
                <span style={{ animation: "arrowFloat 2s ease-in-out infinite" }}>→</span>
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        id="testimonials"
        style={{
          padding: "100px 0",
          background: "linear-gradient(135deg, #1e293b 0%, #334155 100%)",
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
              "radial-gradient(circle at 30% 40%, rgba(59,130,246,0.1) 0%, transparent 50%), radial-gradient(circle at 70% 60%, rgba(59,130,246,0.1) 0%, transparent 50%)",
            animation: "waterFlow 25s ease-in-out infinite reverse",
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
            padding: "0 40px",
          }}
        >
          <div style={{ textAlign: "center", marginBottom: "80px" }}>
            <h2
              style={{
                fontSize: "2.5rem",
                fontWeight: "800",
                color: "rgba(255,255,255,0.9)",
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
              What Our Customers Say
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
                fontSize: "1.1rem",
                color: "rgba(203,213,225,0.8)",
                marginTop: "20px",
                maxWidth: "600px",
                margin: "20px auto 0",
              }}
            >
              💬 Real Stories from Real Customers - Experience Excellence
            </p>
          </div>

          {/* Testimonial Carousel */}
          <div
            style={{
              position: "relative",
              maxWidth: "800px",
              margin: "0 auto",
              height: "300px",
              overflow: "hidden",
            }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  opacity: index === currentTestimonial ? 1 : 0,
                  transform:
                    index === currentTestimonial
                      ? "translateX(0)"
                      : index < currentTestimonial
                        ? "translateX(-100%)"
                        : "translateX(100%)",
                  transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                  padding: "40px",
                  backgroundColor: "rgba(255,255,255,0.05)",
                  backdropFilter: "blur(10px)",
                  borderRadius: "20px",
                  border: "1px solid rgba(255,255,255,0.1)",
                  animation: index === currentTestimonial ? "testimonialFloat 6s ease-in-out infinite" : "none",
                }}
              >
                {/* Customer Image */}
                <div
                  style={{
                    width: "120px",
                    height: "120px",
                    borderRadius: "50%",
                    backgroundColor: "#3b82f6",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "25px",
                    fontSize: "3rem",
                    animation: "customerImageFloat 4s ease-in-out infinite",
                    boxShadow: "0 15px 40px rgba(59,130,246,0.4)",
                    backgroundImage: `url(${testimonial.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    border: "4px solid rgba(255,255,255,0.2)",
                  }}
                >
                  {!testimonial.image.includes("placeholder") ? "" : "👤"}
                </div>

                {/* Stars */}
                <div style={{ marginBottom: "20px" }}>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span
                      key={i}
                      style={{
                        color: "#fbbf24",
                        fontSize: "1.5rem",
                        marginRight: "5px",
                        animation: `starTwinkle ${1 + i * 0.2}s ease-in-out infinite`,
                      }}
                    >
                      ⭐
                    </span>
                  ))}
                </div>

                {/* Testimonial Text */}
                <p
                  style={{
                    fontSize: "1.1rem",
                    lineHeight: "1.6",
                    color: "rgba(255,255,255,0.9)",
                    marginBottom: "25px",
                    fontStyle: "italic",
                    maxWidth: "600px",
                    textShadow: "0 2px 4px rgba(0,0,0,0.3)",
                  }}
                >
                  "{testimonial.text}"
                </p>

                {/* Customer Info */}
                <div>
                  <h4
                    style={{
                      fontSize: "1.2rem",
                      fontWeight: "700",
                      color: "#60a5fa",
                      marginBottom: "5px",
                    }}
                  >
                    {testimonial.name}
                  </h4>
                  <p
                    style={{
                      fontSize: "0.9rem",
                      color: "rgba(203,213,225,0.8)",
                    }}
                  >
                    {testimonial.role}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Testimonial Indicators */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "10px",
              marginTop: "40px",
            }}
          >
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                style={{
                  width: "12px",
                  height: "12px",
                  borderRadius: "50%",
                  backgroundColor: index === currentTestimonial ? "#3b82f6" : "rgba(255,255,255,0.3)",
                  border: "none",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  boxShadow: index === currentTestimonial ? "0 0 20px rgba(59,130,246,0.8)" : "none",
                }}
                onMouseOver={(e) => {
                  e.target.style.transform = "scale(1.3)"
                }}
                onMouseOut={(e) => {
                  e.target.style.transform = "scale(1)"
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        style={{
          padding: "100px 0",
          background: "linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)",
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
              "radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(255,255,255,0.1) 0%, transparent 50%)",
            animation: "waterFlow 30s ease-in-out infinite",
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
            padding: "0 40px",
          }}
        >
          <div style={{ textAlign: "center", marginBottom: "80px" }}>
            <h2
              style={{
                fontSize: "2.5rem",
                fontWeight: "800",
                color: "rgba(255,255,255,0.9)",
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
                fontSize: "1.1rem",
                color: "rgba(255,255,255,0.8)",
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
              alignItems: "flex-start",
              width: "100%",
              boxSizing: "border-box",
            }}
          >
            {/* Left - Contact Info */}
            <div>
              <h3
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "700",
                  marginBottom: "30px",
                  color: "rgba(255,255,255,0.9)",
                }}
              >
                Get In Touch
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "25px" }}>
                {[
                  {
                    icon: "📍",
                    title: "Location",
                    info: "Addis Ababa, Ethiopia\nBole Sub City, Woreda 03",
                  },
                  {
                    icon: "📞",
                    title: "Phone",
                    info: "+251-947085168\n+251-928994480",
                    isClickable: true,
                    clickAction: () => window.open("tel:+251947085168"),
                  },
                  {
                    icon: "✉️",
                    title: "Email",
                    info: "abiy1691@gmail.com\nsales@suraxpool.com",
                    isClickable: true,
                    clickAction: () => window.open("mailto:abiy1691@gmail.com"),
                  },
                  {
                    icon: "🕒",
                    title: "Working Hours",
                    info: "Mon - Sat: 8:00 - 17:30\nSunday: Closed",
                  },
                ].map((contact, index) => (
                  <div
                    key={index}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "20px",
                      padding: "20px",
                      backgroundColor: "rgba(255,255,255,0.05)",
                      borderRadius: "15px",
                      border: "1px solid rgba(255,255,255,0.1)",
                      backdropFilter: "blur(10px)",
                      transition: "all 0.3s ease",
                      cursor: contact.isClickable ? "pointer" : "default",
                    }}
                    onClick={contact.isClickable ? contact.clickAction : null}
                    onMouseOver={(e) => {
                      e.currentTarget.style.backgroundColor = "rgba(59,130,246,0.1)"
                      e.currentTarget.style.transform = "translateY(-3px)"
                      e.currentTarget.style.boxShadow = "0 10px 25px rgba(59,130,246,0.2)"
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.05)"
                      e.currentTarget.style.transform = "translateY(0)"
                      e.currentTarget.style.boxShadow = "none"
                    }}
                  >
                    <div
                      style={{
                        fontSize: "1.5rem",
                        backgroundColor: "rgba(96,165,250,0.1)",
                        padding: "8px",
                        borderRadius: "8px",
                      }}
                    >
                      {contact.icon}
                    </div>
                    <div>
                      <h4
                        style={{
                          fontSize: "1rem",
                          fontWeight: "600",
                          marginBottom: "5px",
                          color: "#60a5fa",
                        }}
                      >
                        {contact.title}
                      </h4>
                      <p
                        style={{
                          fontSize: "0.85rem",
                          color: "rgba(203,213,225,0.8)",
                          lineHeight: "1.4",
                          whiteSpace: "pre-line",
                          margin: 0,
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
                    fontSize: "1.1rem",
                    fontWeight: "600",
                    marginBottom: "20px",
                    color: "rgba(255,255,255,0.9)",
                  }}
                >
                  Follow Us
                </h4>
                <div style={{ display: "flex", gap: "15px" }}>
                  {[
                    { Icon: Facebook, bg: "#1877f2", name: "Facebook" },
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
                  {/* X (Twitter) Icon */}
                  <a
                    href="#"
                    title="X (Twitter)"
                    style={{
                      backgroundColor: "#000000",
                      padding: "12px",
                      borderRadius: "10px",
                      transition: "all 0.3s ease",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "18px",
                      fontWeight: "bold",
                      color: "white",
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
                    𝕏
                  </a>
                </div>
              </div>
            </div>
            {/* Right - Contact Form */}
            <div
              style={{
                backgroundColor: "rgba(255,255,255,0.05)",
                backdropFilter: "blur(10px)",
                borderRadius: "25px",
                padding: "50px",
                border: "1px solid rgba(255,255,255,0.1)",
                width: "100%",
                boxSizing: "border-box",
              }}
            >
              <h3
                style={{
                  fontSize: "1.8rem",
                  fontWeight: "700",
                  marginBottom: "20px",
                  color: "rgba(255,255,255,0.9)",
                  textAlign: "center",
                }}
              >
                Send us a Message
              </h3>
              <p
                style={{
                  fontSize: "1rem",
                  color: "rgba(255,255,255,0.8)",
                  marginBottom: "30px",
                  lineHeight: "1.6",
                  textAlign: "center",
                }}
              >
                Ready to start your project? Fill out the form below and we'll get back to you soon!
              </p>
              <form onSubmit={handleContactSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={contactForm.name}
                    onChange={handleInputChange}
                    required
                    style={{
                      padding: "15px",
                      borderRadius: "10px",
                      border: "1px solid rgba(255,255,255,0.2)",
                      backgroundColor: "rgba(255,255,255,0.1)",
                      color: "white",
                      fontSize: "1rem",
                      outline: "none",
                      transition: "all 0.3s ease",
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = "#60a5fa"
                      e.target.style.boxShadow = "0 0 20px rgba(96,165,250,0.3)"
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = "rgba(255,255,255,0.2)"
                      e.target.style.boxShadow = "none"
                    }}
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={contactForm.email}
                    onChange={handleInputChange}
                    required
                    style={{
                      padding: "15px",
                      borderRadius: "10px",
                      border: "1px solid rgba(255,255,255,0.2)",
                      backgroundColor: "rgba(255,255,255,0.1)",
                      color: "white",
                      fontSize: "1rem",
                      outline: "none",
                      transition: "all 0.3s ease",
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = "#60a5fa"
                      e.target.style.boxShadow = "0 0 20px rgba(96,165,250,0.3)"
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = "rgba(255,255,255,0.2)"
                      e.target.style.boxShadow = "none"
                    }}
                  />
                </div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Your Phone Number"
                  value={contactForm.phone}
                  onChange={handleInputChange}
                  style={{
                    padding: "15px",
                    borderRadius: "10px",
                    border: "1px solid rgba(255,255,255,0.2)",
                    backgroundColor: "rgba(255,255,255,0.1)",
                    color: "white",
                    fontSize: "1rem",
                    outline: "none",
                    transition: "all 0.3s ease",
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = "#60a5fa"
                    e.target.style.boxShadow = "0 0 20px rgba(96,165,250,0.3)"
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "rgba(255,255,255,0.2)"
                    e.target.style.boxShadow = "none"
                  }}
                />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={contactForm.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  style={{
                    padding: "15px",
                    borderRadius: "10px",
                    border: "1px solid rgba(255,255,255,0.2)",
                    backgroundColor: "rgba(255,255,255,0.1)",
                    color: "white",
                    fontSize: "1rem",
                    outline: "none",
                    transition: "all 0.3s ease",
                    resize: "vertical",
                    fontFamily: "inherit",
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = "#60a5fa"
                    e.target.style.boxShadow = "0 0 20px rgba(96,165,250,0.3)"
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "rgba(255,255,255,0.2)"
                    e.target.style.boxShadow = "none"
                  }}
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  style={{
                    backgroundColor: "#f97316",
                    color: "white",
                    padding: "15px 40px",
                    borderRadius: "50px",
                    border: "none",
                    fontSize: "1rem",
                    fontWeight: "600",
                    cursor: isSubmitting ? "not-allowed" : "pointer",
                    transition: "all 0.3s ease",
                    boxShadow: "0 10px 30px rgba(249,115,22,0.3)",
                    opacity: isSubmitting ? 0.7 : 1,
                  }}
                  onMouseOver={(e) => {
                    if (!isSubmitting) {
                      e.target.style.backgroundColor = "#ea580c"
                      e.target.style.transform = "translateY(-3px)"
                      e.target.style.boxShadow = "0 15px 40px rgba(249,115,22,0.4)"
                    }
                  }}
                  onMouseOut={(e) => {
                    if (!isSubmitting) {
                      e.target.style.backgroundColor = "#f97316"
                      e.target.style.transform = "translateY(0)"
                      e.target.style.boxShadow = "0 10px 30px rgba(249,115,22,0.3)"
                    }
                  }}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Combined Contact Pop-up */}
      {showContactInfo && (
        <div
          style={{
            position: "fixed",
            top: "70px",
            right: "15px",
            zIndex: 45,
            backgroundColor: "rgba(59,130,246,0.15)",
            backdropFilter: "blur(5px)",
            color: "white",
            padding: "8px 12px",
            borderRadius: "8px",
            border: "1px solid rgba(255,255,255,0.1)",
            boxShadow: "0 2px 8px rgba(59,130,246,0.1)",
            animation: "contactPop 0.5s ease-out",
            cursor: "pointer",
            transition: "all 0.3s ease",
            minWidth: "140px",
            fontSize: "0.7rem",
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.backgroundColor = "rgba(59,130,246,0.25)"
            e.currentTarget.style.boxShadow = "0 3px 12px rgba(59,130,246,0.2)"
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.backgroundColor = "rgba(59,130,246,0.15)"
            e.currentTarget.style.boxShadow = "0 2px 8px rgba(59,130,246,0.1)"
          }}
        >
          {/* Phone Section */}
          <div
            style={{ marginBottom: "6px", cursor: "pointer" }}
            onClick={() => {
              document.querySelector("footer").scrollIntoView({
                behavior: "smooth",
                block: "start",
              })
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "4px", marginBottom: "2px" }}>
              <span style={{ fontSize: "10px" }}>📞</span>
              <span style={{ fontSize: "0.6rem", fontWeight: "500" }}>Call</span>
            </div>
            <div style={{ fontSize: "0.7rem", fontWeight: "600", paddingLeft: "14px" }}>+251-947085168</div>
          </div>
          {/* Working Hours Section */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "4px", marginBottom: "2px" }}>
              <span style={{ fontSize: "10px" }}>🕒</span>
              <span style={{ fontSize: "0.6rem", fontWeight: "500" }}>Hours</span>
            </div>
            <div style={{ paddingLeft: "14px" }}>
              <div style={{ fontSize: "0.65rem", fontWeight: "500" }}>Mon-Sat: 8-17:30</div>
              <div style={{ fontSize: "0.6rem", opacity: 0.8 }}>Sun: Closed</div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <Footer />

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
        @keyframes waterFloat {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
        }
        @keyframes waterRippleService {
          0%, 100% {
            opacity: 0.1;
            transform: scale(1);
          }
          50% {
            opacity: 0.3;
            transform: scale(1.1);
          }
        }
        @keyframes statFloat {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-5px);
          }
        }
        @keyframes statRipple {
          0% {
            width: 0;
            height: 0;
            opacity: 0.8;
          }
          100% {
            width: 300px;
            height: 300px;
            opacity: 0;
          }
        }
        @keyframes iconBounce {
          0%, 100% {
            transform: translateY(0px) scale(1);
          }
          50% {
            transform: translateY(-5px) scale(1.1);
          }
        }
        @keyframes projectFloat {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-3px);
          }
        }
        @keyframes testimonialFloat {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-5px);
          }
        }
        @keyframes customerImageFloat {
          0%, 100% {
            transform: translateY(0px) scale(1);
          }
          50% {
            transform: translateY(-3px) scale(1.05);
          }
        }
        @keyframes starTwinkle {
          0%, 100% {
            transform: scale(1) rotate(0deg);
            opacity: 1;
          }
          50% {
            transform: scale(1.2) rotate(180deg);
            opacity: 0.8;
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
