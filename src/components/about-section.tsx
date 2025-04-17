export function AboutSection() {
  const experiences = [
    {
      company: "Abank",
      period: "Present",
      role: "Fullstack Developer",
      description: "Developing wallet applications using Java and Spring. Working with MySQL database systems.",
    },
    {
      company: "Thuria Ace Technology",
      period: "Previous",
      role: "Fullstack Developer",
      description: "Developed insurance products using Java and Spring frameworks.",
    },
    {
      company: "Bis Manager Company",
      period: "Previous",
      role: "Windows Application Developer",
      description: "Developed Windows applications using C# language.",
    },
  ]

  const skills = [
    { category: "Languages", items: ["Java", "C#", "JavaScript", "TypeScript", "PHP", "HTML", "CSS"] },
    { category: "Frameworks", items: ["Spring", "React", "Laravel"] },
    { category: "Databases", items: ["MySQL", "MSSQL", "MongoDB"] },
    { category: "Tools", items: ["Git", "VS Code", "IntelliJ IDEA", "Spring Boot"] },
  ]

  return (
    <section className="py-20 bg-black" id="about">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500">
          ABOUT ME
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-6 text-white">My Journey</h3>
            <p className="text-gray-300 mb-6 text-lg">
              I am Zin Phoo Mon, a fullstack developer with experience since 2017. My journey in software development
              has taken me through various technologies and industries, allowing me to build a diverse skill set and
              adaptability to different project requirements.
            </p>
            <p className="text-gray-300 text-lg">
              Throughout my career, I've worked on Windows applications, web development, and enterprise solutions,
              always focusing on delivering high-quality, maintainable code that solves real business problems.
            </p>
          </div>

          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-6 text-white">Work Experience</h3>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="border-l-2 border-pink-500 pl-6 relative">
                  <div className="absolute w-3 h-3 bg-pink-500 rounded-full -left-[7px] top-2"></div>
                  <h4 className="text-xl font-medium text-white">{exp.company}</h4>
                  <p className="text-pink-400 mb-2">
                    {exp.period} | {exp.role}
                  </p>
                  <p className="text-gray-400">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6 text-white">Skills & Technologies</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {skills.map((skillGroup, index) => (
                <div key={index} className="bg-gray-900/50 p-6 rounded-lg border border-gray-800">
                  <h4 className="text-xl font-medium text-white mb-4">{skillGroup.category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill, skillIndex) => (
                      <span key={skillIndex} className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
