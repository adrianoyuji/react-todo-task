import Header from "app/layout/Header";
import AboutPage from "features/about/AboutPage";
import NotFoundPage from "features/notFound/NotFoundPage";
import TodoPage from "features/todo/TodoPage";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<TodoPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
