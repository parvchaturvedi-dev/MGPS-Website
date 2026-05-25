import React from "react";

const Marquee = () => {
  const content = (
    <>
      <span className="mx-4">25 Years of Excellence</span>
      <span className="mx-4 text-blue-600">•</span>
      <span className="mx-4">Marigold Secondary School</span>
      <span className="mx-4 text-blue-600">•</span>
      <span className="mx-4">100% Passing Rate</span>
      <span className="mx-4 text-blue-600">•</span>
    </>
  );

  return (
    <div className="relative w-full bg-white border-y border-gray-100 py-6 md:py-8 overflow-hidden flex items-center">
      {/* We use two identical div blocks. 
          The 'animate-marquee' class handles the continuous translation.
      */}
      <div className="flex whitespace-nowrap animate-marquee">
        <div className="flex items-center text-2xl md:text-4xl font-black uppercase tracking-tighter text-black select-none">
          {content}
          {content}
          {content}
          {content}
        </div>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
  @keyframes marquee {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }
  .animate-marquee {
    display: flex;
    width: fit-content;
    animation: marquee 30s linear infinite;
  }
  .animate-marquee:hover {
    animation-play-state: paused;
  }
`,
        }}
      />
    </div>
  );
};

export default Marquee;
