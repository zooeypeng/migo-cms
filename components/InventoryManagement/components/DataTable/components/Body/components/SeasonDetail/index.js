import React from 'react'
import Td from '/components/InventoryManagement/components/shared/Td'
import SeasonId from './components/SeasonId'
import TitleName from '../../../../../shared/TitleName'
import ContentType from '../../../../../shared/ContentType'
import SeasonNumber from '../../../../../shared/SeasonNumber'
import Episode from '../../../../../shared/Episode'
import PublishedDate from '../../../../../shared/PublishedDate'
import Programmable from '../../../../../shared/Programmable'
import EpisodeDetail from './components/EpisodeDetail'

const SeasonDetail = ({ data }) => (
  <>
    {data?.map((item, key) => {
      return (
        <React.Fragment key={`level-e-${key}`}>
          <tr>
            <Td />
            <SeasonId data={ item.season_id } />
            <TitleName data={ item.season_name} />
            <ContentType data="Season" />
            <SeasonNumber data={ item.season_number } />
            <Episode count={ item.episode_count } />
            <PublishedDate time={ item.publish_timestamp } />
            <Programmable>All Episodes</Programmable>
          </tr>

          <EpisodeDetail data={item.episodes} />
        </React.Fragment>
      )
    })
    }
  </>
)

export default SeasonDetail
