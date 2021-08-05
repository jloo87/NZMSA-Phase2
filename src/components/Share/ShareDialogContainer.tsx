import { useState, useEffect } from "react"
import { useAppSelector, useAppDispatch } from "../../hooks/storeHooks"

import { toggleShareDialog } from "../../store/dialogReducer"
import ShareDialog from "./ShareDialog"
import { CONFIGURATION } from "../../apollo-client/apollo"

const ShareDialogContainer = () => {
  const [publishKey, setPublishKey] = useState("")

  const dispatch = useAppDispatch()

  const openShareDialog = useAppSelector<boolean>(
    (state) => state.dialog.isShareDialogOpen
  )

  useEffect(() => {
    const key = [...Array(8)]
      .map(() => Math.floor(Math.random() * 16).toString(16))
      .join("")

    setPublishKey(key)
  }, [])

  const publishURL = `${CONFIGURATION.LOCAL_FRONTEND}share/${publishKey}`

  const toggleHandler = () => dispatch(toggleShareDialog())

  const onCopyToClipboard = () => {
    navigator.clipboard.writeText(publishURL)
    // TODO
    // show some alert that text have been copied
    // toggleCopyAlert()
  }

  return (
    <ShareDialog
      publishURL={publishURL}
      openShareDialog={openShareDialog}
      onCopyToClipboard={onCopyToClipboard}
      toggleHandler={toggleHandler}
    />
  )
}

export default ShareDialogContainer
