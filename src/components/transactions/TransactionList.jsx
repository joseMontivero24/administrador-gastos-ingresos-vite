import {useGlobalState} from "../../context/GlobalState"
import { TransactionItems } from "./TransactionItems";

export const TransactionList = () => {

    const {transactions} = useGlobalState();


  return (
    <>
        <h3 className="text-slate-300 text-2xl font-bold w-full pb-3 text-center">Historial</h3>
        <ul>
            {
                transactions.map((transaction) =>(
                <TransactionItems transaction={transaction} key={transaction.id} />
                ))
            }
        </ul>
     
    </>
  )
}
