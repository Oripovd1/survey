import React, { useEffect, useRef } from 'react'
import './rightbar.scss'
import { useSelector, useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'

// main layout manager
const Rightbar = () => {
  const dispatch = useDispatch()
  const { open, source } = useSelector((state) => state.drawer)
  const questions = useSelector((state) => state.questions.questions)
  const relations = useSelector((state) => state.relations.relations)
  const actions = useSelector((state) => state.actions.actions)

  const { handleSubmit, register, reset } = useForm()

  const onSubmit = (data) => {
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
              id: questionId.toString(),
              label: data.answer,
              value: data.answer,
              order: 1,
            },
            {
              id: relationId.toString(),
              label: data.answer2,
              value: data.answer2,
              order: 1,
            },
          ],
        },
        type: 'text',
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

    dispatch({ type: 'CLOSE_DRAWER' })
    reset()
  }

  const wrapperRef = useRef(null)
  useOutsideCloseMenu(wrapperRef)

  function useOutsideCloseMenu(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          dispatch({ type: 'CLOSE_DRAWER' })
        }
      }
      document.addEventListener('mousedown', handleClickOutside)

      return () => {
        document.removeEventListener('mousedown', handleClickOutside)
      }
    }, [ref])
  }

  return (
    <div className={`rightbar ${open ? 'show' : ''}`} ref={wrapperRef}>
      <form className='content_wrapper' onSubmit={handleSubmit(onSubmit)}>
        <div className='form'>
          <div className='form_group'>
            <h1>Вопрос</h1>
            <div className='input_group'>
              <label htmlFor='title'>Заголовок</label>
              <input
                id='title'
                name='title'
                type='text'
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
                ref={register}
                placeholder='Напишите дополнительное описание'
              />
            </div>
          </div>
          <div className='form_group'>
            <h1>Ответ</h1>
            <div className='input_group'>
              <label htmlFor='answer'>Текстовый ответ</label>
              <input
                id='answer'
                name='answer'
                type='text'
                ref={register}
                placeholder='Введите свой ответ'
              />
            </div>
            <div className='input_group'>
              <label htmlFor='answer2'>Текстовый ответ</label>
              <input
                id='answer2'
                name='answer2'
                type='text'
                ref={register}
                placeholder='Введите свой ответ'
              />
            </div>
          </div>
        </div>
        <div className='actions'>
          <button className='btn secondary'>Отменить</button>
          <button className='btn primary' onSubmit={handleSubmit(onSubmit)}>
            Сохранить
          </button>
        </div>
      </form>
    </div>
  )
}

export default Rightbar
