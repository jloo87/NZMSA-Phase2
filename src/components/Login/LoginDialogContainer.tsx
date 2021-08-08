import { useAppSelector, useAppDispatch } from "../../store/storeHooks"

import { toggleLoginDialog } from "../../store/dialogReducer"
import { login } from "../../store/authReducer"
import LoginDialog from "./LoginDialog"
import { CONFIGURATION } from "../../apollo-client/apollo"

const LoginDialogContainer = () => {
  console.log("inside loginDialogContainer")
  const openLoginDialog = useAppSelector<boolean>(
    (state) => state.dialog.isLoginDialogOpen
  )

  const dispatch = useAppDispatch()

  // Opens login dialog
  const toggleHandler = () => dispatch(toggleLoginDialog())

  // Login user
  const handleLogin = () => dispatch(login())

  // TODO
  const handleSignUp = () => {}

  return (
    <LoginDialog
      githubAuthURL={CONFIGURATION.GITHUB_AUTHORIZE_URL}
      openLoginDialog={openLoginDialog}
      login={handleLogin}
      signup={handleSignUp}
      toggleHandler={toggleHandler}
    />
  )
}

export default LoginDialogContainer
