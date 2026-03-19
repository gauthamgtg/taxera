import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export function Breadcrumbs({ items }) {
  return (
    <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-sm">
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-1.5">
          {i > 0 && <ChevronRight className="h-3.5 w-3.5 text-blue-500/45" />}
          {item.href ? (
            <Link to={item.href} className="text-blue-800/70 transition-colors hover:text-blue-700">
              {item.label}
            </Link>
          ) : (
            <span className="font-medium text-blue-900/80">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
