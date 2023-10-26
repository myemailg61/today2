import Homepage from "./pages/Homepage";
import Dashboard from "./pages/Dashboard";
import Onboarding from "./pages/Onboarding";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  {/*const [cookies, setCookie, removeCookie] = useCookies(['user'])*/ }

  //const authToken = cookies.AuthToken

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage />} />
        {<Route path='/dashboard' element={<Dashboard />} />}
        {<Route path='/onboarding' element={<Onboarding />}

        />}
      </Routes>
    </BrowserRouter>
  )
}

export default App;