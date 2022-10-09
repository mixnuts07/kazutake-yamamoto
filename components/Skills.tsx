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
const languages: LangType[] = [
  {
    name: "TypeScript",
    href: "https://www.typescriptlang.org/",
    icon: <SiTypescript size="2.5rem" />,
  },
  {
    name: "React.js",
    href: "https://ja.reactjs.org/",
    icon: <SiReact size="2.5rem" />,
  },
  {
    name: "Next.js",
    href: "https://nextjs.org/",
    icon: <SiNextdotjs size="2.5rem" />,
    asterisk: true,
  },
  {
    name: "Solidity",
    href: "https://docs.soliditylang.org/en/v0.8.17/",
    icon: <SiSolidity size="2.5rem" />,
    asterisk: true,
  },
  {
    name: "Vue.js",
    href: "https://jp.vuejs.org/index.html",
    icon: <FaVuejs size="2.5rem" />,
  },
  {
    name: "Nuxt.js",
    href: "https://nuxtjs.org/",
    icon: <SiNextdotjs size="2.5rem" />,
  },
  {
    name: "Prisma",
    href: "https://www.prisma.io/",
    icon: <SiPrisma size="2.5rem" />,
  },
  {
    name: "Node.js",
    href: "https://nodejs.org/ja/docs/",
    icon: <FaNode size="2.5rem" />,
  },
  {
    name: "Nest.js",
    href: "https://nestjs.com/",
    icon: <SiNestjs size="2.5rem" />,
  },
  {
    name: "Python",
    href: "https://www.python.org/doc/",
    icon: <SiPython size="2.5rem" />,
  },
  {
    name: "AWS",
    href: "https://aws.amazon.com/jp/",
    icon: <FaAws size="2.5rem" />,
  },
  {
    name: "PostgreSQL",
    href: "https://www.postgresql.org/",
    icon: <SiPostgresql size="2.5rem" />,
  },
];

const Skills = () => {
  return (
    <div>
      <h3>Skills</h3>
      <div className="grid gap-10 grid-cols-3">
        {languages.map((language) => (
          <div key={language.name}>
            <a href={language.href} target="_blank" rel="noreferrer">
              {language.icon}
            </a>
            <h3 className="underline decoration-dotted">{language.name}</h3>
            {language.asterisk && <h5>*</h5>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
