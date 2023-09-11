import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
  const error = useRouteError();
  // console.log(error.message);

  return (
    <div className='space-y-8'>
        <h1 className='text-center text-5xl font-extrabold mt-20 text-blue-900'>CRM - Clients</h1>
        <p className='text-center font-bold text-red-700'>There was an error</p>
        <p className='text-center font-bold text-red-700'>{error.message}</p>
    </div>
    )
};

export default ErrorPage;
