import { Routes,Route } from 'react-router';
import Home from './Pages/Home';
import ConnexionForm from './Pages/ConnexionForm';
import InscriptionForm from './Pages/InscriptionForm';
import './App.css';
import UserPage from './Pages/UserPage';
import YourProjectsPages from './Pages/YourProjectsPages';
import Header from './Components/Header';

function App() {
  return (
    <div className="App">
    <Header/>

    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/connexion" element={<ConnexionForm/>}/>
      <Route exact path="/inscription" element={<InscriptionForm/>}/>
      <Route exact path="/userpage/:id" element={<UserPage/>}/>
      <Route exact path="/yourprojectpage/:id" element={<YourProjectsPages/>}/>
    </Routes>
      
    </div>
  );
}

export default App;
