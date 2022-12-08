import Layout from '../components/Layout';
import Link from 'next/link';

export var title = '';

function validate() {
  var pass = document.getElementById('password');
  var upper = document.getElementById('upper');
  var lower = document.getElementById('lower');
  var num = document.getElementById('number');
  var len = document.getElementById('length');
  var special = document.getElementById('special');

  if (pass.value.match(/[0-13]/)) {
    //at least one number
    num.style.color = 'green';
  } else {
    num.style.color = 'red';
  }

  if (pass.value.match(/[A-Z]/)) {
    //at least one number
    upper.style.color = 'green';
  } else {
    upper.style.color = 'red';
  }

  if (pass.value.match(/[a-z]/)) {
    //at least one number
    lower.style.color = 'green';
  } else {
    lower.style.color = 'red';
  }

  if (pass.value.match(/[!\@\#\$\%\^\&\*\(\_\+\=\?)]/)) {
    //at least one number
    special.style.color = 'green';
  } else {
    special.style.color = 'red';
  }

  if (pass.value.length < 15) {
    //at least one number
    len.style.color = 'red';
  } else {
    len.style.color = 'green';
  }
}

function conform() {
  var pass1 = document.getElementById('password');
  var pass2 = document.getElementById('password2');
  if (pass1.value == pass2.value) {
    document.getElementById('number').style.display = 'none';
    document.getElementById('lower').style.display = 'none';
    document.getElementById('upper').style.display = 'none';
    document.getElementById('length').style.display = 'none';
    document.getElementById('special').style.display = 'none';
  } else {
    document.getElementById('number').style.display = 'block';
    document.getElementById('number').style.display = 'block';
    document.getElementById('number').style.display = 'block';
    document.getElementById('number').style.display = 'block';
    document.getElementById('number').style.display = 'block';
  }
}

// checks the password

export default function Regisiter() {
  return (
    <Layout>
      <div className="background mt-8 flex flex-col">
        <h1 className="color"> Sign up </h1>
        <input
          type="text"
          id="firstName"
          className="bg-gray-500 w-1/4 rounded-lg px-4 py-2 mb-2"
          placeholder="First Name"
        />
        <input
          type="text"
          id="lastName"
          className="bg-gray-500 w-1/4 rounded-lg px-4 py-2 mb-2"
          placeholder="Last Name"
        />
        <input
          type="text"
          id="userName"
          className="bg-gray-500 w-1/4 rounded-lg px-4 py-2 mb-2"
          placeholder="Username"
        />
        <input
          type="text"
          id="password"
          className="bg-gray-500 w-1/4 rounded-lg px-4 py-2 mb-2"
          placeholder="Password"
          onKeyUp={validate}
        />
        <input
          type="text"
          id="password2"
          className="bg-gray-500 w-1/4 rounded-lg px-4 py-2 mb-2"
          placeholder=" Confirm Password"
          onKeyUp={conform}
        />
        <p>
          {' '}
          Already Have an Account?
          <Link href={'/login'}>
            <span className="signup"> Log in</span>
          </Link>
        </p>
        <Link href={'/'}>
          <button className="bg-red-500 w-1/4 h-8 rounded-lg">Sign up</button>
        </Link>
      </div>
      <div class="errors">
        <ul>
          <li id="upper" className="text-red-500">
            {' '}
            At least one uppercase{' '}
          </li>
          <li id="lower" className="text-red-500">
            {' '}
            At least one lowercase{' '}
          </li>
          <li id="special" className="text-red-500">
            {' '}
            At least one special symbol{' '}
          </li>
          <li id="number" className="text-red-500">
            {' '}
            At least one number{' '}
          </li>
          <li id="length" className="text-red-500">
            {' '}
            At least 15 characters{' '}
          </li>
        </ul>
      </div>
    </Layout>
  );
}
