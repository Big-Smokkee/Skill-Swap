import { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";


const Login = () => {
    const { user, loginExistingUser, signInWithGoogle } = use(AuthContext);
    console.log(user);
    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        loginExistingUser(email, password)
            .then(res => {
                const user = res.user
                toast("Login Successful!");
                console.log(user);
            })
            .catch(err => {
                toast("Invalid Credintial");
                console.log(err.message);
            })
    }
    const handleGoogleSignIn = (e) => {
        e.preventDefault();
        console.log("submitted");
        signInWithGoogle()
            .then(res => {
                const user = res.user
                toast("Login Successful!");
                console.log(user);
            })
            .catch(err => {
                toast("Invalid Credintial");
                console.log(err.message);
            })
    }
    return (
        <div className="card bg-base-100 mx-auto max-w-sm shrink-0 shadow-2xl">
            <h1 className="text-5xl font-bold text-center">Login now!</h1>
            <div className="card-body">
                <form onSubmit={handleLogin} className="fieldset">
                    <label className="label">Email</label>
                    <input type="email" className="input" placeholder="Email" name="email" />
                    <label className="label">Password</label>
                    <input type="password" className="input" placeholder="Password" name="password" />
                    <div><a className="link link-hover">Forgot password?</a></div>
                    <button className="btn btn-neutral mt-4">Login</button>
                    <p className="">or, </p>
                    {/* Google */}
                    <button className="btn bg-white text-black border-[#e5e5e5]" onClick={handleGoogleSignIn}>
                        <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                        Login with Google
                    </button>
                    <p className="text-center mt-4">If you are new to Skill <span className="text-emerald-400">Swap</span>, <span> </span>
                        <span className=" link link-hover hover:text-blue-500">
                            <Link to="/signup">
                                Please Register
                            </Link>

                        </span>
                    </p>
                </form>
            </div>
        </div >

    );
};

export default Login;