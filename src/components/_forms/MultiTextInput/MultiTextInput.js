import { Chip, TextField } from '@mui/material'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import { isEmpty } from 'lodash'
import { useEffect, useState } from 'react'
import { getUUID } from '../../../utils/helpers'
import styles from './multiTextInput.module.less'

const MultiTextInput = ({
  id,
  name,
  type,
  isError,
  value,
  onChange,
  onBlur,
  fullWidth,
  isDisabled,
  isMultiline,
  rows,
  placeholder,
  delimiters,
}) => {
  const [localValue, setLocalValue] = useState(value)
  const [inputValue, setInputValue] = useState('')

  useEffect(() => {
    onChange(localValue)
  }, [localValue, onChange])

  const parseInputValue = (val) => {
    if (isEmpty(delimiters) || !delimiters) {
      return [val]
    }

    let valCopy = String(val)
    delimiters.slice(1).forEach((delimiter) => {
      valCopy = valCopy.replaceAll(delimiter, delimiters[0])
    })

    return valCopy.split(delimiters[0])
  }

  const addInputToValues = () => {
    const inputValues = parseInputValue(inputValue)

    const newValues = []
    inputValues.forEach((inputVal) => {
      const trimmedValue = inputVal.trim()
      if (trimmedValue && !localValue.includes(trimmedValue) && !newValues.includes(trimmedValue)) {
        newValues.push(trimmedValue)
      }
    })

    setLocalValue([...localValue, ...newValues])
    setInputValue('')
  }

  const handleKeyUp = (e) => {
    if (e.key === 'Enter') {
      addInputToValues()
    }

    if (e.key === 'Backspace' && inputValue === '') {
      setLocalValue(localValue.slice(0, localValue.length - 1))
    }
  }

  const handleOnChange = (e) => {
    setInputValue(e.target.value)
  }

  const handleOnBlur = (e) => {
    addInputToValues()
    onBlur(e)
  }

  const handleDeleteValue = (targetValue) => () => {
    const copy = [...localValue]
    copy.splice(
      localValue.findIndex((currentValue) => currentValue === targetValue),
      1
    )

    setLocalValue(copy)
  }

  return (
    <TextField
      id={id}
      name={name}
      type={type}
      value={inputValue}
      error={isError}
      onChange={handleOnChange}
      onBlur={handleOnBlur}
      onKeyUp={handleKeyUp}
      variant="outlined"
      multiline={isMultiline}
      rows={isMultiline ? rows : null}
      placeholder={placeholder}
      fullWidth={fullWidth}
      disabled={isDisabled}
      InputProps={{
        startAdornment: localValue.map((val) => (
          <Chip key={val} label={val} onDelete={handleDeleteValue(val)} className={styles.chip} />
        )),
        classes: { root: classNames(styles.input, { [styles.withChips]: localValue.length }) },
      }}
    />
  )
}

MultiTextInput.defaultProps = {
  id: `multi-text-input-${getUUID()}`,
  value: [],
  name: '',
  onChange: () => {},
  type: null,
  isError: false,
  fullWidth: false,
  isDisabled: false,
  isMultiline: false,
  rows: 3,
  placeholder: null,
  onBlur: null,
  delimiters: [' ', ',', ';'],
}

MultiTextInput.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.arrayOf(PropTypes.string),
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  isError: PropTypes.bool,
  type: PropTypes.string,
  fullWidth: PropTypes.bool,
  isDisabled: PropTypes.bool,
  isMultiline: PropTypes.bool,
  rows: PropTypes.number,
  placeholder: PropTypes.string,
  delimiters: PropTypes.arrayOf(PropTypes.string),
}

export default MultiTextInput
