import { useState } from "react"

import type { MeasurementSystem } from "../types"

export const useMetricSystem = () => {
  const [selectSystem, setSelectSystem] = useState<MeasurementSystem>("metric")

  return { selectSystem, setSelectSystem }
}
