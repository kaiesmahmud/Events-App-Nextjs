import Circle from '@/components/circle'
import '@/styles/globals.css'
import Script from 'next/script'
export default function App({ Component, pageProps }) {
  return(
  <>
    {/* <Script src="./cursor/cursor.js" defer></Script> */}
    <Component {...pageProps} />
    {/* <Script src="./../../cursor/cursor.js" defer></Script> */}
    
  </>
  )
}
