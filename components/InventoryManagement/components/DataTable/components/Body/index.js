import { CONTENT_TYPE } from '/constants/inventory_management'
import TitleId from './components/TitleId'
import TitleName from './components/TitleName'
import ContentType from './components/ContentType'
import Season from './components/Season'
import Episode from './components/Episode'
import PublishedDate from './components/PublishedDate'
import Programmable from './components/Programmable'

const Body = ({ data }) => (
  <tbody className="text-gray-8 text-sm">
    {data?.map((item, key) => {
      const isTypeMovie = item?.content_type === CONTENT_TYPE.MOVIE

      return (
        <tr key={key}>
          <TitleId data={ item.title_iid } />
          <TitleName data={ item.title_name } />
          <ContentType data={ item.content_type } />
          <Season data={ item.seasons } />
          <Episode data={{ isTypeMovie, count: item.episode_count }} />
          <PublishedDate data={{ isTypeMovie, time: item.publish_timestamp }} />
          <Programmable data={{ isTypeMovie }} />
        </tr>
      )
    })}
  </tbody>
)

export default Body
