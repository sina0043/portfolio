import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import Address from "./Address";
import Form from "./Form";
import SocialMedia from "../common/socialMedia/SocialMedia";
import { faGithub, faLinkedin, faTelegram } from "@fortawesome/free-brands-svg-icons";

const addressData = [
  {
    icon: faEnvelope,
    title: "My Email",
    description: "sinanaseri0903@gmail.com",
    url: "https://mail.google.com/mail/?view=cm&to=sinanaseri0903@gmail.com"
  },
  {
    icon: faGithub,
    title: "My GitHub",
    description: "github.com",
    url: "https://github.com/sina0043"
  },
  {
    icon: faLinkedin,
    title: "My LinkedIn",
    description: "linkedin.com",
    url: "https://www.linkedin.com/in/sina-naseri0903/"
  },
  {
    icon: faTelegram,
    title: "My Telegram",
    description: "t.me/sinanaseri0903",
    url: "https://t.me/sinanaseri0903"
  },
];

const Contact = () => {
  return (
    <div className="relative -bottom-15 -mt-15 z-10 px-2">
      <div
        className="content p-4 md:p-10 lg:p-22 bg-white rounded-2xl shadow-[0px_0px_90px_9px_rgba(0,_0,_0,_0.1)]"
        id="contact"
      >
        <p className="text-[35px] max-lg:hidden font-semibold text-nowrap text-[#132238] text-center mb-10">
          Contact Me
        </p>
        <div className="flex flex-col-reverse lg:gap-5 xl:gap-25.75 lg:flex-row justify-between">
          <div>
            <div>
              <p className="text-[12px] xs:text-[14px] sm:text-lg md:text-lg max-lg:text-center pt-4 font-normal text-soft-dark">
                I’m currently open to both on-site and remote opportunities.
                If you have a project or think we’d be a good fit, feel free to get in touch.
              </p>
            </div>
            <div className="my-8.75 sm:max-lg:flex justify-between items-center">
              {addressData.map((item, index) => (
                <Address item={item} key={index} />
              ))}
            </div>
            <div className="w-full max-lg:text-center max-md:mb-4">
              <SocialMedia />
            </div>
          </div>
          <div className="w-full overflow-y-scroll py-4">
            <p className="text-xl mb-2 xs:text-2xl sm:text-2xl md:text-[38px] font-semibold text-[#132238] lg:hidden text-center">
              Contact Me
            </p>
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
