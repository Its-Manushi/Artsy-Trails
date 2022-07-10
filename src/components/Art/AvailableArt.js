import Card from "../UI/Card";
import classes from "./AvailableArt.module.css";
import ArtItem from "./ArtItem/ArtItem";

const DUMMY_ART = [
  {
    id: "m1",
    name: "Wall Art",
    description: "The essence of your home!",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Coffee Mugs",
    description: "Pour yourself a good Coffee!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Magnets",
    description: "Decorate with something pretty!",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Clocks",
    description: "Have a great Time..!",
    price: 18.99,
  },
];

const AvailableArt = () => {
  const artList = DUMMY_ART.map((art) => (
    <ArtItem
      id={art.id}
      key={art.id}
      name={art.name}
      description={art.description}
      price={art.price}
    />
  ));
  return (
    <section className={classes.art}>
      <Card>
        <ul>{artList}</ul>
      </Card>
    </section>
  );
};

export default AvailableArt;
