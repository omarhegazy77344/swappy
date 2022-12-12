import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

export default function UserAvatar(props) {
  return (
    <Stack direction="row" spacing={1}>
      <Avatar alt="Ammar Sharp" src="/static/images/avatar/1.jpg" sx={props} />
    </Stack>
  );
}