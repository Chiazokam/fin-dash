import { Cards } from "./Cards"

export const Dashboard = () => {
    return (
        <div className="flex flex-col py-6 px-10">

            <div className="flex gap-[30px] flex-col md:flex-row">
                <div className="flex flex-col gap-5">
                    <div className="flex justify-between">
                        <h2 className="text-h2 font-semibold text-primary">My Cards</h2>
                        <button className="hover:border-b cursor-pointer">
                            <p className="text-primary font-semibold">See All</p>
                        </button>
                    </div>
                    <div className="w-[730px] overflow-x-auto ">
                        <Cards />
                    </div>
                </div>

                <div className="flex flex-col gap-5">
                    <h2 className="text-h2 font-semibold text-primary">Recent Transaction</h2>
                </div>
                <div></div>
            </div>

            <div>Weekly Activities and Expense Statistics</div>
            <div>Quick transfer and balance history</div>
        </div>
    )
}
