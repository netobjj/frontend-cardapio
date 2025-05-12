import { use, useState } from 'react';
import './App.css'
import { Card } from './components/card/card';
import { useFoodData } from './hooks/useFoodData';
import { CreateModal } from './components/create-modal/create-modal';

function App() {
  const {data} = useFoodData();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(prev => !prev);
  }

  return (
    <div className="container">
      <h1>Cardápio</h1>
      <div className="card-grid">
        {data?.map(foodData => 
          foodData.id !== undefined && foodData.price !== undefined ? (
            <Card 
              id={foodData.id} 
              title={foodData.title} 
              description={foodData.description} 
              image={foodData.image} 
              price={foodData.price} 
            />
          ) : null
        )}
      </div>
      
      {isModalOpen && <CreateModal closeModal={handleOpenModal}/>}

      <button className='btn-secondary' onClick={handleOpenModal}>Novo</button>
    </div>
  )
}

export default App
