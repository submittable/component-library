import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { Container as MuiContainer } from '@mui/material'
import styles from './container.module.less'

export const contentWidthOptions = Object.freeze({
  xsmall: 'xs',
  small: 'sm',
  medium: 'md',
  large: 'lg',
  xlarge: 'xl',
})

const Container = ({ children, className, containerWidth }) => {
  return (
    <MuiContainer className={classNames(styles.container, className)} maxWidth={containerWidth}>
      {children}
    </MuiContainer>
  )
}

Container.defaultProps = {
  containerWidth: contentWidthOptions.large,
  className: '',
}

Container.propTypes = {
  containerWidth: PropTypes.oneOf(Object.values(contentWidthOptions)),
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}

export default Container
