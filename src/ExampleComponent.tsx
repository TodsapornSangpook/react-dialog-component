import * as React from 'react'
import styles from './styles.module.css'

interface ExampleComponentProps {
  text: string
}

export const ExampleComponent = ({ text }: ExampleComponentProps) => {
  return <div className={styles.test}>Example Component: {text}</div>
}
