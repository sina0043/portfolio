// Profession.tsx
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
      "Working as an Angular Developer on large-scale e-commerce web applications specializing in gold trading, using Angular 17 and 20 to build scalable, maintainable, and high-performance front-end solutions. Collaborated closely with product and backend teams to implement complex business logic and improve user experience.",
    details: [
      "Developed responsive and dynamic interfaces for a high-traffic trading platform",
      "Optimized application performance and loading speed for better user engagement",
      "Implemented complex state management and real-time data handling for live gold price updates"
    ],
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
      "Developed a multi-language car trading platform using Angular 14 and 17, focusing on creating intuitive user interfaces and seamless user experiences for buying and selling vehicles. Collaborated with cross-functional teams to implement core features and optimize platform performance.",
    details: [
      "Built a fully responsive, multi-language platform supporting Persian, English, and Arabic",
      "Integrated and customized interactive maps for vehicle location and dealership finder",
      "Implemented complex filtering and search functionality for car listings",
      "Developed real-time notification system for price changes and new listings",
      "Optimized application performance for better load times and smoother interactions"
    ],
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
      "Developed user interfaces for an enterprise process integration system that connects internal organizational systems to external platforms through tasks and events. Focused on creating administrative dashboards and user interfaces for monitoring and controlling data flow between systems.",
    details: [
      "Developed various UI components with focus on usability and performance",
      "Collaborated on designing and implementing data visualization and reporting modules",
      "Optimized user experience for system administrators and end-users",
      "Contributed to improving the display and management processes of organizational events"
    ],
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