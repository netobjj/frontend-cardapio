import './card.css';

interface CardProps {
    id: number,
    title: string,
    description: string,
    image: string,
    price: number,
}

export function Card({id, title, description, image, price } : CardProps) {
    return (
        <div className="card">
            <input hidden type="number" value={id} />
            <img src={image} alt="" />
            <h2 className='title'>{title}</h2>
            <p className="description">{description}</p>
            <p><b>Valor: <span className='price'>{price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span></b></p>
            
        </div>
    )
}