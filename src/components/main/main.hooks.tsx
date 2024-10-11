import { Card } from "../export"
import { Data } from "../types";

export function addCards(data:Data[]) {
    console.log("hook ",data);
    
    const cardList = data.data.map((element: Data) => {

        return <Card item={element} />
    })

    return cardList
}