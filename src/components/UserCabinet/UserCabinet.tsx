import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import {Tooltip} from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuUI from "@mui/material/Menu";
import Typography from "@mui/material/Typography";
import React, {useState} from "react";

import {useAuth} from "../../contexts/authContext.tsx";
import {doSignOut} from "../../firebase/auth.js";

const UserCabinet = () => {
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const {currentUser} = useAuth();

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <Box sx={{flexGrow: 0}}>
      <Tooltip title="Profile">
        <IconButton onClick={handleOpenUserMenu} sx={{p: 0}}>
          <Avatar>
            <AccountCircleOutlinedIcon />
          </Avatar>
        </IconButton>
      </Tooltip>
      <MenuUI
        sx={{mt: "45px"}}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        <Box display="flex" flexDirection="column" gap={2} p={2}>
          {currentUser?.firstName && (
            <Typography>
              {currentUser.firstName} {currentUser.lastName}
            </Typography>
          )}
          <Typography fontSize={12} marginTop="-15px">
            ({currentUser?.email})
          </Typography>
          <Button
            sx={{mt: 1}}
            color="primary"
            variant="contained"
            size="small"
            name="sign-up"
            onClick={() => doSignOut()}
          >
            Sign out
          </Button>
        </Box>
      </MenuUI>
    </Box>
  );
};

export default UserCabinet;