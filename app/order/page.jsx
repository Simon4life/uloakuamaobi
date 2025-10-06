"use client"
import React from 'react'
import { useState } from 'react'

const page = () => {
    let [quantity, setQuantity] = useState(1);

  return (
    <div className="bg-gray-50 font-display text-slate-800 flex min-h-screen flex-col">

      {/* Main */}
      <main className="flex-grow">

         <div className="flex mt-12 justify-center flex-col text-center">
                <div className="flex flex-col gap-3">
                  <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                    The Helper
                  </h1>
                  <p className="text-lg leading-relaxed text-slate-600">
                    In this book, you will discover how to let God into your life to help you in your journey of life.
                  </p>
                </div>
                <div className='text-lg font-bold'>
                    <h1>ISBN 13 (SOFT): 9781543481389</h1>
                    <h1>ISBN 13 (HARD): 9781543481396</h1>
                    <h1>ISBN 13 (eBook): 9781543481372</h1>
                </div>
            </div>
        {/* Hero Section */}
        <section className="py-16 md:py-12">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:gap-24 items-center">
              <div className="flex justify-center">
                <div
                  className="book-cover h-auto w-full max-w-[400px] aspect-[3/4] rounded-lg bg-cover bg-center shadow-lg"
                  style={{
                    backgroundImage: `url("/book.png")`
                  }}
                ></div>
              </div>
              
        <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="max-w-lg mx-auto bg-white rounded-lg shadow-lg p-8">
            <div className="text-center mb-8">
                <h1 className="text-3xl font-bold text-slate-900">
                Secure Order Form
                </h1>
                <p className="text-slate-500 mt-2">
                Complete your purchase for "The Helper"
                </p>
            </div>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                {/* Full Name */}
                <label className="block text-sm font-medium text-gray-700 mb-1" for="quantity">Quantity</label>
                <div className="flex items-center">
                    <button className="px-3 py-2 rounded-l bg-gray-200 hover:bg-gray-300" onClick={() => setQuantity(quantity-=1)} type="button">-</button>
                    <input className="w-16 text-center form-input border-y border-x-0 border-gray-300 focus:ring-primary focus:border-primary" id="quantity" min="1" name="quantity" type="number" value={quantity}/>
                    <button onClick={() => setQuantity(quantity+=1)} className="px-3 py-2 rounded-r bg-gray-200 dark:bg-gray-700 hover:bg-gray-300" type="button">+</button>
                </div>
                <div>
                <label
                    htmlFor="full-name"
                    className="block text-sm font-medium text-slate-700"
                >
                    Full Name
                </label>
                <input
                    id="full-name"
                    name="full-name"
                    type="text"
                    placeholder="Jane Doe"
                    className="form-input block w-full rounded border-gray-300-700 focus:ring-primary focus:border-primary mt-1"
                />
                </div>

                {/* Shipping */}
                <div>
                <label
                    htmlFor="shipping-address"
                    className="block text-sm font-medium text-slate-700"
                >
                    Shipping Address
                </label>
                <input
                    id="shipping-address"
                    name="shipping-address"
                    type="text"
                    placeholder="123 Bookworm Lane"
                    className="form-input block w-full rounded-lg border-slate-300 bg-background-light dark:bg-background-dark focus:ring-primary focus:border-primary mt-1"
                />
                </div>
                {/* Phone Number  */}
                <div>
                <label
                    htmlFor="phone-number"
                    className="block text-sm font-medium text-slate-700"
                >
                    Phone Number
                </label>
                <input
                    id="phone-number"
                    name="phone-number"
                    type="text"
                    placeholder="+234 801 234 5678"
                    className="form-input block w-full rounded-lg border-slate-300 focus:ring-primary focus:border-primary mt-1"
                />
                </div>

                {/* Email */}
                <div>
                <label
                    htmlFor="email"
                    className="block text-sm font-medium text-slate-700"
                >
                    Email Address
                </label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    className="form-input block w-full rounded-lg border-slate-300 focus:ring-primary focus:border-primary mt-1"
                />
                </div>

                {/* Submit Button */}
                <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-[#3b82f6] hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-pointer focus:ring-primary"
                >
                Submit Order
                </button>   
            </form>
            </div>
      </main>

    </div>
            
</div>
</section>
</main>
</div>
  )
}

export default page