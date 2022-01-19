import Link from 'next/link'

const index = () => {
  return (
    <>
      <div className="mx-auto prose px-[5%] max-w-7xl pt-12 leading-5 text-xl">
        <Link href="/biofit">
          <a>Back</a>
        </Link>
      </div>

      <div className="mx-auto prose px-[5%] max-w-7xl py-12 leading-5">
        <div>
          <div>
            <h1>General Disclaimer</h1>
            <h2>Date Effective: January, 2020</h2>
          </div>
        </div>
        <div>
          <p>
            This product has not been evaluated by the FDA. This product is not
            intended to diagnose, treat, cure or prevent any disease.
          </p>
          <p>
            Your use of the site and the purchase of our product is subject to
            our Terms of Service, Privacy Policy and Medical Disclaimer.
          </p>
          <p>
            All content sold or provided by goBiofit.com and its related
            companies are strictly for informational purposes only. While all
            attempts have been made to verify the accuracy of information
            provided on our website and within the publications, neither the
            authors nor the publishers are responsible for assuming liability
            for possible inaccuracies.
          </p>
          <p>
            The authors and publishers disclaim any responsibility for the
            inaccuracy of the content, including but not limited to errors or
            omissions. Loss of property, injury to self or others, and even
            death could occur as a direct or indirect consequence of the use and
            application of any content found herein.
          </p>
        </div>
      </div>
    </>
  )
}

export default index
