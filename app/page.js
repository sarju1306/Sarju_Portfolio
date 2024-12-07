"use client";
import Intro from "@/components/intro";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
export default function Home() {
  useEffect(() => {
    AOS.init({
      // Global settings here
    });
  }, []);
  return <div >
    <Intro/>
  </div>;
}
