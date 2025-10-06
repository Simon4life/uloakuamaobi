export default function Home() {
  return (
    <div className="relative flex min-h-screen w-full flex-col">

      
      {/* Main */}
      <main className="bg-gray-50 flex-grow">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          {/* Author profile */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
            <div className="flex-shrink-0">
              <div className="relative">
                <div
                  className="h-40 w-40 md:h-48 md:w-48  bg-cover bg-center shadow-lg"
                  style={{
                    backgroundImage:
                      "url('/au.jpg')",
                  }}
                ></div>
                <span className="absolute bottom-2 right-2 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white text-lg font-bold">
                  S
                </span>
              </div>
            </div>

            <div className="text-center md:text-left">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                Uloaku Amaobi
              </h2>
              <p className="mt-2 text-lg text-primary">
                Author of 'The Helper'
              </p>
            </div>
          </div>

          {/* About + Message */}
          <div className="mt-16 prose-serif prose-lg max-w-none text-gray-700 leading-relaxed space-y-8">
            {/* About */}
            <div>
              <h3 className="text-3xl font-bold text-gray-900 border-b-2 border-primary/50 pb-2 mb-4">
                About Uloaku Amaobi
              </h3>
              <p className="mb-4">
                Uloaku Amaobi is an accomplished Sales and Marketing Strategist with over a decade of experience cutting across several Multinationals in the Telecommunication Industry.</p>

<p className="mb-4">With a B. Sc. Degree in Information Science & Library, an MBA and a Doctorate Degree; Uloaku is also a seasoned coach and trainer in sales and marketing strategies in the telecommunication industry who is widely travelled across the globe while providing training. She is also involved with different NGOs that are working hard to include the excluded in the society which include Inner City Mission, Zillionse Academy and Humane Culture Initiative.</p>

<p className="mb-4">Uloaku is a lady full of life and passionate about achieving excellence. Loving the Lord is her thing because without whom her existence will not be. She is interested in life as life is interesting. She is a firm believer that blessed are those who believe because they will eat the fruit of possibility. She comes from a large family and they are knitted together in love. She is a gift to the world.</p>
    </div>

          </div>
        </div>
      </main>
    </div>
  );
}
