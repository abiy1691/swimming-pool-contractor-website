"use client"
import { useState } from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export default function Contact() {
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formErrors, setFormErrors] = useState({})

  const validateForm = () => {
    const errors = {}

    if (!contactForm.name.trim()) {
      errors.name = "Name is required"
    } else if (contactForm.name.trim().length < 2) {
      errors.name = "Name must be at least 2 characters"
    }

    if (!contactForm.email.trim()) {
      errors.email = "Email is required"
    } else if (!contactForm.email.includes("@")) {
      errors.email = "Email must contain @ symbol"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contactForm.email)) {
      errors.email = "Please enter a valid email address"
    }

    if (!contactForm.phone.trim()) {
      errors.phone = "Phone number is required"
    } else if (contactForm.phone.trim().length < 10) {
      errors.phone = "Phone number must be at least 10 digits"
    }

    if (!contactForm.message.trim()) {
      errors.message = "Message is required"
    } else if (contactForm.message.trim().length < 10) {
      errors.message = "Message must be at least 10 characters"
    }

    return errors
  }

  const handleContactSubmit = async (e) => {
    e.preventDefault()

    const errors = validateForm()
    setFormErrors(errors)

    if (Object.keys(errors).length > 0) {
      return
    }

    setIsSubmitting(true)

    try {
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

      setContactForm({
        name: "",
        email: "",
        phone: "",
        message: "",
      })
      setFormErrors({})

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

    if (formErrors[name]) {
      setFormErrors((prev) => ({
        ...prev,
        [name]: "",
      }))
    }
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
            Get In Touch With Us
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
            We're here to help you bring your water feature dreams to life. Reach out to us for inquiries, quotes, or
            support.
          </p>
        </div>
      </section>

      {/* Contact Details Section */}
      <section
        id="contact-details"
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
          <div style={{ textAlign: "center", marginBottom: window.innerWidth > 768 ? "60px" : "40px" }}>
            <h2
              style={{
                fontSize: window.innerWidth > 768 ? "2.5rem" : "2rem",
                fontWeight: "800",
                color: "#1e293b",
                marginBottom: "20px",
              }}
            >
              Our Information
            </h2>
            <p
              style={{
                fontSize: "1.1rem",
                color: "#64748b",
                maxWidth: "600px",
                margin: "0 auto",
              }}
            >
              Find us, call us, or email us. We're always ready to assist you.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: window.innerWidth > 768 ? "repeat(4, 1fr)" : "repeat(2, 1fr)",
              gap: window.innerWidth > 768 ? "30px" : "20px",
            }}
          >
            <div
              id="location"
              style={{
                backgroundColor: "white",
                padding: window.innerWidth > 768 ? "30px" : "20px",
                borderRadius: "15px",
                boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
                textAlign: "center",
                transition: "all 0.3s ease",
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
              <MapPin style={{ width: "40px", height: "40px", color: "#3b82f6", marginBottom: "15px" }} />
              <h3 style={{ fontSize: "1.2rem", fontWeight: "700", color: "#1e293b", marginBottom: "10px" }}>
                Location
              </h3>
              <p style={{ fontSize: "0.95rem", color: "#475569", lineHeight: "1.5" }}>
                Addis Ababa, Ethiopia
                <br />
                Bole Sub City, Woreda 03
              </p>
            </div>

            <div
              id="phone-support"
              style={{
                backgroundColor: "white",
                padding: window.innerWidth > 768 ? "30px" : "20px",
                borderRadius: "15px",
                boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
                textAlign: "center",
                transition: "all 0.3s ease",
                cursor: "pointer",
              }}
              onClick={() => window.open("tel:+251947085168")}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "translateY(-5px)"
                e.currentTarget.style.boxShadow = "0 15px 40px rgba(59,130,246,0.15)"
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "translateY(0)"
                e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.08)"
              }}
            >
              <Phone style={{ width: "40px", height: "40px", color: "#3b82f6", marginBottom: "15px" }} />
              <h3 style={{ fontSize: "1.2rem", fontWeight: "700", color: "#1e293b", marginBottom: "10px" }}>Phone</h3>
              <p style={{ fontSize: "0.95rem", color: "#475569", lineHeight: "1.5" }}>
                +251-947085168
                <br />
                +251-928994480
              </p>
            </div>

            <div
              id="email-support"
              style={{
                backgroundColor: "white",
                padding: window.innerWidth > 768 ? "30px" : "20px",
                borderRadius: "15px",
                boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
                textAlign: "center",
                transition: "all 0.3s ease",
                cursor: "pointer",
              }}
              onClick={() => window.open("mailto:abiy1691@gmail.com")}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "translateY(-5px)"
                e.currentTarget.style.boxShadow = "0 15px 40px rgba(59,130,246,0.15)"
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "translateY(0)"
                e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.08)"
              }}
            >
              <Mail style={{ width: "40px", height: "40px", color: "#3b82f6", marginBottom: "15px" }} />
              <h3 style={{ fontSize: "1.2rem", fontWeight: "700", color: "#1e293b", marginBottom: "10px" }}>Email</h3>
              <p style={{ fontSize: "0.95rem", color: "#475569", lineHeight: "1.5" }}>
                abiy1691@gmail.com
                <br />
                sales@suraxpool.com
              </p>
            </div>

            <div
              id="working-hours"
              style={{
                backgroundColor: "white",
                padding: window.innerWidth > 768 ? "30px" : "20px",
                borderRadius: "15px",
                boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
                textAlign: "center",
                transition: "all 0.3s ease",
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
              <Clock style={{ width: "40px", height: "40px", color: "#3b82f6", marginBottom: "15px" }} />
              <h3 style={{ fontSize: "1.2rem", fontWeight: "700", color: "#1e293b", marginBottom: "10px" }}>
                Working Hours
              </h3>
              <p style={{ fontSize: "0.95rem", color: "#475569", lineHeight: "1.5" }}>
                Mon - Sat: 8:00 - 17:30
                <br />
                Sunday: Closed
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section
        id="contact-form"
        style={{
          padding: window.innerWidth > 768 ? "100px 0" : "60px 0",
          background: "linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)",
          color: "white",
        }}
      >
        <div
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            padding: window.innerWidth > 768 ? "0 40px" : "0 20px",
          }}
        >
          <div style={{ textAlign: "center", marginBottom: window.innerWidth > 768 ? "60px" : "40px" }}>
            <h2
              style={{
                fontSize: window.innerWidth > 768 ? "2.5rem" : "2rem",
                fontWeight: "800",
                marginBottom: "20px",
              }}
            >
              Send Us a Message
            </h2>
            <p
              style={{
                fontSize: "1.1rem",
                opacity: 0.9,
                maxWidth: "600px",
                margin: "0 auto",
                lineHeight: "1.6",
              }}
            >
              Have a question or a project in mind? Fill out the form below and we'll get back to you as soon as
              possible.
            </p>
          </div>

          <div
            style={{
              backgroundColor: "rgba(255,255,255,0.08)",
              backdropFilter: "blur(10px)",
              borderRadius: "20px",
              padding: window.innerWidth > 768 ? "50px" : "30px",
              border: "1px solid rgba(255,255,255,0.15)",
              boxShadow: "0 20px 60px rgba(0,0,0,0.2)",
            }}
          >
            <form onSubmit={handleContactSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: window.innerWidth > 768 ? "1fr 1fr" : "1fr",
                  gap: "20px",
                }}
              >
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={contactForm.name}
                    onChange={handleInputChange}
                    required
                    style={{
                      width: "100%",
                      padding: "14px",
                      borderRadius: "10px",
                      border: formErrors.name ? "1px solid #ef4444" : "1px solid rgba(255,255,255,0.3)",
                      backgroundColor: "rgba(255,255,255,0.15)",
                      color: "white",
                      fontSize: "1rem",
                      outline: "none",
                      transition: "all 0.3s ease",
                      boxSizing: "border-box",
                    }}
                  />
                  {formErrors.name && (
                    <p style={{ color: "#ef4444", fontSize: "0.85rem", marginTop: "8px", margin: "8px 0 0 0" }}>
                      {formErrors.name}
                    </p>
                  )}
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={contactForm.email}
                    onChange={handleInputChange}
                    required
                    style={{
                      width: "100%",
                      padding: "14px",
                      borderRadius: "10px",
                      border: formErrors.email ? "1px solid #ef4444" : "1px solid rgba(255,255,255,0.3)",
                      backgroundColor: "rgba(255,255,255,0.15)",
                      color: "white",
                      fontSize: "1rem",
                      outline: "none",
                      transition: "all 0.3s ease",
                      boxSizing: "border-box",
                    }}
                  />
                  {formErrors.email && (
                    <p style={{ color: "#ef4444", fontSize: "0.85rem", marginTop: "8px", margin: "8px 0 0 0" }}>
                      {formErrors.email}
                    </p>
                  )}
                </div>
              </div>
              <div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Your Phone Number"
                  value={contactForm.phone}
                  onChange={handleInputChange}
                  style={{
                    width: "100%",
                    padding: "14px",
                    borderRadius: "10px",
                    border: formErrors.phone ? "1px solid #ef4444" : "1px solid rgba(255,255,255,0.3)",
                    backgroundColor: "rgba(255,255,255,0.15)",
                    color: "white",
                    fontSize: "1rem",
                    outline: "none",
                    transition: "all 0.3s ease",
                    boxSizing: "border-box",
                  }}
                />
                {formErrors.phone && (
                  <p style={{ color: "#ef4444", fontSize: "0.85rem", marginTop: "8px", margin: "8px 0 0 0" }}>
                    {formErrors.phone}
                  </p>
                )}
              </div>
              <div>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={contactForm.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  style={{
                    width: "100%",
                    padding: "14px",
                    borderRadius: "10px",
                    border: formErrors.message ? "1px solid #ef4444" : "1px solid rgba(255,255,255,0.3)",
                    backgroundColor: "rgba(255,255,255,0.15)",
                    color: "white",
                    fontSize: "1rem",
                    outline: "none",
                    transition: "all 0.3s ease",
                    resize: "vertical",
                    fontFamily: "inherit",
                    boxSizing: "border-box",
                  }}
                />
                {formErrors.message && (
                  <p style={{ color: "#ef4444", fontSize: "0.85rem", marginTop: "8px", margin: "8px 0 0 0" }}>
                    {formErrors.message}
                  </p>
                )}
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                style={{
                  backgroundColor: "#f97316",
                  color: "white",
                  padding: "15px 40px",
                  borderRadius: "50px",
                  border: "none",
                  fontSize: "1.1rem",
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
      </section>

      {/* Map Section */}
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
          <div style={{ textAlign: "center", marginBottom: window.innerWidth > 768 ? "60px" : "40px" }}>
            <h2
              style={{
                fontSize: window.innerWidth > 768 ? "2.5rem" : "2rem",
                fontWeight: "800",
                color: "#1e293b",
                marginBottom: "20px",
              }}
            >
              Find Us on the Map
            </h2>
            <p
              style={{
                fontSize: "1.1rem",
                color: "#64748b",
                maxWidth: "600px",
                margin: "0 auto",
              }}
            >
              Visit our office or get directions to our main location.
            </p>
          </div>
          <div
            style={{
              borderRadius: "20px",
              overflow: "hidden",
              boxShadow: "0 20px 60px rgba(0,0,0,0.15)",
              height: window.innerWidth > 768 ? "500px" : "300px",
              width: "100%",
            }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.6000000000004!2d38.76361111111111!3d9.014166666666667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85f6f6f6f6f6%3A0x164b85f6f6f6f6f6!2sBole%20Sub%20City%2C%20Woreda%2003%2C%20Addis%20Ababa%2C%20Ethiopia!5e0!3m2!1sen!2sus!4v1678901234567!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Our Location on Map"
            ></iframe>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
