import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import {Tooltip} from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuUI from "@mui/material/Menu";
import Typography from "@mui/material/Typography";
import {doc, getDoc} from "firebase/firestore";
import React, {useEffect, useState} from "react";

import {doSignOut} from "../../firebase/auth";
import {auth, db} from "../../firebase/firebase.ts";

const UserCabinet = () => {
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const [userDetails, setUserDetails] = useState(null);
  const fetchUserData = async () => {
    auth.onAuthStateChanged(async (user) => {
      console.log(user);

      const docRef = doc(db, "Users", user.uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setUserDetails(docSnap.data());
        console.log(docSnap.data());
      } else {
        console.log("User is not logged in");
      }
    });
  };
  useEffect(() => {
    fetchUserData();
  }, []);

  console.log("userDetails", userDetails);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <Box sx={{flexGrow: 0}}>
      <Tooltip title="Open settings">
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
          {userDetails?.firstName && (
            <Typography>
              {userDetails.firstName} {userDetails.lastName}
            </Typography>
          )}
          <Typography fontSize={12} marginTop="-15px">
            ({userDetails?.email})
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