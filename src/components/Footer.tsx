const Footer = () => {
  return (
    <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-border">
      <div className="max-w-7xl mx-auto text-center text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Nathan Zukerman. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
