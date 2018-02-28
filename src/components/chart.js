import React from 'react'
import _ from 'lodash'
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines'

const average = (arr) => _.round(_.sum(arr)/arr.length)
const Chart = (props) => {
  return(
    <div>
      <Sparklines height={120} width={180} data={props.data}>
        <SparklinesLine color={props.color} />
        <SparklinesReferenceLine type="avg"/>
      </Sparklines>
      <div>Current: {_.round(props.data[0])} {props.unit}</div>
      <div>Average: {average(props.data)} {props.unit}</div>
    </div>
  )
}
export default Chart
