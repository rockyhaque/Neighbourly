/* eslint-disable react/prop-types */
const ContainerLayout = ({ children }) => {
    return (
      <div className='max-w-screen-xl mx-auto px-2 md:px-10 lg:px-4 font-nunitoSans'>
        {children}
      </div>
    )
  }
  
  export default ContainerLayout;