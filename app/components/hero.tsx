export default function Hero() {
  return (
    <section className="h-svh bg-black flex flex-col pt-48 gap-10 px-5 items-center relative overflow-hidden">
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
      <h1 className="text-center text-4xl text-white font-bold">Empowering Your Business with Smarter AI Agents</h1>
      <h2 className="text-center text-2xl text-white">Automate repetitive tasks, minimize errors, and scale your business efficiently.</h2>
      <button className="bg-[#3386ff] text-white px-4 text-3xl py-2 rounded-md">Learn More</button>
    </section>
  );
}

