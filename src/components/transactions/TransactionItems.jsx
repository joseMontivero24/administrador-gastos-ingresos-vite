import { useGlobalState } from "../../context/GlobalState";

export const TransactionItems = ({transaction}) => {

    const {deleteTransaction} = useGlobalState();


  return (
    <li className="bg-zinc-600 text-white px-3 py-1 rounded-lg mb-2 w-full flex justify-between items-center">
        <p className="text-sm">{transaction.description}</p>

        <div>
            <span>${transaction.amount}</span>
            <button 
            className="bg-red-500 rounded-full w-6 h-6 ml-2 font-medium"
            onClick={() =>{
                deleteTransaction(transaction.id)
            }}>
            X
            </button>
        </div>
       
    </li>
  )
}
