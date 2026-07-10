import { getTranslations, getLocale } from "next-intl/server";
import { experience } from "@/content/experience";
import { profile } from "@/content/profile";

export default async function Experience() {
  const locale = (await getLocale()) as "es" | "en";
  const t = await getTranslations("Experience");
  const roles = experience[locale];
  const p = profile[locale];

  return (
    <section id="experiencia" className="border-t border-line">
      <div className="mx-auto max-w-5xl px-6 py-24">
        <h2 className="font-display text-2xl font-semibold text-fg sm:text-3xl">
          {t("titulo")}
        </h2>
        <div className="mt-10 space-y-10">
          {roles.map((role) => (
            <div
              key={`${role.company}-${role.title}`}
              className="grid gap-2 border-b border-line pb-10 last:border-b-0 last:pb-0 sm:grid-cols-[200px_1fr] sm:gap-8"
            >
              <div>
                <p className="font-mono text-xs text-muted">{role.period}</p>
                <p className="mt-1 text-sm text-muted">{role.company}</p>
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-fg">
                  {role.title}
                </h3>
                <ul className="mt-3 space-y-1.5">
                  {role.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="text-sm leading-relaxed text-muted before:mr-2 before:text-accent before:content-['—']"
                    >
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 space-y-4 border-t border-line pt-8">
          <h3 className="font-mono text-xs uppercase tracking-wider text-muted">
            {t("educacion")}
          </h3>
          {p.education.map((edu) => (
            <div
              key={edu.degree}
              className="flex items-baseline justify-between gap-8"
            >
              <div>
                <p className="font-display text-base font-semibold text-fg">
                  {edu.degree}
                </p>
                <p className="mt-0.5 text-sm text-muted">{edu.school}</p>
              </div>
              <p className="shrink-0 font-mono text-xs text-muted">
                {edu.period}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-x-8 gap-y-2 border-t border-line pt-6 font-mono text-xs text-muted">
          {p.languages.map((lang) => (
            <span key={lang.name}>
              {lang.name} <span className="text-line">·</span> {lang.level}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
