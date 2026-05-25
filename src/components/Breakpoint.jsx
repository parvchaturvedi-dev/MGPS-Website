import React, { useRef } from "react";
import styled from "styled-components";
import { motion as Motion, useScroll, useSpring } from "framer-motion";

const Breakpoint = () => {
  const containerRef = useRef(null);

  // Scroll Progress track karna
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end center"], // Line 'end center' tak poori draw ho jayegi
  });

  // Smoothness ke liye spring physics
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 50,
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
          {/* Background Path (Dashed/Light) - Guide line */}
          <path 
            // FIXED: Added missing control point (700,50) to make it a proper Cubic curve
            d="M0,50 C200,20 400,80 600,50 C700,50 800,20 1000,50" 
            className="bg-path"
          />
          
          {/* Animated Path (Solid/Dark) - The "Drawing" effect */}
          <Motion.path
            // FIXED: Same coordinates here for the animation
            d="M0,50 C200,20 400,80 600,50 C700,50 800,20 1000,50"
            className="main-path"
            style={{ pathLength: smoothProgress }}
          />
        </svg>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  position: relative;
  width: 100%;
  padding: 30px 0;
  background: white;

  .line-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 40px;
  }

  .drawing-svg {
    width: 100%;
    height: 80px;
    overflow: visible;
  }

  .bg-path {
    fill: none;
    stroke: #e2e8f0; /* light gray */
    stroke-width: 2;
    stroke-dasharray: 8, 8;
  }

  .main-path {
    fill: none;
    stroke: #475569; /* slate-600 */
    stroke-width: 3;
    stroke-linecap: round;
    stroke-linejoin: round;
    /* Optional: shadow for depth */
    filter: drop-shadow(0px 2px 2px rgba(0,0,0,0.05));
  }
`;

export default Breakpoint;
