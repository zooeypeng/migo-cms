import Td from '../Td'

const OPTIONS = {
  day: 'numeric',
  month: 'short',
  year: 'numeric',
}

const PublishedDate = ({ data }) => {
  const formattedDate = data.time && new Date(data.time).toLocaleString('en-US', OPTIONS)
  
  return (
    <Td>
      { data.isTypeMovie ? formattedDate : '--' }
    </Td>
  )
}

export default PublishedDate