import { useAppSelector, useAppDispatch } from "../hooks/storeHooks";
import { toggleShareDialog } from "../store/dialogReducer";

import ShareDialogContent from "./ShareDialogContent";

import Dialog from "@material-ui/core/Dialog";

const ShareDialog = () => {
  const dispatch = useAppDispatch();
  const openShareDialog = useAppSelector(
    (state) => state.dialog.isShareDialogOpen
  );

  const handleToggle = () => {
    dispatch(toggleShareDialog());
  };

  return (
    <Dialog open={openShareDialog} onClose={handleToggle}>
      <ShareDialogContent />
    </Dialog>
  );
};

export default ShareDialog;
