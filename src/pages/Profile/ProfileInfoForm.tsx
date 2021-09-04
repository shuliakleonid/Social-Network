import React, {FC} from 'react';
import {Field, Form, Formik,} from 'formik';
import {ProfileAPIType} from '../../types/entities';
import {useDispatch} from 'react-redux';
import {saveProfile, saveProfileUser} from '../../redux/profile-reducer';

interface MyFormValues {
  firstName: string;
  picked: string;
}

type ProfileInfoFormType = {
  profile: ProfileAPIType
}
export const ProfileInfoForm: FC<ProfileInfoFormType> = ({profile}) => {
  const initialValues: ProfileAPIType = profile;
  const dispatch = useDispatch()
  return (
      <div>
        <h1>My Example</h1>
        <Formik
            initialValues={initialValues}
            onSubmit={(values, actions) => {
              console.log({values, actions});
              alert(JSON.stringify(values, null, 2));
              dispatch(saveProfileUser(values))
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
              <label htmlFor="aboutMe">About me</label>
              <Field id="aboutMe" name="aboutMe" placeholder="About me"/>
            </div>
            <button type="submit">Submit</button>
          </Form>
        </Formik>
      </div>
  );
};

