import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { fetchPostLoginData } from '../redux/slices/authSlice'
import { setToken } from '../redux/slices/loginSlice'

const Login = () => {
    const dispatch = useDispatch()
    const navigator = useNavigate()
    const [value, setValue] = useState({
        email: '',
        password: '',
    })
    const handleChange = (e) => {
        setValue({
            ...value,
            [e.target.name]: e.target.value,
        })
    }
    const handleSubmit = async (e) => {
        e.preventDefault()

        if (value.email === "" || value.password === "") {
            alert("All fields are required..!")
            return
        }

        try {
            const response = await dispatch(fetchPostLoginData(value)).unwrap()
            if (response.status === 201) {
                alert('로그인 되었습니다.')
                // localStorage.setItem('token', response.data.token)
                dispatch(setToken(response.data.token))
                navigator('/')
                return
            }

            if (response.data.success === false) {
                alert(response.data.message)
                return
            }
        } catch (error) {
            console.log(error.message)
        }
    }

    return (
        <div className='flex justify-center items-center h-screen'>
            <div className='shadow-lg px-8 py-5 border w-100 rounded-md'>
                <h2 className='text-lg font-bold mb-4'>LogIn</h2>
                <form onSubmit={handleSubmit}>
                    <div className='mb-4'>
                        <label htmlFor="email" className='text-gray-700'>Email</label>
                        <input type="email" placeholder='Enter Your Email..' name='email'
                            className='w-full px-3 py-2 border'
                            onChange={handleChange}
                        />
                    </div>
                    <div className='mb-4'>
                        <label htmlFor="password" className='text-gray-700'>Password</label>
                        <input type="password" placeholder='Enter Your Password..' name='password'
                            className='w-full px-3 py-2 border'
                            onChange={handleChange}
                        />
                    </div>
                    <button type='submit' className='w-full bg-green-500 text-white py-2'>LogIn</button>
                </form>
                <div className='text-center mt-4'>
                    <span className='text-gray-700'>still Don't Have Account? | </span>
                    <Link to="/register" className='text-blue-500 underline'>Sign Up</Link>
                </div>
            </div>
        </div>
    )
}

export default Login