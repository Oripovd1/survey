// Dependencies list
import { useState } from 'react'

// Components list
import Navbar from '../components/navbar/navbar'
import NodeFlow from '../components/nodeFlow'
import Sidebar from '../components/sidebar/sidebar'
import RightBar from '../layouts/rightbar'

function Home() {
  const [collapsed, setCollapsed] = useState(true)

  return (
    <div className='App'>
      <Navbar />
      <Sidebar setCollapsed={setCollapsed} collapsed={collapsed} />
      <NodeFlow />
      <RightBar />
    </div>
  )
}

export default Home
