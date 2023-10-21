import { motion } from "framer-motion";

const data = [
  {
    id: 1,
    company: "HashedIn By Deloitte",
    role: "Software Engineer II",
    fromDate: new Date("2022-04-04"),
    toDate: null,
    tasks: [
      "Led the design and development of multiple enterprise-level Java applications, optimizing performance and ensuring code quality.",
      "Implemented unit tests and automated testing processes, leading to a 20% improvement in software quality and reliability.",
      "Collaborated with cross-functional teams to analyze requirements and define project scopes, delivering projects on time and within budget.",
      "Implemented agile methodologies, participating in daily stand-ups, sprint planning, and retrospectives to enhance project efficiency.",
      "Designed and implemented security measures, including OAuth2 integration with Okta, ensuring a secure authentication and authorization process for users.",
      "Integrated Kafka for real-time event processing, improving data handling capabilities within the application.",
      "Integrated PING for single sign-on (SSO) functionality, simplifying the user login process and improving overall user experience.",
      "Employed Redis for efficient caching, reducing database load and enhancing application performance.",
      "Mentored junior developers, providing guidance and facilitating knowledge sharing within the team.",
    ],
  },
  {
    id: 2,
    company: "Cognizant Technologies",
    role: "Associate",
    fromDate: new Date("2020-12-26"),
    toDate: new Date("2022-04-01"),
    tasks: [
      "Designed a Rest API system utilizing client credentials OAuth, allowing for secure server-to-server communication.",
      "Developed a shared encryption and decryption library that supports both symmetric and asymmetric techniques.",
      "Collaborated with front-end developers to integrate user interfaces with back-end logic, ensuring a seamless user experience.",
      "Utilized Hibernate framework for efficient database access and management, optimizing database queries and reducing response times.",
      "Assisted in documenting application architecture, system design, and user guides for internal and external use.",
      "Worked closely with QA engineers to identify and address bugs and issues, ensuring a robust and error-free application.",
    ],
  },
];

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const Experience = () => {
  return (
    <div className="mx-2 md:mx-4 my-12 md:my-14">
      <motion.div
        initial={{ opacity: 0, y: 300 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1
          className="font-semibold relative inline-block
         tracking-wider text-3xl font-serif dark:text-white"
        >
          Work Experience
        </h1>
        <ul className="list-none mx-1 my-6 pl-0.5 md:p-2 ">
          {data.map((experience) => (
            <li
              className="px-0 py-4 border-s-[1.5px] border-blue-500 relative after:content-[''] after:absolute after:top-3 after:-left-2 after:p-1 after:rounded-full after:border-[2.7px] after:border-blue-500 after:bg-blue-500 "
              key={experience.id}
            >
              <div className="block sm:flex items-center justify-between relative -top-2.5 mx-8">
                <h3 className="font-medium text-lg tracking-normal dark:text-white">
                  {experience.role}, {experience.company}
                </h3>

                <small className="opacity-80 font-medium text-sm tracking-wider dark:text-white">
                  {months[experience.fromDate.getMonth()] +
                    " " +
                    experience.fromDate.getFullYear()}{" "}
                  -{" "}
                  {experience.toDate === null
                    ? "Present"
                    : months[experience.toDate.getMonth()] +
                      " " +
                      experience.toDate.getFullYear()}
                </small>
              </div>
              <ul
                className="mx-14 mt-1 leading-relaxed list-disc
               text-sm text-gray-900 opacity-80 tracking-wide dark:text-white"
              >
                {experience.tasks.map((task, i) => (
                  <li key={i}>{task}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
};

export default Experience;
