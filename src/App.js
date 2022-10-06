import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layout/Main';
import Home from './components/Home/Home';
import Restaurent from './components/Restaurent/Restaurent';
import Blog from './components/Blog/Blog';
import MealDetails from './components/MealDetails/MealDetails';

function App() {
  const router =createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children:[
        {path:'/',element:<Home></Home>},
        {path:'/home',element:<Home></Home>},
        {path:'/restaurent',
        loader: async ()=>{
          return fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=a')
        },
        element:<Restaurent></Restaurent>},
        {
          path:'/meal/:idMeal',
          loader:async ({params})=>{
            return fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.idMeal}`)
          },
          element:<MealDetails></MealDetails>
         },
        {path:'/blog',element:<Blog></Blog>},
        {path:'*',element:<div>This is not found.404</div>}
      ]
    }
  ])
  return (
    <div className="App">
     <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
