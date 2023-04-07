import React from 'react'

import RightBar from '@/components/layout/RightBar'
import Sidebar from '@/components/layout/Sidebar'

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div className="h-screen bg-black">
            <div className="container h-full mx-auto xl:px-30 max-w-7xl">
                <div className="grid h-full grid-cols-4">
                    <Sidebar />
                    <div className="col-span-3 lg:col-span-2 border-x-[1px] border-neutral-800">
                        {children}
                    </div>
                    <RightBar />
                </div>
            </div>
        </div>
    )
}

export default Layout
