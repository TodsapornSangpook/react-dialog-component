import React from 'react'

import { Dialog, useDialog } from 'react-dialog-component'
import 'react-dialog-component/dist/index.css'
import 'antd/dist/antd.css'

const App = () => {
  const { dialogProps, onShowDialog } = useDialog()

  const handleClickShowDialog = () => {
    onShowDialog({
      title: 'test title',
      content: 'test content',
      callbackCancelDialog: () => {
        console.log('cancel')
      },
      callbackOkDialog: () => {
        console.log('ok')
      }
    })
  }

  return (
    <div>
      <button onClick={handleClickShowDialog}>show dialog</button>
      <Dialog {...dialogProps} />
    </div>
  )
}

export default App
