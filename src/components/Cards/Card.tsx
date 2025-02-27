import type { CardType } from '../../store/reducers/cardSlice'
import { CardChip, CardProvider } from '../Icons'
import { getExpDate, maskCardNumberDigits, cn } from '../../utils'

interface Props {
    card: CardType
    isDark?: boolean
}

export const Card = ({ card, isDark }: Props) => {
    const { balance, cardHolder, expDate, cardNumber} = card;
    return (
        <div className={cn('flex flex-col gap-8 w-[350px] min-w-[350px] rounded-3xl pt-6 font-[Lato]',
            isDark ? `bg-linear-to-r from-[#5B5A6F] to-[#000000]` : 'bg-white border border-slate-200'
        )}>
            <div className='flex justify-between px-6'>
                <div className='flex flex-col'>
                    <p className={cn('text-xs font-normal opacity-70',
                        isDark ? 'text-white' : 'text-secondary'
                    )}>Balance</p>
                    <p className={cn('text-xl font-semibold',
                        isDark ? 'text-white' : 'text-primary'
                    )}>${Math.floor(balance).toLocaleString()}</p>
                </div>
                <CardChip width={35} height={35} fill={isDark ? 'white' : '#232323'} />
            </div>

            <div className='flex gap-[67px] px-6'>
                <div className='flex flex-col'>
                    <p className={cn('text-xs font-normal opacity-70',
                        isDark ? 'text-white' : 'text-secondary'
                    )}>CARD HOLDER</p>
                    <p className={cn('text-xl font-semibold text-[15px]',
                        isDark ? 'text-white' : 'text-primary'
                    )}>{cardHolder}</p>
                </div>
                <div className='flex flex-col'>
                    <p className={cn('text-xs font-normal opacity-70',
                        isDark ? 'text-white' : 'text-secondary'
                    )}>VALID THRU</p>
                    <p className={cn('text-xl font-semibold text-[15px]',
                        isDark ? 'text-white' : 'text-primary'
                    )}>{getExpDate(expDate)}</p>
                </div>
            </div>

            <div className={cn('w-full flex justify-between bg-linear-to-r from-white/10 to-white/5 py-5 px-6',
                !isDark && 'border-t border-slate-200'
            )}>
                <p className={cn('text-[22px] font-semibold',
                    isDark ? 'text-white' : 'text-primary'
                )}>{maskCardNumberDigits(cardNumber)}</p>
                <CardProvider height={30} width={44} fill={isDark ? 'white' : '#9199AF'}  fillOpacity={0.5} />
            </div>
            
        </div>
    )
}
