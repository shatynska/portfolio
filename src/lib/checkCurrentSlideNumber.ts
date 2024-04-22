export default function checkCurrentSlideNumber(
  currentSlideNumber: number,
  totalNumberOfSlides: number
): number {
  return currentSlideNumber <= totalNumberOfSlides
    ? currentSlideNumber >= 1
      ? currentSlideNumber
      : totalNumberOfSlides - currentSlideNumber
    : currentSlideNumber - totalNumberOfSlides;
}
