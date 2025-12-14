import Marquee from "react-fast-marquee";

const skills = [
  "Web Auth",
  "Service Worker",
  "Progressive Web Applications (PWAs)",
  "NgRx",
  "RxJS",
  "ECMAScript",
  "Object-Oriented Programming (OOP)",
  "MySQL",
  "TypeScript",
  "npm",
  "CSS Flexbox",
  "Postman API",
  "Swagger API",
  "PrimeNG",
  "Angular CLI",
  "Angular Material",
  "Angular",
  "GitHub",
  "Git",
  "Jest",
  "jQuery",
  "JavaScript",
  "Tailwind",
  "Bootstrap",
  "SASS",
  "CSS",
  "HTML5"
];

const HappyClients = () => {
  return (
    <div id="skills" className="content py-10 md:py-25 flex flex-col items-center px-2">
      <div className="max-w-144.25 text-center ">
        <p className="section-title mb-6">Skills</p>
        <p className="text-[14px] sm:text-lg text-soft-dark font-normal">
          I have experience working with a wide range of front-end technologies, focusing on building responsive, high-performance user interfaces with clean, maintainable code.
        </p>
      </div>
      <Marquee pauseOnHover={true} speed={100} className="mt-4 md:mt-10">
        <div className="flex items-center py-4">
          {skills?.map((skill, index) => (
            <span 
              className="px-5 sm:px-8 md:px-12 py-2 mx-2 rounded-full bg-gray-100 text-gray-800 text-sm sm:text-base font-medium border border-gray-200 shadow-sm"
              key={index}
            >
              {skill}
            </span>
          ))}
        </div>
      </Marquee>
      {/* نسخه دوم برای نمایش در ردیف پایین */}
      <Marquee pauseOnHover={true} speed={80} direction="right" className="mt-4">
        <div className="flex items-center py-4">
          {skills?.map((skill, index) => (
            <span 
              className="px-5 sm:px-8 md:px-12 py-2 mx-2 rounded-full bg-blue-50 text-blue-800 text-sm sm:text-base font-medium border border-blue-100 shadow-sm"
              key={`second-${index}`}
            >
              {skill}
            </span>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default HappyClients;