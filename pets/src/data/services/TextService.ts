
export const TextService = {
  cropAndLimitText(text: string, maxLen: number): string{
    if (text.length < maxLen) {
      return text
    }

    return text.slice(0, maxLen) + '...'
  }
}