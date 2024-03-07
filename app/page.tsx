import About from "@/components/about/About";
import Blog from "@/components/blog/Blog";
import ClientHappy from "@/components/clientHappy/ClientHappy";
import Education from "@/components/education/Education";
import Services from "@/components/services/Services";
import Skill from "@/components/skill/Skill";
import Works from "@/components/works/Works";
import Image from "next/image";
import { Dropdown } from "react-day-picker";

export default function Home() {
  return (
    <div>
      <About />
      <Services />
      <Skill />
      <Works />
      <Education />
      <ClientHappy />
      <Blog></Blog>
    </div>
  );
}
