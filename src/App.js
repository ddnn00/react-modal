import { useState } from "react";
import "./components/RatingModal/RatingModal.css"
import Title from './components/RatingModal/Title'
import Text from './components/RatingModal/Text'
import Rating from './components/RatingModal/Rating'

function App() {
  const [firstModalActive, setFirstModalActive] = useState(false)
  const [secondModalActive, setSecondModalActive] = useState(false)
  const [thirdModalActive, setThirdModalActive] = useState(false)
  const [fourthModalActive, setForthModalActive] = useState(false)
  
  const modalVisibility = (val) => {
    setFirstModalActive(false)
    setSecondModalActive(false)
    setThirdModalActive(false)
    setForthModalActive(false)
    
    switch(val) 
    {
      case 1:
        setFirstModalActive(true)
        break;
      case 2:
        setSecondModalActive(true)
        break;
      case 3:
        setThirdModalActive(true)
        break;
      case 4:
        setForthModalActive(true)
        break;
    }
  }

  return (
    <div className="App">
      <div className="rating-modal_confirm-btn" onClick={() => { modalVisibility(1) }}>Open modal</div>
      
      <div className={firstModalActive ? "rating-modal_background active" : "rating-modal_background"}>            
        <div className="rating-modal" style={{ height: '379px' }}>
            <div className="rating-modal_close" onClick={() => setFirstModalActive(false)} />
            <div className="rating-modal_title-img" />
            <div className="container">
                <Title text="Помогите нам стать лучше" marginTop="16px" />
                <Text text="Поделитесь своими впечатлениями о работе в сервисе. Это займет меньше двух минут."/>
                <div onClick={() => modalVisibility(2)} className="rating-modal_confirm-btn">Пройти опрос</div>
            </div>
        </div>
      </div>

      <div className={secondModalActive ? "rating-modal_background active" : "rating-modal_background"}>    
        <div className="rating-modal" style={{ height: '379px' }}>
            <div className="rating-modal_close" onClick={() => setSecondModalActive(false)} />
            <div className="container">
                <Title text="Оцените продукт по 10-балльной шкале" marginTop="20px" />
                <Text text="Какова вероятность, что вы порекомендуете сервис друзьям, коллегам, партнерам?"/>
                <Rating setRating={modalVisibility} items={[1,2,3,4,5,6,7,8,9,10]} />
            </div>
        </div>
      </div>

      <div className={thirdModalActive ? "rating-modal_background active" : "rating-modal_background"}>    
        <div className="rating-modal" style={{ height: '379px' }}>
            <div className="rating-modal_close" onClick={() => setThirdModalActive(false)} />
            <div className="container">
                <Title text="Расскажите подробнее" marginTop="20px" />
                <Text text="Напишите, пожалуйста, почему вы дали такую оценку. Это поможет нам сделать сервис лучше."/>
                <div className="textarea-title">Комментарий</div>
                <textarea placeholder="Введите текст..." className="rating-textarea" />
                <div onClick={() => modalVisibility(4)} className="rating-modal_confirm-btn">Отправить отзыв</div>
            </div>
        </div>
      </div>

      <div className={fourthModalActive ? "rating-modal_background active" : "rating-modal_background"}>    
        <div className="rating-modal" style={{ height: '130px' }}>
            <div className="rating-modal_close" onClick={() => setForthModalActive(false)} />
            <div className="container">
                <Title text="Спасибо!" marginTop="20px" />
                <Text text="Мы изучим все отзывы и учтём их в дальнейшей работе." />
            </div>
        </div>
      </div>

    </div>
  );
}

export default App;