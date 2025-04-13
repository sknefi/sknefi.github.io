import { skills } from "@/lib/data";

const Skills = () => {
  // Function to get skill icon URL
  const getSkillIconUrl = (iconName: string) => {
	const path = `https://go-skill-icons.vercel.app/api/icons?i=${iconName}&theme=light`;
	return path;
  };

  return (
    <section id="skills" className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <h2 className="section-title">My Skills</h2>

        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-6">On Daily Basis I Use:</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
            {skills.daily.map((skill, index) => (
              <div key={index} className="skill-card">
                <div className="h-12 w-12 flex items-center justify-center mb-3">
                  <img
                    src={getSkillIconUrl(skill.icon)}
                    alt={skill.name}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <span className="text-gray-700">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-6">I Am Good At:</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
            {skills.proficient.map((skill, index) => (
              <div key={index} className="skill-card">
                <div className="h-12 w-12 flex items-center justify-center mb-3">
                  <img
                    src={getSkillIconUrl(skill.icon)}
                    alt={skill.name}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <span className="text-gray-700">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-6">
            My Main Specialization - Web Development:
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
            {skills.webDevelopment.map((skill, index) => (
			
			  <div key={index} className="skill-card">
                <div className="h-12 w-12 flex items-center justify-center mb-3">
                  <img
                    src={getSkillIconUrl(skill.icon)}
                    alt={skill.name}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
				<span className="text-gray-700">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-6">
            My Main Specialization - Low-level Development:
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-6">
            {skills.lowLevel.map((skill, index) => (
              <div key={index} className="skill-card">
                <div className="h-12 w-12 flex items-center justify-center mb-3">
                  <img
                    src={getSkillIconUrl(skill.icon)}
                    alt={skill.name}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <span className="text-gray-700">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
