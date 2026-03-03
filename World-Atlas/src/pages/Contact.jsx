import React, { useState } from 'react';


const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // 'idle' | 'sending' | 'success' | 'error'

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    }, 1500);
  };

  return (
    <section className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-xl mx-auto bg-white p-8 rounded-xl shadow-lg grid md:grid-cols gap-10">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Contact Us</h2>
          <p className="text-gray-600 mb-6">Fill out the form and we'll get back to you.</p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required className="w-full p-3 border rounded-lg" />
            <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required className="w-full p-3 border rounded-lg" />
            <textarea name="message" placeholder="Message" value={formData.message} onChange={handleChange} required className="w-full p-3 border rounded-lg" rows="4"></textarea>
            <button type="submit" disabled={status === 'sending'} className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 w-full">
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>
            {status === 'success' && <p className="text-green-600">Message sent!</p>}
          </form>
        </div>
       
      </div>
    </section>
  );
};
export default Contact;
