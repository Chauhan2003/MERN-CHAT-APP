import React, { useState } from 'react';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { Dialog, DialogContent, DialogActions, Button, Avatar, Box, Typography } from '@mui/material';

const ProfileDialog = ({ user, children }) => {
    const [open, setOpen] = useState(false);
    console.log(user);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            {children ? (
                <span onClick={handleOpen}>{children}</span>
            ) : (
                <AccountBoxIcon sx={{ color: 'black', cursor: 'pointer' }} onClick={handleOpen} />
            )}
            <Dialog onClose={handleClose} open={open}>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    padding: '20px'
                }}>
                    <Box>
                        <Avatar src={user.photo} sx={{
                            width: '150px',
                            height: '150px',
                            border: '1px solid gray'
                        }} />
                    </Box>
                    <DialogContent>
                        <Typography>
                            <strong>Name:</strong> {user.name}
                        </Typography>
                        <Typography>
                            <strong>Email:</strong> {user.email}
                        </Typography>
                        <Typography>
                            <strong>Phone:</strong> {user.phone}
                        </Typography>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} variant='contained' sx={{
                            background: '#7269EF',
                            '&:hover': {
                                background: '#6159CB'
                            }
                        }}>Close</Button>
                    </DialogActions>
                </Box>
            </Dialog>
        </>
    );
};

export default ProfileDialog;
