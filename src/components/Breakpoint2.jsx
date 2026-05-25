import React, { useRef } from "react";
import styled from "styled-components";
import { motion as Motion, useScroll, useSpring } from "framer-motion";

// CSS ko wrap ke andar (Top/Left side) rakha hai
const StyledWrapper = styled.div`
  position: relative;
  width: 100%;
  padding: 80px 0;
  background: transparent;

  .line-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 5%;
    position: relative;
    display: flex;
    justify-content: flex-start; /* Har cheez left se shuru hogi */
  }

  .drawing-svg {
    width: 100%;
    height: 60px;
    overflow: visible;
  }

  /* Background grey dashed line */
  .bg-path {
    fill: none;
    stroke: #e2e8f0; 
    stroke-width: 2;
    stroke-dasharray: 10, 15;
  }

  /* Main animated line */
  .main-path {
    fill: none;
    stroke: #64748b; /* Pencil lead color */
    stroke-width: 3;
    stroke-linecap: round;
    stroke-linejoin: round;
    /* Drawing feel ke liye subtle shadow */
    filter: drop-shadow(0px 2px 3px rgba(0,0,0,0.05));
  }
`;

const Breakpoint2 = () => {
  const containerRef = useRef(null);

  // Scroll tracking logic
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center center"], 
  });

  // Spring physics for smooth drawing
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 45,
    damping: 20,
    restDelta: 0.001
  });

  return (
    <StyledWrapper ref={containerRef}>
      <div className="line-container">
        <svg 
          viewBox="0 0 1000 100" 
          preserveAspectRatio="none" 
          className="drawing-svg"
        >
          {/* Static Guide Line */}
          <path 
            d="M0,50 C150,20 350,80 500,50 C650,20 850,80 1000,50" 
            className="bg-path"
          />
          
          {/* Animated "Hand-Drawn" Line */}
          <Motion.path
            d="M0,50 C150,20 350,80 500,50 C650,20 850,80 1000,50"
            className="main-path"
            style={{ pathLength: smoothProgress }}
          />
        </svg>
      </div>
    </StyledWrapper>
  );
};

export default Breakpoint2;
