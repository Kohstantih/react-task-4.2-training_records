import { ClickButtonType } from "./ClickButtonType";
import { TrainingObjType } from "./TrainingObjType";

export type TrainingListPropsType = {
    listTraining: TrainingObjType[];
    editItem: ClickButtonType;
    delItem: ClickButtonType;
}