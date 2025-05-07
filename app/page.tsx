'use client';
import { Feature } from './component/Feature';
import { FaCode, FaUser, FaSync } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <section className="min-h-screen w-full flex items-center justify-center container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          <div className="w-full lg:w-[475px] space-y-[5px] text-left flex flex-col justify-center min-h-screen lg:min-h-0 py-16 lg:py-0">
            <h1 className="font-bold text-gray-50 text-4xl md:text-5xl">
              Time to Transform
            </h1>
            <h1 
              className="font-bold text-gray-50 text-4xl md:text-5xl"
            >
              <span className="text-blue-500">Your</span> Experience.
            </h1>
            <p 
              className="text-ellipsis mt-[20px] text-lg text-slate-300"
            >
              The next generation of scripting, so you can achieve your max potential in Hypixel Skyblock.
            </p>
            <div 
              className="flex justify-start gap-4 mt-8"
            >
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg cursor-pointer transition-colors duration-300">
                Download
              </button>
              <button className="bg-gray-700 hover:bg-gray-800 text-white px-6 py-2 rounded-lg cursor-pointer transition-colors duration-300">
                Coming Soon..
              </button>
            </div>
          </div>
          <div className="h-48 w-px bg-gray-700 hidden lg:block" />
          <div 
            className="hidden lg:block w-full lg:w-[560px] mt-8 lg:mt-0"
          >
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
            <h1 className="font-bold text-blue-500 text-4xl">Unique?</h1>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4"
          >
            <Feature
              title="Frequent Updates"
              description="Uses the latest Minecraft version and the Fabric API"
              icon={FaCode}
            />
            <Feature
              title="User Friendly"
              description="Easy to use interface for both beginners"
              icon={FaUser}
            />
            <Feature
              title="No Bullshit"
              description="Everything is open source, free, and built from the ground up"
              icon={FaSync}
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
}