import { Routes, Route } from 'react-router-dom'
import Index from './pages/Index'
import Login from './pages/Login'
import Registro from './pages/Registro'
import Perfil from './pages/Perfil'
import Donar from './pages/Donar'
import DonacionConfirmada from './pages/DonacionConfirmada'
import MisDonaciones from './pages/MisDonaciones'
import Merendero from './pages/Merendero'
import Panel from './pages/Panel'
import PanelDonaciones from './pages/PanelDonaciones'
import PanelStock from './pages/PanelStock'
import PanelPlanillas from './pages/PanelPlanillas'
import PanelPublicar from './pages/PanelPublicar'
import PanelEntrega from './pages/PanelEntrega'
import PanelMerenderos from './pages/PanelMerenderos'
import PanelHistorial from './pages/PanelHistorial'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/login" element={<Login />} />
      <Route path="/registro" element={<Registro />} />
      <Route path="/perfil" element={<Perfil />} />
      <Route path="/donar" element={<Donar />} />
      <Route path="/donacion-confirmada/:id" element={<DonacionConfirmada />} />
      <Route path="/mis-donaciones" element={<MisDonaciones />} />
      <Route path="/merendero" element={<Merendero />} />
      <Route path="/panel" element={<Panel />} />
      <Route path="/panel/revisar" element={<PanelDonaciones />} />
      <Route path="/panel/stock" element={<PanelStock />} />
      <Route path="/panel/planillas" element={<PanelPlanillas />} />
      <Route path="/panel/publicar" element={<PanelPublicar />} />
      <Route path="/panel/entrega" element={<PanelEntrega />} />
      <Route path="/panel/merenderos" element={<PanelMerenderos />} />
      <Route path="/panel/historial" element={<PanelHistorial />} />
    </Routes>
  )
}
