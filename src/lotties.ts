import { LottieComponentProps } from 'lottie-react'

import October from './lotties/october.json'
import November from './lotties/november.json'
import December from './lotties/december.json'
import January from './lotties/january.json'
import February from './lotties/february.json'
import March from './lotties/march.json'
import April from './lotties/april.json'
import May from './lotties/may.json'

type LottieType = Record<number, LottieComponentProps['animationData']>

export const lotties: LottieType = {
  0: January,
  1: February,
  2: March,
  3: April,
  4: May,
  9: October,
  10: November,
  11: December,
}

export default lotties
