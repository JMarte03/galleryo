import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./views/HomeView";
import NavKeywordPage from "./views/NavKeywordView";
import UserKeywordPage from "./views/UserKeywordView";
import PhotoView from "./views/PhotoView";


function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/illustrations" element={<NavKeywordPage keyword={'illustrations'} />} />
        <Route path="/animations" element={<NavKeywordPage keyword={'animations'} />} />
        <Route path="/nature" element={<NavKeywordPage keyword={'nature'} />} />
        <Route path="/architecture" element={<NavKeywordPage keyword={'architecture'} />} />
        <Route path="/people" element={<NavKeywordPage keyword={'people'} />} />
        <Route path="/places" element={<NavKeywordPage keyword={'places'} />} />
        <Route path="/food" element={<NavKeywordPage keyword={'food'} />} />
        <Route path="/holidays" element={<NavKeywordPage keyword={'holidays'} />} />
        <Route path="/search/:keyword" element={<UserKeywordPage />} />
        <Route path="/photos/:id" element={<PhotoView />} />
      </Route>
    )
  )

  return (
    <div className="p-10">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
