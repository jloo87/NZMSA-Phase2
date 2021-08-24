import { useAppDispatch, useAppSelector } from "../../store/storeHooks"
import { logout } from "../../store/authReducer"
import { openNotification } from "../../store/notificationReducer"

import Header from "./Header"

const HeaderContainer = () => {
  const avatarURI = useAppSelector<string | undefined>(
    (state) => state.user.githubImageURI
  )
  const githubName = useAppSelector<string | undefined>(
    (state) => state.user.githubName
  )

  const dispatch = useAppDispatch()

  // Logouts user and removes JWT Token from local storage
  const logoutHandler = () => {
    localStorage.removeItem("HYD_JWT")
    dispatch(logout())
    dispatch(openNotification("Logged out"))
  }

  return (
    <Header
      avatarURI={avatarURI!}
      githubName={githubName!}
      logoutHandler={logoutHandler}
    />
  )
}

export default HeaderContainer
