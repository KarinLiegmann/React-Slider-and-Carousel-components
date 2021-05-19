import './Card.css'

const Card = () => {
    return (
        <div className="card">
            <div className="card-content">
                <h2 className="card-title">Animated Card</h2>
                <p className="card-body">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt</p>
                <p className="card-credit">Photo by <a href="https://unsplash.com/@filipp_roman_photography?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" rel="noreferrer noopener" target="_blank">Filipp Romanovski</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" rel="noreferrer noopener" target="_blank">Unsplash</a></p>
                <a href="#" className="button">Learn More</a>
            </div>
        </div>
    )
}

export default Card
