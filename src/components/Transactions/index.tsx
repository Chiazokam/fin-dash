import { useEffect } from "react";
import { useStoreSelector, useStoreDispatch } from "../../hooks/useStore"
import { transactions, getTransactions} from '../../store/reducers/transactionSlice';
import { Transaction } from "./Transaction"

export const Transactions = () => {
    const allTransactions = useStoreSelector(transactions);
    const dispatch = useStoreDispatch()

    useEffect(() => {
       dispatch(getTransactions())
    }, [dispatch])

    return (
        <div className="lg:w-[350px] h-60 bg-white rounded-3xl p-6 md:p-[25px] overflow-y-auto">
            <div className="flex flex-col gap-4">
                {allTransactions.map((transaction) => <Transaction key={transaction.id} transaction={transaction} />)}
            </div>
        </div>
    )
}
