import { useNavigate, Form, useActionData } from 'react-router-dom';
import FormClient from '../components/FormClient';
import Error from '../components/Error';
import { addClient } from '../data/clients';

export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  const email = formData.get('email');

  // Validating fields
  const error = [];
  if (Object.values(data).includes('')) {
    error.push('All the fields are mandatory');
  }

  let regex = new RegExp(
    "([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|\"([]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|[[\t -Z^-~]*])"
  );

  if(!regex.test(email)){
    error.push('Complete the email field')
  }

  // Return if there is any error
  if (Object.keys(error).length) {
    return error;
  }

  addClient(data);

  return { ok: true };
}

const AddClient = () => {
  const error = useActionData();
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

      <div className='bg-white shadow rounded-md md:w-3/4 mt-6 mx-auto px-5 py-7'>
        {error?.length && error.map((e, i) => <Error key={i}>{e}</Error>)}

        <Form method='post' noValidate>
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
