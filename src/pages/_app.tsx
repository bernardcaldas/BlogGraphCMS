import {  Provider } from "urql"
import { client, ssrChache } from "../lib/urql"

function MyApp({ Component, pageProps }) {
  
  if(pageProps.urqlState) {
    ssrChache.restoreData(pageProps.urqlState)
  }

  return 
  <Provider value={client}>
    <Component {...pageProps} />
  </Provider>
  
}

export default MyApp
