import "./App.css";
import Head from "./components/Head";
import Body from "./components/Body";
// import { Provider } from "react-redux";
// import store from "./utils/store";
// import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
import CategoryVideos from "./pages/CategoryVideos";
import ChannelDetail from "./pages/ChannelDetail";
import Live from "./pages/Live";
import SearchResult from "./pages/SearchResult";






function App() {

  const theme = useSelector((store) => store.app.theme);
  



  return (
    // <themeContext.Provider value={{ theme, setTheme }}>
    <Router>
      <div className={`${!theme ? "bg-black" : "bg-white"}`}>
        <Head />
        <Routes>
          <Route path="/" element={<Body />}>
            <Route 
            path="/" 
            element={<MainContainer />} />
            <Route path="/watch" element={<WatchPage />} />
            <Route path="/channel/:channelId" element={<ChannelDetail />} />

            <Route path="/category/:q" element={<CategoryVideos />} />
            <Route
              path="/searchResult/:searchQuery"
              element={<SearchResult />}
            />
            <Route path="/live" element={<Live />} />
          </Route>
        </Routes>
      </div>
    </Router>
    // </themeContext.Provider>
  );
}

export default App;


// / const appRouter= createBrowserRouter([{
  //   path:"/",
  //   element:<Body/>,
  //   children:[{
  //     path:"/",
  //     element:<MainContainer/>
  
  //   },
  //   {
  //     path:"watch",
  //     element:<WatchPage/>
  
  //   },
  //   {
  //     path:"/channel/:channelId",
  //     element:<ChannelDetail/>
  //   },
  //   {
  //     path:"/category/:q",
  //     element:<CategoryVideos/>
  //   },
  //   {
  //     path:"/searchResult/:searchQuery",
  //     element:<SearchResult/>
  
  //   },
  //   {
  //     path:"/live",
  //     element :<Live/>
  
  //   },]
  
  // }])


  // return (

  //   < Provider store={store}>

  // <div >
  //       {/* <h1 className="text-3xl"></h1> */}
  //     <Head/>
  //     <RouterProvider router={appRouter}/>

  // {
  //   /**
  //    * Head
  //    * Body
  //    * Slidebar
  //    *   menu items
  //    * Main Container
  //    *   Button list
  //    *   videoConatiner
  //    *      video card
  //    *   
  //    */
  // }

  // </div>

  //   </Provider>
    
    
  // );
  
  