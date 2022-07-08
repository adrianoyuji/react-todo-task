import Header from "app/layout/Header";
import AboutPage from "features/about/AboutPage";
import NotFoundPage from "features/notFound/NotFoundPage";
import ChoresPage from "features/chores/ChoresPage";
import { Route, Routes } from "react-router-dom";
import HomePage from "features/home/HomePage";
import ChorePage from "features/chores/ChorePage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/chores">
          <Route index element={<ChoresPage />} />
          <Route path=":choreId/*" element={<ChorePage />} />
        </Route>
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
