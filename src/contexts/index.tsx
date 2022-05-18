import { CounterProvider } from './Counter'
import { SidebarDrawerProvider } from './SidebarDrawer'

type Hookprops = {
  children: React.ReactNode
}

export const Contexts = ({ children }: Hookprops) => (
  <SidebarDrawerProvider>
    <CounterProvider>{children}</CounterProvider>
  </SidebarDrawerProvider>
)
