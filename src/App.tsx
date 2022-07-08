import Header from "app/layout/Header";
import AboutPage from "features/about/AboutPage";
import NotFoundPage from "features/notFound/NotFoundPage";
import ChorePage from "features/chores/ChorePage";
import { Route, Routes } from "react-router-dom";
import HomePage from "features/home/HomePage";
import ChoreDetails from "features/chores/ChoreDetails";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/chores">
          <Route index element={<ChorePage />} />
          <Route path=":choreId/*" element={<ChoreDetails />} />
        </Route>
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
