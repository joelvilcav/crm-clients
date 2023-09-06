import { Outlet, Link, useLocation } from 'react-router-dom';

const Layout = () => {

  const location = useLocation();
  // console.log(location)

  return (
    <div className='md:flex md:min-h-screen'>
      <aside className='md:w-1/4 bg-blue-900 px-5 py-10'>
        <h2 className='text-4xl font-bold text-center text-white'>CRM - Clients</h2>
        <nav className='mt-10'>
          <Link 
            className={`${location.pathname === '/' ? 'text-blue-300' : 'text-white'} text-lg block mt-2 hover:text-blue-300`} 
            to="/">Clients</Link>
          <Link 
            className={`${location.pathname === '/clients/add-client' ? 'text-blue-300' : 'text-white'} text-lg block mt-2 hover:text-blue-300`} 
            to="/clients/add-client">Register a new client</Link>
        </nav>
      </aside>

      <main className='md:w-3/4 p-10 md:h-screen overflow-scroll'>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
