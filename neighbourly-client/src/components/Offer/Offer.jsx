import { motion } from "framer-motion";
import { Zap, Gift, Clock } from "lucide-react";

const OfferSection = () => {
  const offers = [
    {
      icon: <Zap className="w-8 h-8 text-sky-600" />,
      title: "Flash Sale",
      description: "Limited-time offers with up to 40% off on selected items",
      duration: "Ends in 24 hours",
      highlight: true,
    },
    {
      icon: <Gift className="w-8 h-8 text-sky-600" />,
      title: "New User Bonus",
      description:
        "Get an extra 15% off your first purchase with code WELCOME15",
      duration: "Valid until Dec 31",
      highlight: false,
    },
    {
      icon: <Clock className="w-8 h-8 text-sky-600" />,
      title: "Early Bird Special",
      description: "Order before 10AM for same-day shipping",
      duration: "Weekdays only",
      highlight: false,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const cardHover = {
    scale: 1.03,
    boxShadow: "0 10px 25px -5px rgba(56, 189, 248, 0.3)",
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  };

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-sky-50 to-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Exclusive Offers Just For You
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Don&apos;t miss out on these special deals designed to save you
            money and enhance your experience
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {offers.map((offer, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={cardHover}
              className={`relative rounded-xl overflow-hidden ${
                offer.highlight
                  ? "border-2 border-sky-400"
                  : "border border-sky-200"
              } bg-white`}
            >
              {offer.highlight && (
                <div className="absolute top-0 right-0 bg-sky-600 text-white px-3 py-1 text-sm font-bold rounded-bl-lg">
                  POPULAR
                </div>
              )}
              <div className="p-6 h-full flex flex-col">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-sky-100 rounded-lg mr-4">
                    {offer.icon}
                  </div>
                  <h3 className="text-xl font-bold text-sky-900">
                    {offer.title}
                  </h3>
                </div>
                <p className="text-sky-800 mb-4 flex-grow">
                  {offer.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-sky-600 flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {offer.duration}
                  </span>
                  <motion.button
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-sky-600 hover:text-sky-800 font-medium flex items-center transition"
                  >
                    {/* Claim offer <ArrowRight className="w-4 h-4 ml-1" /> */}
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default OfferSection;
