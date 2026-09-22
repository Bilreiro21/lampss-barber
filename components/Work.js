"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const works = [
  ["work-01.jpg", "FADE"],
  ["work-02.jpg", "CLASSIC"],
  ["work-03.jpg", "BEARD"],
  ["work-04.jpg", "SIGNATURE"]
];

function WorkCard({ file, title, index }) {
  const [hovered, setHovered] = useState(false);
  
  return (
    <div
      className="position-relative overflow-hidden"
      style={{ 
        height: "clamp(280px, 40vw, 430px)", 
        border: "1px solid",
        borderColor: hovered ? "rgba(201,164,106,.5)" : "rgba(255,255,255,.08)",
        transition: "border-color .5s ease"
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img
        src={`/images/${file}`}
        alt={title}
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{ 
          objectFit: "cover", 
          transition: "transform .8s cubic-bezier(0.2, 0.8, 0.2, 1), filter .8s ease",
          transform: hovered ? "scale(1.12)" : "scale(1)",
          filter: hovered ? "grayscale(0%)" : "grayscale(80%) drop-shadow(0 0 10px rgba(0,0,0,0.5))"
        }}
        onError={(e) => { e.currentTarget.style.display = "none"; }}
      />
      
      {/* Dynamic gradient that darkens slightly on hover for text clarity */}
      <div 
        className="position-absolute top-0 start-0 w-100 h-100" 
        style={{ 
          background: "linear-gradient(to top, rgba(0,0,0,.85), transparent 65%)",
          opacity: hovered ? 1 : 0.85,
          transition: "opacity .5s ease"
        }} 
      />
      
      <span 
        className="position-absolute" 
        style={{ 
          top: 24, 
          left: 24, 
          fontSize: 9, 
          letterSpacing: ".3em", 
          color: hovered ? "#fff" : "#d6ad6d",
          transition: "color .5s ease"
        }}
      >
        0{index + 1}
      </span>
      
      <div 
        className="position-absolute" 
        style={{ 
          bottom: 28, 
          left: 28,
          transform: hovered ? "translateY(-5px)" : "translateY(0)",
          transition: "transform .5s cubic-bezier(0.2, 0.8, 0.2, 1)"
        }}
      >
        <p className="mb-1" style={{ fontSize: 9, letterSpacing: ".35em", color: "rgba(255,255,255,.45)" }}>LAMPS BARBER</p>
        <h3 className="font-serif mb-0" style={{ fontSize: "1.5rem", letterSpacing: ".12em", color: hovered ? "#e2c58e" : "#fff", transition: "color .5s ease" }}>{title}</h3>
      </div>
    </div>
  );
}

export default function Work() {
  return (
    <section id="trabalho" style={{ background: "#0c0a08", padding: "112px 0" }}>
      <div className="container">
        <div className="d-flex flex-column flex-md-row align-items-start align-items-md-end justify-content-between gap-3 mb-5">
          <div>
            <p className="mb-3" style={{ fontSize: 10, letterSpacing: ".55em", color: "#d6ad6d" }}>PORTFÓLIO</p>
            <h2 className="font-serif text-uppercase mb-0" style={{ fontSize: "clamp(1.8rem, 5vw, 3.5rem)", letterSpacing: ".08em" }}>Os nossos trabalhos</h2>
          </div>
        </div>

        <div className="row g-3">
          {works.map(([file, title], i) => (
            <motion.div
              key={file}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * .08 }}
              className={`col-12 col-sm-6 ${i === 0 || i === 3 ? "col-md-7" : "col-md-5"}`}
            >
              <WorkCard file={file} title={title} index={i} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
