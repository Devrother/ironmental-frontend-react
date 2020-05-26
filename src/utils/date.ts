// FIXME: enum 타입으로
const MonthMap: { [key: string]: string } = {
  '01': 'Jan',
  '03': 'Mar',
  '04': 'Apr',
  '05': 'May',
  '06': 'Jun',
  '07': 'Jul',
  '08': 'Aug',
  '09': 'Sep',
  '10': 'Oct',
  '11': 'Nov',
  '12': 'Dec',
}

export const convertDate = (date: string) => {
  // created: '2019-05-31T15:05:28.527Z'

  const removedTimezoneDate = date.substr(0, 10)
  const year = removedTimezoneDate.substr(0, 4)
  const month = removedTimezoneDate.substr(5, 2)
  const day = removedTimezoneDate.substr(8, 2)

  return `${MonthMap[month]} ${day} ${year}`
}
