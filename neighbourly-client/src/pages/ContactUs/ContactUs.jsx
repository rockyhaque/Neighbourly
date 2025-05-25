import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react"

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
  }

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      details: "hello@neighbourly.com",
      description: "Send us an email anytime!",
    },
    {
      icon: Phone,
      title: "Phone",
      details: "+880 1742460399",
      description: "Mon-Fri from 8am to 5pm",
    },
    {
      icon: MapPin,
      title: "Address",
      details: "123 Business St, Suite 100",
      description: "Dhaka, Bangladesh",
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: "Monday - Friday",
      description: "8:00 AM - 5:00 PM PST",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  const formVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, delay: 0.2 },
    },
  }

  const contactInfoVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, delay: 0.4 },
    },
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <motion.div
        className="container mx-auto px-4 py-16"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Header Section */}
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Get in Touch</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as possible.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div variants={formVariants}>
            <div className="bg-white shadow-xl rounded-lg overflow-hidden">
              <div className="p-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">Send us a message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <motion.div whileFocus={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none transition"
                      required
                    />
                  </motion.div>

                  <motion.div whileFocus={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none transition"
                      required
                    />
                  </motion.div>

                  <motion.div whileFocus={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="What's this about?"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none transition"
                      required
                    />
                  </motion.div>

                  <motion.div whileFocus={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us more about your inquiry..."
                      rows={5}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none transition resize-none"
                      required
                    />
                  </motion.div>

                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <button
                      type="submit"
                      className="w-full bg-sky-500 hover:bg-sky-700 text-white py-3 px-4 rounded-md text-lg font-medium transition flex items-center justify-center"
                    >
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </button>
                  </motion.div>
                </form>
              </div>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div variants={contactInfoVariants} className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-8">Contact Information</h2>

            <motion.div className="space-y-6" variants={containerVariants} initial="hidden" animate="visible">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, x: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="bg-white border border-gray-200 rounded-lg hover:shadow-lg transition-shadow duration-300">
                    <div className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center">
                            <info.icon className="w-6 h-6 text-sky-500" />
                          </div>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-gray-900 mb-1">{info.title}</h3>
                          <p className="text-gray-800 font-medium mb-1">{info.details}</p>
                          <p className="text-gray-600 text-sm">{info.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Additional Info */}
            <motion.div variants={itemVariants} className="mt-8 p-6 bg-cyan-50 rounded-lg border border-cyan-200">
              <h3 className="text-lg font-semibold text-cyan-900 mb-2">Quick Response Guarantee</h3>
              <p className="text-sky-500">
                We typically respond to all inquiries within 24 hours during business days. For urgent matters, please
                call us directly.
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          variants={itemVariants}
          className="text-center mt-16 p-8 bg-white rounded-lg shadow-lg max-w-2xl mx-auto"
        >
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">Ready to get started?</h3>
          <p className="text-gray-600 mb-6">Join thousands of satisfied customers who trust us with their business.</p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <button className="bg-sky-600 hover:bg-sky-700 text-white px-8 py-3 rounded-md text-lg transition">
              Start Your Project
            </button>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  )
}