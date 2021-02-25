import React, { memo, useState } from 'react'
import { Handle } from 'react-flow-renderer'
import { Popover } from '@material-ui/core'
import { ExpandMore, Add } from '@material-ui/icons'

export default memo(({ data }) => {
  const [currentElement, setCurrentElement] = useState(null)
  const open = Boolean(currentElement)
  console.log('current element => ', currentElement)
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
      <div className='question'>
        <h3>{data.title}</h3>
        <ul className='answer_list'>
          <li>
            First answer{' '}
            <Handle
              type='source'
              position='right'
              id='a'
              className='linked'
              onClick={(event) => setCurrentElement(event.target)}
            ></Handle>
          </li>
          <li>
            Second answer{' '}
            <Handle
              type='source'
              position='right'
              id='b'
              className='linked'
              onClick={(event) => setCurrentElement(event.target)}
            ></Handle>
          </li>
          <li>
            Third answer{' '}
            <Handle
              type='source'
              position='right'
              id='c'
              onClick={(event) => setCurrentElement(event.target)}
            >
              <Add />
            </Handle>
          </li>
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
