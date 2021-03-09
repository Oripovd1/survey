import React from 'react'
import { Popover } from '@material-ui/core'

export default function NodeTypePopover({
  open,
  currentElement,
  setCurrentElement,
  createQuestion,
}) {
  return (
    <Popover
      open={open}
      anchorEl={currentElement}
      onClose={() => {
        setCurrentElement(null)
        // setHandleId(null)
      }}
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
        <button onClick={(event) => createQuestion(event, 'text')}>
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
        <button onClick={(event) => createQuestion(event, 'radio')}>
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
  )
}
