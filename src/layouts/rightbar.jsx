import React, { useEffect, useRef } from 'react'
import './rightbar.scss'
import { useSelector, useDispatch } from 'react-redux'
import TextForm from '../components/forms/textForm'
import RadioForm from '../components/forms/radioForm'
import CheckboxForm from '../components/forms/checkboxForm'

// main layout manager
const Rightbar = () => {
  const dispatch = useDispatch()
  const { open, source, currentElement } = useSelector((state) => state.drawer)

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
      {(source?.type || currentElement?.type) === 'text' && (
        <TextForm source={source} currentElement={currentElement} />
      )}
      {(source?.type || currentElement?.type) === 'radio' && (
        <RadioForm source={source} currentElement={currentElement} />
      )}
      {(source?.type || currentElement?.type) === 'checkbox' && (
        <CheckboxForm source={source} currentElement={currentElement} />
      )}
    </div>
  )
}

export default Rightbar
