import React from 'react'
import './RatingModal.css'
import Title from './Title'
import Text from './Text'
import Rating from './Rating'

const RatingModal = ({ modalState, setModalState }) => {
    switch(modalState) 
    {
        case 0:
            return (
                null
            )
        case 1:
            return (
            <div className="rating-modal_background active">            
                <div className="rating-modal" style={{ height: '379px' }}>
                    <div className="rating-modal_close" onClick={() => setModalState(0)} />
                    <div className="rating-modal_title-img" />
                    <div className="container">
                        <Title text="Помогите нам стать лучше" marginTop="16px" />
                        <Text text="Поделитесь своими впечатлениями о работе в сервисе. Это займет меньше двух минут."/>
                        <div onClick={() => setModalState(modalState + 1)} className="rating-modal_confirm-btn">Пройти опрос</div>
                    </div>
                </div>
            </div>
            )
        case 2:
            return (
                <div className="rating-modal_background active">    
                    <div className="rating-modal" style={{ height: '379px' }}>
                        <div className="rating-modal_close" onClick={() => setModalState(0)} />
                        <div className="container">
                            <Title text="Оцените продукт по 10-балльной шкале" marginTop="20px" />
                            <Text text="Какова вероятность, что вы порекомендуете сервис друзьям, коллегам, партнерам?"/>
                            <Rating setRating={() => setModalState(modalState + 1)} items={[1,2,3,4,5,6,7,8,9,10]} />
                        </div>
                    </div>
                </div>
            )
        case 3:
            return (
                <div className="rating-modal_background active">    
                    <div className="rating-modal" style={{ height: '379px' }}>
                        <div className="rating-modal_close" onClick={() => setModalState(0)} />
                        <div className="container">
                            <Title text="Расскажите подробнее" marginTop="20px" />
                            <Text text="Напишите, пожалуйста, почему вы дали такую оценку. Это поможет нам сделать сервис лучше."/>
                            <div className="textarea-title">Комментарий</div>
                            <textarea placeholder="Введите текст..." className="rating-textarea" />
                            <div onClick={() => setModalState(modalState + 1)} className="rating-modal_confirm-btn">Отправить отзыв</div>
                        </div>
                    </div>
                </div>
            )
        case 4: 
            return (
                <div className="rating-modal_background active">    
                    <div className="rating-modal" style={{ height: '130px' }}>
                        <div className="rating-modal_close" onClick={() => setModalState(0)} />
                        <div className="container">
                            <Title text="Спасибо!" marginTop="20px" />
                            <Text text="Мы изучим все отзывы и учтём их в дальнейшей работе." />
                        </div>
                    </div>
                </div>
            )
    }
}

export default RatingModal