import { FC } from "react"
import { FaSpinner } from "react-icons/fa"

interface Props {
  designs?: string;
}

const Loading:FC<Props> = ({designs}) => {
  return (
    <div className={`flex justify-center items-center h-full ${designs}` }>
      <FaSpinner className="text-3xl text-blue-500 animate-spin"/>
    </div>
  )
}

export default Loading
