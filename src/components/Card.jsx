import '../stylesheets/Styles.css';
import '../stylesheets/Card.css';
/*eslint unicode-bom: ["error", "always"]*/

const Card = ({ picture, name, price, description }) => {

    return (
        <div>
            <img className="specialpic" src={picture} alt={name} />
            <div className="cardbody bodywhite">
                <header>
                    <p className="cardtitle textblack">{name}</p>
                    <p className="lead textapricot">{price}</p>
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