export function ServicesSection() {
  return (
    <section
      id="services"
      className="page-section min-h-[100svh] lg:min-h-[100vh] snap-start flex flex-col justify-center px-6 py-16 md:py-24 lg:px-24"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-3">
            <h2 className="text-left mb-6">Services</h2>
            <p className="section-subtitle text-left">
              Modular support systems designed for operational clarity.
            </p>
          </div>

          <div className="col-span-12 md:col-span-9">
            <div className="space-y-10">
              {/* Service 1 */}
              <div
                className="grid grid-cols-12 gap-6 items-start service-card"
                data-accent="primary"
                role="article"
                tabIndex={0}
                aria-label="Administrative Support service details"
              >
                <div className="col-span-1 md:col-span-1 flex justify-center pt-1">
                  <div className="service-marker">
                    <div className="service-marker-dot"></div>
                  </div>
                </div>
                <div className="col-span-11 md:col-span-11">
                  <h3 className="mb-3 text-left">Administrative Support</h3>
                  <p className="text-left muted max-w-2xl">
                    Comprehensive calendar management, email coordination, and document organization.
                    Streamlining daily operations with precision and efficiency.
                  </p>
                </div>
              </div>

              {/* Service 2 */}
              <div
                className="grid grid-cols-12 gap-6 items-start service-card"
                data-accent="diagonal"
                role="article"
                tabIndex={0}
                aria-label="Project Coordination service details"
              >
                <div className="col-span-1 md:col-span-1 flex justify-center pt-1">
                  <div className="service-marker"></div>
                </div>
                <div className="col-span-11 md:col-span-11">
                  <h3 className="mb-3 text-left">Project Coordination</h3>
                  <p className="text-left muted max-w-2xl">
                    Task delegation, timeline management, and team communication.
                    Ensuring projects progress systematically from inception to completion.
                  </p>
                </div>
              </div>

              {/* Service 3 */}
              <div
                className="grid grid-cols-12 gap-6 items-start service-card"
                data-accent="outline"
                role="article"
                tabIndex={0}
                aria-label="Data Management service details"
              >
                <div className="col-span-1 md:col-span-1 flex justify-center pt-1">
                  <div className="service-marker">
                    <div className="service-marker-dot"></div>
                  </div>
                </div>
                <div className="col-span-11 md:col-span-11">
                  <h3 className="mb-3 text-left">Data Management</h3>
                  <p className="text-left muted max-w-2xl">
                    Database maintenance, report generation, and information analysis.
                    Organizing complex data structures with accuracy and clarity.
                  </p>
                </div>
              </div>

              {/* Service 4 */}
              <div
                className="grid grid-cols-12 gap-6 items-start service-card"
                data-accent="solid"
                role="article"
                tabIndex={0}
                aria-label="Client Relations service details"
              >
                <div className="col-span-1 md:col-span-1 flex justify-center pt-1">
                  <div className="service-marker">
                    <div className="service-marker-dot"></div>
                  </div>
                </div>
                <div className="col-span-11 md:col-span-11">
                  <h3 className="mb-3 text-left">Client Relations</h3>
                  <p className="text-left muted max-w-2xl">
                    Professional correspondence, meeting facilitation, and relationship management.
                    Maintaining consistent, objective communication standards.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


