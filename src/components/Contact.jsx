import React, { useState } from 'react'
import { MdLocationOn, MdPhone, MdEmail, MdAccessTime, MdSend } from 'react-icons/md'

export default function Contact({ isVisible }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [formStatus, setFormStatus] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setFormStatus('sending')
    setTimeout(() => {
      setFormStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
    }, 1200)
  }

  return (
    <section id="contact" className={`contact-section ${isVisible ? 'active' : ''}`}>
      <div className="section-header text-center">
        <span className="section-pre accent-secondary">Connect</span>
        <h2 className="section-title">Contact Us</h2>
        <div className="section-bar center"></div>
        <p className="section-desc">
          Have questions about our programmes or want to partner with us? Send us a message or find us at our co-working office.
        </p>
      </div>

      <div className="contact-grid">
        {/* Contact Form */}
        <div className="contact-form-container">
          <h3>Send Us a Message</h3>
          <form onSubmit={handleSubmit} className="message-form">
            <div className="form-group-row">
              <div className="form-group">
                <label htmlFor="contact-name">Full Name</label>
                <input 
                  type="text" 
                  id="contact-name" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleChange} 
                  placeholder="Your Name" 
                  required 
                />
              </div>
              <div className="form-group">
                <label htmlFor="contact-email">Email Address</label>
                <input 
                  type="email" 
                  id="contact-email" 
                  name="email" 
                  value={formData.email} 
                  onChange={handleChange} 
                  placeholder="your.email@example.com" 
                  required 
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="contact-subject">Subject</label>
              <input 
                type="text" 
                id="contact-subject" 
                name="subject" 
                value={formData.subject} 
                onChange={handleChange} 
                placeholder="What is this regarding?" 
                required 
              />
            </div>

            <div className="form-group">
              <label htmlFor="contact-message">Message</label>
              <textarea 
                id="contact-message" 
                name="message" 
                rows="5" 
                value={formData.message} 
                onChange={handleChange} 
                placeholder="Write your message here..." 
                required
              ></textarea>
            </div>

            <button type="submit" className="btn-primary form-submit-btn" disabled={formStatus === 'sending'}>
              {formStatus === 'sending' ? (
                'Sending Message...'
              ) : (
                <>
                  Send Message <MdSend style={{ marginLeft: 8, verticalAlign: 'middle' }} />
                </>
              )}
            </button>

            {formStatus === 'success' && (
              <div className="form-success-alert animate-fade-in">
                <span className="alert-icon">✓</span>
                <span>Thank you! Your message has been sent successfully. We will get back to you soon.</span>
              </div>
            )}
          </form>
        </div>

        {/* Location Map and Office Info */}
        <div className="contact-info-container">
          <h3>Our Office Location</h3>
          
          <div className="office-cards-row">
            <div className="office-info-card">
              <div className="office-card-icon"><MdLocationOn /></div>
              <div>
                <strong>Address</strong>
                <span>Ijuru Hub, 42 KG 40 St, Kimironko, Kigali</span>
              </div>
            </div>
            <div className="office-info-card">
              <div className="office-card-icon"><MdPhone /></div>
              <div>
                <strong>Phone</strong>
                <span>+250 798 287 944</span>
              </div>
            </div>
            <div className="office-info-card">
              <div className="office-card-icon"><MdEmail /></div>
              <div>
                <strong>Email</strong>
                <span>info@thecampusedu.com</span>
              </div>
            </div>
          </div>

          <div className="map-wrapper glowing-border">
            <iframe 
              src="https://maps.google.com/maps?q=Ijuru%20Coworking%20Space,%2042%20KG%2040%20St,%20Kigali,%20Rwanda&t=&z=15&ie=UTF8&iwloc=&output=embed" 
              width="100%" 
              height="280" 
              style={{ border: 0, borderRadius: '20px' }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Ijuru Hub Coworking Space Map"
              className="google-map-iframe"
            ></iframe>
          </div>
          
          <div className="operating-hours">
            <div className="hours-icon"><MdAccessTime /></div>
            <div>
              <strong>Operating Hours</strong>
              <span>Mon–Fri: 8:00 AM – 8:00 PM | Sat: Closed | Sun: 8:30 AM – 1:30 PM</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
