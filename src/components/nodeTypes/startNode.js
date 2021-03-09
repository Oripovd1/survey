import React, { memo, useState } from 'react'
import { Handle } from 'react-flow-renderer'
import { PlayArrowRounded } from '@material-ui/icons'
import { useDispatch } from 'react-redux'
import NodeTypePopover from '../nodeTypePopover'

export default memo(({ id, xPos, yPos }) => {
  const [currentElement, setCurrentElement] = useState(null)
  const open = Boolean(currentElement)
  const dispatch = useDispatch()

  const createQuestion = (event, type) => {
    event.stopPropagation()
    dispatch({
      type: 'OPEN_DRAWER',
      payload: { id, x: xPos, y: yPos, type },
    })

    setCurrentElement(null)
  }

  return (
    <>
      <div
        style={{ height: '100%' }}
        onClick={(event) => setCurrentElement(event.target)}
      >
        <Handle
          type='source'
          position='bottom'
          className='linked'
          onConnect={(params) => console.log('handle onConnect', params)}
        ></Handle>
        <div className='start_node'>
          <PlayArrowRounded />
        </div>
      </div>
      <NodeTypePopover
        open={open}
        currentElement={currentElement}
        setCurrentElement={setCurrentElement}
        createQuestion={createQuestion}
      />
    </>
  )
})
