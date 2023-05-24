import { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

const allCategories = ['all', ...new Set(items.map((item) => item.category))];

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItemsHandler = (category) => {
    if (category === 'all') {
      setMenuItems(items);
      return;
    }

    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <main className='section menu'>
      <div className='title'>
        <h2>our menu</h2>
        <div className='underline'></div>
      </div>
      <Categories
        filterItems={filterItemsHandler}
        allCategories={categories}
      />
      <Menu items={menuItems} />
    </main>
  );
}

export default App;
