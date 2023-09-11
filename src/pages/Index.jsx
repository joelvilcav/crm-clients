import { useLoaderData } from 'react-router-dom';
import { getClients } from '../data/clients';
import Client from '../components/Client';

export function loader() {
  const clients = getClients();
  console.log(clients)
  return clients;
}

const Index = () => {
  const clients = useLoaderData();
  // console.log(clients);

  return (
    <>
      <h1 className='font-black text-4xl text-blue-800'>Clients</h1>
      <p className='mt-3'>Manage the clients</p>

      {clients.length ? (
        <table className='w-full bg-white shadow mt-5'>
          <thead className='bg-blue-800 text-white'>
            <tr>
              <th className='p-2'>Client</th>
              <th className='p-2'>Contact</th>
              <th className='p-2'>Options</th>
            </tr>
          </thead>
          <tbody>
            {clients.map((client) => (
              <Client client={client} key={client.id} />
            ))}
          </tbody>
        </table>
      ) : (
        <p className='text-center'>There is no clients registered yet</p>
      )}
    </>
  );
};

export default Index;
