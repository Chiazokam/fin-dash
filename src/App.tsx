import { useStoreSelector } from "./hooks/store"
import { selectCount } from "./store/reducers/counterSlice"

export const App = () => {
  const count = useStoreSelector(selectCount)
  return (
    <div  className="bg-red-300">
      <p className="">Some random text {count}</p>
    </div>
  )
}

export default App
