import React, { useState, useCallback } from 'react'
import { CONTENT_TYPE } from '/constants/inventory_management'
import SeriesHandler from './components/SeriesHandler'
import Tr from '../../../shared/Tr'
import TitleId from './components/TitleId'
import TitleName from '../../../shared/TitleName'
import ContentType from '../../../shared/ContentType'
import Season from './components/Season'
import Episode from '../../../shared/Episode'
import PublishedDate from '../../../shared/PublishedDate'
import Programmable from '../../../shared/Programmable'
import SeasonDetail from './components/SeasonDetail'

const Body = ({ data }) => {
  const [ isShownChildren, setIsShownChildren ] = useState(false)

  const onToggleChildren = useCallback((key, isTypeMovie) => {
    if (!isTypeMovie) {
      setIsShownChildren(prevState => !prevState)
    }
  }, [])

  return (
    <tbody className="text-gray-8 text-sm">
      {data?.map((item, key) => {
        const isTypeMovie = item?.content_type === CONTENT_TYPE.MOVIE
  
        return (
          <React.Fragment key={key}>
            <Tr onClick={() => { onToggleChildren(key, isTypeMovie) }}>
              <SeriesHandler
                isShownSymbol={ !isTypeMovie }
                isShownChildren={ isShownChildren }
              />
              <TitleId data={ item.title_iid } />
              <TitleName data={ item.title_name } />
              <ContentType data={ item.content_type } />
              <Season data={ item.seasons } />
              <Episode
                isShownCount={ !isTypeMovie }
                count={ item.episode_count }
              />
              <PublishedDate
                isDate={ isTypeMovie }
                time={ item.publish_timestamp }
              />
              <Programmable
                isActivated={ item.activate }
                description={ isTypeMovie ? 'Single Movie' : 'All Season' }
              />
            </Tr>
            { (!isTypeMovie && isShownChildren) && (
              <SeasonDetail data={ item?.seasons } />
            )}
          </React.Fragment>
        )
      })}
    </tbody>
  )
}

export default Body
