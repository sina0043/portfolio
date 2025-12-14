import Projects from "./Projects";

// پیشنهاد: پسوند تصاویر را کوچک بنویسیم (png) و مسیر درست باشد
import card1 from "../../assets/images/portfolio-images/card-1.png";
import card2 from "../../assets/images/portfolio-images/card-2.png";
import card3 from "../../assets/images/portfolio-images/card-3.png";

const projectData = [
  {
    id: 1,
    image: card1,
    category: "Gold",
    title: "Gold | PrimeNG & Tailwind Project",
    description:
      "Built with PrimeNG and Tailwind CSS, this project demonstrates responsive, modern, and interactive web interfaces with clean and maintainable code.",
    link1: "https://sina0043.github.io/gold/",
    link2: "https://github.com/sina0043/gold",
  },
  {
    id: 2,
    image: card2,
    category: "Table",
    title: "Table | Front-End Libraries Integration",
    description:"A project integrating multiple front-end libraries and frameworks including Material Icons, MultiStep, Sortable, Animate, Argon, Bootstrap, DataTables, Fancybox, Font Awesome, jQuery plugins, Swiper, SliderPro, LightSlider, Particles, WOW.js, etc.",
    link1: "https://sina0043.github.io/table/",
    link2: "https://github.com/sina0043/table",
  },
  {
    id: 3,
    image: card3,
    category: "JavaScript Quiz",
    title: "JavaScript Interactive Quiz",
    description: "An interactive quiz of 25 questions testing JavaScript skills. Correct answers are highlighted in green, incorrect in red, and unanswered in blue.",
    link1: "https://sina0043.github.io/JavaScript-Quiz/",
    link2: "https://github.com/sina0043/JavaScript-Quiz",
  },
];

const Portfolio = () => {
  return (
    <section
      className="content mt-10 md:mt-16 xl:mt-24 mb-10 md:mb-24 px-4"
      id="portfolio"
    >
      {/* Header */}
      <div className="mb-10 xl:mb-16 text-center max-w-4xl mx-auto">
        <p className="section-title">Portfolio</p>
        <p className="text-gray-400 pt-6 text-base md:text-lg">
          Here’s a selection of my recent work, highlighting my expertise in building modern, responsive, and high-performance web interfaces. Each project demonstrates clean, efficient code and attention to detail.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="mx-auto flex justify-center">
        <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-6">
          {projectData.map((data) => (
            <Projects data={data} key={data.id} />
          ))}
        </div>
      </div>

      {/* More Projects Button */}
      <div className="text-center mt-12">
        <a
          href="https://github.com/sina0043"
          target="blank"
          className="btn btn-primary py-3 px-6 text-[16px] font-semibold"
        >
          More Projects
        </a>
      </div>
    </section>
  );
};

export default Portfolio;
