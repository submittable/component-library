import { v4 as uuidv4 } from 'uuid'
import moment from 'moment-timezone'
import { isEmpty, snakeCase } from 'lodash'

export const getMoment = (arg, timeZone) => {
  return timeZone ? moment(arg).tz(timeZone) : moment(arg)
}

export const getMomentFromTime = (time, isStrict = true) => {
  return moment(time, 'h:mm A', isStrict)
}

export const getUUID = () => {
  return uuidv4()
}

export const snakeCaseObjectKeys = (obj) =>
  Object.keys(obj).reduce((newObj, key) => {
    // eslint-disable-next-line no-param-reassign
    newObj[snakeCase(key)] = obj[key]
    return newObj
  }, {})

export const convertToEventContextFormat = (obj) => {
  return !isEmpty(obj) ? JSON.stringify(snakeCaseObjectKeys(obj)) : null
}
