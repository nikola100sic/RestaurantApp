import { NotFoundText, NotFoundTitle, NotFoundWrapper } from "./NotFound.styles"

const NotFound = () => {
  return (
    <NotFoundWrapper>
      <NotFoundTitle>404</NotFoundTitle>
      <NotFoundText>Page not found</NotFoundText>
    </NotFoundWrapper>
  )
}

export default NotFound