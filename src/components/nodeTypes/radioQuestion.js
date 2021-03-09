import React, { memo, useState } from 'react'
import { Handle } from 'react-flow-renderer'
import { ExpandMore, Add } from '@material-ui/icons'
import { useDispatch } from 'react-redux'
import NodeTypePopover from '../nodeTypePopover'

export default memo(({ data, id, xPos, yPos, type }) => {
  const [currentElement, setCurrentElement] = useState(null)
  const open = Boolean(currentElement)

  const [handleId, setHandleId] = useState(null)
  const dispatch = useDispatch()

  const createQuestion = (event, type) => {
    event.stopPropagation()
    dispatch({
      type: 'OPEN_DRAWER',
      payload: { id, x: xPos, y: yPos, type, handleId },
    })

    setCurrentElement(null)
  }

  const handleClickCard = () => {
    const payload = {
      id,
      data: {
        number: data.number,
        label: data.label,
        description: data.description,
        answers: data.answers,
      },
      type,
      position: {
        x: xPos,
        y: yPos,
      },
    }

    dispatch({
      type: 'EDIT_QUESTION',
      payload,
    })
  }

  return (
    <div className='wrapper' onClick={handleClickCard}>
      <Handle
        type='target'
        position='top'
        onConnect={(params) => console.log('handle onConnect', params)}
      >
        <ExpandMore />
      </Handle>
      <Handle
        type='source'
        position='bottom'
        onConnect={(params) => console.log('handle onConnect', params)}
        onClick={(event) => {
          event.stopPropagation()
          setCurrentElement(event.target)
        }}
      >
        <Add />
      </Handle>
      {/* {data.multiple && (
        <Handle
          type='source'
          position='right'
          id={data.id}
          className='multiple'
          onConnect={(params) => console.log('handle onConnect', params)}
        />
      )} */}
      <div className='question'>
        <h3>
          <span className='question_number'>{data.number}</span>
          {data.label}
        </h3>
        <p className='desc'>{data.description}</p>
        <ul className='answer_list'>
          {data.answers.map((answer) => (
            <li key={answer.id}>
              {answer.label}
              <Handle
                type='source'
                position='right'
                id={answer.id}
                className={answer.linked ? 'linked' : ''}
                onClick={(event) => {
                  event.stopPropagation()
                  setCurrentElement(event.target)
                  setHandleId(answer.id)
                }}
              >
                {answer.linked ? '' : <Add />}
              </Handle>
            </li>
          ))}
        </ul>
      </div>
      <NodeTypePopover
        open={open}
        currentElement={currentElement}
        setCurrentElement={setCurrentElement}
        createQuestion={createQuestion}
      />
    </div>
  )
})
