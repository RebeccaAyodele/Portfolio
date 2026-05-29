"use client";

export function AboutSection() {
  return (
    <section id="about" className="py-16 sm:py-24 lg:py-32" style={{ background: "#1A1A1A" }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="relative overflow-hidden rounded-lg sm:rounded-2xl p-6 sm:p-8 lg:p-12 max-w-4xl mx-auto"
          style={{ background: "#1c1c1c", border: "0.5px solid #2a2a2a" }}
        >
          {/* Sun glow — toned way down */}
          <div
            className="pointer-events-none absolute hidden sm:block"
            style={{
              top: "-160px",
              left: "-160px",
              width: "500px",
              height: "500px",
              borderRadius: "50%",
              background: `radial-gradient(circle at center,
                rgba(170,255,0,0.5) 0%,
                rgba(170,255,0,0.25) 14%,
                rgba(170,255,0,0.07) 36%,
                transparent 65%
              )`,
            }}
          />
          {/* Sun core */}
          <div
            className="pointer-events-none absolute hidden sm:block"
            style={{
              top: "-22px",
              left: "-22px",
              width: "150px",
              height: "150px",
              borderRadius: "50%",
              background: "rgba(170,255,0,0.5)",
            }}
          />

          <div className="relative z-10">
            <h2 className="font-serif text-xl sm:text-2xl lg:text-[2.2rem] font-normal text-center text-white mb-6 sm:mb-8">
              My Journey
            </h2>

            {/* Two column text */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 mb-8 sm:mb-10">
              <div className="space-y-3 sm:space-y-4">
                <p className="text-sm sm:text-base lg:text-[16px] leading-relaxed sm:leading-[1.75] lg:leading-[1.85] text-[#999999]">
                  I'm Rebecca, a third year Computer Science and Mathematics
                  student at Obafemi Awolowo University. I started frontend
                  development practically, but stayed because there's something
                  uniquely satisfying about building something and watching real
                  people connect with it.
                </p>
                <p className="text-sm sm:text-base lg:text-[16px] leading-relaxed sm:leading-[1.75] lg:leading-[1.85] text-[#999999]">
                  I care about interfaces that feel intentional, where the
                  design, the logic, and the experience all pull in the same
                  direction.
                </p>
              </div>
              <div className="space-y-3 sm:space-y-4">
                <p className="text-sm sm:text-base lg:text-[16px] leading-relaxed sm:leading-[1.75] lg:leading-[1.85] text-[#999999]">
                  Over time that curiosity has expanded beyond the frontend.
                  I'm now building at the intersection of software development
                  and machine learning, specifically around applications with
                  real social impact.
                </p>
                <p className="text-sm sm:text-base lg:text-[16px] leading-relaxed sm:leading-[1.75] lg:leading-[1.85] text-[#999999]">
                  Healthcare, accessibility, tools that reach people who are
                  underserved — that's the direction that genuinely excites me.
                </p>
              </div>
            </div>

            {/* Currently Building */}
            <div
              className="rounded-lg sm:rounded-xl p-6 sm:p-8"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "0.5px solid rgba(170,255,0,0.18)",
              }}
            >
              <p className="text-xs tracking-[0.18em] uppercase text-[#aaff00] mb-4 sm:mb-5">
                Currently Building
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                {[
                  "A real-time sign language interpreter using MediaPipe and PyTorch",
                  "Participating and building across hackathon programmes",
                  "Contributing to open source projects",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 sm:gap-3 text-xs sm:text-sm lg:text-[14.5px] text-[#bbbbbb] leading-relaxed"
                  >
                    <span
                      className="shrink-0 rounded-full bg-[#aaff00] mt-1.5 sm:mt-2"
                      style={{ width: "6px", height: "6px" }}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}