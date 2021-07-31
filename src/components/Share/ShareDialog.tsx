import { useAppSelector, useAppDispatch } from "../../hooks/storeHooks";
import { toggleShareDialog } from "../../store/dialogReducer";
import { useState } from "react";

import ShareDialogContent from "./ShareDialogContent";

import Dialog from "@material-ui/core/Dialog";

const ShareDialog = () => {
  // const [isDialogOpen, setIsDialogOpen] = useState(false);
  const dispatch = useAppDispatch();
  const openShareDialog = useAppSelector(
    (state) => state.dialog.isShareDialogOpen
  );

  const toggleHandler = () => {
    dispatch(toggleShareDialog());
  };

  const generatePublishKey = () => {
    // TODO
    // When share dialog is open, generate publishkey
  };

  return (
    <Dialog open={openShareDialog} onClose={toggleHandler}>
      <ShareDialogContent />
    </Dialog>
  );
};

export default ShareDialog;
