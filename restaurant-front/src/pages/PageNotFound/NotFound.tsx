import {
  HomeLink,
  NotFoundCard,
  NotFoundSubtitle,
  NotFoundText,
  NotFoundTitle,
  NotFoundWrapper,
  Spinner,
} from "./NotFound.styles"

const NotFound = () => {
  return (
    <NotFoundWrapper>
      <NotFoundCard>
        <NotFoundTitle>404</NotFoundTitle>
        <NotFoundSubtitle>Stay tuned</NotFoundSubtitle>
        <NotFoundText>
          This page is coming soon. We are preparing something fresh for
          Nicola's Restaurant.
        </NotFoundText>
        <Spinner aria-label="Loading" />
        <HomeLink to="/">Back to home</HomeLink>
      </NotFoundCard>
    </NotFoundWrapper>
  )
}

export default NotFound
