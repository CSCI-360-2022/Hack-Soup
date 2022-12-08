import Layout from '../components/Layout';
import Link from 'next/link';

export default function Regisiter() {
  return (
    <Layout>
      <div className="background mt-8 flex flex-col">
        <h1 className="color"> Your Payment Was Sucessfull</h1>
        <Link href={'/'}>
          <button className="bg-red-500 w-1/4 h-8 rounded-lg">
            {' '}
            Browse More Events{' '}
          </button>
        </Link>
      </div>
    </Layout>
  );
}
