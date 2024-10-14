
import { ClimbingBoxLoader } from 'react-spinners';

const EmptyContent = ({title, subTitle}) => {
    return (
        <div className="flex items-center justify-center mb-8">
          <div className="text-center">
            <div className="flex items-center justify-center">
              <ClimbingBoxLoader size={12} color="#421d81" />
            </div>
            <h2 className="text-lg md:text-xl font-semibold text-gray-800">
              {title}
            </h2>
            <p className="text-gray-500 mt-2">{subTitle}</p>
          </div>
        </div>
    );
};

export default EmptyContent;