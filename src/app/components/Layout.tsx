import { ReactNode } from 'react'; // Import ReactNode type

import { Footer } from "./Footer";
import { Navbar } from "./Navbar";

interface LayoutProps {
  children: ReactNode; // Define type for children prop
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div>
       <Navbar/>
        <main style={{height:'auto'}}>{children}</main>
        <Footer/>
    </div>
  );
}
