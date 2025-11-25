import React, { useState } from 'react';
import { Mail, Github, Linkedin, Send, MapPin, Phone } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-teal-500 to-cyan-500 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Let's work together to bring your ideas to life
          </p>
        </div>

        <div className="flex justify-center">
          {/* Contact Info Only */}
          <div className="space-y-8 w-full max-w-xl">
            <div className="glass-panel p-8 md:p-12 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Let's Connect</h3>
              <p className="text-gray-700 dark:text-gray-400 mb-8">
                I'm always interested in new opportunities and exciting projects. Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>

              <div className="space-y-6">
                {[
                  { icon: Mail, text: "malichirag1369@gmail.com", href: "mailto:malichirag1369@gmail.com" },
                  { icon: Linkedin, text: "Connect with me", href: "https://www.linkedin.com/in/chirag-mali-96664022a/" },
                  { icon: Github, text: "Check out my code", href: "https://github.com/chiragmali19" }
                ].map((item, index) => (
                  <a key={index} href={item.href} target="_blank" rel="noopener noreferrer" className="flex items-center group">
                    <div className="p-3 bg-gray-200 dark:bg-teal-500/10 rounded-full mr-4 group-hover:bg-teal-200 dark:group-hover:bg-teal-500/20 transition-all duration-300">
                      <item.icon className="w-6 h-6 text-teal-600 dark:text-teal-400" />
                    </div>
                    <span className="text-gray-700 dark:text-gray-300 group-hover:text-teal-600 dark:group-hover:text-teal-300 transition-colors duration-300">{item.text}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-teal-500/20 text-center">
          <p className="text-gray-400">
            © 2024 Chirag Mali.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;