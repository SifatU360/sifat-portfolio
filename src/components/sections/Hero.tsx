export default function Hero() {
  return (
    <section id="home" className="min-h-[90vh] flex items-center">
      <div className="space-y-4">
        <h1 className="text-4xl md:text-6xl font-bold">
          Hi, I&apos;m <span className="text-blue-500">Sifat</span>
        </h1>
        <h2 className="text-2xl md:text-3xl text-gray-300">Full Stack Developer</h2>
        <p className="text-gray-400 max-w-2xl">
          Building modern web applications with cutting-edge technologies
        </p>
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition">
          Download Resume
        </button>
      </div>
    </section>
  );
}