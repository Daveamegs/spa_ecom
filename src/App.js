import { useQuery } from "@apollo/client";
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

  return (
    <div className="App">
      <NavBar />
      <AllItem loading={loading} error={error} data={allCategoryData} />
      <Clothes loading={loading} error={error} data={clothesCategoryData} />
      <Tech loading={loading} error={error} data={techCategoryData} />
    </div>
  );
}

export default App;
