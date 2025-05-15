"use client";
import { Feature } from "./components/Feature";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import {
  FaFeather,
  FaWrench,
  FaShieldAlt,
  FaRobot,
  FaCubes,
  FaBell,
} from "react-icons/fa";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center">
        <section className="min-h-screen w-full flex items-center justify-center container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
            <div className="w-full lg:w-[475px] space-y-[5px] text-left flex flex-col justify-center min-h-screen lg:min-h-0 py-16 lg:py-0">
              <h1 className="font-bold text-gray-50 text-4xl md:text-5xl">
                Time to Transform
              </h1>
              <h1 className="font-bold text-gray-50 text-4xl md:text-5xl">
                <span className="text-blue-500">Your</span> Experience
              </h1>
              <p className="text-ellipsis mt-[20px] text-lg text-slate-300">
                The next generation of scripting, so you can achieve your max
                potential in Hypixel Skyblock.
              </p>
              <div className="flex justify-start gap-4 mt-8">
                <button className="bg-blue-700 hover:bg-blue-900 text-white px-6 py-2 rounded-lg cursor-pointer transition-colors duration-300">
                  Download
                </button>
                <button className="bg-gray-700 hover:bg-gray-800 text-white px-6 py-2 rounded-lg cursor-pointer transition-colors duration-300">
                  Coming in 2026
                </button>
              </div>
            </div>
            <div className="h-48 w-px bg-gray-700 hidden lg:block" />
            <div className="hidden lg:block w-full lg:w-[560px] mt-8 lg:mt-0">
              <div className="aspect-video">
                <iframe
                  src="https://www.youtube.com/embed/o8p1G-yWxGw"
                  className="w-full h-full rounded-lg"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  frameBorder="0"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </section>
        <section className="min-h-screen w-full flex items-center justify-center container mx-auto px-4 py-16 mt-4 lg:mt-0">
          <div className="flex flex-col w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center text-center mb-12"
            >
              <h1 className="font-bold text-gray-50 text-4xl">What Makes Us</h1>
              <h1 className="font-bold text-gray-400 text-4xl">Unique?</h1>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4"
            >
              <Feature
                title="Lightweight"
                description="Built on Fabric 1.21.4, optimized for minimal performance impact while gaming"
                icon={FaFeather}
                iconColor="text-gray-300"
              />
              <Feature
                title="QoL Features"
                description="Streamlined features to enhance your Skyblock experience without complexity"
                icon={FaWrench}
                iconColor="text-gray-400"
              />
              <Feature
                title="Failsafes"
                description="Advanced protection systems to keep your account safe while using features"
                icon={FaShieldAlt}
                iconColor="text-emerald-400"
              />
              <Feature
                title="Macros"
                description="Powerful macro system with easy setup and configuration options"
                icon={FaRobot}
                iconColor="text-cyan-400"
              />
              <Feature
                title="Modern"
                description="Built on the latest Minecraft and Fabric versions for optimal compatibility"
                icon={FaCubes}
                iconColor="text-indigo-400"
              />
              <Feature
                title="Updates"
                description="Regular updates and new features to keep up with Skyblock changes"
                icon={FaBell}
                iconColor="text-amber-400"
              />
            </motion.div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
