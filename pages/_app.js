import App from 'next/app'
import Layout from '../components/Layout2'
import '../styles/globals.css'
import '../styles/globals.css'


class MyApp extends App {
    render() {

      const { Component, pageProps, router } = this.props
      return (
          <>
           
                <Component {...pageProps}></Component>
            
        </>
      )
      }
    }
  
  export default MyApp


