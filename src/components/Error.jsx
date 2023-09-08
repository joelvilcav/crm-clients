const Error = ({ children }) => {
  return (
    <div className='text-center mb-2 bg-red-600 text-white font-bold p-2 uppercase'>
      {children}
    </div>
  );
};

export default Error;
