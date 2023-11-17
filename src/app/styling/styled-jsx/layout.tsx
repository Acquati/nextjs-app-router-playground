import StyledJsxRegistry from './registry'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <StyledJsxRegistry>{children}</StyledJsxRegistry>
}

export default Layout
