import { useFormikContext, useField } from 'formik';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css"

export const BookingCalendarField = ({field, label, ...props }) => {
  const { setFieldValue } = useFormikContext();

  const {name} = useField(field);
 return (
   <div>
     <label htmlFor={name}>{label}</label>
     <DatePicker
       {...field}
       {...props}
       selected={(field.value && new Date(field.value)) || null}
       onChange={(val) => { setFieldValue(field.name, val); }}
     />
   </div>
 );
}
