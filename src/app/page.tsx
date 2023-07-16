'use client'
import Form from "./components/form"
import Header from "./components/header"
import AniMorse from "./components/animorse_code"
import { Button } from "@chakra-ui/react"
import { Tweet } from "./components/twitter_button"

export default function Home() {
  return (
    <>
      <Header />
      <div className="flex flex-col justify-center items-center">
        <AniMorse />
        <Form />
        <Button
          as={Tweet}
          text="マイクテストマイクテスト"
          url="https://calvin-klein-front.vercel.app/" 
          hashtags={["react", "nextjs"]}
          colorScheme="twitter"
          className="mt-3"
        >
          Tweet
        </Button>
      </div>
    </>
  )
}
