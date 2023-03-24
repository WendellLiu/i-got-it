import Head from "next/head";
import { Box } from "@chakra-ui/react";

import TokenInput from "@/components/token-input";

export default function Home() {
  return (
    <>
      <Head>
        <title>I got it</title>
        <meta
          name="description"
          content="chatgpt-based reading comprehension test"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box as="main" padding="8">
        <Box>
          <TokenInput />
        </Box>
      </Box>
    </>
  );
}
