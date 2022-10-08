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

// TODO anyの解消
type LangType = {
  name: string;
  href: string;
  icon: any;
  asterisk?: boolean;
};

// TODO anyの解消
const languages: any = [
  {
    name: "TypeScript",
    href: "https://www.typescriptlang.org/",
    icon: <SiTypescript />,
  },
  { name: "React.js", href: "https://ja.reactjs.org/", icon: <SiReact /> },
  {
    name: "Next.js",
    href: "https://nextjs.org/",
    icon: <SiNextdotjs />,
    asterisk: true,
  },
  {
    name: "Solidity",
    href: "https://docs.soliditylang.org/en/v0.8.17/",
    icon: <SiSolidity />,
    asterisk: true,
  },
  {
    name: "Vue.js",
    href: "https://jp.vuejs.org/index.html",
    icon: <FaVuejs />,
  },
  { name: "Nuxt.js", href: "https://nuxtjs.org/", icon: <SiNextdotjs /> },
  { name: "Prisma", href: "https://www.prisma.io/", icon: <SiPrisma /> },
  { name: "Node.js", href: "https://nodejs.org/ja/docs/", icon: <FaNode /> },
  { name: "Nest.js", href: "https://nestjs.com/", icon: <SiNestjs /> },
  { name: "Python", href: "https://www.python.org/doc/", icon: <SiPython /> },
  { name: "AWS", href: "https://aws.amazon.com/jp/", icon: <FaAws /> },
  {
    name: "PostgreSQL",
    href: "https://www.postgresql.org/",
    icon: <SiPostgresql />,
  },
];

const Skills = () => {
  return (
    <div className="grid gap-10 grid-cols-3">
      {languages.map((language) => (
        <div key={language.name}>
          <a href={language.href} target="_blank" rel="noreferrer">
            {language.icon}
          </a>
          <h3>{language.name}</h3>
          {language.asterisk && <h5>*</h5>}
        </div>
      ))}
    </div>
  );
};

export default Skills;
