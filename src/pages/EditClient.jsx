import { Form, useNavigate, useLoaderData, useActionData, redirect } from 'react-router-dom';
import { editClient, getClient } from '../data/clients';
import FormClient from '../components/FormClient';
import Error from '../components/Error';

export async function loader({ params }) {
  const client = await getClient(params.clientId);
  if (Object.values(client).length === 0) {
    throw new Response('', {
      status: 404,
      statusText: 'No results',
    });
  }
  return client;
}

export async function action({ request, params }) {
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

  if (!regex.test(email)) {
    error.push('Complete the email field');
  }

  // Return if there is any error
  if (Object.keys(error).length) {
    return error;
  }

  //Update client
  await editClient(params.clientId, data);

  return redirect('/');
}

const EditClient = () => {
  const navigate = useNavigate();
  const client = useLoaderData();
  const error = useActionData();

  return (
    <>
      <h1 className='font-black text-3xl text-blue-900'>Edit client</h1>
      <p className='mt-3'>Complete the fields to edit a client</p>

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
          <FormClient client={client} />

          <input
            type='submit'
            className='mt-3 w-full bg-blue-800 p-2 uppercase font-bold text-white text-sm'
            value='Save'
          />
        </Form>
      </div>
    </>
  );
};

export default EditClient;
