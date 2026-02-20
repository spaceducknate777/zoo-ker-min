const Footer = () => {
  return (
    <footer className="py-8 px-6 lg:px-8 border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Nathan Zukerman. All rights reserved.
        </p>
        <p className="text-xs text-muted-foreground italic">
          Made with heart (and a bit of clay) in Woodstock, VA
        </p>
      </div>
    </footer>
  );
};

export default Footer;
