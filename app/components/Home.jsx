"use client";
 

export default function Home() {
  return (
    <div className="bg-gray-50 font-display text-slate-800 flex min-h-screen flex-col">

      {/* Main */}
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-16 md:py-24">
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
              <div className="flex flex-col gap-6 text-center md:text-left">
                <div className="flex flex-col gap-3">
                  <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                    The Helper
                  </h1>
                  <p className="text-lg leading-relaxed text-slate-600 ">
                    The Helper is a book that documented my life journey from my high school days, through my earlier work experience, before I gained admission into university and how I was able to navigate through challenges and other huddle along my way. It shows how I was able to gain my first job in a company of my dream with the help and direction of God as He sends people into my life to help me overcome some hurdles and come out victoriously.
                  </p>
                </div>
                <div className="flex justify-center md:justify-start">
                  <a href="/order" className="flex min-w-[84px] items-center justify-center rounded-lg h-12 px-6  text-base font-bold  shadow-lg transition-transform hover:scale-105">
                    <span className="truncate">order the Book</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

    </div>
  );
}
