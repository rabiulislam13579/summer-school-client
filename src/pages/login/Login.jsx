import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import app from '../../firebase/firebase.config';
import { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';


const Login = () => {
    const auth = getAuth(app)
    const {signIn}=useContext(AuthContext);
    
    const googleProvider = new GoogleAuthProvider();
    
    const handleGoogleLogin=()=>{

        signInWithPopup(auth, googleProvider)



       

  .then((result) => {
    const user = result.user;
    console.log(user);

    
        //======google user=====

    const userObj = {name: user.displayName,photo: user.photoURL,email: user.email}
    fetch('https://summer-school-server-six.vercel.app/users',{
        method: 'POST',
        headers:{
            'content-type': 'application/json'
        },
        body: JSON.stringify(userObj)
    })
    .then(res=>res.json())
    .then(data=>{
        if(data.insertedId){
            console.log(data);
            alert('User is added')
        }
    })
   
  }).catch((error) => {
    const errorMessage = error.message;
    console.log(errorMessage);
  });
}

    const navigate=useNavigate()
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'

    const handleLogin=(event)=>{
        event.preventDefault();
        const form = event.target;
        
        const email=form.email.value;
        const password=form.password.value;
        console.log(email, password);
        signIn(email, password)
        .then(result=>{
            const signInnedUser=result.user;
            console.log(signInnedUser);
            navigate(from, {replace:true})
        })
        .catch(error=>{
            console.log(error);
        })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col md:flex-row">
            <div className="text-center lg:text-left w-1/2">

                <img className='w-96 h-full mr-96 rounded' src="https://pomepos.com/wp-content/uploads/2015/01/LoginRed.jpg" alt="" />
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div className="card-body">
                    <h1 className="text-3xl text-purple-900 font-bold">Login now!</h1>
                    <form onSubmit={handleLogin}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" name='email' className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" placeholder="password" name='password' className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>

                        <div className="form-control mt-6">
                            <input className='btn' type="submit" value='Login' />
                        </div>
                    </form>
                    <p>Haven't an account ? <Link className='text-primary' to='/signup'>resister</Link> </p>
                    <div>
                        <img onClick={handleGoogleLogin} src="https://synergy.trantorinc.com/documents/111493/119216/google-signin-button.png/6683f50b-8551-6370-cda4-174f96ad4f09?t=1656075969290" alt="" />
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Login;