import '../stylesheets/Styles.css';
import '../stylesheets/Card.css';

const Card = ({ picture, name, price, description }) => {

    return (
        <div>
            <img src={picture} alt={name} />
            <div className="cardbody bodywhite">
                <header>
                    <h1 className="cardtitle textblack">{name}</h1>
                    <h2 className="lead textapricot">{price}</h2>
                </header>
                <article className="paragraph textgreen">{description}</article>
                <footer>
                    <p className="cardtitle textblack">Order a Delivery ☛</p>
                </footer>
            </div>
        </div>
    )
}
export default Card;