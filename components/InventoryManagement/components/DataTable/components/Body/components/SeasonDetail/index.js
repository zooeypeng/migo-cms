import SeasonId from './components/SeasonId'
import TitleName from '../../../../../shared/TitleName'
import ContentType from '../../../../../shared/ContentType'
import SeasonNumber from '../../../../../shared/SeasonNumber'
import Episode from '../../../../../shared/Episode'
import PublishedDate from '../../../../../shared/PublishedDate'
import Programmable from '../../../../../shared/Programmable'

const SeasonDetail = ({ data }) => (
  <>
    {
      data?.map((item, key) => (
        <tr key={`level-2-${key}`}>
          <td></td>
          <SeasonId data={ item.season_id } />
          <TitleName data={ item.season_name} />
          <ContentType />
          <SeasonNumber data={ item.season_number } />
          <Episode count={ item.episode_count } />
          <PublishedDate time={ item.publish_timestamp } />
          <Programmable>All Episode</Programmable>
        </tr>
      ))
    }
  </>
)

export default SeasonDetail
