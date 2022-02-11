import Link from 'next/link'

import { useState } from 'react'
import { CheckIcon, StarIcon } from '@heroicons/react/solid'
import { RadioGroup } from '@headlessui/react'
import { ShieldCheckIcon } from '@heroicons/react/outline'

const product = {
  name: 'Select Your Discounted Package',
  href: '#',
  price: '',
  description:
    'EVERY BIOFIT PURCHASE INCLUDES THREE BONUS PRODUCTS, INCLUDING TWO E-BOOKS, AND ACCESS TO AN ONLINE PLATFORM.',
  imageSrc: '/images/product-single.png',
  imageAlt: '',
  sizes: [
    {
      name: '6 Bottles @ $39/each',
      description: 'Best Value! You save $660!',
      imageSrc: '/images/product-six.png',
      payment:
        'https://ssl.clickbank.net/order/orderform.html?time=1643472096&vvvv=62696f66697473757070&cbskin=32234&cbexit=2127&cbfid=48638&cbf=PGK4UQRRP9&cbitems=1-BF6-234&vvar=cbitems%3D1-BF6-234%26cbskin%3D32234%26cbfid%3D48638%26cbexit%3D2127%26utm_source%3Dclickbank%26utm_medium%3Daffiliate%26utm_term%3Daffiliate-traffic%26utm_content%3Daffid-hop-%26utm_campaign%3Dfront-end%26hop%3Daarti404%26vendor%3Dbiofitsupp&oaref=01.C73D02447E71A26D2415565EBF694E7662C9CBA80FC364652BF1EBC31A12387B0DF0797B&corid=e8ee7472-74f3-41e2-a852-99416121f691',
    },
    {
      name: '3 Bottles @ $49/each',
      description: 'Good value. You save $300!',
      imageSrc: '/images/product-three.png',
      payment:
        'https://ssl.clickbank.net/order/orderform.html?time=1643472369&vvvv=62696f66697473757070&cbskin=32235&cbexit=2127&cbfid=48637&cbf=PGK4UQFQP9&cbitems=1-BF3-147&vvar=cbitems%3D1-BF3-147%26cbskin%3D32235%26cbfid%3D48637%26cbexit%3D2127%26utm_source%3Dclickbank%26utm_medium%3Daffiliate%26utm_term%3Daffiliate-traffic%26utm_content%3Daffid-hop-%26utm_campaign%3Dfront-end%26hop%3Daarti404%26vendor%3Dbiofitsupp&oaref=01.C73D02447E71A26D2415565EBF694E7662C9CBA80FC364652BF1EBC31A12387B0DF0797B&corid=2b7c82a5-258a-477b-b47d-ea205d45a892',
    },
    {
      name: '1 Bottle @ $68.99',
      description: '$59 + $9.99 Shipping',
      imageSrc: '/images/product-single.png',
      payment:
        'https://ssl.clickbank.net/order/orderform.html?time=1643472429&vvvv=62696f66697473757070&cbskin=32236&cbexit=2127&cbfid=48636&cbf=PGK4UQJQP9&cbitems=1-BF1-059&vvar=cbitems%3D1-BF1-059%26cbskin%3D32236%26cbfid%3D48636%26cbexit%3D2127%26utm_source%3Dclickbank%26utm_medium%3Daffiliate%26utm_term%3Daffiliate-traffic%26utm_content%3Daffid-hop-%26utm_campaign%3Dfront-end%26hop%3Daarti404%26vendor%3Dbiofitsupp&oaref=01.C73D02447E71A26D2415565EBF694E7662C9CBA80FC364652BF1EBC31A12387B0DF0797B&corid=d38e9cc7-9309-42a8-8920-c30cdd7148e1',
    },
  ],
}

