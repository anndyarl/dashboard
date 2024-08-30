import Layout from "hocs/layout/Layout"
import { connect } from "react-redux"
import { LockClosedIcon } from '@heroicons/react/20/solid'
import { useState, useEffect }from 'react'
import { reset_password_confirm, check_authenticated, load_user, login, refresh } from "redux/actions/auth/auth";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";


function ResetPasswordConfirm({
    reset_password_confirm,
    isAuthenticated,
    loading,
    refresh,
    check_authenticated,
    load_user,
   
}){   

  const params = useParams()
  const uid = params.uid
  const token = params.token

  useEffect(()=>{
    isAuthenticated ? <></>:
    <>
    {refresh()}
    {check_authenticated()}
    {load_user()}
    </>
},[])

    // definición de estados, la info se pasa a setFormData y la guarda en diferentes variables
    const [formData, setFormData] = useState({      
        new_password: '',
        re_new_password: ''
    });
    const {      
        new_password,
        re_new_password
    } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });      
    
    const navigate = useNavigate()

    const onSubmit = e => {
        e.preventDefault();  
        // console.log(formData) 
        reset_password_confirm(uid, token, new_password, re_new_password) 
        navigate('/')   
    }

    if(isAuthenticated){
      return <Navigate to='/dashboard/'/>
    }

    return(
        <>
          <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            <img
              className="mx-auto h-12 w-auto"
              src="https://bafybeiczl4dcxupma2zeyilkukfl4yge64axnhajd722wxgin62mtts6uy.ipfs.w3s.link/murkivamarketing.png"
              alt="Yournalup"
            />
            {/* <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              Sign in to your account
            </h2>
           */}
          </div>
          <form  onSubmit={e=>{onSubmit(e)}} className="mt-8 space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="-space-y-px rounded-md shadow-sm">
            <div>
                <label htmlFor="new_password" className="sr-only">
                  New Password
                </label>
                <input
                  id="new_password"
                  name="new_password"
                  type="password"
                  value={new_password}
                  onChange={e=>onChange(e)}
                //   autoComplete="current-password"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="New password"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Repeat new password
                </label>
                <input
                  id="re_new_password"
                  name="re_new_password"
                  type="password"
                  value={re_new_password}
                  onChange={e=>onChange(e)}
                //   autoComplete="current-password"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Repeat new password"
                />
              </div>
             
            </div>
            <div>
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                </span>
              Change Password
              </button>
            </div>
          </form>     
        </div>
      </div>
        </>
    )
}
const mapStateprops=state=>({
  isAuthenticated: state.auth.isAuthenticated,
  loading: state.auth.loading
})

export default connect(mapStateprops,{
    reset_password_confirm,
    refresh,
    check_authenticated,
    load_user,
})(ResetPasswordConfirm)