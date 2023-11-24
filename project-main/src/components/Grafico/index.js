import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const Grafico = ({dados}) => {
  const data = dados;
  const [userData, setUserData] = useState({
    labels: data.map((data) => data.data),
    datasets: [
      {
        label: "Despesas",
        data: data.map((data) => data.valor),
        backgroundColor: [
          "rgba(75,192,192,1)"
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });
  return (
    <div style={{
      width: '500px'
    }}>
      <Bar data={userData} />
    </div>
  );
};

export default Grafico;
