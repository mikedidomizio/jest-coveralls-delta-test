export function testFn(str: string) {
  if (str === 'foo') {
    console.log('equals foo!')
  } else {
    console.log('does not equal foo!')
  }

  if (str === 'hello') {
    console.log('world')
  }
}
