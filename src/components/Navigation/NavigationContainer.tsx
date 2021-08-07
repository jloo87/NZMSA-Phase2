import { useAppSelector } from "../../store/storeHooks"

import { styled } from "@material-ui/core/styles"
import BottomNavigation from "@material-ui/core/BottomNavigation"

import LoggedInNavigation from "./LoggedInNavigation"
import NotLoggedInNavigation from "./NotLoggedInNavigation"

const StyledBottomNavigation = styled(BottomNavigation)({
  width: "100%",
  position: "fixed",
  left: 0,
  bottom: 0,
  borderRadius: "20px 20px 0 0",
  backgroundColor: "#EEEEEE",
})

const NavigationContainer = () => {
  const isAuth = useAppSelector<boolean>((store) => store.auth.isAuth)

  return (
    <StyledBottomNavigation showLabels>
      {isAuth ? <LoggedInNavigation /> : <NotLoggedInNavigation />}
    </StyledBottomNavigation>
  )
}

export default NavigationContainer