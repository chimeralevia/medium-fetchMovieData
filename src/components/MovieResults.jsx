import { CircularProgress, Box, Typography } from '@material-ui/core';
import React from 'react';
import FetchMovieData from '../Util/FetchMovieData';

function MovieResults({ searchLabel }) {
    const { response, isLoading, error } = FetchMovieData("search", searchLabel)

    return (
        <Box p={3}>
            <Box>
                {
                    isLoading ?
                        <CircularProgress color="secondary" />
                        :
                        response && response.titles.map((e, i) => {
                            return (
                                <Box key={i} m={2}>
                                    <img alt={e.title} src={e.image} style={{width:150,height:200}}/>
                                    <Typography>{e.title}</Typography>
                                </Box>
                            )
                        })
                }
            </Box>
            <Box>
                {error && error.message}
            </Box>
        </Box>
    );
}

export default MovieResults;