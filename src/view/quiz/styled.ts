import styled from "styled-components"

interface QuestionItemProps {
  border?: string
}

export const QuizContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;

  button {
    margin-top: 30px;
  }
`
export const QuestionsBlock = styled.div`
  margin-top: 35px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const QuestionItem = styled.div<QuestionItemProps>`
  margin-top: 10px;
  font-size: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  width: 350px;
  max-height: 100%;
  border-radius: 10px;
  border: ${(props) => props.border || "2px solid grey"};

  input[type="checkbox"] {
    appearance: none; /* Убираем стандартное отображение */
    -webkit-appearance: none; /* Для браузеров Webkit */
    -moz-appearance: none; /* Для Firefox */
    width: 20px;
    height: 20px;
    border-radius: 50%; /* Делаем его круглым */
    background-color: rgb(229, 226, 226); /* Фон, если не выбран */
    cursor: pointer;
    position: relative;
    transition: all 0.3s ease; /* Плавное изменение */
  }

  /* Когда чекбокс выбран */
  input[type="checkbox"]:checked {
    background-color: #aa00ff; /* Зеленый фон */
    border-color: #aa00ff; /* Зеленая граница */
  }

  /* Псевдоэлемент для "галочки" */
  input[type="checkbox"]:checked::before {
    content: ""; /* Контент галочки */
    position: absolute;
    left: 6px;
    top: 1.5px;
    width: 4px;
    height: 10px;
    border: solid white;
    border-width: 0 3px 3px 0;
    transform: rotate(45deg); /* Поворот для создания галочки */
  }
`

export const ImgStyled = styled.img`
  width: 20px;
  height: 20px;
`

export const InfoContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`
export const InfoBlock = styled.div`
  margin-top: 40px;

  h1 {
    font-size: 40px;
    font-weight: 600;
    text-align: center;
  }
  div {
    display: flex;
    justify-content: center;
    margin-top: 32px;
    margin-bottom: 24px;
  }
`

export const InfoText = styled.div`
  margin-top: 15px;
  font-size: 16x;
  font-weight: 400;
  max-width: 544px;
  text-align: center;
`
