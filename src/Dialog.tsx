import * as React from 'react'
import { Modal } from 'antd'

interface DialogProps {
  title: string
  content: string
  visible: boolean
  onClickOk: () => void
  onClickCancel: () => void
}

export const Dialog = ({
  title,
  content,
  visible,
  onClickOk,
  onClickCancel
}: DialogProps) => {
  return (
    <Modal
      title={title}
      visible={visible}
      onOk={onClickOk}
      onCancel={onClickCancel}
    >
      <p>{content}</p>
    </Modal>
  )
}
