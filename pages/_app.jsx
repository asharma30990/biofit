import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <div className="select-none font-montserrat">
        <Component {...pageProps} />
      </div>
    </>
  )
}

export default MyApp
