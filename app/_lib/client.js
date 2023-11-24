import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: "mokumoku-blog",
  apiKey: process.env.API_KEY,
});
