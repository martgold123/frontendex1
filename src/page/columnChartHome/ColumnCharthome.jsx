import React from 'react'
import "./ColumnChathome.css"
import Featureinfo from '../../components/featureInfo/Featureinfo'
import Topbar from '../../components/topbar/Topbar'

export default function ColumnCharthome() {
    return (
        <div className="home">
            <Topbar/>
            <Featureinfo/> 
        </div>
        
    )
}
