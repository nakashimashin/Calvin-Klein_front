import Form from "./components/form"
import Header from "./components/header"
import AniMorse from "./components/animorse_code"

export default function Home() {
  return (
    <>
      <Header />
      <div className="flex flex-col justify-center items-center">
        <AniMorse />
        <Form />
      </div>
    </>
  )
}
