
export default function Card(props) {
    return (
      <div className="card">
        <img className="card__icon" src={'./images/' + props.icon} alt="icon" />
        <h6 className="card__title">{props.title}</h6>
        <p className="card__par">
        {props.description}
        </p>
        <button className="btn">Learn More</button>
      </div>
    );
}