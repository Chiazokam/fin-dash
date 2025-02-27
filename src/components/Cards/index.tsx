import { useEffect } from "react";
import { useStoreSelector, useStoreDispatch } from "../../hooks/useStore"
import { cards, getCards } from '../../store/reducers/cardSlice';
import { Card } from "./Card";

export const Cards = () => {
    const myCards = useStoreSelector(cards);
    const dispatch = useStoreDispatch()

    useEffect(() => {
        dispatch(getCards())
    }, [dispatch])

    return (
        <div className="flex gap-7.5">
            {myCards.slice(0, 2).map((card, index) => <Card key={card.id} card={card} {...(index === 0 && { isDark: true })} />)}
        </div>
    )
}