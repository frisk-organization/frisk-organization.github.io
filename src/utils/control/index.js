export const copyToClipboard = (valueToCopy, callback) => {
  const element = document.createElement('textarea')
  element.value = valueToCopy || ''

  document.body.appendChild(element)
  element.select()
  document.execCommand('copy')
  document.body.removeChild(element)

  if (callback) {
    callback()
  }
}

export const setPageTitle = (title, absolute = false) => {
  if (absolute) {
    document.title = title
  } else {
    document.title = `FRISK • ${title}`
  }
}
