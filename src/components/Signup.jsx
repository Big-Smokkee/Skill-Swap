import { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";


const Signup = () => {
    const { signUpNewUser, signInWithGoogle } = use(AuthContext);
    console.log(signUpNewUser);
    const handleRegister = (e) => {
        e.preventDefault();
        // const name = e.target.name.value;
        const email = e.target.email.value;
        // const photoURL = e.target.photoURL.value;
        const password = e.target.password.value;
        // console.log({ name, email, photoURL, password });
        signUpNewUser(email, password)
            .then(res => {
                toast("Register completed!");
                console.log(res.user)
            })
            .catch(err => {
                toast("Error in registration");
                console.log(err.message);
            })

    }
    const handleGoogleSignup = (e) => {
        e.preventDefault();
        console.log("submitted");
        signInWithGoogle()
            .then(res => {
                const user = res.user
                toast("Register Successful!");
                console.log(user);
            })
            .catch(err => {
                toast("Error in registration");
                console.log(err.message);
            })
    }
    return (
        <div className="card bg-base-100 mx-auto max-w-sm shrink-0 shadow-2xl">
            <h1 className="text-5xl font-bold text-center">Register now!</h1>
            <div className="card-body">
                <form onSubmit={handleRegister} className="fieldset">
                    {/* name */}
                    <label className="label">Name</label>
                    <input type="text" className="input" placeholder="Name" name="name" />
                    {/* email */}
                    <label className="label">Email</label>
                    <input type="email" className="input" placeholder="Email" name="email" />
                    {/* phot url */}
                    <label className="label">Photo URL</label>
                    <input type="text" className="input" placeholder="Photo URL" name="photoURL" />
                    {/* password */}
                    <label className="label">Password</label>
                    <input type="password" className="input" placeholder="Password" name="password" />
                    <button className="btn btn-neutral mt-4">Register</button>
                    <p className="">or, </p>
                    {/* Google */}
                    <button className="btn bg-white text-black border-[#e5e5e5]" onClick={handleGoogleSignup}>
                        <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                        Register with Google
                    </button>
                    <p className="text-center mt-4">Already have a Skill <span className="text-emerald-400">Swap</span> account? <span> </span>
                        <span className=" link link-hover hover:text-blue-500">
                            <Link to="/login">
                                Please Login
                            </Link>

                        </span>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Signup;