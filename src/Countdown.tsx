import React from 'react'

const d = new Date()

const dueDate = new Date('04/25/2023')

const timeBetween = dueDate.getTime() - d.getTime()

const daysLeft = Math.floor(timeBetween / (1000 * 60 * 60 * 24))

export const Countdown: React.FC = () => <h3>{daysLeft} Days Left</h3>

export default Countdown
