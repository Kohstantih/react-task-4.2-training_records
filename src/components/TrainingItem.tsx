import { TrainingItemPropsType } from "../types/TrainingItemPropsType";

export default function TrainingItem({ objItem, editItem, delItem }: TrainingItemPropsType) {
    return (
        <li key={objItem.id} data-id={objItem.id} className="training_item">
            <span className="date_inf inf_item">{objItem.date}</span>
            <span className="distance_inf inf_item">{objItem.distance}<span className="distance_units"> км</span></span>
            <div className="buttons_box">
                <button
                    type="button"
                    className="btn_edit btn_ctrl-records"
                    onClick={editItem}
                >
                    <i className="fa-solid fa-pencil"></i>
                </button>
                <button
                    type="button"
                    className="btn_del btn_ctrl-records"
                    onClick={delItem}
                >
                    <i className="fa-regular fa-trash-can"></i>
                </button>
            </div>
        </li>
    )
}