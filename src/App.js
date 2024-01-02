import Form from './components/form/form'
import './App.css';
import { useState } from 'react';

import ShowData from './components/showData/showData';

function App() {
  const [formData, setFormData] = useState([]);

  const addGoalHandler = (uName, uAge) => {
    setFormData(prevGoals => {
      const updatedGoals = [...prevGoals];
      updatedGoals.unshift({ name: uName, age:uAge, id: Math.random().toString() });
      return updatedGoals;
    });
    console.log(uName,uAge);
  };



  return (
   <div>
   <section className='container'>
    <Form createUser={addGoalHandler}/>
   </section>
    
   <section id="goals">
        <ShowData users={formData} />
      </section>
   </div>
  );
}

export default App;
