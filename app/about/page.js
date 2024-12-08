import Image from "next/image";

const About = () => {

  return (
    <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 text-white min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Title */}
        <div className="text-center"  data-aos-delay='200' data-aos="fade-down">
          <h1 className="text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-purple-500">
            About Me
          </h1>
          <p
            className="mt-4 text-lg lg:text-xl text-gray-400"
            data-aos="fade-up"
          >
            Discover my journey, passions, and vision for technology.
          </p>
        </div>

        {/* Content Section */}
        <div
          className="mt-12 flex flex-col lg:flex-row items-center lg:items-center gap-12"
          data-aos="flip-up"
          data-aos-delay='200'
        >
          {/* Image Section */}
          <div className="relative w-full lg:w-1/2" data-aos="zoom-out">
            <div className="relative w-full h-96">
              <Image
                src="/avatar.jpg"
                alt="About Me"
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Text Section */}
          <div
            className="lg:w-1/2 space-y-6 text-lg lg:text-xl text-gray-300 leading-relaxed"
            data-aos="slide-right"
          >
            <p>
              Hi! I’m{" "}
              <span className="text-teal-400 font-bold">
                Sarju Dharsandiya
              </span>
              , a passionate and dedicated full-stack developer with a deep love
              for creating scalable, innovative web solutions. Over the years,
              I’ve honed my skills in designing elegant front-end interfaces and
              building robust back-end systems.
            </p>
            <p>
              My journey began with a curiosity for technology, which quickly
              grew into a career that I am immensely proud of. I believe in
              staying ahead of the curve, continuously learning, and adopting
              the latest technologies to deliver exceptional results for my
              clients and projects.
            </p>
            <p>
              Outside of coding, I enjoy exploring new technologies,
              contributing to open-source projects, and mentoring aspiring
              developers to help them achieve their goals.
            </p>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-16">
          <h2
            className="text-3xl lg:text-4xl font-bold text-teal-400 text-center"
            data-aos="fade-down"
          >
            My Skills
          </h2>
          <div
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mt-8"
            data-aos="fade-up"
          >
            {[
              { name: "HTML", src: "/html.png" },
              { name: "CSS", src: "/css.jpg" },
              { name: "SCSS", src: "/scss.jpg" },
              { name: "JavaScript", src: "/js.png" },
              { name: "Typescript", src: "/ts.png" },
              { name: "React", src: "/react.png" },
              { name: "Next.js", src: "/next.jpg" },
              { name: "Node.js", src: "/node.png" },
              { name: "MongoDB", src: "/mongo.png" },
              { name: "Mysql", src: "/mysql.png" },
              { name: "Git", src: "/git.png" },
              { name: "GitHub", src: "/github.png" },
            ].map((skill, index) => (
              <div
                key={index}
                className="group flex flex-col items-center justify-center bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transform transition-transform"
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              >
                <Image
                  src={skill.src}
                  alt={skill.name}
                  width={80}
                  height={80}
                  className="mb-4 group-hover:scale-110 transition-transform"
                />
                <span className="text-teal-400 font-medium">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center"  data-aos="fade-up">
          <h3 className="text-2xl lg:text-3xl font-semibold text-gray-400">
            Want to collaborate or learn more about my work?
          </h3>
          <div className="flex justify-center mt-6">
            <button
              className="px-8 py-3 bg-teal-500 hover:bg-teal-600 text-white font-bold rounded-full shadow-lg transform hover:scale-110 transition-transform"
             
            >
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </div>
  );

};

export default About;