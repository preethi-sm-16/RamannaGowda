"use client";

import React, { useState } from "react";
import Image from "next/image";
import styles from "./ContactForm.module.css";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [whatsappUrl, setWhatsappUrl] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all required fields.");
      return;
    }

    // Formulate message for WhatsApp
    const number = "919008048968"; // G K Ramana Gouda's primary mobile number
    const baseText = `Hello Mr. G K Ramana Gouda,\n\nMy name is ${formData.name}.\nEmail: ${formData.email}\nSubject: ${formData.subject || "Professional Inquiry"}\n\nMessage:\n${formData.message}`;
    const encodedText = encodeURIComponent(baseText);
    const finalUrl = `https://wa.me/${number}?text=${encodedText}`;

    setWhatsappUrl(finalUrl);
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
    setIsSubmitted(false);
    setWhatsappUrl("");
  };

  return (
    <section id="contact" className={styles.contactSection}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <span className={styles.subtitle}>Inquiries</span>
          <h2 className={styles.title}>Let&apos;s Connect</h2>
          <p className={styles.headerDesc}>
            Submit your message to coordinate directly or launch a private WhatsApp chat.
          </p>
        </div>

        <div className={styles.grid}>
          {/* Contact details Card with Portrait */}
          <div className={styles.infoCol}>
            <div className={styles.profileBox}>
              <div className={styles.portraitWrapper}>
                <Image
                  src="/executive_portrait.png"
                  alt="G K Ramana Gouda Portrait"
                  width={150}
                  height={180}
                  className={styles.portrait}
                />
              </div>
              <div className={styles.profileText}>
                <h3 className={styles.infoTitle}>G K Ramana Gouda</h3>
                <p className={styles.infoSub}>Integrated Steel Plant Operations Leader | Plant Head</p>
              </div>
            </div>

            <div className={styles.infoList}>
              <div className={styles.infoItem}>
                <div className={styles.iconBox}>
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className={styles.itemDetails}>
                  <span className={styles.itemLabel}>Email Address</span>
                  <a href="mailto:ramangouda.jaya@gmail.com" className={styles.itemValue}>
                    ramangouda.jaya@gmail.com
                  </a>
                </div>
              </div>

              <div className={styles.infoItem}>
                <div className={styles.iconBox}>
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div className={styles.itemDetails}>
                  <span className={styles.itemLabel}>Phone Contact</span>
                  <div className={styles.phoneList}>
                    <a href="tel:+919008048968" className={styles.itemValue}>+91 9008048968</a>
                    <span className={styles.divider}>/</span>
                    <a href="tel:+919529908810" className={styles.itemValue}>+91 9529908810</a>
                  </div>
                </div>
              </div>

              <div className={styles.infoItem}>
                <div className={styles.iconBox}>
                  <svg fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </div>
                <div className={styles.itemDetails}>
                  <span className={styles.itemLabel}>LinkedIn Profile</span>
                  <a href="https://linkedin.com/in/g-k-ramana-gouda-46a23014a" target="_blank" rel="noopener noreferrer" className={styles.itemValue}>
                    G K Ramana Gouda
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Container */}
          <div className={styles.formCol}>
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.inputGroup}>
                  <label htmlFor="name" className={styles.label}>Your Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className={styles.input}
                    placeholder="e.g. Jane Doe"
                  />
                </div>

                <div className={styles.inputGroup}>
                  <label htmlFor="email" className={styles.label}>Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className={styles.input}
                    placeholder="e.g. jane@example.com"
                  />
                </div>

                <div className={styles.inputGroup}>
                  <label htmlFor="subject" className={styles.label}>Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={styles.input}
                    placeholder="e.g. Professional Consultation"
                  />
                </div>

                <div className={styles.inputGroup}>
                  <label htmlFor="message" className={styles.label}>Your Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className={styles.textarea}
                    placeholder="Type your message here..."
                  ></textarea>
                </div>

                <button type="submit" className={styles.submitBtn}>
                  Generate Message
                </button>
              </form>
            ) : (
              <div className={styles.successCard}>
                <div className={styles.successIcon}>
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className={styles.successTitle}>Inquiry Ready</h3>
                <p className={styles.successDesc}>
                  Your message has been formulated. Click below to redirect to WhatsApp and dispatch the query directly to G K Ramana Gouda.
                </p>

                <div className={styles.successActionBox}>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.whatsappBtn}
                  >
                    <svg fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.96 9.96 0 001.333 4.982L2 22l5.202-1.362a9.92 9.92 0 004.808 1.242h.005c5.505 0 9.99-4.478 9.99-9.986A9.97 9.97 0 0012.012 2zm5.834 14.154c-.252.712-1.46 1.304-2.003 1.385-.494.074-.988.136-3.238-.795-2.877-1.19-4.707-4.108-4.851-4.3a5.06 5.06 0 01-1.03-2.713c0-1.895.99-2.827 1.344-3.19.252-.258.649-.37.104.03.395.002.593.003.74.004.148.001.346-.056.544.423.197.48.69 1.688.75 1.808.06.12.1.258.02.42-.08.16-.12.258-.24.4-.12.14-.252.316-.36.425-.12.12-.244.25-.104.49.14.24.62.992 1.33 1.624.912.812 1.68 1.062 1.916 1.18.236.12.375.1.515-.06.14-.16.593-.688.75-.92.158-.23.317-.2.535-.12.217.08 1.38.65 1.616.77.237.12.395.18.455.28.06.1.06.58-.192 1.294z" />
                    </svg>
                    Dispatch via WhatsApp
                  </a>
                  <button onClick={handleReset} className={styles.resetBtn}>
                    Compose New Message
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
