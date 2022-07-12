import { Paragraph, paragraphTypes } from '../src/components'

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Components/Typography',
  component: null,
}

export const TypographyComponent = () => {
  return (
    <div>
      <h1>Examples of all the font sizes we use: </h1>
      <br />
      <h1>h1: fontSize: 32px, fontWeight: 600, lineHeight: 2.4rem</h1>
      <h2>h2: fontSize: 24px, fontWeight: 600, lineHeight: 2.4rem</h2>
      <h3>h3: fontSize: 20px, fontWeight: 600, lineHeight: 2.4rem</h3>
      <h4>h4: fontSize: 18px, fontWeight: 600, lineHeight: 2.4rem</h4>
      <h5>h5: fontSize: 16px, fontWeight: 600, lineHeight: 2.4rem</h5>
      <h6>h6: fontSize: 12px, fontWeight: 600, lineHeight: 2.4rem</h6>
      <p>p: fontSize: 16px, fontWeight: normal, lineHeight: 2.4rem</p>
      <Paragraph type={paragraphTypes.P100}>
        p100: fontSize: 12px, fontWeight: normal, lineHeight: 2rem
      </Paragraph>
      <Paragraph type={paragraphTypes.P200}>
        p200: fontSize: 14px, fontWeight: normal, lineHeight: 2rem
      </Paragraph>
      <p style={{ fontSize: '1.4rem', lineHeight: '2.4rem' }}>
        headline400: fontSize: 14px, lineHeight: 2.4rem
      </p>
      <p style={{ fontSize: '1.4rem', lineHeight: '2rem', textTransform: 'uppercase' }}>
        headline200: fontSize: 14px, lineHeight: 2rem, textTransform: uppercase
      </p>
    </div>
  )
}
