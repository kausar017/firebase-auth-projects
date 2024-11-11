import { Link } from "react-router-dom";



const Registion = () => {

    const handalReagister = even => {
        even.preventDefault();

        const name = even.target.name.value;
        const email = even.target.email.value;
        const password = even.target.password.value;

        console.log(name, email, password);
        
    }




    return (
        <div className="hero bg-base-100 min-h-[650px]">
            <div className="hero-content flex-col lg:flex-row-reverse justify-between">
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <h1 className="text-5xl text-center font-bold">Reagister now!</h1>
                    <form onSubmit={handalReagister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Name" className="input input-bordered" />
                        </div>

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
                            <button className="btn btn-primary">Reagister</button>
                        </div>
                        <p className="ml-4 my-4">
                            All Rady haven Acount? please<Link className="ml-2 text-green-700" to={'/login'}>Login</Link>
                        </p>
                    </form>
                </div>
                <div className="max-sm:hidden">
                    <img className="max-w-[400px]" src="https://www.hcpc-uk.org/globalassets/image-library/icons/icon-register-800x600.gif" alt="" />
                </div>

            </div>
        </div>
    );
};

export default Registion;