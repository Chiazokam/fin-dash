import { Formik, Field, Form } from 'formik';
import { useStoreDispatch, useStoreSelector } from "../../hooks/useStore"
import { UserType, editUser, status } from '../../store/reducers/userSlice';
import { Loader } from '../Loader';
import { useState } from 'react';

interface Values {
    id: string
    avatar: string
    role: string
    name: string
    userName: string
    email: string
    password: string
    dob: string
    presentAddress: string
    permAddress: string
    city: string
    postalCode: string
    country: string
}

export const EditProfile = ({ user }: {user: UserType}) => {
    const dispatch = useStoreDispatch();
    const loadingStatus = useStoreSelector(status)
    const [isSubmitting, setIsSubmitting] = useState(false)

        return (
            <Formik
            enableReinitialize
            initialValues={{
                id: user.id,
                name:  user?.name || '',
                userName: user?.userName || '',
                email: user?.email || '',
                password: user?.password || '',
                dob: user?.dob || '',
                presentAddress: user?.presentAddress || '',
                permAddress: user?.permAddress || '',
                city: user?.city || '',
                postalCode: user?.postalCode || '',
                country: user?.country || '',
                role: user.role,
                avatar: user.avatar
            }}
            
            onSubmit={(
              values: Values,
            ) => {
                setIsSubmitting(true)
                dispatch(editUser(values))
                if (loadingStatus === 'success') {
                    setIsSubmitting(false)
                }
            }}
          >
            <Form className='flex flex-col gap-10'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-7'>
                    <div className='flex flex-col gap-3'>
                        <label htmlFor="name" className='text-[13px] sm:text-base text-black font-normal'>Your Name</label>
                        <Field id="name" name="name" placeholder="Charlene Reed" className="border border-border rounded-2xl py-3 px-5 text-secondary text-[13px] sm:text-custom-sm focus:outline-0 focus:border focus:border-slate-400" tabIndex={1} />
                    </div>
    
                    <div className='flex flex-col gap-3'>
                        <label htmlFor="userName" className='text-[13px] sm:text-base text-black font-normal'>User Name</label>
                        <Field id="userName" name="userName" placeholder="Charlene Reed" className="border border-border rounded-2xl py-3 px-5 text-secondary text-[13px] sm:text-custom-sm focus:outline-0 focus:border focus:border-slate-400" tabIndex={2} />
                    </div>
    
                    <div className='flex flex-col gap-3'>
                        <label htmlFor="email" className='text-[13px] sm:text-base text-black font-normal'>Email</label>
                        <Field type="email" id="email" name="email" placeholder="charlenereed@gmail.com " className="border border-border rounded-2xl py-3 px-5 text-secondary text-[13px] sm:text-custom-sm focus:outline-0 focus:border focus:border-slate-400" tabIndex={3} />
                    </div>
    
                    <div className='flex flex-col gap-3'>
                        <label htmlFor="password" className='text-[13px] sm:text-base text-black font-normal'>Password</label>
                        <Field type="password" id="password" name="password" placeholder="**********" className="border border-border rounded-2xl py-3 px-5 text-secondary text-[13px] sm:text-custom-sm focus:outline-0 focus:border focus:border-slate-400" tabIndex={4} />
                    </div>
    
                    <div className='flex flex-col gap-3'>
                        <label htmlFor="dob" className='text-[13px] sm:text-base text-black font-normal'>Date of Birth</label>
                        <Field type="date" id="dob" name="dob" placeholder="**********" className="border border-border rounded-2xl py-3 px-5 text-secondary text-[13px] sm:text-custom-sm focus:outline-0 focus:border focus:border-slate-400" tabIndex={5} />
                    </div>
    
                    <div className='flex flex-col gap-3'>
                        <label htmlFor="presentAddress" className='text-[13px] sm:text-base text-black font-normal'>Present Address</label>
                        <Field id="presentAddress" name="presentAddress" placeholder="San Jose, California, USA" className="border border-border rounded-2xl py-3 px-5 text-secondary text-[13px] sm:text-custom-sm focus:outline-0 focus:border focus:border-slate-400" tabIndex={5} />
                    </div>
    
                    <div className='flex flex-col gap-3'>
                        <label htmlFor="permAddress" className='text-[13px] sm:text-base text-black font-normal'>Permanent Address</label>
                        <Field id="permAddress" name="permAddress" placeholder="San Jose, California, USA" className="border border-border rounded-2xl py-3 px-5 text-secondary text-[13px] sm:text-custom-sm focus:outline-0 focus:border focus:border-slate-400" tabIndex={5} />
                    </div>
    
                    <div className='flex flex-col gap-3'>
                        <label htmlFor="city" className='text-[13px] sm:text-base text-black font-normal'>City</label>
                        <Field id="city" name="city" placeholder="San Jose" className="border border-border rounded-2xl py-3 px-5 text-secondary text-[13px] sm:text-custom-sm focus:outline-0 focus:border focus:border-slate-400" tabIndex={5} />
                    </div>
    
                    <div className='flex flex-col gap-3'>
                        <label htmlFor="postalCode" className='text-[13px] sm:text-base text-black font-normal'>Postal Code</label>
                        <Field id="postalCode" name="postalCode" placeholder="San Jose, California, USA" className="border border-border rounded-2xl py-3 px-5 text-secondary text-[13px] sm:text-custom-sm focus:outline-0 focus:border focus:border-slate-400" tabIndex={5} />
                    </div>
    
                    <div className='flex flex-col gap-3'>
                        <label htmlFor="country" className='text-[13px] sm:text-base text-black font-normal'>Country</label>
                        <Field id="country" name="country" placeholder="USA" className="border border-border rounded-2xl py-3 px-5 text-secondary text-[13px] sm:text-custom-sm focus:outline-0 focus:border focus:border-slate-400" tabIndex={5} />
                    </div>
                </div>
    
                <button type='submit' className="self-end flex justify-center w-full lg:w-[190px] bg-black rounded-[15px] py-3 sm:py-3.5 px-6 cursor-pointer hover:bg-black/80">
                    {isSubmitting ? <Loader size={12} color='white' /> : <span className="text-white text-[13px] sm:text-base">Save</span>}
                </button>
            </Form>
          </Formik>
        )
}
