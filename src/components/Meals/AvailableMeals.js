import React from 'react'
import MealList from './MealList';
import styles from './AvailableMeals.module.css'
import Card from '../UI/Card';
const DUMMY_MEALS = [
    {
        id: 'm1',
        name: 'Sushi',
        description: 'Finest fish and veggies',
        price: 22.99,
    },
    {
        id: 'm2',
        name: 'Schnitzel',
        description: 'A german specialty!',
        price: 16.5,
    },
    {
        id: 'm3',
        name: 'Barbecue Burger',
        description: 'American, raw, meaty',
        price: 12.99,
    },
    {
        id: 'm4',
        name: 'Green Bowl',
        description: 'Healthy...and green...',
        price: 18.99,
    },
];

const AvailableMeals = () => {
    return (
        <section className={styles.meals}>
            <Card >
                <ul >

                    {
                        DUMMY_MEALS.map((meal) => <MealList
                            key={meal.id}
                            data={meal}
                            id={meal.id}
                        />
                        )
                    }
                </ul>
            </Card>
        </section>
    )
}

export default AvailableMeals