import { useState } from 'react'
import { Disclosure, RadioGroup, Tab } from '@headlessui/react'
import { StarIcon } from '@heroicons/react/solid'
import { HeartIcon, MinusSmIcon, PlusSmIcon } from '@heroicons/react/outline'

const product = {
  name: 'FAQ',
  images: [
    {
      id: 1,
      name: 'Angled view',
      src: '/images/free.jpeg',
      alt: 'Angled front view with bag zipped and handles upright.',
    },
  ],
  colors: [
    {
      name: 'Washed Black',
      bgColor: 'bg-gray-700',
      selectedColor: 'ring-gray-700',
    },
    { name: 'White', bgColor: 'bg-white', selectedColor: 'ring-gray-400' },
    {
      name: 'Washed Gray',
      bgColor: 'bg-gray-500',
      selectedColor: 'ring-gray-500',
    },
  ],
  description: `
    <p>Our products come with a 180 Days, 100% Money Back Guarantee. That means if you change your mind about your decision at any point in the next two months – all you need to do is email us and return your order.</p>
  `,
  details: [
    {
      name: 'Who has created the BioFit weight loss supplement?',
      items: [
        'BioFit probiotic have been manufactured and released by Chrissie Miller, the owner of the company behind this supplement i.e. Nature’s Formulas. She is an expert in nutritional supplements herself and, according to the company, she carries enough expertise in this area.',
      ],
    },
    {
      name: 'How safe Is This Supplement?',
      items: [
        'BioFit probiotic supplement is proven to be safe. It’s created in an FDA-approved and GMP-certified facility, with each of its products created following the highest quality standards. All the ingredients used in the supplement are 100% all-natural and safe for human use. The formula has gone through 3rd-party facility testing and confirmed to be pure and of high quality. However, before you take the supplement, consult with your healthcare provider to know if it’s fit for you.',
      ],
    },
    {
      name: 'How Often will Users Need to Order BioFit Probiotic?',
      items: [
        'You’re advised to take one capsule of the BioFit probiotic supplement a day. It would be best to take it with an 8oz water glass to enhance absorption and increase the digestion speed. However, the actual number of BioFit you can take a day depends on the issue you’re addressing. If dealing with biohm imbalances and digestive problems, you will need to take a BioFit every day, which equates to thirty BioFit a month. And since a bottle contains 30 vegetarian tablets, you will need one bottle throughout the month. If you’re addressing several cases of digestive disturbances and extreme levels of body fat, you will need to consume two tablets a day. That equates to 60 tablets or two bottles of vegetarian bottles a month.',
      ],
    },

    {
      name: 'I Have Used The Tablets For Two Months and Still No Results; What Can One Do?',
      items: [
        'The supplement is proven to work, but just like every other supplement, it doesn’t work for everyone. Sure, it might have worked for a friend, but it may not work for you. BioFit probiotic supplement manufacturer understands this and does provide a 90-day money-back guarantee to cater for such unavoidable situations.',
      ],
    },
    {
      name: 'Can I Take Biofit With My Current Presciption?',
      items: [
        'While our product’s individual ingredients have been extensively reviewed by experts, we do recommend you consult your primary physician as they will know what’s best for your individual case.',
      ],
    },
    {
      name: 'How Long Will It Take For My Order To Reach Me?',
      items: [
        'All orders are shipped within 24 hours (Monday-Friday), and should reach you within 5-7 business days.',
      ],
    },
  ],
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const [selectedColor, setSelectedColor] = useState(product.colors[0])

  return (
    <div className="bg-white " id="faq">
      <div className="max-w-2xl px-4 pt-16 pb-16 mx-auto sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start">
          {/* Product info */}
          <div className="order-2 px-4 mt-10 sm:px-0 sm:mt-16 lg:mt-0 lg:order-1">
            <h1 className="text-3xl font-bold tracking-normal text-gray-900">
              {product.name}
            </h1>

            <div className="mt-6">
              <h3 className="sr-only">Description</h3>

              <div
                className="space-y-6 text-base text-gray-700"
                dangerouslySetInnerHTML={{ __html: product.description }}
              />
            </div>

            <section aria-labelledby="details-heading" className="mt-8">
              <h2 id="details-heading" className="sr-only">
                Additional details
              </h2>

              <div className="border-t divide-y divide-gray-200">
                {product.details.map((detail) => (
                  <Disclosure as="div" key={detail.name}>
                    {({ open }) => (
                      <>
                        <h3>
                          <Disclosure.Button className="relative flex items-center justify-between w-full py-4 text-left group">
                            <span
                              className={classNames(
                                open ? 'text-purple-700' : 'text-gray-900',
                                'text-sm font-medium'
                              )}
                            >
                              {detail.name}
                            </span>
                            <span className="flex items-center ml-6">
                              {open ? (
                                <MinusSmIcon
                                  className="block w-6 h-6 text-purple-700 group-hover:text-indigo-500"
                                  aria-hidden="true"
                                />
                              ) : (
                                <PlusSmIcon
                                  className="block w-6 h-6 text-gray-400 group-hover:text-gray-500"
                                  aria-hidden="true"
                                />
                              )}
                            </span>
                          </Disclosure.Button>
                        </h3>
                        <Disclosure.Panel
                          as="div"
                          className="pb-6 prose-sm prose"
                        >
                          <ul role="list">
                            {detail.items.map((item) => (
                              <li key={item}>{item}</li>
                            ))}
                          </ul>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                ))}
              </div>
            </section>
          </div>

          {/* Image gallery */}
          <img
            className="order-1 px-10 pt-8 lg:pt-0 lg:pr-0 lg:order-2"
            src="/images/b4after.jpeg"
            alt=""
          />
        </div>
      </div>
    </div>
  )
}
