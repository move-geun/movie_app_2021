import PropTypes from "prop-types";

const likeFood = [
  {
    id: 0,
    name: "Kimchi",
    image:
      "http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg",
  },
  {
    id: 1,
    name: "돈가스",
    image:
      "https://3.bp.blogspot.com/-hKwIBxIVcQw/WfsewX3fhJI/AAAAAAAAALk/yHxnxFXcfx4ZKSfHS_RQNKjw3bAC03AnACLcBGAs/s400/DSC07624.jpg",
    rating: 3,
  },
];

Food.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  rating: PropTypes.number,
};

function Food({ name, image, rating }) {
  return (
    <div>
      <h2> I like {name}</h2>
      <h4> {rating} / 5.0 </h4>
      <img src={image} alt={name} />
    </div>
  );
}

function App() {
  return (
    <div>
      {likeFood.map((dish) => (
        <Food
          key={dish.id}
          name={dish.name}
          image={dish.image}
          rating={dish.rating}
        />
      ))}
    </div>
  );
}

export default App;
