import { Delete } from '@mui/icons-material'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import { forwardRef, useState } from 'react'
import { getUUID } from '../../../utils/helpers'
import IconButton from '../../IconButton/IconButton'
import styles from './fileInput.module.less'

const FileInput = forwardRef(({ id, accept, onChange, onBlur }, ref) => {
  const [hasUploadedFiles, setHasUploadedFiles] = useState(false)

  const handleOnChange = (e) => {
    if (e.target.files.length > 0) {
      setHasUploadedFiles(true)
    }
    onChange(e.target.files)
  }

  const handleOnDeleteFiles = () => {
    onChange({})
    setHasUploadedFiles(false)
  }

  return (
    <>
      {!hasUploadedFiles && (
        <div className={styles.container}>
          <label htmlFor={id} className={styles.label}>
            Choose file
          </label>
        </div>
      )}
      <div className={styles.fileContainer}>
        <input
          ref={ref}
          id={id}
          type="file"
          accept={accept}
          onChange={handleOnChange}
          onBlur={onBlur}
          className={classNames(styles.input, { [styles.hidden]: !hasUploadedFiles })}
        />
        {hasUploadedFiles && (
          <IconButton aria-label="delete" onClick={handleOnDeleteFiles} icon={<Delete />} />
        )}
      </div>
    </>
  )
})
FileInput.displayName = 'FileInput'

FileInput.defaultProps = {
  id: `file-input-${getUUID()}`,
  accept: '',
  onChange: () => {},
  onBlur: () => {},
}

FileInput.propTypes = {
  id: PropTypes.string,
  accept: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
}

export default FileInput
