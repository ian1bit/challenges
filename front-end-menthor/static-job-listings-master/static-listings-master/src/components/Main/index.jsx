import React from 'react'
import { Card } from '../Card'
import { Header } from '../Header'
import * as C from './styles'

export const Main = () => {
  const [jobs, setJobs] = React.useState([])
  const [tagsFilter, setTagsFilter] = React.useState([])

  React.useEffect(() => {
    fetch('../../../public/data.json')
      .then(res => res.json())
      .then(data => setJobs(data))
  }, [])

  return (
    <>
      <Header 
        tagsFilter={tagsFilter}
        setTagsFilter={setTagsFilter}
      />
      {jobs.map((job) => (
        <C.Container key={job.id}>
          <Card 
            jobs={job} 
            tagsFilter={tagsFilter}
            setTagsFilter={setTagsFilter}
          />
        </C.Container>
      ))}
    </>
  )
}
