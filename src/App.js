import "./App.css";
import Head from "./components/Head";
import Body from "./components/Body";
import { Provider } from "react-redux";
import store from "./utils/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";


const appRouter= createBrowserRouter([{
  path:"/",
  element:<Body/>,
  children:[{
    path:"/",
    element:<MainContainer/>

  },
  {
    path:"watch",
    element:<WatchPage/>

  }]

}])



function App() {
  return (

    < Provider store={store}>

  <div >
        <h1 className="text-3xl"></h1>
      <Head/>
      <RouterProvider router={appRouter}/>

  {
    /**
     * Head
     * Body
     * Slidebar
     *   menu items
     * Main Container
     *   Button list
     *   videoConatiner
     *      video card
     *   
     */
  }

  </div>

    </Provider>
    
    
  );
}

export default App;


