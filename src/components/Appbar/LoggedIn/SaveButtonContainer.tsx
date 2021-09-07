import IconButton from "@material-ui/core/IconButton"
import Backdrop from "../../Backdrop/BackdropContainer"

import { useAppDispatch } from "../../../store/storeHooks"
import { openNotification } from "../../../store/notificationReducer"
import AppbarLoggedInStyles from "./AppbarLoggedInStyles"
import useSaveEvents from "../../../utils/hooks/useSaveEvents"

type AppButtonProps = {
  clickHandler: () => void
}

const SaveButtonContainer = () => {
  const dispatch = useAppDispatch()
  const { saveEvents, loading, error } = useSaveEvents()

  const onSaveEvents = async () => {
    await saveEvents()
    if (!loading && !error) {
      dispatch(
        openNotification({
          message: "Events saved!",
          alertType: "success",
        })
      )
    }
  }

  if (loading) return <Backdrop loading={loading} />

  if (error) {
    dispatch(
      openNotification({
        message: "Error when saving events! Please try again",
        alertType: "error",
      })
    )
  }

  return <SaveButton clickHandler={onSaveEvents} />
}

const SaveButton = ({ clickHandler }: AppButtonProps) => {
  const classes = AppbarLoggedInStyles()
  return (
    <IconButton
      className={classes.iconButton}
      children="Save"
      edge="start"
      onClick={clickHandler}
    />
  )
}

export default SaveButtonContainer
