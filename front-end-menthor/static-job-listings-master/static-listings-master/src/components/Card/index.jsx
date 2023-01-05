import React from 'react'
import * as C from './styles'

export const Card = ({ jobs, tagsFilter, setTagsFilter }) => {

  const handleSearch = ({ target }) => {
    const tagSearch = target.innerText

    tagsFilter.includes(tagSearch) ? (
      alert('Esse item ja esta incluido.')
    ) : (
      setTagsFilter([...tagsFilter, tagSearch])
    )
  }

  return (
    <C.Container>
      <div className="ownerInfos">
        <img src={jobs.logo} alt="" />
        <div className='infoCard'>
          <div className='owner'>
            <h2>{jobs.company}</h2>
              {jobs.new ? <p className='new'>NEW!</p> : ''}
              {jobs.featured ? <p className='featured'>FEATURED</p> : ''}
          </div>
          <a href="#">
            <h2 className='title'>{jobs.position}</h2>
          </a>
          <div className="infosPost">
            <p>{jobs.postedAt} • {jobs.contract} • {jobs.location}</p>
          </div>
        </div>
      </div>


      <C.Tags>
        <C.ButtonTag onClick={handleSearch}>
          {jobs.role}
        </C.ButtonTag>
        <C.ButtonTag onClick={handleSearch}>
          {jobs.level}
        </C.ButtonTag>

        {jobs.languages.map((lang) => (
          <C.ButtonTag key={lang} onClick={handleSearch}>
            {lang}
          </C.ButtonTag>
        ))}

        {jobs.tools.map((tool) => (
          <C.ButtonTag key={tool} onClick={handleSearch}>
            {tool}
          </C.ButtonTag>
        ))}
      </C.Tags>

      {/* <C.Tags>
        {tags.map((tag) => (
          <C.ButtonTag>
            {tag}
          </C.ButtonTag>
        ))}
      </C.Tags> */}
    </C.Container>
  )
}
