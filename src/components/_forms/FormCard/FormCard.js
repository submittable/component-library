import PropTypes from 'prop-types'
import Card from '../../Card/Card'
import styles from './formCard.module.less'

const FormCard = ({ heading, children }) => {
  return (
    <div className={styles.container}>
      <h4 className={styles.heading}>{heading}</h4>
      <Card className={styles.card} isElevated>
        {children}
      </Card>
    </div>
  )
}

FormCard.defaultProps = {
  heading: null,
}

FormCard.propTypes = {
  heading: PropTypes.string,
  children: PropTypes.node.isRequired,
}

export default FormCard
