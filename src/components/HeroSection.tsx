export function HeroSection() {
  return (
    <section
      id="hero"
      className="page-section min-h-[100svh] lg:min-h-[100vh] snap-start flex items-center justify-center px-6 md:px-12 lg:px-24 py-20 md:py-28 relative overflow-hidden"
    >
      {/* Background geometric elements for depth */}
      <div className="hero-rings" aria-hidden="true"></div>
      <div className="absolute left-0 top-1/2 w-1 h-64 bg-[#0066CC]/15 pointer-events-none hidden md:block"></div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-10 lg:col-span-8">
            <div className="flex items-center gap-4 mb-12 reveal">
              <div className="hero-marker"></div>
              <p className="section-intro">Portfolio</p>
            </div>

            <h1 className="mb-6 text-left relative reveal" data-delay="1">
              Karinate Topman
              <div className="absolute -left-2 top-0 w-1 h-full bg-[#0066CC]/30"></div>
            </h1>
            <h3 className="mb-4 text-left reveal" data-delay="2">
              Virtual Assistant
            </h3>
            <p className="section-subtitle text-left reveal" data-delay="3">
              Delivering structured operations support, project coordination, and
              executive assistance with Swiss-level precision.
            </p>

            <div className="mt-20 md:mt-24 flex flex-wrap items-center gap-x-10 gap-y-4 reveal" data-delay="3">
              <a className="hero-cta hero-cta--primary" href="tel:+2349061239484">
                Call +234 906 123 9484
              </a>
              <div className="contact-chip">
                <span>4 Years</span>
                <span>Experience</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 


