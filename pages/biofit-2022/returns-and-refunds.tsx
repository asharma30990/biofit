import Link from 'next/link'

const index = () => {
  return (
    <>
      <div className="mx-auto prose px-[5%] max-w-7xl pt-12 leading-5 text-xl">
        <Link href="/biofit-2022">
          <a>Back</a>
        </Link>
      </div>

      <div className="mx-auto prose px-[5%] max-w-7xl py-12 leading-5">
        <div>
          <div>
            <h1>Refund Policy</h1>
            <h2>Date Effective: January, 2020</h2>
          </div>
        </div>
        <div>
          <h2>Order Now With Confidence With Our 100% Money Back Guarantee.</h2>
          <p>
            Try out the for a full 180 days and if you aren't satisfied, we’ll gladly refund all your money, no
            questions asked. There’s absolutely no risk in giving it a try.{' '}
          </p>
          <p>
            We’ve spent years developing . We strive to create the highest quality products available and to provide the
            best customer experience in the industry. Which is why we offer a 180 day, 100% money back guarantee.
          </p>
          <h2>Here’s How It Works:</h2>
          <p>
            If for any reason you're dissatisfied at any time during the first 180 days after purchase, simply call or
            email us to request a refund and you'll get all your money back. There is no risk to try the product, if you
            don’t like it, you’ll just have to notify us and send any unused bottles to:
          </p>
          <p>Biofit 19655 E 35th Dr #100, Aurora, CO 80011, USA </p>

          <p>There is zero risk for you to try Biofit. That’s how confident we are that you’ll get amazing results.</p>
          <h2>Contacting Support</h2>
          <div>
            <ul>
              <li>
                <p>Phone</p>
                <p>
                  1-866-450-0608 <span>(7AM to 9PM /7 Days a week)</span>
                </p>
              </li>

              <li>
                <p>Self Service</p>
                <p>
                  <a href="https://www.clkbank.com/#!/">https://www.clkbank.com/#!/&gt;</a>
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
          <h2>Refund Processing Time</h2>
          <p>
            Once we process your refund, you’ll receive an email showing that it’s complete. Please note, it can take
            some time for it to show up on your credit card statement depending on your bank or credit card company.
          </p>
          <div>
            <ul>
              <li>
                <p>
                  <b>Paid By / Refund To</b>
                </p>
                <p>
                  <b>Bank Process Time</b>
                </p>
              </li>
              <li>
                <p>Credit Card</p>
                <p>5-7 Business Days</p>
              </li>
              <li>
                <p>Debit Card</p>
                <p>5-10 Business Days</p>
              </li>
            </ul>
          </div>
          <h2>Improving Customer Experience</h2>
          <p>
            Finally, to help us continually improve and provide the best customer service possible, we ask that you let
            us know why you returned the product. You may also include an recommendations or suggestion to help us
            improve the experience for others. This is totally optional and isn’t required to get your refunds. We want
            satisfied customers and appreciate and welcome your feedback.
          </p>
          <p> Thank you.</p>
        </div>
      </div>
    </>
  )
}

export default index
