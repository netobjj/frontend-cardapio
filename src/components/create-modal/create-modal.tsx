import { useEffect, useState } from "react"
import { useFoodDataMutate } from "../../hooks/useFoodDataMutate"
import type { FoodData } from "../../interface/FoodData"
import './modal.css';

interface InputProps {
    label: string,
    value: string | number,
    updateValue(value: string | number): void
}

interface ModalProps {
    closeModal(): void
}

const Input = ({ label, value, updateValue }: InputProps) => {
    return (
        <>
            <label>{label}</label>
            <input value={value} onChange={(e) => updateValue(e.target.value)} />
        </>
    )
}




export function CreateModal({ closeModal }: ModalProps) {
    const [id, setId] = useState(0); // Initialize id
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");
    const [price, setPrice] = useState(0);

    const { mutate, isSuccess } = useFoodDataMutate();

    const submit = () => {
        const foodData: FoodData = {
            id,
            title,
            description,
            price,
            image
        }

        mutate(foodData);
    }

    useEffect(() => {
        if(!isSuccess) return 
        closeModal()

    }, [isSuccess]);


    return (

        <div className="modal-overlay">
            <div className="modal-body">
                <h2>Cadastre um novo item no cárdapio</h2>
                <form className="input-container" action="">
                    <Input label="title" value={title} updateValue={(e) => setTitle(e.toString())} />
                    <Input label="description" value={description} updateValue={(e) => setDescription(e.toString())} />
                    <Input label="image" value={image} updateValue={(e) => setImage(e.toString())} />
                    <Input label="price" value={price} updateValue={(e) => setPrice(Number(e))} />
                    <button onClick={submit} className="btn-secondary">Enviar</button>
                </form>
            </div>
        </div>
    )
}