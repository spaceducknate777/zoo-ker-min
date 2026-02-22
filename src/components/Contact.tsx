import { Mail, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 lg:px-8 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-xl">
          <h2 className="text-2xl font-bold text-foreground mb-3">get in touch.</h2>
          <p className="text-base text-muted-foreground mb-8 leading-relaxed">
            Open to mid-level product and interaction design roles on product-focused teams. 
            Fastest response via email.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="mailto:natezukerman@gmail.com"
              className="inline-flex items-center gap-2 text-sm font-medium text-foreground border border-border rounded-lg px-5 py-2.5 hover:border-accent hover:text-accent transition-colors"
            >
              <Mail className="h-4 w-4" />
              natezukerman@gmail.com
            </a>
            <a
              href="https://linkedin.com/in/nathanzukerman"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground border border-border rounded-lg px-5 py-2.5 hover:border-accent hover:text-accent transition-colors"
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
