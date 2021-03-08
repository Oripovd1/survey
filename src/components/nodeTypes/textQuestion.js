import React, { memo, useState } from 'react'
import { Handle } from 'react-flow-renderer'
import { Popover } from '@material-ui/core'
import { ExpandMore, Add } from '@material-ui/icons'
import { useDispatch } from 'react-redux'

export default memo(({ data, id, xPos, yPos }) => {
  const [currentElement, setCurrentElement] = useState(null)
  const open = Boolean(currentElement)

  const [handleId, setHandleId] = useState(null)
  const dispatch = useDispatch()

  const createQuestion = () => {
    dispatch({
      type: 'OPEN_DRAWER',
      payload: { id, x: xPos, y: yPos, handleId },
    })

    setCurrentElement(null)
  }

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
        <h3>
          <span className='question_number'>{data.number}</span>
          {data.label}
        </h3>
        <p className='desc'>{data.description}</p>
        <ul className='answer_list'>
          {data.answers.map((answer, index) => (
            <li key={answer.id}>
              {answer.label}
              <Handle
                type='source'
                position='right'
                id={answer.id}
                className={answer.linked ? 'linked' : ''}
                onClick={(event) => {
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
      <Popover
        open={open}
        anchorEl={currentElement}
        onClose={() => {
          setCurrentElement(null)
          setHandleId(null)
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
