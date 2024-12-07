import Image from "next/image";
import React from "react";
import Typewriter from "typewriter-effect";
import { useSpring, animated } from '@react-spring/web';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import the CSS
const Intro = () => {
    const props = useSpring({
        from: { transform: 'translateX(100%)' },
        to: { transform: 'translateX(-100%)' },
        loop: true,
        config: { duration: 6000 },
      });


    const settings = {
        infinite: true, // Make the slider loop continuously
        speed: 400, // Transition speed between slides
        slidesToShow: 5, // Number of slides to show at once
        slidesToScroll: 1, // Number of slides to scroll at a time
        autoplay: true, // Enable autoplay
        autoplaySpeed: 0, // Time interval for autoplay
        centerMode: false, // Disable center mode (prevents centered slide)
        focusOnSelect: false, // Disable focus on selecting individual slides
        responsive: [
          {
            breakpoint: 1024, // Adjust the number of slides to show on medium-sized screens
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 768, // Adjust the number of slides to show on small screens
            settings: {
              slidesToShow: 1,
            },
          },
        ],
      };
  return (
    <>
      <div
        data-aos-duration="1000"
        data-aos-delay="100"
        data-aos="fade-up"
        data-aos-offset="0"
      >
        <div className="intro my-5 min-h-[40vh] flex flex-col justify-start items-center text-center">
          <div>
            <div className="flex items-center justify-center bg-gray-800 rounded-full w-20 h-20">
              <Image
                src="/avatar.jpg"
                width={70}
                height={70}
                className="rounded-full"
                alt="Avatar"
              />
            </div>
          </div>
          <div className="text-center text-2xl md:text-3xl lg:text-4xl font-bold text-gray-400">
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
          <div className="space-y-2">
      <h1
        className="text-2xl md:text-3xl lg:text-4xl font-bold"
        data-aos="fade-up"
        data-aos-delay="200" // Delay for the first element
      >
       I’m a full-stack developer, 
      </h1>
      <h1
            className="text-2xl md:text-3xl lg:text-4xl font-bold"
        data-aos="fade-up"
        data-aos-delay="400" // Delay for the first element
      >
       creating innovative web solutions  
      </h1>
      <h1
           className="text-2xl md:text-3xl lg:text-4xl font-bold"
        data-aos="fade-up"
        data-aos-delay="600" // Delay for the second element
      >
        that integrate beautiful front-end design
      </h1>
      <h1
          className="text-2xl md:text-3xl lg:text-4xl font-bold"
        data-aos="fade-up"
        data-aos-delay="800" // Delay for the third element
      >
        with robust back-end functionality.
      </h1>
    </div>
        </div>
      </div>
    {/* <div className="logos">
        
      <animated.div style={props} className="flex space-x-10">
      <div>
      <Image src="/css.jpg" alt="JavaScript" width={100} height={100} /></div>
        <div><Image src="/react.png" alt="React" width={100} height={100} /></div>
        <div><Image src="/next.jpg" alt="Next.js" width={150} height={100} /></div>

        
        <div><Image src="/js.png" alt="Next.js" width={150} height={100} /></div>

        <div><Image src="/ts.png" alt="Next.js" width={90} height={80} /></div>
        <div><Image src="/mongo.png" alt="Tailwind CSS" width={150} height={150} /></div>

        <div><Image src="/mysql.png" alt="Tailwind CSS" width={150} height={150} /></div>
        <div><Image src="/git.png" alt="JavaScript" width={100} height={100} /></div>

      </animated.div>
    </div> */}


<div class="wrapper">
  <div class="item item1">
  <Image src="/css.jpg" alt="JavaScript" width={100} height={100} />
  </div>
  <div class="item item2"> <Image src="/react.png" alt="JavaScript" width={100} height={100} /></div>
  <div class="item item3"> <Image src="/next.jpg" alt="JavaScript" width={150} height={100} /></div>
  <div class="item item4"> <Image src="/js.png" alt="JavaScript" width={100} height={100} /></div>
  <div class="item item5"> <Image src="/ts.png" alt="JavaScript" width={100} height={100} /></div>
  <div class="item item6"> <Image src="/mongo.png" alt="JavaScript" width={100} height={100} /></div>
  <div class="item item7"> <Image src="/mysql.png" alt="JavaScript" width={100} height={100} /></div>
  <div class="item item8"> <Image src="/git.png" alt="JavaScript" width={100} height={100} /></div>
</div>
{/* <div class="logos">
      <div class="logos-slide flex">
      
      <img src="/css.jpg" alt="JavaScript" />
        <img src="/react.png" alt="React"/>
        <img src="/next.jpg" alt="Next.js"/>

        
        <img src="/js.png" alt="Next.js" />

        <img src="/ts.png" alt="Next.js" />
        <img src="/mongo.png" alt="Tailwind CSS" />

       <img src="/mysql.png" alt="Tailwind CSS" />
        <img src="/git.png" alt="JavaScript"  /></div>

     
      </div> */}

      {/* <div className="my-8">
      <Slider {...settings}>
        <div className="flex justify-center items-center">
          <Image src="/react.png" alt="React" width={50} height={50} />
        </div>
        <div className="flex justify-center items-center">
          <Image src="/next.jpg" alt="Next.js" width={50} height={50} />
        </div>
        <div className="flex justify-center items-center">
          <Image src="/avatar.jpg" alt="Node.js" width={50} height={50} />
        </div>
        <div className="flex justify-center items-center">
          <Image src="/avatar.jpg" alt="Tailwind CSS" width={50} height={50} />
        </div>
        <div className="flex justify-center items-center">
          <Image src="/avatar.jpg" alt="JavaScript" width={50} height={50} />
        </div>
      </Slider>
    </div> */}
    </>
  );
};

export default Intro;
