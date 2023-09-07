import { useLoaderData } from 'react-router-dom';
import Client from '../components/Client';

export function loader() {
  const clients = [
    {
      id: 1,
      name: 'Juan',
      phone: 102013313,
      email: 'juan@juan.com',
      company: 'Codewars',
    },
    {
      id: 2,
      name: 'Karen',
      phone: 138198313,
      email: 'karen@juan.com',
      company: 'Leetcode',
    },
    {
      id: 3,
      name: 'Josue',
      phone: 31983913,
      email: 'josue@juan.com',
      company: 'Mercado Libre',
    },
    {
      id: 4,
      name: 'Miguel',
      phone: 319381983,
      email: 'miguel@juan.com',
      company: 'Amazon',
    },
    {
      id: 5,
      name: 'Pedro',
      phone: 1398198938,
      email: 'pedro@juan.com',
      company: 'AWS',
    },
  ];
  return clients;
}

const Index = () => {
  const clients = useLoaderData();
  console.log(clients);

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
        <p>There is no clients registered yet</p>
      )}
    </>
  );
};

export default Index;
