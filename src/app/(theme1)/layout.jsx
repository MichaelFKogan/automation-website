import Footer from '@/app/ui/Footer';
import Header from '@/app/ui/Header';
import logoUrl from '../../../public/images/logo-dark.png';
import darkLogoUrl from '../../../public/images/logo.png';

import './../css/style-s6.css';
import './../css/custom.css';

export default function DefaultLayout({ children }) {
  return (
    <div className="nk-app-root">
      <Header
        darkMode={false}
        varient="is-transparent"
        logoUrl={logoUrl}
        darkLogoUrl={darkLogoUrl}
        actionBtnText="Start Writing"
        actionBtnClass="btn btn-primary"
        actionBtnUrl="/"
        menuPosition="mx-auto"
        loginBtn="Login"
      />
      <main className="nk-pages">{children}</main>
      <Footer />
    </div>
  );
}
