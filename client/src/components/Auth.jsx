import React,{useState} from 'react';
import Cookies from 'universal-cookie';
import axios  from "axios";



const cookies = new Cookies();

 const initialState={
    fullName:'',
    username:'',
    password:'',
    confirmPassword:'',
    phoneNumber:'',
    avatarURL:'',

 }

const Auth = () => {
    const  [form, setForm] = useState(initialState);
    const [isSignup, setSignup]= useState(true);
    const handleChange = (e)=>{
        setForm({...form,[e.target.name]: e.target.value});
        
    }
    const handleSubmit= async(e)=>{
        e.preventDefault();
        const {username,password,phoneNumber,avatarURL}=form;
        
        const URL='http://localhost:5000/auth';

        const {data:{token,userId,hashedPassword, fullName}}=await axios.post(`${URL}/${isSignup?'signup':'login'}`,{
            username,password,fullName:form.fullName,phoneNumber,avatarURL,
        });
        cookies.set('token', token);
        cookies.set('userId', userId);
        cookies.set('username', username);
        cookies.set('fullName', fullName);

        if(isSignup){
            cookies.set('phoneNumber',phoneNumber);
            cookies.set('avatarURL',avatarURL);
            cookies.set('hashedPassword',hashedPassword)

        }
        window.location.reload();

    }
    const switchMode = ()=>{
        setSignup((prev)=>!prev);
    }
  return (
    <div className='min-h-screen flex flex-row'>
        <div className='flex flex-col justify-center p-8 bg-orange-600'>
         
            <div className='flex flex-col justify-start p-8 rounded bg-white'>
                <p className='text-2xl text-gray-800 font-black'>{isSignup? 'Sign Up' : 'Sign In'}</p>
                <form onSubmit={handleSubmit}>
                    {isSignup && (
                        <div className='flex flex-col relative my-[1rem] mx-[0rem]'>
                            <label className='mb-2 text-gray-700 text-xs' htmlFor='fullName'>Full Name</label>
                            <input
                                 type="text"
                                  name='fullName' 
                                  placeholder='Full Name'
                                  onChange={handleChange}
                                  className='rounded text-sm py-[0.55rem] px-[0.4rem] border  border-black outline-none bg-white w-[85%]'
                                  required
                            />
                        </div>

                    )}
                     <div className='flex flex-col relative my-[1rem] mx-[0rem]'>
                            <label className='mb-2 text-gray-700 text-xs' htmlFor='username'>User Name</label>
                            <input
                                 type="text"
                                  name='username' 
                                  placeholder='User Name'
                                  onChange={handleChange}
                                  className='rounded text-sm py-[0.55rem] px-[0.4rem] border  border-black outline-none bg-white w-[85%]'
                                  required
                            />
                    </div>
                    {isSignup && (
                        <div className='flex flex-col relative my-[1rem] mx-[0rem]'>
                            <label className='mb-2 text-gray-700 text-xs' htmlFor='phoneNumber'>Phone Number</label>
                            <input
                                 type="text"
                                  name='phoneNumber' 
                                  placeholder='Phone Number'
                                  onChange={handleChange}
                                  className='rounded text-sm py-[0.55rem] px-[0.4rem] border  border-black outline-none bg-white w-[85%]'
                                  required
                            />
                        </div>

                    )}
                    {isSignup && (
                        <div className='flex flex-col relative my-[1rem] mx-[0rem]'>
                            <label className='mb-2 text-gray-700 text-xs' htmlFor='avatarURL'>Avatar URL</label>
                            <input
                                 type="text"
                                  name='avatarURL' 
                                  placeholder='Avatar URL'
                                  onChange={handleChange}
                                  className='rounded text-sm py-[0.55rem] px-[0.4rem] border  border-black outline-none bg-white w-[85%]'
                                  required
                            />
                        </div>

                    )}
                     <div className='flex flex-col relative my-[1rem] mx-[0rem]'>
                            <label className='mb-2 text-gray-700 text-xs' htmlFor='password'>Password</label>
                            <input
                                 type="password"
                                  name='password' 
                                  placeholder='Password'
                                  onChange={handleChange}
                                  className='rounded text-sm py-[0.55rem] px-[0.4rem] border  border-black outline-none bg-white w-[85%]'
                                  required
                            />
                    </div>
                    {isSignup && (
                        <div className='flex flex-col relative my-[1rem] mx-[0rem]'>
                                <label className='mb-2 text-gray-700 text-xs' htmlFor='confirmPassword'>Confirm Password</label>
                                <input
                                        type="password"
                                        name='confirmPassword' 
                                        placeholder='Confirm Password'
                                        onChange={handleChange}
                                        className='placeholder:text-gray-500 placeholder:w-full rounded text-sm py-[0.55rem] px-[0.4rem] border  border-black outline-none bg-white w-[85%]'
                                        required
                                />
                        </div>

                    )}
                    <div className='mt-8 flex justify-start'>
                        <button className='rounded bg-orange-600 py-[0.7rem] px-[1.2rem] text-white font-medium cursor-pointer'>{isSignup ? "Sign Up" : "Log In"}</button>

                    </div>
                </form>
                <div className='flex justify-start items-center mt-1'>
                    <p>
                        {
                            isSignup
                            ?   `Already have an account?`
                            :   'Don’t have an account?'
                        }
                        <span className='cursor-pointer'  onClick={switchMode}>
                            {isSignup ? 'Sign In':'Sign  Up'}

                        </span>
                    </p>

                </div>
            </div>

        </div>

    </div>
  )
}

export default Auth
