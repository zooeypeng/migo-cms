import Td from '../Td'

const OPTIONS = {
  day: 'numeric',
  month: 'short',
  year: 'numeric',
}

const PublishedDate = ({ isDate = true, time }) => {
  const formattedDate = time && new Date(time).toLocaleString('en-US', OPTIONS)
  
  return (
    <Td>
      { isDate ? formattedDate : '--' }
    </Td>
  )
}

export default PublishedDate