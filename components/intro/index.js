import Image from "next/image";
import React from "react";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Intro = () => {
  const technologies = [
    { src: "/css.jpg", alt: "CSS" },
    { src: "/scss.jpg", alt: "SCSS" },
    { src: "/html.png", alt: "HTML" },
    { src: "/react.png", alt: "React" },
    { src: "/next.jpg", alt: "Next.js" },
    { src: "/js.png", alt: "JavaScript" },
    { src: "/ts.png", alt: "TypeScript" },
    { src: "/node.png", alt: "Node.js" },
    { src: "/express.png", alt: "Express.js" },
    { src: "/mongo.png", alt: "MongoDB" },
    { src: "/mysql.png", alt: "MySQL" },
    { src: "/git.png", alt: "Git" },
    { src: "/github.png", alt: "GitHub" },
  ];

  const socials = [
    { icon: <FaGithub size={30} />, link: "https://github.com" },
    { icon: <FaLinkedin size={30} />, link: "https://linkedin.com" },
    { icon: <FaTwitter size={30} />, link: "https://twitter.com" },
  ];

  return (
    <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 text-white min-h-screen flex flex-col items-center">
      {/* Hero Section */}
      <div className="relative w-full text-center py-16">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/avatar.jpg"
            layout="fill"
            objectFit="cover"
            alt="Background"
          />
        </div>
        <div className="relative z-10 flex flex-col justify-center items-center text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center w-full rounded-full animate-bounce">
              <Image
                src="/avatar.jpg"
                width={80}
                height={80}
                className="rounded-full"
                alt="Avatar"
              />
            </div>
            <h1 className="mt-4 text-3xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-purple-500">
              Full-Stack Developer
            </h1>
            <div className="mt-4 text-xl lg:text-2xl">
              <Typewriter
                options={{
                  strings: [
                    "Coding with passion and precision.",
                    "Designing dynamic, responsive front-end.",
                    "Building scalable back-end solutions.",
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 50,
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Social Media Icons */}
      <div className="flex space-x-6 mt-6">
        {socials.map((social, index) => (
          <a
            key={index}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-transform transform hover:scale-125"
          >
            {social.icon}
          </a>
        ))}
      </div>

      {/* Technologies Section */}
      <div
      className=" w-full flex mt-5 border-t-2  border-b-2 justify-center"
        data-aos-duration="1200"
        data-aos-delay="100"
        data-aos="fade-up"
        data-aos-offset="0"
      >
        <div className="py-4 text-xl lg:text-2x text-center ">
          Technologies | Tools | Frameworks{" "}
        </div>
      </div>

      <div
        className="text-2xl w-full flex bg-white md:text-3xl lg:text-4xl font-bold"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        <div class="wrapper my-3">
          <div class="item item1">
            <Image src="/css.jpg" alt="Css" width={100} height={100} />
          </div>
          <div class="item item2">
            <Image src="/scss.jpg" alt="Scss" width={100} height={100} />
          </div>
          <div class="item item3">
            {" "}
            <Image src="/html.png" alt="Html" width={100} height={100} />
          </div>
          <div class="item item4">
            {" "}
            <Image src="/react.png" alt="React Js" width={100} height={100} />
          </div>
          <div class="item item5">
            {" "}
            <Image src="/next.jpg" alt="Next Js" width={150} height={100} />
          </div>
          <div class="item item6">
            {" "}
            <Image src="/js.png" alt="JavaScript" width={100} height={100} />
          </div>
          <div class="item item7">
            {" "}
            <Image src="/ts.png" alt="Typescript" width={100} height={100} />
          </div>
          <div class="item item8">
            {" "}
            <Image src="/node.png" alt="Node Js" width={100} height={100} />
          </div>
          <div class="item item9">
            {" "}
            <Image
              src="/express.png"
              alt="Express Js"
              width={100}
              height={100}
            />
          </div>
          <div class="item item10">
            {" "}
            <Image src="/mongo.png" alt="MongoDb" width={100} height={100} />
          </div>
          <div class="item item11">
            {" "}
            <Image src="/mysql.png" alt="Mysql" width={100} height={100} />
          </div>
          <div class="item item12">
            {" "}
            <Image src="/git.png" alt="Git" width={100} height={100} />
          </div>
          <div class="item item13">
            {" "}
            <Image src="/github.png" alt="Github" width={100} height={100} />
          </div>
        </div>
      </div>
      {/* <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="w-full max-w-6xl px-4 py-8"
      >
        <div className="text-center text-2xl lg:text-3xl font-bold text-gray-400">
          Technologies | Tools | Frameworks
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-6 mt-6">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="group relative flex items-center justify-center p-4 bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transform transition-transform hover:scale-105"
            >
              <Image
                src={tech.src}
                alt={tech.alt}
                width={80}
                height={80}
                className="transition-transform transform group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-white font-bold text-sm">{tech.alt}</span>
              </div>
            </div>
          ))}
        </div>
      </motion.div> */}

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-8"
      >
        <button className="px-8 py-3 bg-teal-500 hover:bg-teal-600 text-white font-bold rounded-full shadow-md transform transition-transform hover:scale-110">
          Contact Me
        </button>
      </motion.div>

      
    </div>
  );
};

export default Intro;