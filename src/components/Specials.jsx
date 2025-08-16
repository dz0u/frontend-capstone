import '../stylesheets/Styles.css'
import Card from './Card'
import greekSalad from '../images/greek salad.jpg';
import bruschetta from '../images/bruchetta.svg';
import lemonDessert from '../images/lemon dessert.jpg';
import '../stylesheets/Specials.css'

const Specials = () => {

    const specials = [
        {
            picture: greekSalad,
            name: "Greek Salad",
            price: "$12.99",
            description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."
        },
        {
            picture: bruschetta,
            name: "Bruschetta",
            price: "$5.99",
            description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil."
        },
        {
            picture: lemonDessert,
            name: "Lemon Dessert",
            price: "$5.00",
            description: "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined."
        }
    ]

    return (
        <>
            <article>
                <h1 style={{ whiteSpace: 'nowrap', width: 'auto' }} className="weeklies displaytitle textblack">This Week's Specials</h1>
                <div className="marquee">
                    {specials.map((special) => {
                        return (
                            <Card className="card" picture={special.picture} name={special.name} price={special.price} description={special.description} />
                        )
                    })}
                </div>
            </article>
        </>
    )
}
export default Specials;