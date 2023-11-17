import StyledComponentsRegistry from './registry'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
}

export default Layout
