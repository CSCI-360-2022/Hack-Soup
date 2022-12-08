import Image from 'next/image';
import Layout from '../components/Layout';
import { useContext, useEffect, useState } from 'react';
import { ProductsContext } from '../components/ProductsContext';
import Link from 'next/link';

function checkCard() {
  var number = document.getElementById('cardNumber');
  var code = document.getElementById('codeNumber');
  var dateNumber = document.getElementById('year').value;
  var cardText = document.getElementById('cardCheck');
  var codeText = document.getElementById('codeCheck');
  var dateText = document.getElementById('dateCheck');

  if (number.value.length == 16) {
    cardText.style.color = 'green';
  } else {
    cardText.style.color = 'red';
  }

  if (code.value.length == 3){
    codeText.style.color = 'green';
  }
  else{
    codeText.style.color= 'red';
  }

  if(dateNumber <= 22){
    dateText.style.color='red';
  }
  else{
    dateText.style.color='green';
  }


}

export default function CheckoutPage() {
  const { selectedProducts, setSelectedProducts } = useContext(ProductsContext);
  const [productsInfos, setProductsInfos] = useState([]);
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');

  useEffect(() => {
    const uniqIds = [...new Set(selectedProducts)];
    fetch('/api/products?ids=' + uniqIds.join(','))
      .then((response) => response.json())
      .then((json) => setProductsInfos(json));
  }, [selectedProducts]);

  function moreOfThisProduct(id) {
    setSelectedProducts((prev) => [...prev, id]);
  }
  function lessOfThisProduct(id) {
    const pos = selectedProducts.indexOf(id);
    if (pos !== -1) {
      setSelectedProducts((prev) => {
        return prev.filter((value, index) => index !== pos);
      });
    }
  }

  function paymentSuccess() {
    <div>Payment Success</div>;
  }

  const deliveryPrice = 5;
  let subtotal = 0;
  if (selectedProducts?.length) {
    for (let id of selectedProducts) {
      const price = productsInfos.find((p) => p._id === id)?.price || 0;
      subtotal += price;
    }
  }
  const total = subtotal + deliveryPrice;

  return (
    <body>
      <Layout>
        {!productsInfos.length && <div>no products in your shopping cart</div>}
        {productsInfos.length &&
          productsInfos.map((productInfo) => {
            const amount = selectedProducts.filter(
              (id) => id === productInfo._id
            ).length;
            if (amount === 0) return;
            return (
              <div className="flex mb-5 items-center" key={productInfo._id}>
                <div
                  className="bg-red-300 p-3 rounded-xl shrink-0"
                  style={{
                    boxShadow: 'inset 1px 0px 10px 10px rgba(0,0,0,0.1)',
                  }}
                >
                  <>
                    <Image
                      src={productInfo.picture}
                      alt=""
                      width={100}
                      height={100}
                      className="w-24"
                    />
                  </>
                </div>
                <div className="pl-4 items-center">
                  <h3 className="font-bold text-lg">{productInfo.name}</h3>
                  <p className="text-sm leading-4 text-gray-500">
                    {productInfo.description}
                  </p>
                  <div className="flex mt-1">
                    <div className="grow font-bold">${productInfo.price}</div>
                    <div>
                      <button
                        onClick={() => lessOfThisProduct(productInfo._id)}
                        className="border border-red-500 px-2 rounded-lg text-red-500"
                      >
                        -
                      </button>
                      <span className="px-2">
                        {
                          selectedProducts.filter(
                            (id) => id === productInfo._id
                          ).length
                        }
                      </span>
                      <button
                        onClick={() => moreOfThisProduct(productInfo._id)}
                        className="bg-red-500 px-2 rounded-lg text-white"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        <form action="/api/checkout" method="POST">
          <div className="mt-8 flex flex-col">
            <input
              id="cardNumber"
              name="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="bg-gray-500 w-1/2 rounded-lg px-4 py-2 mb-2"
              type="text"
              placeholder="Credit / Debit Card Number"
              onKeyUp={checkCard}
            />
            <ul>
              <li id="cardCheck" className="py-2 text-red-500">
                {' '}
                Valid Card Length{' '}
              </li>
            </ul>
            <input
              name="month"
              value={month}
              onChange={(e) => setMonth(e.target.value)}
              className="bg-gray-500 w-1/2 rounded-lg px-4 py-2 mb-2"
              type="text"
              placeholder="Expiration Month"
            />
            <input
              id='year'
              name="date"
              value={year}
              onChange={(e) => setYear(e.target.value)}
              className="bg-gray-500 w-1/2 rounded-lg px-4 py-2 mb-2"
              type="text"
              placeholder="Expiration Year"
              onKeyUp={checkCard}
            />
            <ul>
              <li id="dateCheck" className="py-2 text-red-500">
                {' '}
                Valid Expiration Date{' '}
              </li>
            </ul>
            <input
              id='codeNumber'
              name="city"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="bg-gray-500 w-1/2 rounded-lg px-4 py-2 mb-2"
              type="text"
              placeholder="Security Code"
              onKeyUp={checkCard}
            />
            <ul>
            <li id="codeCheck" className="py-2 text-red-500">
                {' '}
                Valid Security Code{' '}
              </li>
            </ul>
            <input
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bg-gray-500 w-1/2 rounded-lg px-4 py-2 mb-2"
              type="text"
              placeholder="Your Name"
            />
            <input
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-gray-500 w-1/2 rounded-lg px-4 py-2 mb-2"
              type="email"
              placeholder="Your Email"
            />
          </div>
          <div className="mt-8">
            <div className="flex my-3">
              <h3 className="grow font-bold text-gray-400">Subtotal:</h3>
              <h3 className="font-bold">${subtotal}</h3>
            </div>
            <div className="flex my-3">
              <h3 className="grow font-bold text-gray-400">Processing Fee:</h3>
              <h3 className="font-bold">${deliveryPrice}</h3>
            </div>
            <div className="flex my-3 border-t pt-3 border-dashed border-red-500">
              <h3 className="grow font-bold text-gray-400">Total:</h3>
              <h3 className="font-bold">${total}</h3>
            </div>
            <button
              type="submit"
              className="bg-red-500 px-5 py-2 rounded-xl font-bold text-white min-w-1/2 my-4 shadow-red-500 shadow-lg"
            >
              Pay With Stripe ${total}
            </button>
          </div>
          <input
            type="hidden"
            name="products"
            value={selectedProducts.join(',')}
          />
          <Link href="/paymentSuccess">
            <button
              type="submit"
              className="bg-red-500 px-5 py-2 rounded-xl font-bold text-white min-w-1/2 my-4 shadow-red-500 shadow-lg"
            >
              Pay ${total}
            </button>
          </Link>
        </form>
      </Layout>
    </body>
  );
}
