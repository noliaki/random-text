class RandomText {
  private originalText: string = ''
  private originalTextLen: number = 0
  private rafId: number = 0
  public randomText: string = ''

  constructor(text: string) {
    this.originalText = text
    this.originalTextLen = text.length
  }

  public play(): void {
    console.log('run')
  }
}