const reviews = { average: 4.5, totalCount: 1624 }

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Biofit() {
  const [selectedSize, setSelectedSize] = useState(product.sizes[0])

  return (
    <div className="bg-white " id="buy-now">
      <div className="max-w-2xl px-4 py-16 mx-auto sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-x-8">
        {/* Product details */}
        <div className="lg:max-w-lg lg:self-end">
          <div className="mt-4">
            <h1 className="text-3xl font-bold tracking-normal text-gray-900 sm:text-4xl">{product.name}</h1>
          </div>

          <section aria-labelledby="information-heading" className="mt-4">
            <h2 id="information-heading" className="sr-only">
              Product information
            </h2>

            <div className="flex items-center">
              <p className="text-lg text-gray-900 sm:text-xl">{product.price}</p>

              <div className="pl-4 ml-4 border-l border-gray-300">
                <h2 className="sr-only">Reviews</h2>
                <div className="flex items-center">
                  <div>
                    <div className="flex items-center">
                      {[0, 1, 2, 3, 4].map((rating) => (
                        <StarIcon
                          key={rating}
                          className={classNames(
                            reviews.average > rating ? 'text-yellow-400' : 'text-gray-300',
                            'h-5 w-5 flex-shrink-0'
                          )}
                          aria-hidden="true"
                        />
                      ))}
                    </div>
                    <p className="sr-only">{reviews.average} out of 5 stars</p>
                  </div>
                  <p className="ml-2 text-sm text-gray-500">{reviews.totalCount} reviews</p>
                </div>
              </div>
            </div>

            <div className="mt-4 space-y-6">
              <p className="text-base text-gray-500">{product.description}</p>
            </div>

            <div className="flex items-center mt-6">
              <CheckIcon className="flex-shrink-0 w-5 h-5 text-red-500" aria-hidden="true" />
              <p className="ml-2 text-lg text-red-500 ">Attention! Get special 95% off Today + Free Shipping!</p>
            </div>
          </section>
        </div>

        {/* Product image */}
        <div className="mt-10 lg:mt-0 lg:col-start-2 lg:row-span-2 lg:self-center">
          <div className="overflow-hidden rounded-lg aspect-w-1 aspect-h-1">
            <img
              src={selectedSize.imageSrc}
              alt={product.imageAlt}
              className="object-cover object-center w-full h-full"
            />
          </div>
        </div>

        {/* Product form */}
        <div className="mt-10 lg:max-w-lg lg:col-start-1 lg:row-start-2 lg:self-start">
          <section aria-labelledby="options-heading">
            <h2 id="options-heading" className="sr-only">
              Product options
            </h2>

            <div className="sm:flex sm:justify-between">
              {/* Size selector */}
              <RadioGroup value={selectedSize} onChange={setSelectedSize}>
                <RadioGroup.Label className="block pb-3 font-medium text-gray-700 text-md">Size</RadioGroup.Label>
                {/* <div className="grid grid-cols-1 gap-4 mt-1 sm:grid-cols-2"> */}
                <div className="flex flex-wrap justify-between w-full gap-y-4">
                  {product.sizes.map((size) => (
                    <RadioGroup.Option
                      as="div"
                      key={size.name}
                      value={size}
                      className={({ active }) =>
                        classNames(
                          active ? 'ring-2 ring-purple-500' : '',
                          'relative block border border-gray-300 rounded-lg p-4 cursor-pointer focus:outline-none w-full sm:w-[48.5%] text-center'
                        )
                      }
                    >
                      {({ active, checked }) => (
                        <>
                          <RadioGroup.Label as="p" className="text-base font-medium text-gray-900">
                            {size.name}
                          </RadioGroup.Label>
                          <RadioGroup.Description as="p" className="mt-1 text-sm text-gray-500">
                            {size.description}
                          </RadioGroup.Description>
                          <div
                            className={classNames(
                              active ? 'border' : 'border-2',
                              checked ? 'border-purple-500' : 'border-transparent',
                              'absolute -inset-px rounded-lg pointer-events-none'
                            )}
                            aria-hidden="true"
                          />
                        </>
                      )}
                    </RadioGroup.Option>
                  ))}
                </div>
              </RadioGroup>
            </div>

            <div className="mt-10">
              <Link href={selectedSize.payment}>
                <a className="flex items-center justify-center w-full px-8 py-3 text-base font-medium text-white bg-purple-600 border border-transparent rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-purple-500 animate-bounce">
                  Buy Now
                </a>
              </Link>
            </div>
            <div className="mt-6 text-center">
              <a className="inline-flex text-base font-medium group">
                <ShieldCheckIcon
                  className="flex-shrink-0 w-6 h-6 mr-2 text-gray-400 group-hover:text-gray-500"
                  aria-hidden="true"
                />
                <span className="text-gray-500 hover:text-gray-700">180 Days Moneyback Guarantee</span>
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
