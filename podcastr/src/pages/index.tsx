// SPA =  useEffect(() => {
  //   fetch('http://localhost:3333/episodes').then(response => response.json()).then(data => console.log(data))
  // }, [])
  //Side effect. First parameter is saying what do u want to execute, and the second is when u want it and u can pass a variable to this function watch the changes of this variable and when it changes the useEffect is executed. To execute only once, pass a empty array
  // useEffect(() => {
  //   fetch('http://localhost:3333/episodes').then(response => response.json()).then(data => console.log(data))
  // }, [])

// SSR = export async function getServerSideProps() {
//   const response = await fetch('http://localhost:3333/episodes')
//   const data =  await response.json()

//   return {
//     props: {
//       episodes: data,
//     }
//   }
// }

// SSG = export async function getStaticProps() {
//   const response = await fetch('http://localhost:3333/episodes')
//   const data =  await response.json()

//   //key: revalidate = time calculated of how many times do u want to "rebuild" the webpage
//   return {
//     props: {
//       episodes: data,
//     },
//     revalidate: 60 * 60 * 8,
//   }
// }

import { GetStaticProps } from 'next';
import api from '../services/api'
import { format, parseISO } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR'
import { convertDurationToTimeString } from '../utils/convertDuration';

interface Episode {
  id: string,
  title: string;
  thumbnail: string;
  description: string;
  members: string;
  duration: number;
  durationAsString: string;
  url: string;
  publishedAt: string; 
}

interface HomeProps {
  episodes: Episode[];
}

export default function Home(props: HomeProps) {
  return (
    <>
      <h1>Index</h1>
      <p>{JSON.stringify(props.episodes)}</p> 
    </>
    
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await api.get('episodes', {
    params: {
      _limit: 12,
      _sort: 'published_at',
      _order: 'desc'
    }
  })

  const episodes = data.map(episode => {
    return {
      id: episode.id,
      title: episode.title,
      thumbnail: episode.thumbnail,
      members: episode.members,
      publishedAt: format(parseISO(episode.published_at), 'd MMM yy', { locale: ptBR }),
      duration: Number(episode.file.duration),
      durationAsString: convertDurationToTimeString(Number(episode.file.duration)),
      description: episode.description,
      url: episode.file.url
    }
  })

  return {
    props: {
      episodes: episodes,
    },
    revalidate: 60 * 60 * 8,
  }
}

