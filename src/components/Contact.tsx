import { Mail, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-foreground mb-4">let's connect.</h2>
        <p className="text-base text-muted-foreground mb-8 max-w-lg">
          Interested in working together or learning more about my process? Reach out anytime.
        </p>

        <div className="flex gap-6">
          <a
            href="mailto:natezukerman@gmail.com"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors"
          >
            <Mail className="h-4 w-4" />
            Email
          </a>
          <a
            href="https://linkedin.com/in/nathanzukerman"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors"
          >
            <Linkedin className="h-4 w-4" />
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
