import { Footer } from "../Footer";
import { Header } from "../Header";
import { Main } from "../Main";
import { SideNav } from "../SideNav";

export const Layout: React.FC = () => {
  return (
    <main className="left-sidebar-flexbox">
      <Header />
      <Main />
      <SideNav />
      <Footer />
    </main>
  );
};
