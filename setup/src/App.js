import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

const allCategories = ["all", ...new Set(items.map((item) => item.category))];
console.log(allCategories);


function App() {
  const [menuItems, setMenuTtems] = useState(items);
  const [categories, setcategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === 'all') {
      setMenuTtems(items);
      return;
    }
    const newItems = items.filter((item) =>
      item.category === category)
    setMenuTtems(newItems)
  };


  return <main>
    <section className='menu'>
      <div className='title'>
        <h2>our menu</h2>
        <div className='underline'></div>
      </div>
      <Categories categories={categories} filterItems={filterItems} />
      <Menu items={menuItems}/>
      </section>
  </main>;
}

export default App;
