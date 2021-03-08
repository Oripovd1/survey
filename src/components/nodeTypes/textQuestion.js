import React, { memo, useState } from 'react'
import { Handle } from 'react-flow-renderer'
import { Popover } from '@material-ui/core'
import { ExpandMore, Add } from '@material-ui/icons'

export default memo(({ data }) => {
  const [currentElement, setCurrentElement] = useState(null)
  const open = Boolean(currentElement)

  return (
    <>
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
      >
        <ExpandMore />
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
        <span className='question_number'>{data.number}</span>
        <h3>{data.label}</h3>
        <ul className='answer_list'>
          {data.answers.map((answer, index) => (
            <li key={index}>
              {answer.label}
              <Handle
                type='source'
                position='right'
                id={index.toString()}
                className={answer.linked ? 'linked' : ''}
                onClick={(event) => setCurrentElement(event.target)}
              >
                {answer.linked ? '' : <Add />}
              </Handle>
            </li>
          ))}
        </ul>
      </div>
      <Popover
        open={open}
        anchorEl={currentElement}
        onClose={() => setCurrentElement(null)}
        anchorOrigin={{
          vertical: 'center',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'center',
          horizontal: 'left',
        }}
      >
        <div className='popover'>
          <h3>Block type</h3>
          <button>
            <img src='romb.svg' alt='Condition type' />
            <div className='text'>
              <span className='title'>Condition</span>
              <p>Select condition</p>
            </div>
          </button>
          <button>
            <img src='query.svg' alt='Question type' />
            <div className='text'>
              <span className='title'>Question</span>
              <p>Select question type</p>
            </div>
          </button>
        </div>
      </Popover>
    </>
  )
})
