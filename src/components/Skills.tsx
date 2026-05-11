import { skills } from "@/lib/data";
import { useTheme } from "next-themes";

const Skills = () => {
  const { resolvedTheme } = useTheme();

  const getSkillIconUrl = (iconName: string) => {
    const iconTheme = resolvedTheme === "dark" ? "dark" : "light";
    return `https://go-skill-icons.vercel.app/api/icons?i=${iconName}&theme=${iconTheme}`;
  };

  const skillGroups = [
    { title: "Main Stack", items: skills.mainStack },
    { title: "Daily Tools", items: skills.daily },
    { title: "Frontend", items: skills.frontend },
    { title: "Backend & Data", items: skills.backendData },
    { title: "Systems", items: skills.systems },
  ];

  return (
    <section id="skills" className="section-padding bg-muted/30">
      <div className="container mx-auto">
        <h2 className="section-title">My Skills</h2>

        <div className="space-y-5">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className={`grid gap-4 rounded-lg border p-4 md:grid-cols-[11rem_1fr] md:items-start ${
                group.title === "Main Stack"
                  ? "border-portfolio-blue/60 bg-primary/10 shadow-[0_0_30px_rgba(14,165,233,0.12)]"
                  : "border-border bg-card/80"
              }`}
            >
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wide text-portfolio-blue">
                  {group.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2.5">
                {group.items.map((skill) => (
                  <div key={skill.name} className="skill-chip">
                    <img
                      src={getSkillIconUrl(skill.icon)}
                      alt=""
                      aria-hidden="true"
                      className="h-5 w-5 object-contain"
                    />
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
