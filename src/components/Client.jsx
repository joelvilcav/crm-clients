import { Form, useNavigate, redirect } from 'react-router-dom';
import { destroyClient } from '../data/clients';

export async function action({ params }) {
  await destroyClient(params.clientId);
  return redirect('/');
}

const Client = ({ client }) => {
  const navigate = useNavigate();
  const { id, name, phone, email, company } = client;

  return (
    <tr className='border-b'>
      <td className='p-5'>
        <p className='text-xl text-gray-800'>{name}</p>
        <p className='text-xs'>{company}</p>
      </td>

      <td className='p-5'>
        <p className='text-gray-600'>
          <span className='text-gray-800 font-bold'>Email: </span>
          {email}
        </p>
        <p className='text-gray-600'>
          <span className='text-gray-800 font-bold'>Phone: </span>
          {phone}
        </p>
      </td>

      <td className='p-5 flex gap-2'>
        <button
          type='button'
          className='text-blue-800 hover:text-blue-700 uppercase font-bold text-xs'
          onClick={() => navigate(`/clients/${id}/edit`)}
        >
          Edit
        </button>

        <Form
          method='post'
          action={`/clients/${id}/destroy`}
          onSubmit={(e) => {
            if (!confirm('Are you sure you want to delete this row?')) {
              e.preventDefault();
            }
          }}
        >
          <button
            type='submit'
            className='text-red-800 hover:text-red-700 uppercase font-bold text-xs'
          >
            Delete
          </button>
        </Form>
      </td>
    </tr>
  );
};

export default Client;
