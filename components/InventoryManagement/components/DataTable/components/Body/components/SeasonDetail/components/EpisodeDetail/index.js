import Td from '/components/InventoryManagement/components/shared/Td'
import EpisodeId from './components/EpisodeId'
import TitleName from '../../../../../../../shared/TitleName'
import ContentType from '../../../../../../../shared/ContentType'
import SeasonNumber from '../../../../../../../shared/SeasonNumber'
import Episode from '../../../../../../../shared/Episode'
import PublishedDate from '../../../../../../../shared/PublishedDate'
import Programmable from '../../../../../../../shared/Programmable'

const EpisodeDetail = ({ data }) => (
  <>
    {data?.map(( item, key ) => (
      <tr key={key}>
        <Td />
        <EpisodeId data={ item.episode_id } />
        <TitleName data={ item.episode_name } />
        <ContentType data="Episode" />
        <SeasonNumber data="--" />
        <Episode count={ `EP${ item.episode_number }` }/>
        <PublishedDate isDate={false} />
        <Programmable>Per Episode</Programmable>
      </tr>
    ))}
  </>
)

export default EpisodeDetail
