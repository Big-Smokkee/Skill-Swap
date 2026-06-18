import { useLocation } from 'react-router';
import forgotPasswordImage from '../assets/person-forget-password-hand-drawn-mini-illustration-vector.png';
import { use } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { toast } from 'react-toastify';

const ForgetPasswordPage = () => {
    const location = useLocation();
    console.log(location);
    const { UserPasswordResetEmail } = use(AuthContext);

    const handleResetPassword = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        UserPasswordResetEmail(email)
            .then(() => {
                toast("Password reset email sent! Check your inbox and Spam.");
                // <Navigate to={"https://mail.google.com/mail/u/0/?hl=en#inbox"}></Navigate>
                // navigate("/https://mail.google.com/mail/u/0/?hl=en#inbox")
                // Redirect to Gmail
                window.location.href = "https://mail.google.com/mail/u/0/?hl=en#inbox";
            })
            .catch(err => {
                toast("There was a problem resetting the password");
                console.log(err);
            })
    }
    return (
        <div className='flex  items-center justify-center space-x-6 shadow-2xl shadow-emerald-700 rounded-3xl py-12'>

            <img src={forgotPasswordImage} alt="" className='w-100 rounded-3xl' />

            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                    <p className='text-lg font-medium'>
                        Please write your email address to recieve password reset code
                    </p>
                    <form className="fieldset" onSubmit={handleResetPassword}>
                        <label className="label">Email</label>
                        <input type="email" className="input w-full  bg-gray-900 border border-emerald-500 text-white placeholder-gray-400 rounded-lg" placeholder="Email" name='email' {...(location.state ? { value: location.state } : {})} />
                        <button className="btn btn-outline border-emerald-500 text-emerald-500 hover:bg-emerald-500 hover:text-white mt-4" >Reset Password</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ForgetPasswordPage;