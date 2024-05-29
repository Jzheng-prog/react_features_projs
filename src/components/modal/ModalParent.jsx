import React, { useState } from 'react'
import Modal from './Modal'
import "./styles.css"

const ModalParent = () => {

    const [showModal, setShowModal] = useState(false)

    function HandleToggleModal(){
        setShowModal(!showModal)
    }
    function onClose(){
        setShowModal(false)
    }
  return (
    <div>
      <button onClick={HandleToggleModal}>Open Modal</button>
      {
        showModal && <Modal onClose={onClose}/>
      }
    </div>
  )
}

export default ModalParent
