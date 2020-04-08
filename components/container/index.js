import { node } from "prop-types"

import { ContainerStyled } from "./styles"

const Container = ({ children }) => {
  return <ContainerStyled>{children}</ContainerStyled>
}

Container.propTypes = {
  children: node,
}

export default Container
