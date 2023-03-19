import { Box, Fab, Modal, styled, Tooltip, Typography } from "@mui/material";
import React, { useState } from "react";
import { Add as AddIcon, JoinFullSharp } from "@mui/icons-material";

const StyledModal = styled(Modal)({
    display:"flex",
    alignItems:"center",
    justifyContent:"center"
})
function Add() {
    const [open , setOpen]=useState(false)
  return (
    <>
      <Tooltip onClick={e=>setOpen(true)} title="Add" sx={{ position: "fixed", bottom: 20 , left:{xs:"calc(50%-25)",md:30}}}>
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>
      <StyledModal
  open={open}
  onClose={e=>setOpen(false)}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box width={400} height={280}  bgcolor={"background.default"} color={"text.primary"} p={3} borderRadius={5} >
   <Typography variant="h6" color="gray" textAlign="center" >
    Create Post
   </Typography>
  </Box>
</StyledModal>
    </>
  );
}

export default Add;
