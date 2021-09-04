import Button from "./Button";

function App() {
  return (
    <div className="container">
      <Button>Default</Button>
      <Button color="primary" variant="outline">
        Default
      </Button>
      <Button color="primary" variant="text">
        Default
      </Button>
      <Button color="danger">Defaut</Button>
      <Button disabled variant="text">
        Default
      </Button>
      <Button color="secondary">Secondary</Button>
      <Button startIcon="shopping_cart" color="primary">
        Default
      </Button>
    </div>
  );
}

export default App;
