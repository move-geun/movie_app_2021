function Food({ name, image }) {
  return (
    <div>
      <h2> I like {name}</h2>
      <img src={image} alt={name} />
    </div>
  );
}

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
  },
];

function App() {
  return (
    <div>
      {likeFood.map((dish) => (
        <Food key={dish.id} name={dish.name} image={dish.image} />
      ))}
    </div>
  );
}

export default App;
