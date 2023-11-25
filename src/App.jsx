

import { GlobalProvider } from "./context/GlobalState"
import { Balance } from "./components/Balance"
import { TransactionForm } from "./components/transactions/TransactionForm"
import { TransactionList } from "./components/transactions/TransactionList"
import { IncomeExpenses } from "./components/IncomeExpenses"
import { ExpenceChart } from "./components/ExpenceChart"

export const App = () => {
 

 
  return (
    <GlobalProvider>
      <div className="bg-zinc-950 text-white h-screen flex justify-center items-center">
        <div className="container mx-auto w-3/6">
          <div className="bg-zinc-800 p-10 rounded-lg flex gap-x-2">
            <div>
              <h1 className="text-4xl font-bold">Rastreador de gastos</h1>
              <IncomeExpenses/>
              <Balance/>
              <TransactionForm/>
              
            </div>
            
            <div className="flex flex-col flex-1">
              <ExpenceChart/>
              <TransactionList/>
            </div>
          </div>
        </div>
      </div>
    
    </GlobalProvider>
  )
}

