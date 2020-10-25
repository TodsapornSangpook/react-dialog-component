import { useState, useCallback } from 'react'

interface stateInterface {
  title: string
  content: string
  visible: boolean
  callbackCancelDialog?: () => void
  callbackOkDialog?: () => void
}

interface onShowDialogParamInterface {
  title?: string
  content?: string
  callbackCancelDialog?: () => void
  callbackOkDialog?: () => void
}

export const useDialog = () => {
  const initState = {
    title: '',
    content: '',
    visible: false,
    callbackCancelDialog: undefined,
    callbackOkDialog: undefined
  }

  const [state, setState] = useState<stateInterface>(initState)

  const onShowDialog = useCallback(
    ({
      title = '',
      content = '',
      callbackCancelDialog = onHideDialog,
      callbackOkDialog = onHideDialog
    }: onShowDialogParamInterface) => {
      setState({
        title: title,
        content: content,
        visible: true,
        callbackCancelDialog: callbackCancelDialog,
        callbackOkDialog: callbackOkDialog
      })
    },
    []
  )
  const onHideDialog = useCallback(() => {
    setState(initState)
  }, [])

  const onClickOk = useCallback(() => {
    if (state.callbackOkDialog) {
      state.callbackOkDialog()
    }
    onHideDialog()
  }, [state])

  const onClickCancel = useCallback(() => {
    if (state.callbackCancelDialog) {
      state.callbackCancelDialog()
    }
    onHideDialog()
  }, [state])

  return {
    dialogProps: {
      title: state.title,
      content: state.content,
      visible: state.visible,
      onClickOk: onClickOk,
      onClickCancel: onClickCancel
    },
    onShowDialog,
    onHideDialog
  }
}
