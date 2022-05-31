import { useQuery } from "@apollo/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import AllItem from "./components/AllItem";
import Clothes from "./components/Clothes";
import NavBar from "./components/NavBar";
import Tech from "./components/Tech";
import { GET_CATEGORIES } from "./queries/Queries";

function App() {
  const { loading, error, data } = useQuery(GET_CATEGORIES);

  if (loading) return <h2>Loading!!!</h2>;
  if (error) return <h1>Error from GraphQl Endpoint</h1>;

  const allCategoryData = data.categories.filter(
    (category) => category.name === "all"
  );
  const clothesCategoryData = data.categories.filter(
    (category) => category.name === "clothes"
  );
  const techCategoryData = data.categories.filter(
    (category) => category.name === "tech"
  );

  const allCategoryName = allCategoryData.map(({ name }) => name);
  const clothesCategoryName = clothesCategoryData.map(({ name }) => name);
  const techCategoryName = techCategoryData.map(({ name }) => name);

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar
          allCategoryName={allCategoryName}
          clothesCategoryName={clothesCategoryName}
          techCategoryName={techCategoryName}
        />
        <Routes>
          <Route
            path="/"
            element={
              <AllItem loading={loading} error={error} data={allCategoryData} />
            }
          />
          <Route
            path="/clothes"
            element={
              <Clothes
                loading={loading}
                error={error}
                data={clothesCategoryData}
              />
            }
          />
          <Route
            path="/tech"
            element={
              <Tech loading={loading} error={error} data={techCategoryData} />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
