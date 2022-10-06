import React from 'react';
import { useLoaderData,useNavigate } from 'react-router-dom';

const MealDetails = () => {
    const mainMeal = useLoaderData()
    const meal=mainMeal.meals[0]
    console.log(meal)
    const {strMeal,strMealThumb,strInstructions,strArea
    }=meal;
    const navigate = useNavigate()
    const handleNavigate = () =>{
       navigate(`/blog/`)
    }
    return (
        <div className='md:flex justify-center mt-16 border-2 mx-6'>
            
            <img className='w-[280px] py-3 m-auto' src={strMealThumb} alt="" />
         
            <div>
            <h3 className='text-3xl font-semibold'>Name:{strMeal}</h3>
            <p className='text-2xl mt-4'>Food Menue:{strArea}</p>
            <p><small className='w-[70%] m-auto mr-4 mt-4'>{strInstructions.slice(0, 120)}...</small></p>
            <button onClick={handleNavigate} className='bg-purple-300 px-3 py-2 mt-4'>Go to route</button>
            </div>
        </div>
    );
};

export default MealDetails;