import Footer from '../components/Footer';
import Layout from '../components/Layout';
import Link from 'next/link';

export default function Regisiter() {
  return (
    <Layout>
      <div className="background  mt-8 flex flex-col">
        <h1 className="color"> Login </h1>
        <input
          type="text"
          id="username"
          className="bg-gray-500 w-1/4 rounded-lg px-4 py-2 mb-2"
          placeholder="User Name"
        />
        <input
          type="password"
          id="password"
          className="bg-gray-500 w-1/4 rounded-lg px-4 py-2 mb-2"
          placeholder="********"
        />
        <p>
          {' '}
          Dont Have an Account? 
          <Link href={'/register'}>
            <span className="signup "> Sign Up</span>
            
          </Link>
          
        </p>
        <Link href={'/'}>
          <button className="bg-red-500 w-1/4 h-8 rounded-lg"> Login </button>
      </Link>
      </div>
    </Layout>
  );
}
