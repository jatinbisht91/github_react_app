import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Alert from "./components/Alert";
import Home from "./components/Home";
import User from "./components/User"
import { GithubContextProvider } from "./Context/GithubContext/GithubContextProvider";
import { AlertContextProvider } from "./Context/AlertContext/AlertContextProvider";
import About from "./Pages/About";

function App() {
  return (
    <div>
      <GithubContextProvider>
        <AlertContextProvider>
          <Router>
            <div classname="flex flex-col justify-between h-screen">
              <Navbar />
              <main>
                <Routes>
                  <Route
                    path="/"
                    element={
                      <>
                        <Alert />
                        <Home />
                      </>
                    }
                  />
                  <Route path="/about" element={<About/>}/>
                  <Route path="/users/:login" element={<User/>}/>
                </Routes>
              </main>
            </div>
          </Router>
        </AlertContextProvider>
      </GithubContextProvider>
    </div>
  );
}

export default App;
