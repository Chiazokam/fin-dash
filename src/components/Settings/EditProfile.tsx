import { Formik, Field, Form, FormikHelpers, Sel } from 'formik';

interface Values {
    firstName: string;
    lastName: string;
    email: string;
}

export const EditProfile = () => {
    return (
        <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
        }}
        onSubmit={(
          values: Values,
          { setSubmitting }: FormikHelpers<Values>
        ) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 500);
        }}
      >
        <Form className='flex flex-col gap-10'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-7'>
                <div className='flex flex-col gap-3'>
                    <label htmlFor="name" className='text-base text-black'>Your Name</label>
                    <Field id="name" name="name" placeholder="Charlene Reed" className="border border-border rounded-2xl py-3 px-5 text-secondary text-custom-sm focus:outline-0 focus:border focus:border-slate-400" tabIndex={1} />
                </div>

                <div className='flex flex-col gap-3'>
                    <label htmlFor="username" className='text-base text-black'>User Name</label>
                    <Field id="username" name="username" placeholder="Charlene Reed" className="border border-border rounded-2xl py-3 px-5 text-secondary text-custom-sm focus:outline-0 focus:border focus:border-slate-400" tabIndex={2} />
                </div>

                <div className='flex flex-col gap-3'>
                    <label htmlFor="email" className='text-base text-black'>Email</label>
                    <Field type="email" id="email" name="email" placeholder="charlenereed@gmail.com " className="border border-border rounded-2xl py-3 px-5 text-secondary text-custom-sm focus:outline-0 focus:border focus:border-slate-400" tabIndex={3} />
                </div>

                <div className='flex flex-col gap-3'>
                    <label htmlFor="password" className='text-base text-black'>Password</label>
                    <Field type="password" id="password" name="password" placeholder="**********" className="border border-border rounded-2xl py-3 px-5 text-secondary text-custom-sm focus:outline-0 focus:border focus:border-slate-400" tabIndex={4} />
                </div>

                <div className='flex flex-col gap-3'>
                    <label htmlFor="password" className='text-base text-black'>Date of Birth</label>
                    <Field as="select" id="password" name="password" placeholder="**********" className="border border-border rounded-2xl py-3 px-5 text-secondary text-custom-sm focus:outline-0 focus:border focus:border-slate-400" tabIndex={5} />
                </div>

                <div className='flex flex-col gap-3'>
                    <label htmlFor="address" className='text-base text-black'>Present Address</label>
                    <Field id="address" name="address" placeholder="San Jose, California, USA" className="border border-border rounded-2xl py-3 px-5 text-secondary text-custom-sm focus:outline-0 focus:border focus:border-slate-400" tabIndex={5} />
                </div>

                <div className='flex flex-col gap-3'>
                    <label htmlFor="permAddress" className='text-base text-black'>Permanent Address</label>
                    <Field id="permAddress" name="permAddress" placeholder="San Jose, California, USA" className="border border-border rounded-2xl py-3 px-5 text-secondary text-custom-sm focus:outline-0 focus:border focus:border-slate-400" tabIndex={5} />
                </div>

                <div className='flex flex-col gap-3'>
                    <label htmlFor="city" className='text-base text-black'>City</label>
                    <Field id="city" name="city" placeholder="San Jose" className="border border-border rounded-2xl py-3 px-5 text-secondary text-custom-sm focus:outline-0 focus:border focus:border-slate-400" tabIndex={5} />
                </div>

                <div className='flex flex-col gap-3'>
                    <label htmlFor="postalCode" className='text-base text-black'>Postal Code</label>
                    <Field id="postalCode" name="postalCode" placeholder="San Jose, California, USA" className="border border-border rounded-2xl py-3 px-5 text-secondary text-custom-sm focus:outline-0 focus:border focus:border-slate-400" tabIndex={5} />
                </div>

                <div className='flex flex-col gap-3'>
                    <label htmlFor="country" className='text-base text-black'>Country</label>
                    <Field id="country" name="country" placeholder="USA" className="border border-border rounded-2xl py-3 px-5 text-secondary text-custom-sm focus:outline-0 focus:border focus:border-slate-400" tabIndex={5} />
                </div>
            </div>

            <button type='submit' className="self-end w-full lg:w-[190px] bg-black rounded-[15px] py-3 sm:py-3.5 px-6 cursor-pointer hover:bg-black/80">
                <span className="text-white text-xs sm:text-base">Send</span>
            </button>
        </Form>
      </Formik>
    )
}
