import React from 'react'
import Lottie, { LottieComponentProps } from 'lottie-react'
import lotties from './lotties'
const d = new Date()
const month = d.getMonth()

const lot: LottieComponentProps['animationData'] = lotties[month]

export const MonthLottie: React.FC = () => <Lottie animationData={lot} />

export default MonthLottie
