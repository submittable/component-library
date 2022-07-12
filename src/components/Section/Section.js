import { Container } from '@mui/material'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import styles from './section.module.less'
import { contentWidthOptions } from '../Container/Container'

export const sectionColors = Object.freeze({
  primary: 'primary',
  secondary: 'secondary',
  white: 'white',
  default: 'default',
})

const colorStyles = Object.freeze({
  primary: styles.backgroundPrimary,
  secondary: styles.backgroundSecondary,
  white: styles.backgroundWhite,
  default: '',
})

const Section = ({ color, containerWidth, className, children, backgroundImage }) => {
  return (
    <section
      className={classNames(styles.sectionWidth, colorStyles[color], {
        [styles.backgroundImage]: backgroundImage,
      })}
    >
      {backgroundImage}
      <Container
        className={classNames(
          { [styles.backgroundImage]: backgroundImage },
          styles.container,
          className
        )}
        maxWidth={containerWidth}
      >
        {children}
      </Container>
    </section>
  )
}

Section.defaultProps = {
  containerWidth: contentWidthOptions.large,
  className: null,
  children: null,
  backgroundImage: null,
  color: sectionColors.default,
}

Section.propTypes = {
  className: PropTypes.string,
  containerWidth: PropTypes.oneOf([...Object.values(contentWidthOptions)]),
  children: PropTypes.node,
  backgroundImage: PropTypes.node,
  color: PropTypes.oneOf([...Object.values(sectionColors)]),
}

export default Section
