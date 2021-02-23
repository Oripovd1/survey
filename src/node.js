import React, { useState } from 'react'
import ReactFlow, { removeElements, addEdge } from 'react-flow-renderer'
import {
  Dialog,
  DialogTitle,
  Button,
  DialogContent,
  DialogActions,
  TextField,
} from '@material-ui/core'

const initialElements = [
  {
    id: '1',
    type: 'input',
    data: { label: 'Input Node' },
    position: { x: 250, y: 25 },
  },
  {
    id: '2',
    data: { label: 'Another Node' },
    position: { x: 100, y: 125 },
  },
]

export default function Node() {
  const [elements, setElements] = useState(initialElements)
  const onElementsRemove = (elementsToRemove) =>
    setElements((els) => removeElements(elementsToRemove, els))
  const onConnect = (params) => setElements((els) => addEdge(params, els))

  const [nodeTitle, setNodeTitle] = useState('')
  const [open, setOpen] = useState(true)
  const handleClickOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }

  const createNode = () => {
    if (nodeTitle === '') {
      console.log('Empty node is not allowed')
    }
    const newNode = {
      id: elements.length + 1,
      data: { label: nodeTitle },
      position: {
        x: Math.floor(Math.random() * 501),
        y: Math.floor(Math.random() * 501),
      },
    }
    setElements([...elements, newNode])
    console.log('node created')
  }
  return (
    <div style={{ height: '100vh' }}>
      <ReactFlow
        elements={elements}
        onElementsRemove={onElementsRemove}
        onConnect={onConnect}
        deleteKeyCode={46}
      />
      <div>
        <Button variant='outlined' color='primary' onClick={handleClickOpen}>
          Open dialog
        </Button>
        <Dialog
          onClose={handleClose}
          aria-labelledby='customized-dialog-title'
          open={open}
          fullWidth
        >
          <DialogTitle id='customized-dialog-title' onClose={handleClose}>
            Create new node
          </DialogTitle>
          <DialogContent dividers>
            <TextField
              id='node'
              variant='outlined'
              value={nodeTitle}
              onChange={(event) => setNodeTitle(event.target.value)}
              placeholder='Type new node here...'
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button autoFocus onClick={createNode} color='primary'>
              Save
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  )
}
