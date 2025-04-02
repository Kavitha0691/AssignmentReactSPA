import React, { useState } from "react";
import { categories } from './data/data';
import Header from './components/Header';
import CategoryPage from './components/Category';
import Navigation from './components/NavigationLinks';
import Home from './Pages/Home';
import styles from './components/NavigationLinks/navigation.module.css';
import Footer from "./components/Footer";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const handleHomePageSelect = () => {
    setSelectedCategory(null);
  };

  return (
    <div className="category">
      <Header title={selectedCategory || "Adventure Land"} />

      <div className={styles.navigation}>
        <Navigation
          categories={categories}
          onCategorySelect={handleCategorySelect}
          onHomeClick={handleHomePageSelect} />
      </div>

      {selectedCategory ? (
        <CategoryPage category={selectedCategory} />
      ) : (
        <Home />
      )}
      <Footer />
    </div>

  );

}
export default App;



