const FormClient = ({ client }) => {
  return (
    <>
      <div className='mb-4'>
        <label className='text-gray-900' htmlFor='name'>
          Name:
        </label>
        <input
          id='name'
          type='text'
          className='mt-2 block w-full p-3 bg-gray-100'
          placeholder='Client'
          name='name'
        />
      </div>
      <div className='mb-4'>
        <label className='text-gray-900' htmlFor='company'>
          Company:
        </label>
        <input
          id='company'
          type='text'
          className='mt-2 block w-full p-3 bg-gray-100'
          placeholder='Company'
          name='company'
        />
      </div>

      <div className='mb-4'>
        <label className='text-gray-900' htmlFor='email'>
          E-mail:
        </label>
        <input
          id='email'
          type='email'
          className='mt-2 block w-full p-3 bg-gray-100'
          placeholder='Email'
          name='email'
        />
      </div>

      <div className='mb-4'>
        <label className='text-gray-900' htmlFor='phone'>
          Phone:
        </label>
        <input
          id='phone'
          type='tel'
          className='mt-2 block w-full p-3 bg-gray-100'
          placeholder='Phone'
          name='phone'
        />
      </div>

      <div className='mb-4'>
        <label className='text-gray-900' htmlFor='notes'>
          Notes:
        </label>
        <textarea
          id='notes'
          type='text'
          className='mt-2 block w-full p-3 bg-gray-100 h-40 align-self'
          placeholder='Notes'
          name='notes'
        />
      </div>
    </>
  );
};

export default FormClient;
