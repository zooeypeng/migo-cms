import React, { useState, useCallback } from 'react'
import Td from '/components/InventoryManagement/components/shared/Td'
import SeasonId from './components/SeasonId'
import TitleName from '../../../../../shared/TitleName'
import ContentType from '../../../../../shared/ContentType'
import SeasonNumber from '../../../../../shared/SeasonNumber'
import Episode from '../../../../../shared/Episode'
import PublishedDate from '../../../../../shared/PublishedDate'
import Programmable from '../../../../../shared/Programmable'
import EpisodeDetail from './components/EpisodeDetail'

const SeasonDetail = ({ data }) => {
  const [ isShownChildren, setIsShownChildren ] = useState(false)

  const onToggleChildren = useCallback((key) => {
    setIsShownChildren(prevState => !prevState)
  }, [])

  return (
    <>
      {data?.map((item, key) => {
        return (
          <React.Fragment key={`level-3-${key}`}>
            <tr onClick={() => { onToggleChildren(key) }}>
              <Td />
              <SeasonId
                data={ item.season_id }
                isShownChildren={ isShownChildren }
              />
              <TitleName data={ item.season_name} />
              <ContentType data="Season" />
              <SeasonNumber data={ item.season_number } />
              <Episode count={ item.episode_count } />
              <PublishedDate time={ item.publish_timestamp } />
              <Programmable>All Episodes</Programmable>
            </tr>
  
            { isShownChildren && <EpisodeDetail data={ item.episodes } />}
          </React.Fragment>
        )
      })
      }
    </>
  )
}

export default SeasonDetail
