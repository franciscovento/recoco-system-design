export const checkFontSize = (fontSize: string | number) => {
  if (typeof fontSize === 'number' || Number(fontSize)) {
    return `${fontSize}px`
  }
  return fontSize
}