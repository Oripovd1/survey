import React, { memo } from 'react'
import { Handle } from 'react-flow-renderer'

export default memo(({ data }) => {
  return (
    <>
      <Handle
        type='target'
        position='top'
        style={{ background: '#555' }}
        onConnect={(params) => console.log('handle onConnect', params)}
      />
      <div className='question'>
        <h3>{data.title}</h3>
        <ul className='answer_list'>
          <li>First answer</li>
          <li>Second answer</li>
          <li>Third answer</li>
        </ul>
      </div>
      <Handle
        type='source'
        position='right'
        id='a'
        style={{ top: 100, right: 32, background: '#555' }}
      />
      <Handle
        type='source'
        position='right'
        id='b'
        style={{ bottom: 60, top: 'auto', right: 32, background: '#555' }}
      />
    </>
  )
})
