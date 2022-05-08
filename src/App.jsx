import React, { Suspense } from 'react'
import Splitter, { SplitDirection } from '@devbookhq/splitter'
import Navbar from './Components/Navbar/Navbar'
import Loader from './Components/Loader/Loader'
import './App.scss'

const App = () => {
  const Map = React.lazy(() => import('./Components/Map/Map'))
  const CompanyTable = React.lazy(() =>
    import('./Components/CompanyTable/CompanyTable'),
  )

  return (
    <div>
      <Navbar />
      <div className="container">
        <Suspense fallback={<Loader />}>
          <Splitter
            direction={SplitDirection.Horizontal}
            draggerClassName="custom-dragger-horizontal"
          >
            <CompanyTable />
            <Map />
          </Splitter>
        </Suspense>
      </div>
    </div>
  )
}

export default App
