
import { skills } from "@/lib/data";

const Skills = () => {
  // Function to get skill icon URL with consistent size
  const getSkillIconUrl = (iconName: string) => {
    return `https://skillicons.dev/icons?i=${iconName}`;
  };

  return (
    <section id="skills" className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto">
        <h2 className="section-title">My Skills</h2>

        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-6">On Daily Basis I Use:</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {skills.daily.map((skill, index) => (
              <div key={index} className="skill-card">
                <div className="w-16 h-16 flex items-center justify-center mb-3">
                  <img 
                    src={getSkillIconUrl(skill.icon)} 
                    alt={skill.name} 
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <span className="text-gray-700 dark:text-gray-300">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-6">I Am Good At:</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6">
            {skills.proficient.map((skill, index) => (
              <div key={index} className="skill-card">
                <div className="w-16 h-16 flex items-center justify-center mb-3">
                  <img 
                    src={getSkillIconUrl(skill.icon)} 
                    alt={skill.name} 
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <span className="text-gray-700 dark:text-gray-300">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-6">My Main Specialization - Web Development:</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
            {skills.webDevelopment.map((skill, index) => (
              <div key={index} className="skill-card">
                <div className="w-16 h-16 flex items-center justify-center mb-3">
                  <img 
                    src={getSkillIconUrl(skill.icon)} 
                    alt={skill.name} 
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <span className="text-gray-700 dark:text-gray-300">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-6">My Main Specialization - Low-level Development:</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-6">
            {skills.lowLevel.map((skill, index) => (
              <div key={index} className="skill-card">
                <div className="w-16 h-16 flex items-center justify-center mb-3">
                  <img 
                    src={getSkillIconUrl(skill.icon)} 
                    alt={skill.name} 
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <span className="text-gray-700 dark:text-gray-300">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
