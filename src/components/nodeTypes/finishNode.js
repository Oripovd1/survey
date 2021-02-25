import React, { memo } from 'react'
import { Handle } from 'react-flow-renderer'
import { CloseRounded } from '@material-ui/icons'

export default memo(({ data }) => {
  return (
    <>
      <Handle
        type='target'
        position='top'
        onConnect={(params) => console.log('handle onConnect', params)}
      ></Handle>
      <div className='finish_node'>
        <CloseRounded />
      </div>
    </>
  )
})
