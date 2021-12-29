// https://stackoverflow.com/a/17748203/14079233

export function getLocalStorage() {
  try {
    let values = [],
      keys = Object.keys(localStorage),
      i = keys.length

    while (i--) {
      values.push(localStorage.getItem(keys[i]))
    }
    return values
  } catch (error) {
    console.log('Error: ', error)
  }
}
