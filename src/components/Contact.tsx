import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className="py-20 bg-transparent scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-lg text-white leading-relaxed mb-8 text-glow">
            CONTACT US
          </h2>
          <p className="text-lg text-white leading-relaxed mb-1 text-glow">
            Get in touch with our organizing team
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-lg text-white leading-relaxed mb-1 text-glow">Get in Touch</h3>
            
            <div className="space-y-6">
              
              <div className="flex items-start space-x-4">
                <Mail className="h-6 w-6 text-blue-600 mt-1" />
                <div>
                  <h4 className="text-lg text-yellow-700 leading-relaxed mb-1 text-glow">Email</h4>
                  <p className="text-lg text-white leading-relaxed mb-1 text-glow">iscmun.info@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Phone className="h-6 w-6 text-blue-600 mt-1" />
                <div>
                  <h4 className="text-lg text-yellow-700 leading-relaxed mb-1 text-glow">Phone</h4>
                  <p className="text-lg text-white leading-relaxed mb-1 text-glow">+90 551 020 54 90</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <MapPin className="h-6 w-6 text-blue-600 mt-1" />
                <div>
                  <h4 className="text-lg text-yellow-700 leading-relaxed mb-1 text-glow">Address</h4>
                  <p className="text-lg text-white leading-relaxed mb-1 text-glow">Izmir Sınav College<br />izmir, Mavişehir</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <i className="fi fi-brands-instagram h-6 w-6 text-blue-600 mt-1" style={{ fontSize: '24px' }}></i>
                <div>
                  <h4 className="text-lg text-yellow-700 leading-relaxed mb-1 text-glow">Instagram</h4>
                  <a 
                    href="https://www.instagram.com/iscmun25" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-lg text-white leading-relaxed mb-1 text-glow hover:text-blue-400 transition-colors duration-200"
                  >
                    @iscmun25
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="rounded-lg p-8">
            <h3 className="text-lg text-white leading-relaxed mb-1 text-glow">Send Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="text-lg text-white leading-relaxed mb-1 text-glow">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="text-lg text-white leading-relaxed mb-1 text-glow">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="text-lg text-white leading-relaxed mb-1 text-glow">
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select subject</option>
                  <option value="registration">Registration</option>
                  <option value="committees">Committees</option>
                  <option value="general">General Inquiry</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="text-lg text-white leading-relaxed mb-1 text-glow">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <Send className="h-5 w-5" />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;