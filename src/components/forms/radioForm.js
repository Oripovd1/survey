import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Add, Close, DeleteOutline, DragIndicator } from '@material-ui/icons'

export default function RadioForm({ source, currentElement }) {
  const dispatch = useDispatch()
  const [answer, setAnswer] = useState('')
  const [values, setValues] = useState({
    title: '',
    desc: '',
    answers: [],
  })

  useEffect(() => {
    if (currentElement) {
      setValues({
        title: currentElement?.data.label,
        desc: currentElement?.data.description,
        answers: currentElement?.data.answers,
      })
    }
  }, [currentElement])

  const questions = useSelector((state) => state.questions.questions)
  const relations = useSelector((state) => state.relations.relations)
  const actions = useSelector((state) => state.actions.actions)

  const onSubmit = () => {
    if (currentElement) {
      const payload = {
        id: currentElement.id,
        data: {
          number: currentElement.data.number,
          label: values.title,
          description: values.desc,
          answers: values.answers,
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
            label: values.title,
            description: values.desc,
            answers: values.answers,
          },
          type: 'radio',
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
  }

  const addAnswer = () => {
    const id = values.answers.length + 1

    if (answer !== '') {
      setValues({
        ...values,
        answers: [...values.answers, { label: answer, id: id.toString() }],
      })
      setAnswer('')
    }
  }

  const deleteAnswer = (id) => {
    const filteredAnswers = values.answers.filter((answer) => answer.id !== id)
    setValues({ ...values, answers: filteredAnswers })
  }

  console.log('values => ', values)

  return (
    <div className='content_wrapper'>
      <button
        className='btn close'
        onClick={() => {
          dispatch({ type: 'CLOSE_DRAWER' })
          setValues({})
        }}
      >
        <Close />
      </button>
      <form className='form'>
        <div className='form_group'>
          <h1>Вопрос</h1>
          <div className='input_group'>
            <label htmlFor='title'>Заголовок</label>
            <input
              id='title'
              name='title'
              type='text'
              value={values.title}
              onChange={(e) => setValues({ ...values, title: e.target.value })}
              placeholder='Напишите заголовок вопроса'
            />
          </div>
          <div className='input_group'>
            <label htmlFor='desc'>Дополнительное описание</label>
            <input
              id='desc'
              name='desc'
              type='text'
              value={values.desc}
              onChange={(e) => setValues({ ...values, desc: e.target.value })}
              placeholder='Напишите дополнительное описание'
            />
          </div>
        </div>
        <div className='form_group'>
          <h1>Ответы</h1>
          <label htmlFor='answer'>Единственний выбор</label>
          {values.answers.length > 0 &&
            values.answers.map((item, index) => (
              <div key={index} className='input_group row'>
                <button className='btn drag_drop' type='button'>
                  <DragIndicator />
                </button>
                <div className='input'>{item.label}</div>
                <button
                  className='btn delete'
                  type='button'
                  onClick={() => deleteAnswer(item.id)}
                >
                  <DeleteOutline />
                </button>
              </div>
            ))}
          <div className='input_group'>
            <input
              id='answer'
              name='answer'
              type='text'
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              onKeyDown={(event) => {
                if (event.key === 'Enter') {
                  addAnswer()
                }
              }}
              placeholder='Напишите ответ'
            />
          </div>
          <button className='btn btn-icon' type='button' onClick={addAnswer}>
            <Add /> Добавить вопрос
          </button>
        </div>
      </form>
      <div className='actions'>
        <button
          className='btn secondary'
          onClick={() => {
            dispatch({ type: 'CLOSE_DRAWER' })
            setValues({})
          }}
        >
          Отменить
        </button>
        <button className='btn primary' onClick={onSubmit}>
          Сохранить
        </button>
      </div>
    </div>
  )
}
