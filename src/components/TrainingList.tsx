import { TrainingListPropsType } from "../types/TrainingListPropsType";
import TrainingItem from "./TrainingItem";

export default function TrainingList({ listTraining, editItem, delItem }: TrainingListPropsType) {
    const result = listTraining.sort(function (a, b) {
        return (new Date(b.date).getTime() - new Date(a.date).getTime()) ;
      });
    return (
        <ul className="training_list">
            {result.map((item) => <TrainingItem objItem={item} editItem={editItem} delItem={delItem} />)}
        </ul>
    )
}