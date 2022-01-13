import React from 'react'
import { CONTENT_TYPE } from '/constants/inventory_management'
import SeriesHandler from './components/SeriesHandler'
import TitleId from './components/TitleId'
import TitleName from '../../../shared/TitleName'
import ContentType from '../../../shared/ContentType'
import Season from './components/Season'
import Episode from '../../../shared/Episode'
import PublishedDate from '../../../shared/PublishedDate'
import Programmable from '../../../shared/Programmable'
import SeasonDetail from './components/SeasonDetail'

const Body = ({ data }) => {

  const handleClick = (key) => {
    console.log('click', key)
  }

  return (
    <tbody className="text-gray-8 text-sm">
      {data?.map((item, key) => {
        const isTypeMovie = item?.content_type === CONTENT_TYPE.MOVIE
  
        return (
          <React.Fragment key={key}>
            <tr
              onClick={() => { handleClick(key) }}>
              <SeriesHandler data={{ isTypeMovie }} />
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
              <Programmable>
                { isTypeMovie ? 'Single Movie' : 'All Season' }
              </Programmable>
            </tr>

            { !isTypeMovie && <SeasonDetail data={ item?.seasons } /> }
          </React.Fragment>
        )
      })}
    </tbody>
  )
}

export default Body
