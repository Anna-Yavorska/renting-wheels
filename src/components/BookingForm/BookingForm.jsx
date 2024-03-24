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
  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        comment: '',
      }}
      validationSchema={bookingSchema}
      onSubmit={(values, actions) => {
        dispatch(
          () => {
            console.log(values.name);
            console.log(values.email);
            console.log(values.comment);
          }
        );
        actions.resetForm();
      }}
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

        <button type="submit">Send</button>
      </Form>
    </Formik>
  );
};