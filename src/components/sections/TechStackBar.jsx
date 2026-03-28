import { techStack } from '../../data/services';
import { getIcon } from '../../data/icons';

export default function TechStackBar() {
  return (
    <section className="py-8 bg-off-white border-y border-border-light">
      <div className="container mx-auto px-6 md:px-8">
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-14">
          {techStack.map((item, idx) => (
            <div key={idx} className="flex items-center gap-2 text-text-muted font-medium text-sm">
              <span className="text-navy">{getIcon(item.iconKey, { size: 22 })}</span>
              {item.label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
