import { Routes, Route } from 'react-router-dom'
import { Home } from './Pages/Home'
import { RepositoriesPage } from './Pages/RespositoriesPage'
// import { DefaultLayout } from './layouts/DefaultLayout'

export function Router() {
  return (
    <Routes>
      {/* <Route path="/" element={<DefaultLayout />}> */}

      <Route path="/" element={<Home />} />
      <Route path="/:login/repositories" element={<RepositoriesPage />} />
      {/* </Route> */}
    </Routes>
  )
}
