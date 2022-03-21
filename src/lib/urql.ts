import { cacheExchange, createClient, debugExchange, fetchExchange, ssrExchange } from "urql";

const isServerside = typeof window === "undefined";

const ssrCache = ssrExchange({ isClient: !isServerside });

const client = createClient({
    url: "https://api-sa-east-1.graphcms.com/v2/cl0pr4i0f9n3p01w776ju9ea9/master",
    exchanges: [debugExchange,cacheExchange, ssrCache, fetchExchange],

});

export {client, ssrCache};
