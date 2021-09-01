import React from "react";

class App extends React.Component {
  state = {
    isLoading: true,
  };
  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 3000);
  }

  render() {
    const { isLoading } = this.state;
    return (
      <div>
        <h1> {isLoading ? "Loading..." : "WE ARE READY"}</h1>
      </div>
    );
  }
}

export default App;
