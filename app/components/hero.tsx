export default function Hero() {
  return (
    <section className="h-svh bg-black relative overflow-hidden flex flex-col items-center justify-center">
      {/* Stars background */}
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

      {/* Content wrapper with higher z-index */}
      <div className="relative z-1 flex flex-col pt-48 gap-5 px-5 items-center md:px-10">
        <h1 className="text-center text-5xl font-bold bg-gradient-to-r from-[#3B82F6] to-white text-transparent bg-clip-text lg:text-6xl p-5 xl:text-8xl">
          Empowering Your Business with Smarter AI Solutions
        </h1>
        
        <h2 className="text-center text-3xl text-white lg:text-4xl">
          Automate repetitive tasks, minimize errors, and scale your business efficiently.
        </h2>
        
        <button className="bg-blue-600 font-semibold hover:bg-blue-700 transition-colors text-white px-4 text-4xl py-2 rounded-md lg:text-5xl xl:text-6xl xl:px-10 xl:py-5">
          Get Started
        </button>
      </div>
    </section>
  );
}

