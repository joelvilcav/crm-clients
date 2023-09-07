import { useNavigate, Form } from 'react-router-dom';
import FormClient from '../components/FormClient';

export function action() {
  console.log('submit...');
  return { ok: true };
}

const AddClient = () => {
  const navigate = useNavigate();

  return (
    <>
      <h1 className='font-black text-3xl text-blue-900'>Add a new client</h1>
      <p className='mt-3'>Complete the fields to register a new client</p>

      <div className='flex justify-end'>
        <button
          className='bg-blue-800 text-white px-3 py-1 font-bold rounded-lg'
          onClick={() => navigate(-1)}
        >
          Back
        </button>
      </div>

      <div className='bg-white shadow rounded-md md:w-3/4 mt-6 mx-auto px-5 py-10'>
        <Form method='post'>
          <FormClient />

          <input
            type='submit'
            className='mt-3 w-full bg-blue-800 p-2 uppercase font-bold text-white text-sm'
            value='Send'
          />
        </Form>
      </div>
    </>
  );
};

export default AddClient;
