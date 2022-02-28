import Link from 'next/link'
import Head from 'next/head'

import Biofit from '../components/Biofit'
import BiofitReviews from '../components/BiofitReviews'
import BiofitFAQ from '../components/BiofitFAQ'
import BiofitIngredients from '../components/BiofitIngredients'
import { useEffect, useState } from 'react'
import Countdown from 'react-countdown'

export default function Index() {
  const [banner, setBanner] = useState(true)

  const closeBanner = () => {
    setBanner(false)
  }

  // useEffect(() => {
  //   let timerInterval = setInterval(() => {
  //     setTimer((time) => {
  //       return time - 1
  //     })
  //   }, 1000)

  //   return () => {
  //     clearInterval(timerInterval)
  //   }
  // }, [])

  const renderer = ({ hours, minutes, seconds }) => {
    return (
      <span>
        {hours} hour {minutes} mins {seconds} secs
      </span>
    )
  }

  return (
    <>
      <Head>
        <title>Biofit™ ® - Official Website - Best Weight Loss Supplement - Buy Now</title>

        <meta
          name="description"
          content="
          Biofit ®Official USA Website By Chrissie Miller - Biofit – No #1 Weight Loss Supplement. Trusted By 10M+ Highly Satisfied Users. No Side Effects.100% Safe & Secure. FDA Approved. Get BioFit Weight Loss Supplement Special Offer Up To 95% Off Today + Free Shipping. Buy 1 - $59/Bottle. Buy 3 - $49/Bottle. Buy 6 - $39/Bottle. Get Biofit Today. Order Now. Secure Payments. Free Shipping Available. Fully 100% Natural Ingredients.
          "
        />
      </Head>
      <div
        onClick={closeBanner}
        className={`fixed top-0 left-0 z-10 flex items-center justify-center w-screen h-screen bg-black bg-opacity-50 ${
          banner ? 'fixed' : 'hidden'
        }`}
      >
        <img className="w-full max-w-xl p-4" src="/images/181347271_110733504465503_6255730761619840438_n.jpeg" alt="" />
      </div>

      <div className="bg-purple-800">
        <div className="container relative z-0 flex flex-col items-center justify-between gap-8 px-8 py-6 mx-auto text-white max-w-7xl sm:flex-row">
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:gap-8 sm:text-base">
            <div className="cursor-pointer">
              <img href="#home" className="h-10 p-2 px-4 bg-white rounded-md " src="/images/logo.jpeg" alt="" />
            </div>
            <div className="flex items-center gap-4 sm:gap-8 sm:text-base">
              <div className="cursor-pointer">
                <a href="#about">About</a>
              </div>
              <div className="cursor-pointer">
                <a href="#benifits">Benifits</a>
              </div>
              <div className="cursor-pointer">
                <a href="#reviews">Reviews</a>
              </div>
              <div className="cursor-pointer">
                <a href="#faq">FAQ</a>
              </div>
            </div>
          </div>

          <div className="flex gap-2">
            <button className="p-2 px-5 font-bold tracking-wide text-purple-700 bg-white rounded-lg animate-bounce">
              <a href="#buy-now">BUY NOW</a>
            </button>
          </div>
        </div>
      </div>

      <div className="relative pt-16 pb-16 overflow-hidden bg-white" id="home">
        <div className="relative">
          <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
            <div className="max-w-xl px-4 mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
              <div>
                <div>
                  <h1 className="text-4xl font-bold tracking-normal text-purple-800 sm:text-5xl">BioFit™ ®Official Website</h1>
                </div>
                <div className="mt-6">
                  <h2 className="text-3xl font-bold tracking-tight text-gray-900">LOSE WEIGHT FEELS GREAT</h2>
                  <p className="mt-4 text-lg text-gray-500">
                    After all my requirements were 100% met, We finally had the final product I called it BioFit.
                    Biofit - No #1 Weight Loss Supplement, GMP Certified, 100% - Fully Natural, Manufactured in USA, Approved By FDA.
                  </p>
                  <div className="w-full mt-6 sm:w-2/3">
                    {/* <a
                      href="#"
                      className="inline-flex px-4 py-2 text-base font-medium text-white bg-purple-800 border border-transparent rounded-md shadow-sm hover:bg-indigo-700"
                    >
                      Buy Now
                    </a> */}

                    <img src="/images/info.jpeg" alt="" />
                  </div>
                </div>
              </div>
              <div className="pt-6 mt-8 border-t border-gray-200">
                <blockquote>
                  <div>
                    <p className="flex items-center gap-4 text-base text-gray-500">
                      Customer Rating 4.8
                      <span className="flex text-yellow-500">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-5 h-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-5 h-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-5 h-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-5 h-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-5 h-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </span>
                    </p>
                  </div>
                  <footer className="mt-3">
                    <div className="flex items-center space-x-3">
                      <div className="text-xl font-medium text-blue-500 animate-pulse">
                        Attention! Get Special 95% off Today + Free Shipping.
                        You can only buy it from the ®Official Website.
                      </div>
                    </div>
                  </footer>
                </blockquote>
              </div>
            </div>
            <div className="relative mt-12 sm:mt-16 lg:mt-0">
              <div
                className={`absolute shadow-lg z-10 p-4 text-white font-bold -translate-x-1/2 bg-blue-500 left-1/2 w-fit -bottom-10 flex-col justify-center items-center text-center rounded-xl ${
                  banner ? 'hidden' : 'flex'
                }`}
              >
                Hurry Up! The offer expires in&nbsp;
                <Countdown
                  className={`${banner ? 'hidden' : 'flex'}`}
                  date={Date.now() + 120 * 60 * 1000}
                  renderer={renderer}
                />
              </div>

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

      <div className="pt-12 bg-purple-800 sm:pt-16" id="about">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center mx-auto text-center">
            {/* <div className="hidden w-full md:w-2/3">
              <div className="w-full mb-12 aspect-w-16 aspect-h-9 ">
                <ReactPlayer
                  height="100%"
                  width="100%"
                  url="https://www.youtube.com/watch?v=R69W331T434"
                />
              </div>
            </div> */}

            <div className="w-full md:w-2/3">
              <div className="w-full mb-12 overflow-hidden rounded-3xl">
                <img src="/images/free-bonus.jpeg" alt="" />
              </div>
            </div>

            <h2 className="max-w-4xl text-3xl font-bold tracking-normal text-white sm:text-4xl">
              What is Biofit Supplement?
            </h2>
            <p className="mt-6 text-xl text-gray-200 ">
              BioFit is an all-natural supplement that is known to enhance and balance good bacteria in the gut area. To
              lose weight, you need to have a balanced hormones and body processes. Many times, people struggle with
              weight loss because their gut health has issues.
              <br /> <br />
              Your gut health is important, especially when it comes to digestion and boosting immune system. If it
              becomes unhealthy or start leaking, you will definitely struggle to lose weight. It doesn’t matter how
              much you work out or diet, you will struggle with fitness levels if your gut is not healthy.
              <br /> <br />
              Your gut health relies on the good bacteria to boost metabolism, stabilize the immune system, balance
              hormones, and stabilize your mood. This means, when it is not in order, many body processes will be
              greatly affected.
              <br />
              <br />
              <div className="flex justify-center w-full mt-4 mb-2 animate-bounce">
                <Link href="https://hop.clickbank.net/?affiliate=aarti404&vendor=biofitsupp&tid=ARTI500">
                  <div className="p-2 px-5 text-black bg-white rounded-2xl w-fit cursor-pointer">
                    <a>Attention! Watch this video to know more.</a>
                  </div>
                </Link>
              </div>
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
                    <dd className="order-1 text-2xl font-bold text-purple-800 md:text-3xl">Secured</dd>
                  </div>
                  <div className="flex flex-col p-6 text-center border-t border-b border-gray-100 sm:border-0 sm:border-l sm:border-r">
                    <dt className="order-2 mt-2 font-medium leading-6 text-gray-500 text-md md:text-lg">
                      24 hours / 7 days
                    </dt>
                    <dd className="order-1 text-2xl font-bold text-purple-800 md:text-3xl">Support</dd>
                  </div>
                  <div className="flex flex-col p-6 text-center border-t border-gray-100 sm:border-0 sm:border-l">
                    <dt className="order-2 mt-2 font-medium leading-6 text-gray-500 text-md md:text-lg">
                      100% Natural
                    </dt>
                    <dd className="order-1 text-2xl font-bold text-purple-800 md:text-3xl">Ingredients</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="overflow-hidden bg-white" id="benifits">
        <div className="relative px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <svg
            className="absolute top-0 transform -translate-x-1/2 left-full -translate-y-3/4 lg:left-auto lg:right-full lg:translate-x-2/3 lg:translate-y-1/4"
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
                <rect x="0" y="0" width="4" height="4" className="text-gray-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="404" height="784" fill="url(#8b1b5f72-e944-4457-af67-0c6d15a99f38)" />
          </svg>

          <div className="relative lg:grid lg:grid-cols-3 lg:gap-x-8">
            <div className="lg:col-span-1">
              <h2 className="text-3xl font-bold tracking-normal text-gray-900 sm:text-4xl">
                Time to boost your immunity with Biofit™ Supplement.
              </h2>
            </div>
            <dl className="mt-10 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-8 sm:gap-y-10 lg:mt-0 lg:col-span-2">
              <div>
                <dt>
                  <div className="flex items-center justify-center w-12 h-12 text-white bg-purple-800 rounded-md">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 11l7-7 7 7M5 19l7-7 7 7"
                      />
                    </svg>
                  </div>
                  <p className="mt-5 text-lg font-medium leading-6 text-gray-900">INCREASED ENERGY</p>
                </dt>
                <dd className="mt-2 text-base text-gray-500">
                  An imbalanced gut flora is known to cause slow digestion, which can reduce energy levels in the body.
                  Restoring healthy digestion and balancing your gut biome is known to increase energy levels and may
                  provide you sustainable focus, productivity, and energy all day long . Biofit also helps speed up your
                  metabolism as well, which may further boost energy levels.
                </dd>
              </div>

              <div>
                <dt>
                  <div className="flex items-center justify-center w-12 h-12 text-white bg-purple-800 rounded-md">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                      />
                    </svg>
                  </div>
                  <p className="mt-5 text-lg font-medium leading-6 text-gray-900">IMPROVED DIGESTION</p>
                </dt>
                <dd className="mt-2 text-base text-gray-500">
                  The bacteria in your gut are responsible for your digestion. An imbalance in your gut flora can cause
                  poor digestion that may cause indigestion, diarrhea, constipation, and bloating. Biofit helps restore
                  healthy digestion to relieve these symptoms, to boost your metabolism, and to improve your overall
                  health & wellness.
                </dd>
              </div>

              <div>
                <dt>
                  <div className="flex items-center justify-center w-12 h-12 text-white bg-purple-800 rounded-md">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                  </div>
                  <p className="mt-5 text-lg font-medium leading-6 text-gray-900">BETTER IMMUNITY</p>
                </dt>
                <dd className="mt-2 text-base text-gray-500">
                  Believe it or not, much of your immune system is found in your digestive tract. Your gut flora makes
                  up around 75% of your immune system, which is why poor digestive health can lead to a weak immune
                  system, frequent illness, and poor general health. Biofit helps restore a healthy gut flora and boost
                  your immunity so your body remains strong.
                </dd>
              </div>

              <div>
                <dt>
                  <div className="flex items-center justify-center w-12 h-12 text-white bg-purple-800 rounded-md">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"
                      />
                    </svg>
                  </div>
                  <p className="mt-5 text-lg font-medium leading-6 text-gray-900">LOSE WEIGHT</p>
                </dt>
                <dd className="mt-2 text-base text-gray-500">
                  While biofit isn’t your typical weight loss supplement, the science behind it is fairly straight
                  forward. Various studies have shown that a poor gut flora can significantly impact digestion And
                  reduce your body’s metabolic function. This is turn can lead to weight gain, high blood pressure,
                  diabetes, and a number of other health issues & to fight off illness.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

      <Biofit />

      <BiofitIngredients />

      <BiofitReviews />

      <BiofitFAQ />

      <div className="flex justify-center pt-10">
        <img className="w-full max-w-screen-md" src="/images/BIO3.jpg" alt="" />
      </div>

      <div className="bg-purple-800">
        <div className="relative z-0 container max-w-screen-xl px-5 md:px-[5%] mx-auto py-6 flex flex-col items-center text-center text-white">
          <div className="flex flex-col items-center justify-center gap-2 pt-4 text-sm text-center max-w-7xl">
            <img className="w-full m-4 bg-white rounded-md" src="/images/clickbank.png" alt="" />

            <p>*DISCLAIMER: The Content on this website landing page is provided for informational purposes only, the content is not intended in any
                way as a substitute for professional advice. Always seek the advice of your physician or other qualified health care provider. Individual
                results may vary.</p>
                            
            <Link href="/biofit-2022/privacy-policy">
              <a>Privacy Policy</a>
            </Link>

            <Link href="/biofit-2022/terms-of-service">
              <a>Terms of Service</a>
            </Link>

            <Link href="/biofit-2022/disclaimer">
              <a>Disclaimer</a>
            </Link>

            <Link href="/biofit-2022/returns-and-refunds">
              <a>Return & Refunds</a>
            </Link>

            <Link href="/biofit-2022/contact">
              <a>Contact</a>
            </Link>
          </div>

          <div className="flex gap-2 pt-8">
            <button className="p-2 px-5 font-bold tracking-wide text-purple-700 bg-white rounded-lg animate-bounce">
              <a href="#buy-now">BUY NOW</a>
            </button>
          </div>

          <img href="#home" className="h-12 p-2 px-4 mt-4 bg-white rounded-md" src="/images/payments.jpeg" alt="" />

          <img href="#home" className="h-24 mt-4 bg-white rounded-md" src="/images/moneyback.jpeg" alt="" />

          <div className="w-full h-px mt-12 bg-white bg-opacity-25" />
          <p className="max-w-xs pt-4 text-xs">Copyright © 2022 Biofit™ ®Official Website</p>
        </div>
      </div>
    </>
  )
}
