import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import React from 'react';
import { AuthContext } from "../provider/AuthProvider";
import axios from 'axios';

const Register = () => {
const navigate = useNavigate()

      const { user, updateUserProfile, createUser, loading } = useContext(AuthContext)

      const handlaSubmit = async e => {
            e.preventDefault()
            const form = e.target;
            const name = form.name.value;
            const password = form.password.value;
            const email = form.email.value;
            const image = form.image.files[0]
            const formData = new FormData();
            formData.append("image", image);
            // console.log('name, password, email', name, password, email, image)
            try {
                  // const imageUrl = await imageUpload(image)
                  const { data } = await axios.post(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_API}`, formData);
                  const imageUrl = data.data.display_url;
                  await createUser(email, password);
                  updateUserProfile(name, imageUrl)
                  navigate('/dashboard/alluser')
                  // console.log('image', formInfo)
            } catch (error) {
                  console.log(error)
            }
      }


      return (
            <div>
                  <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
                        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                              <h2 className="mt-10 text-center text-4xl font-bold leading-9 tracking-tight text-gray-900">
                                    Register Now
                              </h2>
                        </div>

                        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                              <form onSubmit={handlaSubmit} className="space-y-6">
                                    <div>
                                          <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                                                Your Name
                                          </label>
                                          <div className="mt-2">
                                                <input
                                                      id="name"
                                                      name="name"
                                                      type="text"
                                                      autoComplete="name"
                                                      required
                                                      className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                />
                                          </div>
                                    </div>
                                    <div>
                                          <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                                Upload Image
                                          </label>
                                          <div className="mt-2">
                                                <input
                                                      id="image"
                                                      name="image"
                                                      type="file"
                                                      required
                                                      className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                />
                                          </div>
                                    </div>
                                    <div>
                                          <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                                Email address
                                          </label>
                                          <div className="mt-2">
                                                <input
                                                      id="email"
                                                      name="email"
                                                      type="email"
                                                      autoComplete="email"
                                                      required
                                                      className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                />
                                          </div>
                                    </div>

                                    <div>
                                          <div className="flex items-center justify-between">
                                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                                      Password
                                                </label>
                                                <div className="text-sm">
                                                      <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                                                            Forgot password?
                                                      </a>
                                                </div>
                                          </div>
                                          <div className="mt-2">
                                                <input
                                                      id="password"
                                                      name="password"
                                                      type="password"
                                                      autoComplete="current-password"
                                                      required
                                                      className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                />
                                          </div>
                                    </div>

                                    <div>
                                          <button
                                                type="submit"
                                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                          >
                                                Register
                                          </button>
                                    </div>
                              </form>

                              <p className="mt-10 text-center text-sm text-gray-500">
                                    Not a member?{" "}
                                    <Link to="/" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                                          Login now
                                    </Link>
                              </p>
                        </div>
                  </div>
            </div>
      );
};

export default Register;