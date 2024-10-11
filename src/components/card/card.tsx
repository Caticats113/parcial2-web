import { Data } from '../types'
import { useNavigate} from "react-router-dom"

export function Card(item: Data) {
    
const navigate = useNavigate()

    const handleClick = () => {
        navigate(`/more/${item.item.name}`)
    }
    
    return (
        <>
            <section className='card'>
                <h4>{item.item.name}</h4>
                <label>density</label><input type='range' value={item.item.density * 10}></input><label>{item.item.density}</label>
                <button onClick={handleClick}>See more</button>
            </section >
        </>
    )
}