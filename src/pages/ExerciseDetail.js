
import React,{useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { exerciseOptions, fetchData, youtubeoptions } from '../utils/fetchData'
import { Box, Stack, Typography } from '@mui/material'
import ExerciseVideos from '../components/ExerciseVideos'
import SimilarExercise from '../components/similarexercises'
import Detail from '../components/detail'
import Footer from '../components/Footer'

const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  
  const [exerciseVideos, setExerciseVideos] = useState({});
  const { id } = useParams();
  useEffect(() => {
    const fetchExercisesData = async () => {
      const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
      const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';
      const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exerciseOptions);
      const exerciseVideosData = await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name} exercise`, youtubeoptions);
      setExerciseVideos(exerciseVideosData.contents);
      setExerciseDetail(exerciseDetailData);
    }
    fetchExercisesData()
  })
  return (
    <div>
      <Box>
        <Detail exerciseDetail={exerciseDetail}/>
        <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name}/>
        <SimilarExercise/>
        <Footer></Footer>
      </Box>
    </div>
  )
}

export default ExerciseDetail
