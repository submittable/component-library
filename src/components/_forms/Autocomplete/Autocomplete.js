import { Autocomplete as MaterialUIAutocomplete, TextField } from '@mui/material'
import PropTypes from 'prop-types'
import { forwardRef } from 'react'
import Checkbox from '../Checkbox/Checkbox'

const Autocomplete = forwardRef(
  (
    {
      id,
      name,
      options,
      value,
      inputValue,
      onChange,
      onBlur,
      onInputChange,
      onOpen,
      isLoading,
      isError,
      isAutoHighlight,
      isAutoSelect,
      isMultiple,
      isOptionEqualToValue,
      isDisabled,
      isFullWidth,
      getOptionLabel,
      placeholder,
      isFreeSolo,
    },
    ref
  ) => {
    const defaultValue = isMultiple ? [] : null

    return (
      <MaterialUIAutocomplete
        id={id}
        name={name}
        value={value === '' ? defaultValue : value} // Autocomplete does not like empty string as value
        options={options}
        onChange={(e, newValue, reason) => {
          if (reason === 'clear') {
            onChange(isMultiple ? [] : '')
            return
          }
          onChange(newValue)
        }}
        onInputChange={onInputChange}
        inputValue={inputValue}
        size="small"
        onBlur={onBlur}
        onOpen={onOpen}
        ref={ref}
        renderInput={(params) => (
          <TextField variant="outlined" placeholder={placeholder} error={isError} {...params} />
        )}
        renderOption={
          isMultiple
            ? (props, option, { selected }) => (
                <li {...props}>
                  <Checkbox id={`${id}-checkbox`} value={selected} />
                  {getOptionLabel(option) || option}
                </li>
              )
            : undefined
        }
        loading={isLoading}
        openOnFocus
        getOptionLabel={getOptionLabel}
        isOptionEqualToValue={isOptionEqualToValue}
        autoHighlight={isAutoHighlight}
        autoSelect={isAutoSelect}
        multiple={isMultiple}
        disableCloseOnSelect={isMultiple}
        fullWidth={isFullWidth}
        disabled={isDisabled}
        freeSolo={isFreeSolo}
      />
    )
  }
)

Autocomplete.displayName = 'Autocomplete'

Autocomplete.defaultProps = {
  id: '',
  name: '',
  options: [],
  isLoading: false,
  onBlur: null,
  isError: false,
  value: '',
  inputValue: undefined,
  onChange: () => {},
  onInputChange: () => {},
  onOpen: () => {},
  isOptionEqualToValue: () => {},
  getOptionLabel: undefined,
  isAutoHighlight: false,
  isAutoSelect: false,
  isMultiple: false,
  isFullWidth: false,
  isDisabled: false,
  placeholder: '',
  isFreeSolo: false,
}

Autocomplete.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.object])),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object]),
  inputValue: PropTypes.string,
  onChange: PropTypes.func,
  onInputChange: PropTypes.func,
  onBlur: PropTypes.func,
  onOpen: PropTypes.func,
  isLoading: PropTypes.bool,
  isError: PropTypes.bool,
  isOptionEqualToValue: PropTypes.func,
  getOptionLabel: PropTypes.func,
  isAutoHighlight: PropTypes.bool,
  isAutoSelect: PropTypes.bool,
  isMultiple: PropTypes.bool,
  isFullWidth: PropTypes.bool,
  isDisabled: PropTypes.bool,
  placeholder: PropTypes.string,
  isFreeSolo: PropTypes.bool,
}

export default Autocomplete
