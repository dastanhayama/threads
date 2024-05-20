import Bottombar from "./components/Bottombar"
import Navbar from "./components/Navbar"

function App() {

  return (
    <div className="pb-8 relative w-full flex justify-center">
      <Navbar />
      <main className="h-[100vh] pt-24 pb-12 w-full max-w-[640px] bg-blue-200 px-2">
        <div className="w-full">Hello world</div>
      </main>
      <Bottombar />
    </div>
  )
}

export default App
