import React, { ReactNode, FC } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => (
  <>
    {/* Navigation Bar */}
    <nav>Navbar</nav>
    {/* Main Content */}
    <main>{children}</main>
    {/* Footer */}
    <footer>Footer</footer>
  </>
);

export default Layout;