const now = new Date();
const start = new Date("2014-07-01");

const YOE = String(now.getFullYear() - start.getFullYear());

export const profile = {
  fullName: "Charlie Ruiz",
  jobTitle: "Software Engineer",
  statement: (
    <>
      I'm a Software Engineer with {YOE} years of experience specialized in building user-centric
      products that deliver real value. I've led the adoption of{" "}
      <b>AI-assisted development workflows</b> and built intelligent systems alongside my
      foundation in{" "}
      <b>Javascript/Typescript, React, Next.js, Node.js, SQL/No-SQL, AWS, and more.</b>
    </>
  ),
  resumeStatement: `I'm a Software Engineer with ${YOE} years of experience specialized in creating user-centric products that drive real value by harnessing a diverse set of technologies and skills. I'm a strong communicator in both English and Spanish and I alway try to cultivate a strong work culture that translates into exceptional products and a thriving work environment.`,
  location: "Austin, TX",

  // For metadata
  siteDescription: `Software Engineer with ${YOE} years of experience. Based in Austin, TX.\n\nStack: Typescript, React, Next.js, Solidity, SQL/No-SQL, AWS.`,
};
