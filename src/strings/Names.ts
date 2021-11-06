export function getFirstName(name: string) {
  return name.substr(0, name.indexOf(" "));
}

export function getLastName(name: string) {
  return name.slice(name.lastIndexOf(" ") + 1);
}
