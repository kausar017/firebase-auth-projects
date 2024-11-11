import { Link } from "react-router-dom";

const Login = () => {


    const handalLogin = (even) => {
        even.preventDefault();
        const email = even.target.email.value;
        const password = even.target.password.value;

        console.log(email, password);

    }



    return (
        <div className="hero bg-base-100 min-h-[650px]">
            <div className="hero-content flex-col lg:flex-row-reverse justify-between">
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <h1 className="text-5xl text-center font-bold">Login now!</h1>
                    <form onSubmit={handalLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <p className="ml-4 my-4">
                            New to this Website? please<Link className="ml-2 text-green-700" to={'/register'}>Reagister</Link>
                        </p>
                    </form>
                </div>
                <div className="max-sm:hidden">
                    <img className="max-w-[400px]" src="https://ps.w.org/login-customizer/assets/icon-256x256.png?rev=2455454" alt="" />
                </div>

            </div>
        </div>
    );
};

export default Login;