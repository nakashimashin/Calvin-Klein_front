import Form from "./components/form"
import Header from "./components/header"

export default function Home() {
  return (
    <>
      <Header />
      <div className="flex flex-col justify-center items-center">
        <div className="text-[32px] md:text-[54px] mt-[60px]">🐶AniMorse code🐱</div>
        <Form />
      </div>
    </>
  )
}
