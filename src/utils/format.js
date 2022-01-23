const defaultColumns = `export const columns = [{
      label: '序号',  
      attr: { type: 'index' },
    }`

const defaultForm = `
export function formInit(data = {}) {
  return {`


export function formatResult(objectRes) {
  return toColumns(objectRes) + toFormInit(objectRes)
}

function toColumns(objectRes = {}) {
  function  columnsItemTemp(value) {
    return `,  {
      prop: ${value},
      label: ''
    }`
  }
  let columnsTemplate = defaultColumns
  Object.keys(objectRes).forEach(item => {
    columnsTemplate += columnsItemTemp(item)
  })
  return columnsTemplate + `
]`
}

function toFormInit(objectRes = {}) {
  let formTemplate = defaultForm
  Object.keys(objectRes).forEach(item => {
    formTemplate += `
    ${item}: '', `
  })
  return formTemplate + `
      ...data
    }
  }
  `
}