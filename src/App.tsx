import FormRecords from './components/FormRecords'
import TrainingList from './components/TrainingList'
import { createRef, useState } from 'react'
import { TrainingObjType } from './types/TrainingObjType'
import { addTrainingFunc } from './types/addTrainingFunc'
import { ClickButtonType } from './types/ClickButtonType'
import isDate from './func/isDate'
import isDistance from './func/isDistance'
import './App.css'

function App() {
  const [listTraining, changeList] = useState<TrainingObjType[]>([]);
  const [isEdit, changeStatusEdit] = useState(false);
  const formRef: React.LegacyRef<HTMLFormElement> | undefined = createRef();

  const addTraining: addTrainingFunc = (event) => {
    event.preventDefault();

    const date = event.target.date.value;
    const distance = event.target.distance.value;

    if (!isDate(date) || !isDistance(distance)) return;

    const id = `${new Date(date).getTime()}`;


    if (listTraining.find((el) => el.id === id)) {
      if (isEdit) {
        changeList(listTraining.map((el) => {
          if (el.id === id) el.distance = distance
          return el;
        }));
      } else {
        changeList(listTraining.map((el) => {
          if (el.id === id) el.distance =  `${+el.distance + +distance}`
          return el;
        }));
      }
    } else {
      const TrainingObj: TrainingObjType = {
        id,
        date,
        distance,
      };
    
      changeList([...listTraining, TrainingObj]);
    }

    changeStatusEdit(false);
    event.target.reset();
  }

  const delTraining: ClickButtonType = (e) => {
    const idItem= e.target.closest('li').dataset.id;
  
    changeList(listTraining.filter((el) => el.id !== idItem));
  }

  const editTraining: ClickButtonType = (e) => {
    changeStatusEdit(true);

    const idItem = e.target.closest('li').dataset.id;
    const editItem = listTraining.find((el) => el.id === idItem);
    if (formRef.current !== null) {
      formRef.current.date.value = editItem?.date;
      formRef.current.distance.value = editItem?.distance;
    }
  }

  return (
    <>
    <div className="training_records">
      <FormRecords submitForm={addTraining} ref={formRef}/>
      <div className="list_title">
        <span className="date_inf inf_item">Дата(дд.мм.гггг)</span>
        <span className="distance_inf inf_item">Пройдено<span className="distance_units"> км</span></span>
        <span className="buttons_box">Действия</span>
      </div>
      <TrainingList listTraining={listTraining} editItem={editTraining} delItem={delTraining}/>
    </div>
    </>
  )
}

export default App
