export function getLangFromBrowser(): string {
  return navigator.language
}

export function getLangsFromBrowser(): string[] {
  const langs: string[] = []
  for (const item of navigator.languages) {
    langs.push(item)
  }
  return langs
}
