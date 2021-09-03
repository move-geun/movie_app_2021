import React from "react";
import "./detail.css";

class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (location === undefined) {
      history.push("/");
    }
  }
  render() {
    const { location } = this.props;
    const base = location.state;
    if (location.state) {
      return (
        <div className="movied">
          <img className="movied__poster" src={base.poster} alt={base.title} />
          <div className="movied__data">
            <div className="movied__title">{base.title}</div>
            <div className="movied__year">{base.year}</div>
            <ul className="movied__genres">
              {base.genres.map((genre, index) => (
                <li key={index} className="genres__genre">
                  {genre}
                </li>
              ))}
            </ul>
            <div className="movied__summary">{base.summary}...</div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Detail;
