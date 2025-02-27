import { Paypal } from "../Icons"
import type { TransactionType } from '../../store/reducers/transactionSlice';
import { getTransactionDate, cn } from "../../utils"; 

interface Props {
    transaction: TransactionType
}

export const Transaction = ({ transaction }: Props) => {
    const { transactionTitle, transactionType, createdAt, amount } = transaction;

    return (
        <div className="flex justify-between items-center">
            <div className="flex gap-[17px] items-center">
                
                <Paypal />
                <div className="flex flex-col flex-1">
                    <p className="text-sm md:text-base text-black font-medium w-40 truncate">{transactionTitle}</p>
                    <p className="text-secondary text-xs md:text-[15px] font-normal">{getTransactionDate(createdAt)}</p>
                </div>
            </div>

                <p
                    className={cn("text-[#FF4B4A] text-[11px] md:text-base font-medium",
                        (transactionType === 'withdrawal' || transactionType === 'invoice') ? 'text-red' : 'text-green'
                    )}
                >
                    {(transactionType === 'withdrawal' || transactionType === 'invoice') ? '-' : '+'}
                    ${Math.floor(amount).toLocaleString()}
                </p>
            </div>
    )
}
