import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Meal from '../Meal/Meal';

const Restaurent = () => {
    const mainMeals=useLoaderData()
    const meals=mainMeals.meals;
    return (
        <div>
            <h3>restaurent here !{meals.length}</h3>
          <div className='grid md:grid-cols-3 gap-4 text-center justify-center mx-2'>
          {
                meals.map(meal=><Meal
                key={meal.idMeal}
                meal={meal}
                ></Meal>)
            }
          </div>
        </div>
    );
};

export default Restaurent;