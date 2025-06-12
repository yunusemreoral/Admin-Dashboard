"use client";

import { Line } from "react-chartjs-2";
import "chart.js/auto";

import { FC } from "react"
import { ChartData } from "@/types"

interface Props {
    data: ChartData;
}

const LineGraph:FC<Props> = ({data}) => {
  return (
    <div className="size-full">
      <Line data={data} className="size-full" />
    </div>
  )
}

export default LineGraph
