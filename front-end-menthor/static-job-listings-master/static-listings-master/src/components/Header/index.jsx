import React from 'react'
import * as C from './styles'

export const Header = ({ tagsFilter, setTagsFilter }) => {
  const handleRemoveToTag = ({ target }) => {
    const tagToRemove = target.name
    const newTagsFilter = tagsFilter.filter((tag) => (
      tag !== tagToRemove
    ))

    setTagsFilter(newTagsFilter)
  }

  const clearTags = () => {
    setTagsFilter([])
  }

  return (
    <C.Header>
      {
        tagsFilter.length === 0 ? (
          ''
        ) : (
          <C.FilterList>
            <div className='containerToTags'>
              {tagsFilter.map((tag) => (
                <C.tagFilter key={tag}>
                  <p>{tag}</p>
                  <button 
                    className='delete' 
                    onClick={handleRemoveToTag}
                    name={tag}
                  >
                    <img 
                      name={tag}
                      src="./images/icon-remove.svg" 
                      alt="button remove tag" 
                    />
                  </button>
                </C.tagFilter>
              ))}
            </div>

            <C.ButtonClear onClick={clearTags}>
              Clear
            </C.ButtonClear>
          </C.FilterList>
        )
      }
    </C.Header>
  )
}
