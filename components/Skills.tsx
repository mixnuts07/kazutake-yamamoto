import { SiTypescript } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { SiSolidity } from "react-icons/si";
import { FaVuejs } from "react-icons/fa";
import { SiNuxtdotjs } from "react-icons/si";
import { SiPrisma } from "react-icons/si";
import { FaNode } from "react-icons/fa";
import { SiNestjs } from "react-icons/si";
import { SiPython } from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { SiPostgresql } from "react-icons/si";

// TODO anyとlink?の解消
type LangType = {
  name: string;
  link?: string;
  icon: any;
  asterisk?: boolean;
};

// TODO anyとlinkの解消
const languages: any = [
  { name: "TypeScript", link: "", icon: <SiTypescript /> },
  { name: "React.js", link: "", icon: <SiReact /> },
  { name: "Next.js", link: "", icon: <SiNextdotjs />, asterisk: true },
  { name: "Solidity", link: "", icon: <SiSolidity />, asterisk: true },
  { name: "Vue.js", link: "", icon: <FaVuejs /> },
  { name: "Nuxt.js", link: "", icon: <SiNextdotjs /> },
  { name: "Prisma", link: "", icon: <SiPrisma /> },
  { name: "Node.js", link: "", icon: <FaNode /> },
  { name: "Nest.js", link: "", icon: <SiNestjs /> },
  { name: "Python", link: "", icon: <SiPython /> },
  { name: "AWS", link: "", icon: <FaAws /> },
  { name: "PostgreSQL", link: "", icon: <SiPostgresql /> },
];

const Skills = () => {
  // <a
  //           href="https://ja.reactjs.org/"
  //           target="_blank"
  //           rel="noreferrer"
  //         ></a>
  return (
    <div className="grid gap-10 grid-cols-3">
      {languages.map((language) => (
        <div key={language.name}>
          {language.icon}
          <h3>{language.name}</h3>
          {language.asterisk && <h5>*</h5>}
        </div>
      ))}
    </div>
  );
};

export default Skills;
