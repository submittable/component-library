import PropTypes from 'prop-types'
import classNames from 'classnames'
import styles from './paragraph.module.less'

export const paragraphTypes = Object.freeze({
  P100: 'P100',
  P200: 'P200',
})

const Paragraph = ({ children, type, className }) => {
  const textStyles = classNames(
    {
      [styles.p100]: type === paragraphTypes.P100,
      [styles.p200]: type === paragraphTypes.P200,
    },
    className
  )
  return <p className={textStyles}>{children}</p>
}

Paragraph.defaultProps = {
  className: null,
}

Paragraph.propTypes = {
  type: PropTypes.string.isRequired,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
}

export default Paragraph
