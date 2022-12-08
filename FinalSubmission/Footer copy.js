import Link from 'next/link';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import { title } from '../pages/register';
import { ProductsContext } from './ProductsContext';

var nameTitle = title;

export default function Footer() {
  const router = useRouter();
  const path = router.pathname;
  const { selectedProducts } = useContext(ProductsContext);
  return (
    <header className=" head sticky top-0 bg-white p-5 w-full flex border-t border-gray-200 space-x-12 justify-between ">
      <h1 className="color"> Cougar Tickets </h1>
      <div className="flex space-x-12 text-gray-400">
        <Link href={'/'}>
          <a
            className={
              (path === '/' ? 'colorbutton' : '') +
              ' flex justify-center items-center flex-col'
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>
            <span></span>
          </a>
        </Link>
        <Link href={'/checkout'}>
          <a
            className={
              (path === '/checkout' ? 'text-red-500' : '') +
              ' flex  justify-center items-center flex-col'
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>
            <span></span>
          </a>
        </Link>
        <Link href={'/login'}>
          <a
            className={
              (path === '/checkout' ? 'colorbutton' : '') +
              ' flex justify-center items-center flex-col'
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
              />
            </svg>

            <span>{nameTitle}</span>
          </a>
        </Link>
      </div>
    </header>
  );
}
