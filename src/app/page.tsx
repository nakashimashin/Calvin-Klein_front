import Form from "./components/form"
// import Log from "./components/log"
export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="text-[32px] md:text-[54px] mt-[50px]">🐶AniMorse code🐱</div>
      <Form />
      {/* <Log /> */}
    </div>
  )
}
