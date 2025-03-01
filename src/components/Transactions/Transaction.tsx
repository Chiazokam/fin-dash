import { Paypal, Credit, CardDeposit } from "../Icons"
import type { TransactionType } from '../../store/reducers/transactionSlice';
import { getDateText, cn } from "../../utils"; 

// Used this to randomly assign icons to the transactions. In real life, this could come with the transaction data
const TransactionIcons = [Credit, Paypal, CardDeposit]
interface Props {
    transaction: TransactionType
}

export const Transaction = ({ transaction }: Props) => {
    const { transactionTitle, transactionType, createdAt, amount } = transaction;
    const Icon = TransactionIcons[Math.floor(Math.random()*3)]; // Different icons on every render

    return (
        <div className="flex justify-between items-center">
            <div className="flex gap-[17px] items-center">
                
                <Icon />
                <div className="flex flex-col flex-1">
                    <p className="text-sm md:text-base text-black font-medium w-120 md:w-40 truncate">{transactionTitle}</p>
                    <p className="text-secondary text-xs md:text-[15px] font-normal">{getDateText(createdAt)}</p>
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
