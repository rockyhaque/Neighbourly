const SectionHeading = ({ heading }) => {
  return (
    <div className="relative mx-auto text-center md:w-6/12 my-12">
      {/* Curved decorative element behind the heading */}
      <div className="absolute inset-x-0 -top-8 transform rotate-3 opacity-20 bg-gradient-to-r from-sky-400 via-purple-400 to-pink-400 h-14 w-full rounded-full blur-2xl"></div>

      {/* Main Heading */}
      <h3 className="relative z-10 text-xl md:text-3xl font-extrabold font-nunitoSans py-4 bg-gradient-to-r from-sky-900 via-cyan-900 to-pink-500 text-transparent bg-clip-text drop-shadow-lg">
        {heading}
      </h3>

      {/* Subtle glowing line below the heading */}
      <div className="relative mx-auto mt-1 w-20 h-1 bg-gradient-to-r from-sky-600 via-purple-600 to-pink-500 rounded-full before:absolute before:-inset-1 before:bg-glow before:blur-md before:opacity-60"></div>

      {/* Bottom curved decoration */}
      <div className="absolute inset-x-0 bottom-0 transform rotate-[-2deg] opacity-10 bg-gradient-to-r from-sky-400 via-purple-400 to-pink-400 h-10 w-full rounded-full blur-xl"></div>
    </div>
  );
};

export default SectionHeading;
