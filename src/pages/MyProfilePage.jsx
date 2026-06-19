import { use, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import 'animate.css';
import { FaPhoneAlt, FaUser } from "react-icons/fa";
import { IoMdCloseCircle, IoMdMail } from "react-icons/io";
import { toast } from "react-toastify";

const MyProfilePage = () => {
    const { user, updateUserProfile, setLoading } = use(AuthContext);
    const [profileUpdateButton, setProfileUpdateButton] = useState(false);

    const handleUpdateProfileForm = (e) => {
        e.preventDefault();
        console.log("Clicked");
        setProfileUpdateButton(true);
        const name = e.target.name.value;
        const photoURL = e.target.photoURL.value;
        const userProfileUpdateObject = {
            name,
            photoURL
        }
        updateUserProfile(userProfileUpdateObject)
            .then(() => {
                toast("Profile Updated Successfully!");
                setLoading(false);
            })
            .catch((err) => {
                toast("Problem occured when trying to update profile");
                console.log(err);
            })
    };

    return (
        <section className="mt-16">
            {!profileUpdateButton ? (
                <div
                    className={`card bg-gray-900 w-full max-w-xs sm:max-w-sm md:max-w-md shadow-2xl shadow-emerald-800 rounded-2xl mx-auto border border-gray-200 
            animate__animated ${profileUpdateButton ? 'animate__backOutLeft' : 'animate__fadeIn'}`}
                >
                    <div className="card-body items-center text-center space-y-6">
                        {/* Avatar */}
                        <div className="w-54 h-54 rounded-3xl overflow-hidden border-4 border-emerald-500 shadow-md group">
                            {user?.photoURL !== null ? (
                                <img
                                    src={user.photoURL}
                                    alt="User Avatar"
                                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                                />
                            ) : (
                                <div className="flex items-center justify-center w-full h-full bg-gray-100">
                                    <FaUser className="text-emerald-500 text-3xl group-hover:text-emerald-600 transition-colors duration-300" />
                                </div>
                            )}
                        </div>

                        {/* Name */}
                        <h2 className="text-2xl font-bold ">
                            {user?.displayName || "Anonymous User"}
                        </h2>

                        {/* Email */}
                        <div className="flex items-center gap-3 px-4 py-2 rounded-lg shadow-sm border border-gray-500 w-full">
                            <IoMdMail className="text-emerald-600 text-2xl" />
                            <div className="flex flex-col text-left">
                                <p className="text-sm text-gray-400">Email Address</p>
                                <h3 className="text-base font-medium ">{user.email}</h3>
                            </div>
                        </div>

                        {/* Phone */}
                        <div className="flex items-center gap-3 px-4 py-2 rounded-lg shadow-sm border border-gray-500 w-full">
                            <FaPhoneAlt className="text-emerald-600 text-2xl" />
                            <div className="flex flex-col text-left">
                                <p className="text-sm text-gray-400">Phone Number</p>
                                <h4 className="text-base font-medium ">
                                    {user?.phoneNumber || "No Phone Number"}
                                </h4>
                            </div>
                        </div>

                        <div>
                            <button
                                className="btn btn-outline hover:bg-emerald-500 hover:text-white font-bold"
                                onClick={handleUpdateProfileForm}
                            >
                                Update Profile
                            </button>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="card  w-full max-w-md shadow-xl rounded-2xl mx-auto border border-gray-200 
          animate__animated animate__backInRight">
                    <div className="card-body">
                        <span className="flex justify-end text-2xl text-emerald-400 cursor-pointer" onClick={() => setProfileUpdateButton(!profileUpdateButton)}>
                            <IoMdCloseCircle></IoMdCloseCircle>
                        </span>
                        <form onSubmit={handleUpdateProfileForm}>
                            <fieldset className="fieldset space-y-3">
                                <label className="label text-white">Name</label>
                                <input type="text" className="input input-bordered w-full" placeholder="Name" name="name" />
                                <label className="label text-white">Photo URL</label>
                                <input type="text" className="input input-bordered w-full" placeholder="Photo URL" name="photoURL" />
                                <button className="btn btn-outline hover:bg-emerald-500 text-white w-full mt-4">Save</button>
                            </fieldset>
                        </form>
                    </div>
                </div>
            )}
        </section>
    );
};

export default MyProfilePage;
