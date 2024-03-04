import { forwardRef } from "react";
import { FormRecordsPropsType } from "../types/FormRecordsPropsType";

const FormRecords = forwardRef(function ({ submitForm }: FormRecordsPropsType, ref: React.LegacyRef<HTMLFormElement> | undefined) {
    return (
        <form
            ref={ref}
            className="add_records"
            onSubmit={submitForm}
        >
            <div className="wrapper_date add-records_item">
                <label htmlFor="date" className="label_item">Дата(дд.мм.гггг)</label>
                <input type="text" name="date" className="enter_date input_item" />
            </div>
            <div className="wrapper_distance add-records_item">
                <label htmlFor="distance" className="label_item">Пройдено км</label>
                <input type="text" name="distance" className="enter_distance input_item" />
            </div>
            <button type="submit" className="submit-records">Ok</button>
        </form>
    )
})

export default FormRecords;
