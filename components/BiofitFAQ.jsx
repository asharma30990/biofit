// // /* This example requires Tailwind CSS v2.0+ */
// // import { Disclosure } from '@headlessui/react'
// // import { ChevronDownIcon } from '@heroicons/react/outline'

// // const faqs = [
// //   {
// //     question: "What's the best thing about Switzerland?",
// //     answer:
// //       "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
// //   },
// //   {
// //     question: "What's the best thing about Switzerland?",
// //     answer:
// //       "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
// //   },
// //   {
// //     question: "What's the best thing about Switzerland?",
// //     answer:
// //       "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
// //   },
// //   {
// //     question: "What's the best thing about Switzerland?",
// //     answer:
// //       "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
// //   },
// //   {
// //     question: "What's the best thing about Switzerland?",
// //     answer:
// //       "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
// //   },
// //   {
// //     question: "What's the best thing about Switzerland?",
// //     answer:
// //       "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
// //   },
// //   // More questions...
// // ]

// // function classNames(...classes) {
// //   return classes.filter(Boolean).join(' ')
// // }

// // export default function BiofitFAQ() {
// //   return (
// //     <div className="bg-purple-800">
// //       <div className="px-4 py-12 mx-auto max-w-7xl sm:py-16 sm:px-6 lg:px-8">
// //         <div className="max-w-3xl mx-auto divide-y-2 divide-none">
// //           <h2 className="pb-8 text-3xl font-extrabold text-center text-white sm:text-4xl">
// //             Frequently asked questions
// //           </h2>
// //           <dl className="mt-6 space-y-6 divide-y divide-black divide-opacity-20">
// //             {faqs.map((faq) => (
// //               <Disclosure as="div" key={faq.question} className="pt-6">
// //                 {({ open }) => (
// //                   <>
// //                     <dt className="text-lg">
// //                       <Disclosure.Button className="flex items-start justify-between w-full text-left text-white">
// //                         <span className="font-medium text-white">
// //                           {faq.question}
// //                         </span>
// //                         <span className="flex items-center ml-6 h-7">
// //                           <ChevronDownIcon
// //                             className={classNames(
// //                               open ? '-rotate-180' : 'rotate-0',
// //                               'h-6 w-6 transform'
// //                             )}
// //                             aria-hidden="true"
// //                           />
// //                         </span>
// //                       </Disclosure.Button>
// //                     </dt>
// //                     <Disclosure.Panel as="dd" className="pr-12 mt-2">
// //                       <p className="text-base text-white">{faq.answer}</p>
// //                     </Disclosure.Panel>
// //                   </>
// //                 )}
// //               </Disclosure>
// //             ))}
// //           </dl>
// //         </div>
// //       </div>
// //     </div>
// //   )
// // }

// /* This example requires Tailwind CSS v2.0+ */
// import { Disclosure } from '@headlessui/react'
// import { ChevronDownIcon } from '@heroicons/react/outline'

// const faqs = [
//   {
//     question: "What's the best thing about Switzerland?",
//     answer:
//       "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
//   },
//   {
//     question: "What's the best thing about Switzerland?",
//     answer:
//       "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
//   },
//   {
//     question: "What's the best thing about Switzerland?",
//     answer:
//       "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
//   },
//   {
//     question: "What's the best thing about Switzerland?",
//     answer:
//       "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
//   },
//   {
//     question: "What's the best thing about Switzerland?",
//     answer:
//       "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
//   },
//   {
//     question: "What's the best thing about Switzerland?",
//     answer:
//       "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
//   },
// ]

// function classNames(...classes) {
//   return classes.filter(Boolean).join(' ')
// }

// export default function Example() {
//   return (
//     <div className="bg-gray-100">
//       <div className="px-4 py-12 mx-auto max-w-7xl sm:py-16 sm:px-6 lg:px-8">
//         <div className="mx-auto divide-y-2 divide-gray-200 max-w-7xl">
//           <h2 className="pb-8 text-3xl font-bold tracking-normal text-center text-gray-900 sm:text-4xl">
//             Frequently asked questions
//           </h2>
//           <dl className="mt-6 space-y-6 divide-y divide-gray-200">
//             {faqs.map((faq) => (
//               <Disclosure as="div" key={faq.question} className="pt-6">
//                 {({ open }) => (
//                   <>
//                     <dt className="text-lg">
//                       <Disclosure.Button className="flex items-start justify-between w-full text-left text-gray-400">
//                         <span className="font-medium text-gray-900">
//                           {faq.question}
//                         </span>
//                         <span className="flex items-center ml-6 h-7">
//                           <ChevronDownIcon
//                             className={classNames(
//                               open ? '-rotate-180' : 'rotate-0',
//                               'h-6 w-6 transform'
//                             )}
//                             aria-hidden="true"
//                           />
//                         </span>
//                       </Disclosure.Button>
//                     </dt>
//                     <Disclosure.Panel as="dd" className="pr-12 mt-2">
//                       <p className="text-base text-gray-500">{faq.answer}</p>
//                     </Disclosure.Panel>
//                   </>
//                 )}
//               </Disclosure>
//             ))}
//           </dl>
//         </div>
//       </div>
//     </div>
//   )
// }

/* This example requires Tailwind CSS v2.0+ */
const faqs = [
  {
    question: 'How do you make holy water?',
    answer:
      'You boil the hell out of it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.',
  },
  {
    question: 'How do you make holy water?',
    answer:
      'You boil the hell out of it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.',
  },
  {
    question: 'How do you make holy water?',
    answer:
      'You boil the hell out of it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.',
  },
  {
    question: 'How do you make holy water?',
    answer:
      'You boil the hell out of it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.',
  },
  {
    question: 'How do you make holy water?',
    answer:
      'You boil the hell out of it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.',
  },
  {
    question: 'How do you make holy water?',
    answer:
      'You boil the hell out of it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.',
  },
  // More questions...
]

export default function Example() {
  return (
    <div className="bg-white">
      <div className="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:py-20 lg:px-8">
        <div className="lg:grid lg:grid-cols-3 lg:gap-8">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900">
              Frequently asked questions
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Can’t find the answer you’re looking for? Reach out to our{' '}
              <a
                href="#"
                className="font-medium text-purple-800 hover:text-purple-700"
              >
                customer support
              </a>{' '}
              team.
            </p>
          </div>
          <div className="mt-12 lg:mt-0 lg:col-span-2">
            <dl className="space-y-12">
              {faqs.map((faq) => (
                <div key={faq.question}>
                  <dt className="text-lg font-medium leading-6 text-gray-900">
                    {faq.question}
                  </dt>
                  <dd className="mt-2 text-base text-gray-500">{faq.answer}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  )
}
