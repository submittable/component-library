import { Container } from '@mui/material'
import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import Button, { buttonTypes } from '../../Button/Button'
import Stepper from '../../Stepper/Stepper'
import LongFormSection, { FORM_SECTION_ELEMENT_ID } from '../LongFormSection/LongFormSection'
import styles from './longForm.module.less'

const CONTENT_ELEMENT_ID = 'long-form-content'

const LongForm = ({
  formTitle,
  FormBanner,
  formSections,
  optionalFormSections,
  onSubmit,
  onDraft,
  hasDraft,
  onExit,
  submitButtonText,
}) => {
  const [currentStep, setCurrentStep] = useState(0)

  const numRequiredSections = formSections.length

  // set up scroll spy to update navigation as user scrolls
  useEffect(() => {
    // eslint-disable-next-line no-undef
    const contentEl = document.getElementById(CONTENT_ELEMENT_ID)

    // eslint-disable-next-line no-undef
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCurrentStep(Number(entry.target.getAttribute('data-section-num')))
          }
        })
      },
      { root: contentEl, threshold: 1 }
    )

    // eslint-disable-next-line no-undef
    document
      .querySelectorAll(`#${FORM_SECTION_ELEMENT_ID}`)
      .forEach((sectionEl) => observer.observe(sectionEl))

    return () => observer.disconnect()
  }, [])

  const sidebarStepLabels = formSections.reduce((prev, current) => [...prev, current.title], [])
  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <Stepper
          currentStep={currentStep}
          stepLabels={
            optionalFormSections.length > 0
              ? [...sidebarStepLabels, 'Optional Information']
              : sidebarStepLabels
          }
          hideStepsComplete
          isVerticalStepper
          className={styles.stepper}
        />
      </div>
      <div id={CONTENT_ELEMENT_ID} className={styles.content}>
        <Container maxWidth="sm" className={styles.contentContainer}>
          {formTitle && <h1 className={styles.title}>{formTitle}</h1>}
          {FormBanner}

          {formSections.map(({ title, Component }, i) => (
            <LongFormSection key={title} sectionNum={i} title={title}>
              {Component}
            </LongFormSection>
          ))}

          {optionalFormSections.length > 0 && (
            <LongFormSection sectionNum={numRequiredSections}>
              {optionalFormSections.map(({ title, Component }) => (
                <LongFormSection key={title} title={title} isCollapsible>
                  {Component}
                </LongFormSection>
              ))}
            </LongFormSection>
          )}

          <div className={styles.buttons}>
            <Button buttonText="Exit" buttonType={buttonTypes.text} onClick={onExit} />
            <div className={styles.rightButtons}>
              {hasDraft && (
                <Button buttonText="Save Draft" buttonType={buttonTypes.text} onClick={onDraft} />
              )}
              <Button buttonText={submitButtonText} onClick={onSubmit} />
            </div>
          </div>
        </Container>
      </div>
    </div>
  )
}

LongForm.defaultProps = {
  formTitle: '',
  FormBanner: null,
  optionalFormSections: [],
  submitButtonText: 'Submit',
  onDraft: null,
  hasDraft: false,
}

LongForm.propTypes = {
  formTitle: PropTypes.string,
  FormBanner: PropTypes.node,
  formSections: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      Component: PropTypes.node,
    })
  ).isRequired,
  optionalFormSections: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      Component: PropTypes.node,
    })
  ),
  onSubmit: PropTypes.func.isRequired,
  onExit: PropTypes.func.isRequired,
  onDraft: PropTypes.func,
  hasDraft: PropTypes.bool,
  submitButtonText: PropTypes.string,
}

export default LongForm
