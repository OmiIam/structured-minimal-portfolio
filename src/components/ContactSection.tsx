export function ContactSection() {
  return (
    <section
      id="contact"
      className="page-section min-h-[100svh] lg:min-h-[100vh] snap-start flex flex-col justify-center px-6 py-16 md:px-12 md:py-24 lg:px-24"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-3">
            <h2 className="text-left mb-6">Contact</h2>
            <p className="section-subtitle text-left">
              Available for remote engagements and ongoing collaborations.
            </p>
          </div>

          <div className="col-span-12 md:col-span-9">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
              <div className="contact-card">
                <h4 className="mb-3 text-left section-intro">Email</h4>
                <p className="text-left">karinatopman@gmail.com</p>
              </div>
              <div className="contact-card">
                <h4 className="mb-3 text-left section-intro">Location</h4>
                <p className="text-left muted">Available Globally</p>
              </div>
              <div className="contact-card">
                <h4 className="mb-3 text-left section-intro">Availability</h4>
                <p className="text-left muted">Monday—Friday, 9:00—17:00 UTC</p>
              </div>
              <div className="contact-card">
                <h4 className="mb-3 text-left section-intro">Response Time</h4>
                <p className="text-left muted">Within 24 Hours</p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-x-8 gap-y-4 mb-16 reveal">
              <a className="hero-cta hero-cta--primary" href="mailto:karinatopman@gmail.com">
                Book a Consultation
              </a>
              <div className="contact-chip">
                <span>UTC</span>
                <span>09:00 — 17:00</span>
              </div>
            </div>

            {/* Footer integrated into contact */}
            <div className="pt-12 border-t border-[#000000]/10">
              <div className="flex flex-col md:flex-row justify-between gap-4">
                <p className="text-left muted">© 2025 Karinate Topman</p>
                <p className="text-left md:text-right muted">Professional Virtual Assistant Services</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
