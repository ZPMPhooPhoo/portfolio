import { Button } from "@/components/ui/button";
import { SocialIcons } from "@/components/social-icons";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 overflow-hidden pt-8">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-black to-black z-0"></div>

      {/* Content */}
      <div className="container mx-auto z-10 flex flex-col items-center">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-2 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500">
          ZIN PHOO MON
        </h1>

        <h2 className="text-2xl md:text-3xl font-medium mb-6 text-gray-300">
          FULLSTACK DEVELOPER
        </h2>

        <div className="relative w-64 h-64 md:w-80 md:h-80 mb-8">
          <img
            src="/placeholder.svg?height=320&width=320"
            alt="Zin Phoo Mon portrait"
            width={320}
            height={320}
            className="rounded-full object-cover"
          />
        </div>

        <p className="text-xl md:text-2xl mb-8 max-w-2xl text-gray-300">
          Experienced fullstack developer with expertise in Java, Spring, React,
          and database technologies. Building innovative solutions since 2017.
        </p>

        <Button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 py-6 text-lg rounded-full">
          HIRE ME
        </Button>

        <div className="mt-16">
          <SocialIcons />
        </div>
      </div>
    </section>
  );
}
