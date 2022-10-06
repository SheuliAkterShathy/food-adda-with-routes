import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Meal = ({meal}) => {
    console.log(meal)
    const {strMeal,strMealThumb,strInstructions,idMeal} = meal;
    const navigate=useNavigate();
     const handleNavigate = ()=>{
         navigate(`/meal/${idMeal}`)
     }
    return (
        <div className='border-2 border-purple-200 p-3'>
            <img className='w-[380px] m-auto' src={strMealThumb} alt="" />
            <h3 className='text-3xl'>{strMeal}</h3>
            <p>{strInstructions.slice(0, 80)}...</p>
            <Link to={`/meal/${idMeal}`}>Visit:{idMeal}</Link>
            <button onClick={handleNavigate} className='bg-purple-300 px-2 rounded' >Show Details</button>

        </div>
    );
};

export default Meal;