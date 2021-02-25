import React, { memo } from 'react'
import { Handle } from 'react-flow-renderer'
import { PlayArrowRounded } from '@material-ui/icons'

export default memo(({ data }) => {
  return (
    <>
      <Handle
        type='source'
        position='bottom'
        className='linked'
        onConnect={(params) => console.log('handle onConnect', params)}
      ></Handle>
      <div className='start_node'>
        <PlayArrowRounded />
      </div>
    </>
  )
})
