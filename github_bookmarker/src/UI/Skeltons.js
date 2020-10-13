import React from 'react';
import { Skeleton } from "@material-ui/lab";
import Grid from "@material-ui/core/Grid";


const Skeltons = () => {
    return (
        <Grid item xs={12} sm={6} md={4} lg={4} xl={3}>
        <Skeleton variant="text" />
        <Skeleton variant="circle" width={40} height={40} />
        <Skeleton variant="rect" width={210} height={118} />
      </Grid>
    )
}

export default Skeltons
