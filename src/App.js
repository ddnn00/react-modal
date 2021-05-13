import React, { useState, Fragment } from "react";
import "./components/RatingModal/RatingModal.css"
import RatingModal from "./components/RatingModal"

function App() {
  const [modalState, setModalState] = useState(0);

  return (
    <div className="App">
      <div className="rating-modal_confirm-btn" onClick={() => setModalState(modalState + 1)}>open modal</div>
      <RatingModal modalState={modalState} setModalState={setModalState} />
    </div>
  )
}

export default App;