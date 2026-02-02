import React from 'react'
import Sales from './Sales'
import Visitors from './Visitors'
import TotalRevenue from './TotalRevenue'
import Customers from './Customers'
import TargetReality from './TargetReality'
import TopProducts from './TopProducts'
import SalesMap from './SalesMap'
import VolumeService from './VolumeService'
import { useSelector } from 'react-redux'

const DashboardScreen = () => {
    const isSidebarOpen = useSelector((state) => state.sidebar.isSidebarOpen)

    return (
        <div className={`mt-[14px] ${
            isSidebarOpen
              ? 'w-auto ml-[14px] mr-[14px]'
              : 'w-[calc(80%-28px)] ml-[calc(20%+14px)]'
          }`} 
        >
            <div className='grid grid-cols-[4fr_3fr] gap-x-[14px]'>
                <Sales />
                <Visitors />
            </div>
            <div className='grid grid-cols-[3fr_2fr_2fr]'>
                <TotalRevenue />
                <Customers />
                <TargetReality />
                <TopProducts />
                <SalesMap />
                <VolumeService />
            </div>
        </div>
    )
}

export default DashboardScreen