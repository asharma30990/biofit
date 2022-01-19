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
            <h1>Contact Us</h1>
          </div>
        </div>
        <div>
          <h2>Connect With Our Customer Success Team</h2>
          <p>
            We are here to help you reach your health goals! If you have any
            questions, concerns or wish to provide feedback, please contact us
            with the information below.
          </p>
          <h2>Contacting Support</h2>
          <div>
            <ul>
              <li>
                <p>Phone</p>
                <p>
                  1-866-450-0608 <span>( 7 AM to 9 PM / 7 Days a week )</span>
                </p>
              </li>
              <li>
                <p>Email</p>
                <p>
                  <a href="support@goBiofit.com">support@goBiofit.com</a>
                </p>
              </li>
            </ul>
          </div>
          <p>
            Our team works around the clock to provide the best customer support
            possible. If you contact us by phone or chat, you should get a
            response from a live agent within a few minutes. If you contact us
            by email, expect a response within 24 hours or less.
          </p>
          <p>Thank you.</p>
        </div>
      </div>
    </>
  )
}

export default index
