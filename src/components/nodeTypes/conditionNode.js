import React, { memo, useState } from 'react'
import { Handle } from 'react-flow-renderer'
import { Popover } from '@material-ui/core'
import { ChevronRight, ExpandMore } from '@material-ui/icons'

export default memo(({ data }) => {
  const [currentElement, setCurrentElement] = useState(null)
  const open = Boolean(currentElement)
  console.log('current element => ', currentElement)
  return (
    <>
      <Handle
        type='source'
        position='bottom'
        onConnect={(params) => console.log('handle onConnect', params)}
      >
        <ExpandMore />
      </Handle>
      <div className='condition'>
        <h3>
          <img src='romb.svg' alt='Condition' /> Условия
        </h3>
        <p>{data.title}</p>
        <ul className='answer_list'>
          {data.answers.map((answer, index) => (
            <li key={index}>
              {answer.title}
              <Handle
                type='source'
                position='left'
                id={index.toString()}
                className={answer.linked ? 'linked' : ''}
                onClick={(event) => setCurrentElement(event.target)}
              >
                {answer.linked ? '' : <ChevronRight />}
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
