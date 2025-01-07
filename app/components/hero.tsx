export default function Hero() {
  return (
    <section className="h-svh bg-black flex flex-col pt-48 gap-5 px-5 items-center relative overflow-hidden">
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
      <h1 className="text-center text-5xl font-bold bg-gradient-to-br from-[#3B82F6] to-white text-transparent bg-clip-text">Empowering Your Business with Smarter AI Solutions</h1>
      <h2 className="text-center text-3xl text-white">Automate repetitive tasks, minimize errors, and scale your business efficiently.</h2>
      <button className="bg-[#3386ff] text-white px-4 text-4xl py-2 rounded-md">Learn More</button>
    </section>
  );
}

