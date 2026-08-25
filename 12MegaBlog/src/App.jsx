import { useState, useEffect } from 'react'
import './App.css'
import { useDispatch } from 'react-redux';
import authService from './appwrite/auth';
import { login, logout } from './store/authSlice';
import Footer from './components/footer/footer';
import Header from './components/Header/Header';
import { Outlet } from 'react-router-dom';


function App() {
  
  // load the state of the app
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      if (userData) {
        dispatch(login({ userData }));
      } else {
        dispatch(logout());
      }
    }) 
    .finally(() => {
      setLoading(false);
    })
  }, []);

  return !loading? (
    <div className= "min-h-screen flex items-center justify-center bg-pink-100 text-gray-800 text-center text-2xl">
      
      <div className='w-full block'>
        <Header />
        <main>
          <Outlet/>
        </main>
        <Footer />
        

       </div> 
    </div>
  ) : (
    <div className="App">
      <h1>Loading...</h1>
    </div>
  );
}
    
  


export default App
