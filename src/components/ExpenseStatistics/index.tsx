import { PieChart } from "./PieChart"

export const ExpenseStatistics = () => {
    return (
        <div className="w-full lg:w-[350px] lg:h-[322px] bg-white rounded-3xl p-6 md:p-[25px] overflow-y-auto flex justify-center">
            <PieChart />
        </div>
    )
}