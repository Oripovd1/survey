import React, { memo, useState } from 'react'
import { Handle } from 'react-flow-renderer'
import { PlayArrowRounded } from '@material-ui/icons'
import { Popover } from '@material-ui/core'
import { useDispatch } from 'react-redux'

export default memo(({ id, xPos, yPos }) => {
  const [currentElement, setCurrentElement] = useState(null)
  const open = Boolean(currentElement)
  const dispatch = useDispatch()

  const createQuestion = () => {
    dispatch({
      type: 'OPEN_DRAWER',
      payload: { id, x: xPos, y: yPos },
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
      <Popover
        open={open}
        anchorEl={currentElement}
        onClose={() => setCurrentElement(null)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <div className='popover'>
          <h3>Добавить блок</h3>
          <button>
            <div className='imgWrapper'>
              <img src='romb.svg' alt='Condition type' />
            </div>
            <div className='text'>
              <span className='title'>Условие</span>
              <p>Выберите условие</p>
            </div>
          </button>
          <button onClick={createQuestion}>
            <div className='imgWrapper'>
              <img src='text.svg' alt='Text type' />
            </div>
            <div className='text'>
              <span className='title'>Текстовый ответ</span>
              <p>Выбрать текстовой ответ</p>
            </div>
          </button>
          <button>
            <div className='imgWrapper'>
              <img src='number.svg' alt='Number type' />
            </div>
            <div className='text'>
              <span className='title'>Числовой ответ</span>
              <p>Выбрать числовой ответ</p>
            </div>
          </button>
          <button>
            <div className='imgWrapper'>
              <img src='radio.svg' alt='Radio type' />
            </div>
            <div className='text'>
              <span className='title'>Одиночный выбор</span>
              <p>Выбрать одиночный ответ</p>
            </div>
          </button>
          <button>
            <div className='imgWrapper'>
              <img src='checkbox.svg' alt='Checkbox type' />
            </div>
            <div className='text'>
              <span className='title'>Множественный выбор</span>
              <p>Выбрать множественный ответ</p>
            </div>
          </button>
        </div>
      </Popover>
    </>
  )
})
