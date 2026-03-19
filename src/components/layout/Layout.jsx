import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { ScrollToTop } from './ScrollToTop';
import { WhatsAppButton } from '../shared/WhatsAppButton';
import { TimedBookingPopup } from '../shared/TimedBookingPopup';

export function Layout() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-transparent text-gray-900">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="site-bg-grid absolute inset-0 opacity-[0.14]" />
        <div className="absolute left-[-12rem] top-[-10rem] h-[34rem] w-[34rem] rounded-full bg-blue-300/30 blur-[120px]" />
        <div className="absolute right-[-14rem] top-[18%] h-[30rem] w-[30rem] rounded-full bg-sky-300/25 blur-[120px]" />
        <div className="absolute bottom-[-12rem] left-[25%] h-[26rem] w-[26rem] rounded-full bg-blue-200/25 blur-[120px]" />
      </div>
      <ScrollToTop />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <TimedBookingPopup />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
