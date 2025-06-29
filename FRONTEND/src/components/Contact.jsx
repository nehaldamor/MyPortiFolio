import React, { useState } from "react";

const Contact = () => {
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState('');
  const [email, setEmail] = useState('')
  const Data={
    name:name,
    email:email,
    message:message
  }
  const handleSubmit=async(e)=>{
      e.preventDefault();
      try {
        const response = await fetch("http://localhost:5000/send-email", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, email, message }),
        });
  
        if (!response.ok) {
          throw new Error("Failed to send message.");
        }
  
        const data = await response.json(); // Response ko JSON me convert karein
        setStatus(data.message || "Message sent successfully!"); // API ka response show karein
        setName("");
        setEmail("");
        setMessage("");
      } catch (error) {
        setStatus("Error sending message.");
      }

  }
  return (
    <div id="contact" className="min-h-screen flex flex-col items-center justify-center px-4 py-10 bg-gray-900 text-white">
      <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
      <p className="text-center max-w-md text-gray-400 mb-8">
          
      </p>
      <form onSubmit={handleSubmit} className="w-full max-w-lg bg-gray-800 p-6 rounded-lg shadow-lg">
        <div className="mb-4">
          <label className="block text-gray-300 mb-1">Name</label>
          <input
          value={name}
            onChange={(e)=>{setName(e.target.value)}}
            type="text"
            className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            placeholder="Enter your name"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-300 mb-1">Email</label>
          <input
          value={email}
            onChange={(e)=>{setEmail(e.target.value)}}
            type="email"
            className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-300 mb-1">Message</label>
          <textarea
          value={message}
          onChange={(e)=>{setMessage(e.target.value)}}
            className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            rows="4"
            placeholder="Enter your message"
          ></textarea>
        </div>
        <button className="w-full bg-cyan-500 text-white p-2 rounded-lg hover:bg-cyan-600 transition">
          Send Message
        </button>
      </form>
      {status && <p className="mt-3 text-center">{status}</p>}
      <div className="mt-8 text-gray-400">
        <p>Contact : <span className="text-sky-300">(+91) 9313004272</span></p>
        <p>Email : <a href="mailto:nehaldamor77@gmail.com" className="text-cyan-400 hover:underline">nehaldamor77@gmail.com</a></p>
        <p>LinkedIn : <a href="https://www.linkedin.com/in/nehal-damor/" className="text-cyan-400 hover:underline">linkedin.com/in/nehal-damor/</a></p>
      </div>
    </div>
  );
};

export default Contact;
