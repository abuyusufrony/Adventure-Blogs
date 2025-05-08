import React, { useContext } from 'react';
import { FiLock, FiMail } from 'react-icons/fi';
import { Link, useLocation, useNavigate } from 'react-router';
import { Authcontext } from '../../Auth/AuthProvider';

const Login = () => {
    const { loginuser, setuser } = useContext(Authcontext)
    const loaction = useLocation()
    const nav = useNavigate()


    const handleLogin = (e) => {

        e.preventDefault();
        console.log("Login value are adding soon")
        const from = new FormData(e.target);
        const mail = from.get('email')
        const pass = from.get('password')
        console.log({ mail, pass })
        loginuser(mail, pass)
            .then((res) => {
                const re = res.user
                setuser(re)
                console.log('user are login ', re)
                nav(loaction?.state ? loaction.state : '/')

            })
            .catch((err) => {
                console.log("Error are ", err)
            })

    }
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-4">
            <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
                <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
                    Sign in to your account
                </h2>

                <form onSubmit={handleLogin} className="space-y-5">
                    {/* Email */}
                    <div className="flex items-center border border-gray-300 rounded-lg px-4 py-2 focus-within:ring-2 focus-within:ring-indigo-400">
                        <FiMail className="text-gray-500 mr-2" />
                        <input
                            type="email"
                            name='email'
                            placeholder="Email"
                            className="w-full outline-none"
                            required
                        />
                    </div>

                    {/* Password */}
                    <div className="flex items-center border border-gray-300 rounded-lg px-4 py-2 focus-within:ring-2 focus-within:ring-indigo-400">
                        <FiLock className="text-gray-500 mr-2" />
                        <input
                            type="password"
                            name='password'
                            placeholder="Password"
                            className="w-full outline-none"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 rounded-lg transition duration-300"
                    >
                        Sign In
                    </button>
                </form>

                <p className="text-sm text-center text-gray-500 mt-6">
                    Don’t have an account?{" "}
                    <Link to={'/register'} href="#" className="text-indigo-600 hover:underline">
                        Register
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Login;