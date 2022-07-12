import { getMoment } from '../../../utils/helpers'

const getTimeListInterval = () => {
  const items = []
  new Array(24).fill().forEach((acc, index) => {
    items.push(getMoment({ hour: index }))
    items.push(getMoment({ hour: index, minute: 30 }))
  })
  return items
}

export default getTimeListInterval
