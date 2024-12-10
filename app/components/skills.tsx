'use client'

import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';
import { skills } from 'app/lib/resume-data'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: 'var(--item-background-color)',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: 'var(--text-color)',
}));

export default function Skills() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {skills.map((skill, index) => (
          <Grid key={index} size="auto">
            <Item elevation={6}>
              <p className="text-md font-semibold text-neutral-700 dark:text-neutral-100">{skill}</p>
            </Item>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}