export default function (data) {
  const parsedData = []

  Object.keys(data).forEach((key) => {
    const message = data[key]
    const date = message.date ? new Date(message.date) : null

    if (date instanceof Date && !isNaN(date)) {
      parsedData.push({
        id: key,
        ...message,
        date: date.toISOString(),
      })
    }
  })

  parsedData.sort((a, b) => new Date(a.date) - new Date(b.date))

  const sortedData = []

  parsedData.forEach((item) => {
    const itemDate = item.date ? formatDate(new Date(item.date)) : null
    const existingDate = sortedData.find((data) => data.date === itemDate)

    if (existingDate) {
      existingDate.messages.push(item)
    } else {
      sortedData.push({
        date: itemDate,
        messages: [item],
      })
    }
  })
  
  return sortedData
}
function formatDate(date) {
  return date.toLocaleDateString('en-EN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}