import React from 'react'
import { TabTitle } from '../utils/FunctionTitle'
import { Categoris } from './Categoris'
import { QuickSell } from './QuickSell'
import { Shop } from './Shop'
import { Slider } from './Slider'


export const HomePage = () => {
  TabTitle('Amar Bazar')
  return (
    <div className='' style={{}}>
          <Slider/>
          <Categoris/>
          <Shop/>
          <QuickSell/>
          
          
    </div>
  )
}
