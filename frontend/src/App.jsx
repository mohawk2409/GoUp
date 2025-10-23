import PagePrincipale from "./pages/PagePrincipale.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import CreateProfile from "./pages/CreateProfile.jsx";
import CreerDefi from "./pages/CreerDefi.jsx";
import Tableau from "./pages/Tableau.jsx";
import Profil from "./pages/Profil.jsx";
import Notifications from './pages/Notifications.jsx'
import Activite from './pages/Activite.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NotificationProvider } from "./context/NotificationContext.jsx";

function App() {
  
  return (
    <>
      <NotificationProvider>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage/>}/>
        <Route path="/PagePrincipale" element={<PagePrincipale/>}/>
        <Route path="/CreateProfile" element={<CreateProfile/>}/>
        <Route path="/CreerDefi" element={<CreerDefi/>}/>
        <Route path="/Tableau" element={<Tableau/>}/>
        <Route path="/Notifications" element={<Notifications/>}/>
        <Route path="/Profil" element={<Profil/>}/>
        <Route path="/Activite" element={<Activite/>}/>

      </Routes>
      </BrowserRouter>
      </NotificationProvider>
    </>
  );
}

export default App;