import classes from "./AvailableMeals.module.css";
import MealItems from "./MealsItem/MealItems";
import Card from "../UI/Card";
const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Chole-Bhature",
    description: "The best breakfast,lunch and dinner",
    price: 140,
  },
  {
    id: "m2",
    name: "Aaalo Paratha",
    description: "Taste never dies",
    price: 90,
  },
  {
    id: "m3",
    name: "Kaathi Roll",
    description: "The best Snacks you would ever eat",
    price: 70,
  },
  {
    id: "m4",
    name: "Samosa",
    description: "Sounds incomplete without Tea",
    price: 10,
  },
  {
    id: "m5",
    name: "Daal-pakwan",
    description: "Healthy, but the you would say ummm...",
    price: 150,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <ul>
      <MealItems
        name={meal.name}
        description={meal.description}
        price={meal.price}
        key={meal.id}
      />
    </ul>
  ));
  return (
    <section className={classes.meals}>
      <Card>{mealsList}</Card>
    </section>
  );
};
export default AvailableMeals;
