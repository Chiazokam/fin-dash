import { Cards } from "./Cards"
import { Transactions } from "./Transactions"
import { WeeklyActivities } from "./WeeklyActivities"
import { ExpenseStatistics } from "./ExpenseStatistics"

export const Dashboard = () => {
    return (
        <div className="flex flex-col py-6 px-10 w-full gap-6">

            <div className="flex gap-[30px] flex-col lg:flex-row">
                <div className="flex flex-col gap-5">
                    <div className="flex justify-between items-baseline">
                        <h2 className="text-base md:text-h2 font-semibold text-primary">My Cards</h2>
                        <button className="hover:border-b cursor-pointer">
                            <p className="text-primary font-semibold text-sm md:text-[17px]">See All</p>
                        </button>
                    </div>

                    <Cards />
                </div>

                <div className="flex flex-col gap-5">
                    <h2 className="text-base md:text-h2 font-semibold text-primary">Recent Transaction</h2>
                    <Transactions />
                </div>
            </div>

            <div className="flex gap-[30px] flex-col lg:flex-row">
                <div className="flex flex-col gap-5">
                    <h2 className="text-base md:text-h2 font-semibold text-primary">Weekly Activities</h2>
                    <WeeklyActivities />
                </div>
                
                <div className="flex flex-col gap-5">
                    <h2 className="text-base md:text-h2 font-semibold text-primary">Expense Statistics</h2>
                    <ExpenseStatistics />
                </div>

            </div>
            <div>Quick transfer and balance history</div>
        </div>
    )
}
