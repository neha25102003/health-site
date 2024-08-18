import React from 'react'
import { Box, Stack, Typography,Button} from '@mui/material'
import { Link } from 'react-router-dom'

const ExerciseCard = ({ exercise }) => {
  return (
    <Link className="exercise-card" to={`/exercise/${exercise.id}`}>
        <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
        <Stack direction={'row'} >
        <Button sx={{ ml: '21px', color: '#fff', background: '#E10600', fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize' }}>
            {exercise.bodyPart}
        </Button>
        <Button sx={{ ml: '21px', color: '#fff', background: '#FEDD00', fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize' }}>
            {exercise.target}
        </Button>
        </Stack>
        <Typography ml='21px' color={'#000'} fontWeight={'bold'} textTransform={'capitalize'} fontSize={'22px'} pb={'10px'} mt={'10px'}>
        {exercise.name}
        </Typography>
    </Link>
  )
}

export default ExerciseCard
