import { Users, Briefcase, Building, GraduationCap } from 'lucide-react';

const USER_ICONS = [Users, Briefcase, Building, GraduationCap];

export function TargetUsersSection({ content }) {
  return (
    <section className="px-4 py-20 md:px-8 lg:px-16">
      <div className="dark-glass-panel mx-auto max-w-7xl overflow-hidden rounded-[2.1rem] p-6 md:p-8">
        <div className="mb-8">
          <span className="mb-3 block text-xs font-semibold uppercase tracking-[0.2em] text-blue-100/62">Target Audience</span>
          <h2 className="text-2xl font-bold tracking-tight text-white md:text-4xl">{content.title}</h2>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {content.users.map((user, i) => {
            const Icon = USER_ICONS[i % USER_ICONS.length];
            return (
              <article key={i} className="relative overflow-hidden rounded-[1.5rem] border border-blue-100/20 bg-white/7 p-5 text-white">
                <div className="absolute bottom-0 right-0 h-20 w-20 rounded-tl-[1.5rem] bg-gradient-to-tl from-cyan-300/22 to-transparent" />
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-white/14 text-cyan-100">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mb-2 text-sm font-bold text-white">{user.title}</h3>
                <p className="text-sm leading-relaxed text-blue-100/78">{user.desc}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
