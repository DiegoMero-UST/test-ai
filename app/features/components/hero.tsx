export default function Hero() {
  return (
    <section className="bg-black h-svh pt-48 text-white relative overflow-hidden flex flex-col items-center gap-10 p-5 md:px-10 md:pt-72 md:gap-10 xl:px-20">
      <div className="absolute inset-0">
        {[...Array(50)].map((_, index) => (
          <div
            key={index}
            className="absolute w-[2px] h-[2px] bg-white rounded-full animate-twinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`
            }}
          />
        ))}
      </div>
      <h2 className="text-center text-5xl font-bold bg-gradient-to-br from-[#3B82F6] to-white text-transparent bg-clip-text lg:text-6xl xl:text-8xl">
        Innovate, Automate, Dominate.
      </h2>
      <p className="text-center text-4xl xl:text-5xl">
        Agentify.AI is more than just an automation tool. It is the perfect ally for your business and the guide to efficiency and your future.
      </p>

      <div className="absolute bottom-10 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-xl font-light xl:text-4xl">Discover More</span>
        <svg 
          className="w-8 h-8"
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}