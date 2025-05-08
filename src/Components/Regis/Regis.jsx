import React from 'react';
import { FiImage, FiLock, FiMail, FiUser } from 'react-icons/fi';
import { Link } from 'react-router';

const Regis = () => {



    const handleRegister = (e) => {
        e.preventDefault();

        const form = new FormData(e.target);
        const nam = form.get('name')
        const pic = form.get('photo')
        const mail = form.get('email')
        const pass = form.get('password')
        console.log({ nam, pic, mail, pass })
    }
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 px-4">
            <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
                <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
                    Create an Account
                </h2>

                <form onSubmit={handleRegister} className="space-y-5">
                    {/* Name */}
                    <div className="flex items-center border border-gray-300 rounded-lg px-4 py-2 focus-within:ring-2 focus-within:ring-purple-400">
                        <FiUser className="text-gray-500 mr-2" />
                        <input
                            type="text"
                            placeholder="Full Name"
                            name='name'
                            className="w-full outline-none"
                            required
                        />
                    </div>

                    {/* Photo URL */}
                    <div className="flex items-center border border-gray-300 rounded-lg px-4 py-2 focus-within:ring-2 focus-within:ring-purple-400">
                        <FiImage className="text-gray-500 mr-2" />
                        <input
                            type="text"
                            name='photo'
                            placeholder="Photo URL"
                            className="w-full outline-none"
                        />
                    </div>

                    {/* Email */}
                    <div className="flex items-center border border-gray-300 rounded-lg px-4 py-2 focus-within:ring-2 focus-within:ring-purple-400">
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
                    <div className="flex items-center border border-gray-300 rounded-lg px-4 py-2 focus-within:ring-2 focus-within:ring-purple-400">
                        <FiLock className="text-gray-500 mr-2" />
                        <input
                            type="password"
                            name='password'
                            placeholder="Password"
                            className="w-full outline-none"
                            required
                        />
                    </div>

                    {/* Submit */}
                    <button
                        type="submit"
                        className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 rounded-lg transition duration-300"
                    >
                        Register
                    </button>
                </form>

                <p className="text-sm text-center text-gray-500 mt-6">
                    Already have an account?{" "}
                    <Link to={'/login'} href="#" className="text-purple-600 hover:underline">
                        Login
                    </Link>
                </p>
            </div>
        </div>

    );
};

export default Regis;