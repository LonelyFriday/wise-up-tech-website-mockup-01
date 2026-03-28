import { Link } from 'react-router-dom';
import { Globe, MessageSquare } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-footer-bg text-footer-text py-16">
      <div className="container mx-auto px-6 md:px-8 grid md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-white/10 rounded-lg p-1.5 flex items-center">
              <img src="/logo.png" alt="WiseUp Tech Logo" className="h-8 w-auto object-contain" loading="lazy" decoding="async" />
            </div>
            <span className="text-xl font-bold font-heading text-white">Wise Up Tech</span>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-light-blue">
            Tech Consulting Partner ที่พร้อมเดินเคียงข้างธุรกิจของคุณ เปลี่ยนความซับซ้อนของเทคโนโลยี ให้เป็นพลังขับเคลื่อนธุรกิจที่เรียบง่าย
          </p>
        </div>

        <div>
          <h4 className="font-bold mb-4 text-sm uppercase tracking-wider text-white">Services</h4>
          <ul className="space-y-3 text-sm text-light-blue">
            {['AI Solutions', 'BI & Data', 'Web Development'].map((item) => (
              <li key={item}>
                <Link to="/solutions" className="hover:text-golden transition-colors">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-4 text-sm uppercase tracking-wider text-white">Contact</h4>
          <ul className="space-y-3 text-sm text-light-blue">
            <li className="flex items-center gap-2">
              <Globe size={16} className="text-golden" />
              <span>Bangkok, Thailand</span>
            </li>
            <li className="flex items-center gap-2">
              <MessageSquare size={16} className="text-golden" />
              <span>contact@wiseuptech.com</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto px-6 md:px-8 mt-12 pt-8 border-t border-footer-border text-center text-sm text-footer-text">
        © {new Date().getFullYear()} Wise Up Tech. All rights reserved.
      </div>
    </footer>
  );
}
