import { Github, Instagram } from 'lucide-react';
import React from 'react'
import { FaTelegram } from 'react-icons/fa';
import { FaThreads } from 'react-icons/fa6';

const Footer = () => {
     const socialLinks = [
    { icon: Github, href: "https://github.com/Ethayen-B" },
    { icon: Instagram, href: "https://www.instagram.com/ze_amin24" },
    { icon: FaTelegram, href: "https://t.me/ze_amin24"},
    { icon: FaThreads, href: "https://www.threads.com/@ze_amin24"}
  ];
  return (
    <section className='relative py-6 overflow-hidden'>
        <div className="max-w-3xl mx-auto ">
            <div className="flex gap-6 justify-center items-center">
                {socialLinks.map((link, idx) => (
                <a
                  href={link.href}
                  key={idx}
                  className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary hover:border-primary transition-all duration-300"
                >
                  {<link.icon size={24} />}
                </a>
              ))}
            </div>
        </div>
    </section>
  )
}

export default Footer