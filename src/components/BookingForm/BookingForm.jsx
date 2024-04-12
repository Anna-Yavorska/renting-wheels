import { BookingCalendarField } from 'components/BookingCalendarField/BookingCalendarField';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';


const bookingSchema = Yup.object().shape({
  name: Yup.string().min(3, 'Too Short!').trim().required('Required'),
  email: Yup.string().min(3, 'Too Short!').trim().required('Required'),
  comment: Yup.string().min(8, 'Too Short!').trim().required('Required'),
});

export const BookingForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(() => console.log(values));
    actions.resetForm()
  }
  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        comment: '',
        date: new Date(),
      }}
      validationSchema={bookingSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <label htmlFor="name">Username</label>
        <Field id="name" name="name" />
        <ErrorMessage name="name" component="span" />

        <label htmlFor="email">Email</label>
        <Field id="email" name="email" />
        <ErrorMessage name="email" component="span" />

        <label htmlFor="comment">Comment</label>
        <Field id="comment" name="comment" />
        <ErrorMessage name="comment" component="span" />

        <Field name="date" component={BookingCalendarField} label="date" minDate={new Date()} />

        <button type="submit">Send</button>
      </Form>
    </Formik>
  );
};