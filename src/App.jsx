import Header from "./components/Header"
import Sidebar from "./components/Sidebar"
import Tasks from "./components/Tasks"

function App() {
  return (
    <div className="grid grid-cols-6 min-h-screen">
       <Sidebar/>
       <main className="lg:col-span-3 xl:col-span-5 ">
        <Header/>
        <Tasks/>

       </main>
    </div>
  )
}

export default App
