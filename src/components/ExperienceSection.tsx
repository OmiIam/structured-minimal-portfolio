export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="page-section min-h-[100svh] lg:min-h-[100vh] snap-start flex flex-col justify-center px-6 py-16 md:py-24 lg:px-24"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-3">
            <h2 className="text-left mb-6">Experience</h2>
            <p className="section-subtitle text-left">
              A progression built on reliable execution and dependable systems.
            </p>
          </div>

          <div className="col-span-12 md:col-span-9">
            <div className="experience-timeline space-y-16">
              {/* 2021-2025 */}
              <div className="relative timeline-node reveal" data-delay="1" data-variant="solid">
                <div className="grid grid-cols-12 gap-6">
                  <div className="col-span-12 md:col-span-4">
                    <div className="flex items-center gap-3 mb-6 md:mb-0">
                      <div className="contact-chip">2021—2025</div>
                    </div>
                  </div>
                  <div className="col-span-12 md:col-span-8">
                    <h3 className="mb-6 text-left">Senior Virtual Assistant</h3>
                    <ul className="space-y-3 text-left">
                      <li className="group flex items-start gap-4 rounded-lg p-4 transition-transform transition-colors duration-200 hover:-translate-y-1 hover:bg-white/5">
                        <span className="timeline-bullet transition-colors duration-200 group-hover:bg-[#0066CC]"></span>
                        <p className="muted transition-colors duration-200 group-hover:text-white">
                          Managed operations for multiple C-level executives
                        </p>
                      </li>
                      <li className="group flex items-start gap-4 rounded-lg p-4 transition-transform transition-colors duration-200 hover:-translate-y-1 hover:bg-white/5">
                        <span className="timeline-bullet transition-colors duration-200 group-hover:bg-[#0066CC]"></span>
                        <p className="muted transition-colors duration-200 group-hover:text-white">
                          Implemented systematic workflow optimization protocols
                        </p>
                      </li>
                      <li className="group flex items-start gap-4 rounded-lg p-4 transition-transform transition-colors duration-200 hover:-translate-y-1 hover:bg-white/5">
                        <span className="timeline-bullet transition-colors duration-200 group-hover:bg-[#0066CC]"></span>
                        <p className="muted transition-colors duration-200 group-hover:text-white">
                          Coordinated cross-functional project deliverables
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* 2019-2021 */}
              <div className="relative timeline-node reveal" data-delay="2">
                <div className="grid grid-cols-12 gap-6">
                  <div className="col-span-12 md:col-span-4">
                    <div className="flex items-center gap-3 mb-6 md:mb-0">
                      <div className="contact-chip">2019—2021</div>
                    </div>
                  </div>
                  <div className="col-span-12 md:col-span-8">
                    <h3 className="mb-6 text-left">Virtual Assistant</h3>
                    <ul className="space-y-3 text-left">
                      <li className="group flex items-start gap-4 rounded-lg p-4 transition-transform transition-colors duration-200 hover:-translate-y-1 hover:bg-white/5">
                        <span className="timeline-bullet transition-colors duration-200 group-hover:bg-[#0066CC]"></span>
                        <p className="muted transition-colors duration-200 group-hover:text-white">
                          Provided administrative support for growing enterprises
                        </p>
                      </li>
                      <li className="group flex items-start gap-4 rounded-lg p-4 transition-transform transition-colors duration-200 hover:-translate-y-1 hover:bg-white/5">
                        <span className="timeline-bullet transition-colors duration-200 group-hover:bg-[#0066CC]"></span>
                        <p className="muted transition-colors duration-200 group-hover:text-white">
                          Developed efficient documentation systems
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Key Metrics */}
              <div className="pt-8">
                <div className="section-divider"></div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 metrics-grid">
                  <div className="reveal" data-delay="1">
                    <h2 className="text-left mb-3">250+</h2>
                    <div className="h-px w-8 bg-[#0066CC] mb-3"></div>
                    <p className="muted text-left">Projects Completed</p>
                  </div>
                  <div className="reveal" data-delay="2">
                    <h2 className="text-left mb-3">50+</h2>
                    <div className="h-px w-8 bg-[#0066CC] mb-3"></div>
                    <p className="muted text-left">Clients Served</p>
                  </div>
                  <div className="reveal" data-delay="3">
                    <h2 className="text-left mb-3">98%</h2>
                    <div className="h-px w-8 bg-[#0066CC] mb-3"></div>
                    <p className="muted text-left">Satisfaction Rate</p>
                  </div>
                  <div className="reveal" data-delay="4">
                    <h2 className="text-left mb-3">4</h2>
                    <div className="h-px w-8 bg-[#0066CC] mb-3"></div>
                    <p className="muted text-left">Years Experience</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


