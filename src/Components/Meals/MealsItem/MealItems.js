import classes from "./MealItems.module.css";
const MealItems = (props) => {
  const price = `₹${props.price}`;
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
    </li>
  );
};
export default MealItems;
