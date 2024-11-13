'use client'

import { useState } from 'react'
import { CustomSlider } from "../components/ui/custom-slider"
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"

export default function InvestmentCalculator() {
  const [revenue, setRevenue] = useState(100000)
  const [growth, setGrowth] = useState(20)
  const [stage, setStage] = useState(1)

  const calculateInvestment = () => {
    const baseAmount = 50000
    const revenueMultiplier = revenue / 50000
    const growthMultiplier = growth / 10
    const stageMultiplier = stage / 2

    return Math.round(baseAmount * revenueMultiplier * growthMultiplier * stageMultiplier)
  }

  return (
    <Card className="w-full max-w-md mx-auto bg-green-900/20 border-green-800">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-green-400">Investment Estimator</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-green-100 mb-2">Annual Revenue</label>
          <CustomSlider
            min={0}
            max={1000000}
            step={10000}
            value={[revenue]}
            onValueChange={(value) => setRevenue(value[0])}
            className="w-full"
          />
          <p className="mt-2 text-green-400">${revenue.toLocaleString()}</p>
        </div>
        <div>
          <label className="block text-sm font-medium text-green-100 mb-2">Growth Rate (%)</label>
          <CustomSlider
            min={0}
            max={100}
            step={1}
            value={[growth]}
            onValueChange={(value) => setGrowth(value[0])}
            className="w-full"
          />
          <p className="mt-2 text-green-400">{growth}%</p>
        </div>
        <div>
          <label className="block text-sm font-medium text-green-100 mb-2">Company Stage</label>
          <CustomSlider
            min={1}
            max={5}
            step={1}
            value={[stage]}
            onValueChange={(value) => setStage(value[0])}
            className="w-full"
          />
          <p className="mt-2 text-green-400">Stage {stage}</p>
        </div>
        <div className="mt-6">
          <h3 className="text-xl font-semibold text-green-100 mb-2">Estimated Investment</h3>
          <p className="text-3xl font-bold text-green-400">${calculateInvestment().toLocaleString()}</p>
        </div>
      </CardContent>
    </Card>
  )
}