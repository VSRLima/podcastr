// SPA =  useEffect(() => {
  //   fetch('http://localhost:3333/episodes').then(response => response.json()).then(data => console.log(data))
  // }, [])

// SSR 
// SSG

import { useEffect } from "react"

export default function Home(props) {
  //Side effect. First parameter is saying what do u want to execute, and the second is when u want it and u can pass a variable to this function watch the changes of this variable and when it changes the useEffect is executed. To execute only once, pass a empty array
  // useEffect(() => {
  //   fetch('http://localhost:3333/episodes').then(response => response.json()).then(data => console.log(data))
  // }, [])

  console.log(props.episodes)
  return (
    <>
      <h1>Index</h1>
      <p>{JSON.stringify(props.episodes)}</p> 
    </>
    
  )
}

export async function getServerSideProps() {
  const response = await fetch('http://localhost:3333/episodes')
  const data =  await response.json()

  return {
    props: {
      episodes: data,
    }
  }
}

