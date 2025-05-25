const About = () => {
  return (
    <div className="bg-gray-900 min-h-screen relative overflow-hidden pb-20">
      <div>
        <div className="relative overflow-hidden bg-gray-900 pt-16 pb-32 space-y-24">
          <div className="relative">
            <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8 ">
              <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0 ">
                <div>
                  <div>
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                        className="h-8 w-8 text-white"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                        ></path>
                      </svg>
                    </span>
                  </div>
                  <div className="mt-6">
                    <h2 className="text-3xl font-bold tracking-tight text-white">
                      Reliable Connections:
                    </h2>
                    <p className="mt-4 text-lg text-gray-300">
                      Neighbourly connects residents with trusted local service
                      providers, ensuring you receive reliable and high-quality
                      home services such as electrical repairs and plumbing.
                    </p>
                    <div className="mt-6">
                      <a
                        className="inline-flex rounded-lg bg-sky-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-sky-600 hover:bg-sky-700 hover:ring-sky-700"
                        href="/services"
                      >
                        Discover Services
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-12 sm:mt-16 lg:mt-0">
                <div className="-mr-48 pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0">
                  <img
                    loading="lazy"
                    width={647}
                    height={486}
                    className="w-full rounded-xl shadow-2xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                    style={{ color: "transparent" }}
                    src="https://images.unsplash.com/photo-1569144157591-c60f3f82f137"
                    alt="Service Provider"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8 ">
              <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0 lg:col-start-2">
                <div>
                  <div>
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                        className="h-8 w-8 text-white"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
                        ></path>
                      </svg>
                    </span>
                  </div>
                  <div className="mt-6">
                    <h2 className="text-3xl font-bold tracking-tight text-white">
                      Community Focused:
                    </h2>
                    <p className="mt-4 text-lg text-gray-300">
                      Our platform emphasizes local connections, making it
                      easier for residents to find and hire skilled
                      professionals for various home services right in their
                      community.
                    </p>
                    <div className="mt-6">
                      <a
                        className="inline-flex rounded-lg bg-sky-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-sky-600 hover:bg-sky-700 hover:ring-sky-700"
                        href="/services"
                      >
                        Learn More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-12 sm:mt-16 lg:mt-0">
                <div className="-ml-48 pr-6 md:-ml-16 lg:relative lg:m-0 lg:h-full lg:px-0">
                  <img
                    alt="Local Service"
                    loading="lazy"
                    width={347}
                    height={486}
                    className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                    style={{ color: "transparent" }}
                    src="https://images.unsplash.com/photo-1599134842279-fe807d23316e"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-0 h-max w-full m-auto grid grid-cols-2 -space-x-52 opacity-20"
      >
        <div className="blur-[106px] h-56 bg-gradient-to-br to-sky-400 from-blue-700"></div>
        <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-600"></div>
      </div>
      <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6 relative z-10">
        <div className="md:w-2/3 lg:w-1/2 mt-12 text-gray-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6 text-secondary"
          >
            <path
              fillRule="evenodd"
              d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z"
              clipRule="evenodd"
            ></path>
          </svg>
          <h2 className="my-8 text-2xl font-bold text-white md:text-4xl">
            About Neighbourly
          </h2>
          <p className="text-gray-300">
            Neighbourly is a platform where you can find reliable workers for
            home services like electrical work, plumbing, and more. Our goal is
            to connect people in the community who need assistance with trusted
            professionals who can help them.
          </p>
        </div>

        <div className="mt-16 grid divide-x divide-y divide-gray-700 overflow-hidden rounded-3xl border text-gray-600 border-gray-700 sm:grid-cols-2 lg:grid-cols-4 lg:divide-y-0 xl:grid-cols-4">
          <div className="group relative bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
            <div className="relative space-y-8 py-12 p-8">
              <img
                src="https://www.svgrepo.com/show/164986/logo.svg"
                loading="lazy"
                width="200"
                height="200"
                className="w-12 h-12 rounded-full"
                alt="Xyz.com"
              />
              <div className="space-y-2">
                <h5 className="text-xl font-semibold text-white transition group-hover:text-secondary">
                  Trusted Home Services
                </h5>
                <p className="text-gray-300">
                  Neighbourly bridges the gap between residents and skilled
                  workers, ensuring reliable and quality home services like
                  electrical repairs, plumbing, and more with just a few clicks.
                </p>
              </div>
            </div>
          </div>

          <div className="group relative bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
            <div className="relative space-y-8 py-12 p-8">
              <img
                src="https://www.svgrepo.com/show/120853/logo.svg"
                loading="lazy"
                width="200"
                height="200"
                className="w-12 h-12 rounded-full"
                alt="ABC.com"
              />
              <div className="space-y-2">
                <h5 className="text-xl font-semibold text-white transition group-hover:text-secondary">
                  Local Service Hub
                </h5>
                <p className="text-gray-300">
                  At Neighbourly, we connect you with trusted professionals in
                  your community, offering services such as plumbing, electrical
                  work, and more to simplify home maintenance.
                </p>
              </div>
            </div>
          </div>

          <div className="group relative bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
            <div className="relative space-y-8 py-12 p-8">
              <img
                src="https://www.svgrepo.com/show/120852/logo.svg"
                loading="lazy"
                width="200"
                height="200"
                className="w-12 h-12 rounded-full"
                alt="ASD.com"
              />
              <div className="space-y-2">
                <h5 className="text-xl font-semibold text-white transition group-hover:text-secondary">
                  Simplified Home Solutions
                </h5>
                <p className="text-gray-300">
                  Neighbourly makes it easy for residents to find reliable
                  workers for essential home services. From electrical repairs
                  to plumbing, get connected to skilled professionals instantly.
                </p>
              </div>
            </div>
          </div>

          <div className="group relative bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
            <div className="relative space-y-8 py-12 p-8">
              <img
                src="https://www.svgrepo.com/show/120850/logo.svg"
                loading="lazy"
                width="200"
                height="200"
                className="w-12 h-12 rounded-full"
                alt="TMK.co"
              />
              <div className="space-y-2">
                <h5 className="text-xl font-semibold text-white transition group-hover:text-secondary">
                  Community Home Experts
                </h5>
                <p className="text-gray-300">
                  Neighbourly provides a platform for residents to connect with
                  local professionals offering home services, ensuring timely
                  and dependable solutions for all your household needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
