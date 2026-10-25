import { education } from "@/lib/data";
import { GraduationCap } from "lucide-react";

const educationGroups = [
  {
    id: "current-education",
    title: "Currently studying",
    isCurrent: true,
    entries: education.filter((edu) => edu.period.endsWith("present")),
  },
  {
    id: "previous-education",
    title: "Previous studies",
    isCurrent: false,
    entries: education.filter((edu) => !edu.period.endsWith("present")),
  },
];

const About = () => {
  return (
    <section id="about" aria-labelledby="about-heading" className="section-padding scroll-mt-20 bg-background">
      <div className="container mx-auto">
        <h2 id="about-heading" className="section-title">About Me</h2>

        <div aria-labelledby="education-heading" className="mt-4">
          <div className="mb-6 flex items-center gap-3">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <GraduationCap size={24} aria-hidden="true" />
            </span>
            <h3 id="education-heading" className="text-2xl font-bold tracking-tight md:text-3xl">
              Education
            </h3>
          </div>

          <div className="space-y-8">
            {educationGroups.map((group) => (
              <div key={group.id}>
                <h4
                  id={group.id}
                  className={`mb-3 flex items-center gap-2.5 text-xs font-semibold uppercase tracking-wider ${
                    group.isCurrent ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  <span
                    className={`h-2 w-2 rounded-full ${group.isCurrent ? "bg-primary" : "bg-muted-foreground/50"}`}
                    aria-hidden="true"
                  />
                  {group.title}
                </h4>

                <ol
                  aria-labelledby={group.id}
                  className={`overflow-hidden rounded-xl border ${
                    group.isCurrent ? "border-primary/30 bg-primary/5" : "border-border bg-card"
                  }`}
                >
                  {group.entries.map((edu) => (
                    <li
                      key={`${edu.institution}-${edu.degree}`}
                      className={`grid gap-3 border-b p-5 last:border-b-0 sm:p-6 md:grid-cols-[9rem_minmax(0,1fr)] md:gap-x-8 md:gap-y-0 lg:p-8 xl:grid-cols-[10rem_minmax(0,1.2fr)_minmax(0,1fr)] ${
                        group.isCurrent ? "border-primary/20" : "border-border"
                      }`}
                    >
                      <p className={`self-start pt-0.5 text-sm font-semibold tabular-nums ${group.isCurrent ? "text-primary" : "text-muted-foreground"}`}>
                        {edu.period}
                      </p>

                      <div className="min-w-0">
                        <h5 className="text-lg font-semibold leading-snug tracking-tight lg:text-xl">
                          {edu.degree}
                        </h5>
                        <p className="mt-2 text-sm font-medium leading-relaxed text-foreground/80">
                          {edu.institution}
                        </p>
                        <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                          {edu.location}
                        </p>
                      </div>

                      <p className="text-sm leading-relaxed text-muted-foreground md:col-start-2 md:mt-3 xl:col-start-auto xl:mt-0 xl:border-l xl:border-border xl:pl-8">
                        {edu.description}
                      </p>
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-5 rounded-xl bg-muted/40 p-5 sm:p-6 lg:grid-cols-[12rem_minmax(0,1fr)] lg:gap-10 lg:p-8">
          <h3 className="text-sm font-semibold text-foreground">A little about me</h3>

          <div className="min-w-0 text-sm leading-7 text-muted-foreground">
            <div className="space-y-4 min-[1043px]:columns-2 min-[1043px]:gap-8 max-w-[1042px]:hidden [&>p]:break-inside-avoid">
              <p>
                I like working on the server-side parts of applications: designing APIs, connecting databases, handling authentication, and making sure the system is maintainable beyond the first working version.
              </p>
              <p>
                I am also interested in DevOps, deployment, Docker, Linux environments, and the practical details that make projects reliable in production. My goal is to build software that is clear, useful, and easy to improve over time.
              </p>
              <p>
                AI is part of my daily workflow, and I am especially interested in practical AI tooling such as MCPs, RAG systems, and ways to connect language models with real applications, data, and developer workflows.
              </p>
              <p>
                I try to push myself every day, contribute to software consistently, and keep improving while studying at university and 42 Prague. I am in my 20s, building discipline, experience, and technical depth step by step.
              </p>
              <p>
                In the future, I want to start my own startup and experience the full startup journey from the beginning.
              </p>
            </div>

            <div className="hidden space-y-3 max-w-[1042px]:block">
              <p>
                Full-stack developer passionate about creating innovative solutions.
              </p>
              <p>
                Experienced in modern web technologies and best practices.
              </p>
              <p>
                Committed to delivering efficient and user-friendly applications.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
