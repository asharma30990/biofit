import { FaTwitter, FaLinkedinIn, FaInstagram, FaDiscord } from 'react-icons/fa'

import Biofit from '../components/Biofit'
import BiofitReviews from '../components/BiofitReviews'
import BiofitFAQ from '../components/BiofitFAQ'
import BiofitIngredients from '../components/BiofitIngredients'

export default function Index() {
  return (
    <>
      <div className="container relative z-0 flex flex-col items-center justify-between gap-4 px-8 py-6 mx-auto max-w-7xl sm:flex-row">
        <div className="flex gap-4 sm:gap-8 sm:text-base">
          <div>Home</div>
          <div>About</div>
          <div>Roadmap</div>
          <div>Team</div>
          <div>FAQs</div>
        </div>

        <div className="flex gap-2">
          <FaTwitter className="w-8 h-8 p-1 text-purple-800 border-2 border-purple-800 rounded-full" />
          <FaLinkedinIn className="w-8 h-8 p-1 text-purple-800 border-2 border-purple-800 rounded-full" />
          <FaInstagram className="w-8 h-8 p-1 text-purple-800 border-2 border-purple-800 rounded-full" />
        </div>
      </div>

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
                    <dt className="order-2 mt-2 font-medium leading-6 text-gray-500 text-md md:text-lg">
                      100% Payment
                    </dt>
                    <dd className="order-1 text-2xl font-bold text-purple-800 md:text-3xl">
                      Secured
                    </dd>
                  </div>
                  <div className="flex flex-col p-6 text-center border-t border-b border-gray-100 sm:border-0 sm:border-l sm:border-r">
                    <dt className="order-2 mt-2 font-medium leading-6 text-gray-500 text-md md:text-lg">
                      24 hours / 7 days
                    </dt>
                    <dd className="order-1 text-2xl font-bold text-purple-800 md:text-3xl">
                      Support
                    </dd>
                  </div>
                  <div className="flex flex-col p-6 text-center border-t border-gray-100 sm:border-0 sm:border-l">
                    <dt className="order-2 mt-2 font-medium leading-6 text-gray-500 text-md md:text-lg">
                      100% Natural
                    </dt>
                    <dd className="order-1 text-2xl font-bold text-purple-800 md:text-3xl">
                      Ingredients
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="bg-whitw overflow-hidden">
        <div class="relative max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <svg
            class="absolute top-0 left-full transform -translate-x-1/2 -translate-y-3/4 lg:left-auto lg:right-full lg:translate-x-2/3 lg:translate-y-1/4"
            width="404"
            height="784"
            fill="none"
            viewBox="0 0 404 784"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="8b1b5f72-e944-4457-af67-0c6d15a99f38"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x="0"
                  y="0"
                  width="4"
                  height="4"
                  class="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width="404"
              height="784"
              fill="url(#8b1b5f72-e944-4457-af67-0c6d15a99f38)"
            />
          </svg>

          <div class="relative lg:grid lg:grid-cols-3 lg:gap-x-8">
            <div class="lg:col-span-1">
              <h2 class="text-3xl font-bold tracking-normal text-gray-900 sm:text-4xl">
                Time to boost your immunity.
              </h2>
            </div>
            <dl class="mt-10 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-8 sm:gap-y-10 lg:mt-0 lg:col-span-2">
              <div>
                <dt>
                  <div class="flex items-center justify-center h-12 w-12 rounded-md bg-purple-800 text-white">
                    <svg
                      class="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                      />
                    </svg>
                  </div>
                  <p class="mt-5 text-lg leading-6 font-medium text-gray-900">
                    INCREASED ENERGY
                  </p>
                </dt>
                <dd class="mt-2 text-base text-gray-500">
                  An imbalanced gut flora is known to cause slow digestion,
                  which can reduce energy levels in the body. Restoring healthy
                  digestion and balancing your gut biome is known to increase
                  energy levels and may provide you sustainable focus,
                  productivity, and energy all day long . Biofit also helps
                  speed up your metabolism as well, which may further boost
                  energy levels.
                </dd>
              </div>

              <div>
                <dt>
                  <div class="flex items-center justify-center h-12 w-12 rounded-md bg-purple-800 text-white">
                    <svg
                      class="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                      />
                    </svg>
                  </div>
                  <p class="mt-5 text-lg leading-6 font-medium text-gray-900">
                    IMPROVED DIGESTION
                  </p>
                </dt>
                <dd class="mt-2 text-base text-gray-500">
                  The bacteria in your gut are responsible for your digestion.
                  An imbalance in your gut flora can cause poor digestion that
                  may cause indigestion, diarrhea, constipation, and bloating.
                  Biofit helps restore healthy digestion to relieve these
                  symptoms, to boost your metabolism, and to improve your
                  overall health & wellness.
                </dd>
              </div>

              <div>
                <dt>
                  <div class="flex items-center justify-center h-12 w-12 rounded-md bg-purple-800 text-white">
                    <svg
                      class="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <p class="mt-5 text-lg leading-6 font-medium text-gray-900">
                    BETTER IMMUNITY
                  </p>
                </dt>
                <dd class="mt-2 text-base text-gray-500">
                  Believe it or not, much of your immune system is found in your
                  digestive tract. Your gut flora makes up around 75% of your
                  immune system, which is why poor digestive health can lead to
                  a weak immune system, frequent illness, and poor general
                  health. Biofit helps restore a healthy gut flora and boost
                  your immunity so your body remains strong.
                </dd>
              </div>

              <div>
                <dt>
                  <div class="flex items-center justify-center h-12 w-12 rounded-md bg-purple-800 text-white">
                    <svg
                      class="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <p class="mt-5 text-lg leading-6 font-medium text-gray-900">
                    Lose Weight
                  </p>
                </dt>
                <dd class="mt-2 text-base text-gray-500">
                  While biofit isn’t your typical weight loss supplement, the
                  science behind it is fairly straight forward. Various studies
                  have shown that a poor gut flora can significantly impact
                  digestion And reduce your body’s metabolic function. This is
                  turn can lead to weight gain, high blood pressure, diabetes,
                  and a number of other health issues & to fight off illness.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

      <Biofit />

      <BiofitReviews />

      <BiofitIngredients />

      <BiofitFAQ />

      <div className="bg-purple-800">
        <div className="relative z-0 container max-w-screen-xl px-5 md:px-[5%] mx-auto py-6 flex flex-col items-center text-center text-white">
          <div className="text-2xl font-black">BIOFIT OFFICIAL</div>
          <p className="max-w-xs pt-4 text-xs">
            Is not just a token, but an entire ecosystem designed to unite the
            crypto community.
          </p>
          <div className="flex gap-2 pt-4">
            <FaTwitter className="w-8 h-8 p-1 border-2 border-white rounded-full" />
            <FaLinkedinIn className="w-8 h-8 p-1 border-2 border-white rounded-full" />
            <FaInstagram className="w-8 h-8 p-1 border-2 border-white rounded-full" />
          </div>
          <div className="w-full h-px mt-12 bg-white bg-opacity-25" />
          <p className="max-w-xs pt-4 text-xs">
            Copyright © 2022 BIOFIT OFFICIAL
          </p>
        </div>
      </div>
    </>
  )
}
