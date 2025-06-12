"use client";

import { Doughnut } from "react-chartjs-2";
import "chart.js/auto";

import { FC } from "react"
import { ChartData } from "@/types";

interface Props {
    data: ChartData;
}

const DoughnutGraph:FC<Props> = ({data}) => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <Doughnut data={data} className="!w-full !h-full max-w-[400px] max-h-[400px]" />
    </div>
  )
}

export default DoughnutGraph
