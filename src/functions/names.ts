export function getFirstName(name: string) {
  return name.slice(0, name.lastIndexOf(' '))
}

export function getLastName(name: string) {
  return name.slice(name.lastIndexOf(' ') + 1)
}

export function getInitialFirstAndLastName(name: string) {
  try {
    const firstName = getFirstName(name).charAt(0)
    const lastName = getLastName(name).charAt(0)

    return firstName.charAt(0) + lastName.charAt(0)
  } catch (error) {
    console.log(error, 'getInitialFirstAndLastName', name)
  }
}
