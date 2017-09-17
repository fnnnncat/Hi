import $$ from '../tools'

export const getTest = async () => {
  const testData = await $$.ajax('/api/test', {
    method: 'GET',
  })

  return testData
}
