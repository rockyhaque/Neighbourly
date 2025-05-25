import PropTypes from "prop-types";

const SectionTitle = ({ heading, description }) => {
  return (
    <div className="mx-auto text-center md:w-4/12 my-4">
      <h3
        className="text-2xl md:text-4xl font-extrabold py-4 font-nunitoSans text-gray-800"
        data-aos="fade-right"
      >
        {heading}
      </h3>
      <p className="font-roboto text-gray-600" data-aos="fade-left">
        {description}
      </p>
    </div>
  );
};

SectionTitle.propTypes = {
  heading: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default SectionTitle;
