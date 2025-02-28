import { PieChart } from "./PieChart"

export const ExpenseStatistics = () => {
    return (
        <div className="w-full lg:w-[350px] h-[322px] bg-white rounded-3xl pl-4 md:p-[25px] overflow-y-auto">
            <PieChart />
        </div>
    )
}