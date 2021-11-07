export function getExecutionTime(input: () => void): void {
  const name = `ExecutionTime of function ${input.name}`
  try {
    console.time(name)
    input()
  } catch (error) {
    console.log(error, input)
  } finally {
    console.timeEnd(name)
  }
}
