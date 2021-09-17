import React from 'react'

import Chart from '../../components/chart/Chart'
import {data} from '../../dummyData' 
import Featureinfo from '../../components/featureInfo/Featureinfo'
import Topbar from '../../components/topbar/Topbar'
import './Home.css'

export default function Home() {
    return (
        <div className="home">
            <Topbar/>
            <Featureinfo/> 
            <Chart title="" data={data} dataKey="" grid/>
        </div>
        
    )
}
