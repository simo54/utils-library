export function getFirstName(name: string) {
  return name.substr(0, name.indexOf(' '))
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

console.log(getInitialFirstAndLastName('scava mimmo'))
