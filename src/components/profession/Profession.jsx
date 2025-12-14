import Roles from "./Roles";

const rolesData = [
  {
    id: 1,
    title: "Angular Developer",
    company: "Baazar",
    companyUrl: "https://web.baazar.ir",
    type: "Full-time",
    period: "Jul 2023 – Present",
    location: "Tehran, Iran",
    description:
      "Working as an Angular Developer on large-scale web applications, focusing on building scalable, maintainable, and high-performance front-end solutions. Collaborating closely with product and backend teams to implement complex business logic and improve user experience.",
    technologies: ["Angular", "TypeScript", "Git", "SASS"],
  },
  {
    id: 2,
    title: "Angular Developer",
    company: "Zhivar",
    companyUrl: "https://sawda.shop",
    type: "Full-time",
    period: "Jun 2021 – May 2023",
    location: "Tehran, Iran",
    description:
      "Developed and maintained enterprise-level Angular applications with a strong focus on performance, reusability, and responsive design. Contributed to feature development, UI improvements, and code optimization following best practices.",
    technologies: ["Angular", "TypeScript", "Git", "SASS"],
  },
  {
    id: 3,
    title: "Front-End Developer",
    company: "PTFCH",
    companyUrl: "https://www.crm-support.ir/",
    type: "Full-time",
    period: "Feb 2020 – May 2021",
    location: "Sanandaj, Iran",
    description:
      "Built responsive web interfaces and implemented UI components based on design requirements. Focused on clean HTML/CSS structure, cross-browser compatibility, and improving overall user experience.",
    technologies: ["HTML", "CSS", "JavaScript", "Git"],
  },
];

const Profession = () => {
  return (
    <section
      id="experience"
      className="content grid md:grid-cols-2 gap-10 px-4 py-12 md:py-20"
    >
      {/* Left Content */}
      <div className="flex flex-col justify-center">
        <p className="section-title mb-6">Experience</p>

        <p className="text-gray-400 text-sm sm:text-lg mb-4">
          I have worked as a front-end developer on professional, production-level
          projects, focusing on scalable architecture, clean code, and performance.
        </p>

        <p className="text-gray-400 text-sm sm:text-lg">
          My experience includes collaborating with cross-functional teams and
          delivering maintainable front-end solutions using modern technologies.
        </p>
      </div>

      {/* Right Content */}
      <div>
        {rolesData.map((role) => (
          <Roles key={role.id} role={role} />
        ))}
      </div>
    </section>
  );
};

export default Profession;
