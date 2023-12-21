// Signup.js

import React, {useState} from 'react';
import image30 from "../images/image30.png";
import icongoogle from "../icons/icon1.png";
import iconface from "../icons/facebook.png";
import iconapp from "../icons/apple.png";
import {Link} from 'react-router-dom';
import {Fragment, useRef} from 'react'
import {Dialog, Transition} from '@headlessui/react'
import {CheckCircleIcon, ExclamationTriangleIcon} from '@heroicons/react/24/outline'

const Signup = () => {
    const [yourName, setYourName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const [modalOpen, setModalOpen] = useState(false)
    const [modalTitle, setModalTitle] = useState('')
    const [modalDescription, setModalDescription] = useState('')
    const [modalSuccess, setModalSuccess] = useState(true)
    const cancelButtonRef = useRef(null)

    function Modal() {
        return (
            <Transition.Root show={modalOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setModalOpen}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"/>
                    </Transition.Child>

                    <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                        <div
                            className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                enterTo="opacity-100 translate-y-0 sm:scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            >
                                <Dialog.Panel
                                    className="border-2	border-black relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                                    <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                                        <div className="sm:flex sm:items-start">
                                            <div
                                                className={(modalSuccess ? 'bg-green-100' : 'bg-red-100') + " mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full sm:mx-0 sm:h-10 sm:w-10"}>
                                                {modalSuccess ?
                                                    <CheckCircleIcon className="h-6 w-6 text-green-600"
                                                                     aria-hidden="true"/> :
                                                    <ExclamationTriangleIcon className="h-6 w-6 text-red-600"
                                                                             aria-hidden="true"/>}
                                            </div>
                                            <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                                <Dialog.Title as="h3"
                                                              className="text-base font-semibold leading-6 text-gray-900">
                                                    {modalTitle}
                                                </Dialog.Title>
                                                <div className="mt-2">
                                                    <p className="text-sm text-gray-500">
                                                        {modalDescription}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                        <button
                                            type="button"
                                            className={(modalSuccess ? "bg-green-600 hover:bg-green-500 " : "bg-red-600 hover:bg-red-500 ") + " inline-flex w-full justify-center rounded-md px-3 py-2 text-sm font-semibold text-white shadow-sm sm:ml-3 sm:w-auto"}
                                            onClick={function () {
                                                if (modalSuccess) window.location.href = '/Home'
                                                else setModalOpen(false)
                                            }}
                                        >
                                            Close
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>
        )
    }

    const handleSignup = async (e) => {
        e.preventDefault();

        // Validate inputs
        if (!yourName || !email || !password) {
            setError('Please fill in all fields.');
            return;
        }

        try {
            const url = process.env.REACT_APP_SERVER_HOST + '/auth/signup/';
            // Perform signup logic here, e.g., make an API request to create a new user
            const response = await fetch(url,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        // 'Content-Type': 'application/x-www-form-urlencoded',
                    },
                    body: JSON.stringify({
                        username: yourName,
                        email: email,
                        password: password
                    }),
                    credentials: 'include'
                });
            const responseData = await response.json();
            if (response.status === 200) {
                setModalTitle('Success')
                setModalDescription('Successful registered')
                setModalSuccess(true)
            } else {
                setModalTitle('Error')
                let response_error = '';
                for (const [key, value] of Object.entries(responseData)) {
                    response_error += `${key}: ${value}\n`
                }
                setModalDescription(response_error)
                setModalSuccess(false)
            }
            setModalOpen(true);
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <>
            <Modal/>
            <div className={(modalOpen ? 'opacity-20' : '') + " flex bg-white w-1/2 sm:mx-auto ml-10 pt-10"}>
                <div className="flex items-center ">
                    <img src={image30} alt="Example" className="hidden lg:block"/>
                </div>
                <div
                    className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-slate-50 rounded-2xl	">
                    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                        <h6>LET'S GET YOU STARTED</h6>
                        <h2 className="mt-3 text-2xl font-bold leading-9 tracking-tight text-gray-900">
                            Create an Account
                        </h2>
                    </div>
                    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                        <form className="space-y-6" onSubmit={handleSignup}>
                            <div>
                                <label
                                    htmlFor="yourName"
                                    className="block text-sm font-medium leading-6 text-gray-900"
                                >
                                    Your Name
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="yourName"
                                        name="yourName"
                                        type="text"
                                        autoComplete="name"
                                        required
                                        value={yourName}
                                        onChange={(e) => setYourName(e.target.value)}
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium leading-6 text-gray-900"
                                >
                                    Email address
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div>
                                <label
                                    htmlFor="password"
                                    className="block text-sm font-medium leading-6 text-gray-900"
                                >
                                    Password
                                </label>
                                <div className="">
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        autoComplete="new-password"
                                        required
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    className="flex w-full justify-center rounded-md bg-black  py-4 py-3 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    CONTINUE
                                </button>
                            </div>
                        </form>
                        <div>
                            <button
                                className="flex items-center w-full rounded-md border border-black px-16 py-3 text-sm font-medium text-black-600 hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring active:bg-indigo-500 mt-5 justify-between "
                                href="/download"
                            >
                                <img src={icongoogle} alt="Google Icon" className="mr-2 h-5 w-5"/>{" "}
                                <p className='mr-14 whitespace-nowrap'> Sign Up with Google</p>
                            </button>
                            <button
                                className="flex items-center w-full rounded-md border border-black px-16 py-3 text-sm font-medium text-black-600 hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring active:bg-indigo-500 mt-5 justify-between "
                                href="/download"
                            >
                                <img src={iconface} alt="Facebook Icon" className="mr-2 h-5 w-5"/>{" "}
                                <p className='mr-14 whitespace-nowrap'> Sign Up with Facebook</p>
                            </button>
                            <button
                                className="flex items-center w-full rounded-md border border-black px-16 py-3 text-sm font-medium text-black-600 hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring active:bg-indigo-500 mt-5 justify-between "
                                href="/download"
                            >
                                <img src={iconapp} alt="Apple Icon" className="mr-2 h-5 w-5"/>{" "}
                                <p className='mr-14 whitespace-nowrap'> Sign Up with Apple </p>
                            </button>
                        </div>

                        <div>
                            <p className="mt-10 text-center text-sm text-gray-500">
                                Already have an account?{' '}
                                <Link
                                    to="/login"
                                    className="font-semibold text-black w-full  leading-6 hover:text-indigo-500 underline underline-offset-4"
                                >
                                    Log In Here
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Signup;
