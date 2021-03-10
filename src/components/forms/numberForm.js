import React from 'react'
import { Close } from '@material-ui/icons'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'

export default function NumberForm({ source, currentElement }) {
  const dispatch = useDispatch()
  const { handleSubmit, register, reset } = useForm()

  const questions = useSelector((state) => state.questions.questions)
  const relations = useSelector((state) => state.relations.relations)
  const actions = useSelector((state) => state.actions.actions)

  const onSubmit = (data) => {
    if (currentElement) {
      const payload = {
        id: currentElement.id,
        data: {
          number: currentElement.data.number,
          label: data.title,
          description: data.desc,
          answers: [
            {
              id: '1',
              label: data.answer,
            },
          ],
        },
        type: currentElement.type,
        position: currentElement.position,
      }
      dispatch({
        type: 'UPDATE_QUESTION',
        payload,
      })
    } else {
      const nodeElements = questions.concat(relations, actions)
      const questionNumber = questions.length + 1
      const questionId = nodeElements.length + 1
      const relationId = nodeElements.length + 2

      dispatch({
        type: 'ADD_QUESTION',
        payload: {
          id: questionId.toString(),
          data: {
            number: `Q${questionNumber}`,
            label: data.title,
            description: data.desc,
            answers: [
              {
                id: '1',
                label: data.answer,
              },
            ],
          },
          type: 'number',
          position: {
            x: source.x + 200,
            y: source.y + 200,
          },
        },
      })
      dispatch({
        type: 'ADD_RELATION',
        payload: {
          id: relationId.toString(),
          source: source.id,
          target: questionId.toString(),
          sourceHandle: source.handleId || '',
        },
      })
    }

    dispatch({ type: 'CLOSE_DRAWER' })
    reset()
  }
  return (
    <form className='content_wrapper' onSubmit={handleSubmit(onSubmit)}>
      <button
        className='btn close'
        type='button'
        onClick={() => {
          dispatch({ type: 'CLOSE_DRAWER' })
          reset()
        }}
      >
        <Close />
      </button>
      <div className='form'>
        <div className='form_group'>
          <h1>Вопрос</h1>
          <div className='input_group'>
            <label htmlFor='title'>Заголовок</label>
            <input
              id='title'
              name='title'
              type='text'
              defaultValue={currentElement?.data.label}
              ref={register}
              placeholder='Напишите заголовок вопроса'
            />
          </div>
          <div className='input_group'>
            <label htmlFor='desc'>Дополнительное описание</label>
            <input
              id='desc'
              name='desc'
              type='text'
              defaultValue={currentElement?.data.description}
              ref={register}
              placeholder='Напишите дополнительное описание'
            />
          </div>
        </div>
        <div className='form_group'>
          <h1>Ответы</h1>
          <div className='input_group'>
            <label htmlFor='answer'>Числовой ответ</label>
            <input
              id='answer'
              name='answer'
              type='number'
              defaultValue={currentElement?.data.answers[0].label}
              ref={register}
              placeholder='Введите цифру'
            />
          </div>
        </div>
      </div>
      <div className='actions'>
        <button
          className='btn secondary'
          type='button'
          onClick={() => {
            dispatch({ type: 'CLOSE_DRAWER' })
            reset()
          }}
        >
          Отменить
        </button>
        <button className='btn primary' type='submit'>
          Сохранить
        </button>
      </div>
    </form>
  )
}
