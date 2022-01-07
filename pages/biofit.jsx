import Biofit from '../components/Biofit'
import BiofitReviews from '../components/BiofitReviews'

export default function Index() {
  return (
    <>
      <div className="relative pt-16 pb-16 overflow-hidden bg-white">
        <div className="relative">
          <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
            <div className="max-w-xl px-4 mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
              <div>
                <div>
                  <h1 className="text-5xl font-bold tracking-normal text-purple-800">
                    BioFit™ Official
                  </h1>
                </div>
                <div className="mt-6">
                  <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                    LOOSE WEIGHT FEELS GREAT
                  </h2>
                  <p className="mt-4 text-lg text-gray-500">
                    After all my requirements were 100% met, we finally had the
                    final product I called it BioFit.
                  </p>
                  <div className="mt-6">
                    <a
                      href="#"
                      className="inline-flex px-4 py-2 text-base font-medium text-white bg-purple-800 border border-transparent rounded-md shadow-sm hover:bg-indigo-700"
                    >
                      Buy Now
                    </a>
                  </div>
                </div>
              </div>
              <div className="pt-6 mt-8 border-t border-gray-200">
                <blockquote>
                  <div>
                    <p className="text-base text-gray-500">
                      &ldquo;I've lost 72 pounds since I started using BioFit
                      regularly and I feel unbelievable! I cannot believe how
                      easy and effortless it has been. Thank you!&rdquo;
                    </p>
                  </div>
                  <footer className="mt-3">
                    <div className="flex items-center space-x-3">
                      <div className="text-base font-medium text-gray-700">
                        Marcia Hill, Columbus, OH
                      </div>
                    </div>
                  </footer>
                </blockquote>
              </div>
            </div>
            <div className="mt-12 sm:mt-16 lg:mt-0">
              <div className="pl-4 -mr-48 sm:pl-6 md:ml-48 lg:px-0 lg:m-0 lg:relative lg:h-full">
                <img
                  className="w-full sm:w-3/5 md:w-3/5 rounded-xl lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                  src="/images/product-three.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-12 bg-purple-800 sm:pt-16">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Trusted by health experts from over 80 planets
            </h2>
            <p className="mt-3 text-xl text-gray-200 sm:mt-4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Repellendus repellat laudantium.
            </p>
          </div>
        </div>
        <div className="pb-12 mt-10 bg-white sm:pb-16">
          <div className="relative">
            <div className="absolute inset-0 bg-purple-800 h-1/2" />
            <div className="relative px-8 mx-auto max-w-7xl sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto">
                <dl className="bg-white rounded-lg shadow-lg sm:grid sm:grid-cols-3">
                  <div className="flex flex-col p-6 text-center border-b border-gray-100 sm:border-0 sm:border-r">
                    <dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-500">
                      100% Payment
                    </dt>
                    <dd className="order-1 text-3xl font-bold text-purple-800">
                      Secured
                    </dd>
                  </div>
                  <div className="flex flex-col p-6 text-center border-t border-b border-gray-100 sm:border-0 sm:border-l sm:border-r">
                    <dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-500">
                      24 hours / 7 days
                    </dt>
                    <dd className="order-1 text-3xl font-bold text-purple-800">
                      Support
                    </dd>
                  </div>
                  <div className="flex flex-col p-6 text-center border-t border-gray-100 sm:border-0 sm:border-l">
                    <dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-500">
                      100% Natural
                    </dt>
                    <dd className="order-1 text-3xl font-bold text-purple-800">
                      Ingredients
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Biofit />

      <BiofitReviews />
    </>
  )
}
