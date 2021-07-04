import React, {FC} from 'react';
import {Field, Form, Formik,} from 'formik';
import {ProfileAPIType} from '../../types/entities';

interface MyFormValues {
  firstName: string;
  picked: string;
}

type ProfileInfoFormType = {
  profile: ProfileAPIType
}
export const ProfileInfoForm: FC<ProfileInfoFormType> = ({profile}) => {
  const initialValues: MyFormValues = {firstName: '', picked: ''};
  return (
      <div>
        <h1>My Example</h1>
        <Formik
            initialValues={initialValues}
            onSubmit={(values, actions) => {
              console.log({values, actions});
              alert(JSON.stringify(values, null, 2));
              actions.setSubmitting(false);
            }}
        >
          <Form>
            <label htmlFor="Full name">Full name</label>
            <Field id="Full name" name="Full name" placeholder="Full name"/>
            <div>
              <b>Looking for a job</b>:
              <label>
                <Field type="radio" name="picked" value="Yes"/>
                Yes
              </label>
              <label>
                <Field type="radio" name="picked" value="No"/>
                NO
              </label>
            </div>
            <label htmlFor="skills">My professional skills</label>
            <Field id="skills" name="skills" placeholder="My skills" type='te'/>
            <div>
              <label htmlFor="About me">About me</label>
              <Field id="About me" name="About me" placeholder="About me"/>
            </div>
            <button type="submit">Submit</button>

          </Form>
        </Formik>
      </div>
  );
};

