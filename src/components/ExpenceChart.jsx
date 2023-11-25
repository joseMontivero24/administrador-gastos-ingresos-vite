import {VictoryPie, VictoryLabel} from "victory";
import { useGlobalState } from "../context/GlobalState";


export const ExpenceChart = () => {
  const {transactions} = useGlobalState();


  const totalIcome = transactions.filter(transaction => transaction.amount > 0)
                                .reduce((acc, transaction) => (acc += transaction.amount), 0);

  const totalExpence = transactions.filter(transaction => transaction.amount < 0)
                                    .reduce((acc, transaction) => (acc += transaction.amount), 0) * -1;

  const totalExpensesPercentage = Math.round((totalExpence / totalIcome) * 100);
  const totalIcomePercentage = 100 - totalExpensesPercentage;

  return (
    <VictoryPie
      colorScale={["#e74c3c", "#2ecc71"]}
      data={[
        { x: "Gastos", y: totalExpensesPercentage },
        { x: "Ingresos", y: totalIcomePercentage },
      ]}
      animate={{duration: 200}}
      labels={({datum}) => `${datum.y}%`}
      labelComponent={
        <VictoryLabel
        angle={45}
        style={{
          fill: "white",
        }}
        />
      }
    />

  )
}
