import { Users, Briefcase, Building, GraduationCap } from 'lucide-react';

const USER_ICONS = [Users, Briefcase, Building, GraduationCap];

export function TargetUsersSection({ content }) {
  return (
    <section className="px-4 py-20 md:px-8 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <span className="section-label mb-3 block text-xs font-semibold uppercase">Target Audience</span>
        <h2 className="mb-10 text-2xl font-bold tracking-tight text-blue-950 md:text-4xl">{content.title}</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {content.users.map((user, i) => {
            const Icon = USER_ICONS[i % USER_ICONS.length];
            return (
              <div key={i} className="dark-glass-panel relative overflow-hidden rounded-[1.75rem] p-6 text-white">
                <div className="absolute bottom-0 right-0 h-20 w-20 rounded-tl-[1.75rem] bg-gradient-to-tl from-cyan-300/20 to-transparent" />
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-white/12 text-cyan-100">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mb-2 text-sm font-bold text-white">{user.title}</h3>
                <p className="text-sm leading-relaxed text-blue-100/75">{user.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
