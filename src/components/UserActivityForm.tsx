import React, { useState } from 'react';
import { useFieldArray, useForm } from 'react-hook-form';

import { FormData } from '../interface/activityForm';
import UserDataDisplay from './UserDataDisplay';

const UserActivityForm = () => {
  const {
    register,
    reset,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      user: {
        name: '',
        contactNumber: '',
      },
      activities: [
        {
          description: '',
          timeSpent: '',
        },
      ],
      isSubmitted: false,
    },
  });

  const [userData, setUserData] = useState<FormData>({
    user: {
      name: '',
      age: 0,
      contactNumber: '',
    },
    activities: [],
    isSubmitted: false,
  });

  const onSubmit = handleSubmit((data) => {
    setUserData((prevUserData) => ({
      ...prevUserData,
      activities: [...prevUserData.activities, ...data.activities],
      user: { ...prevUserData.user, ...data.user },
      isSubmitted: true,
    }));
    reset();
  });

  const { fields, append, remove } = useFieldArray({
    name: 'activities',
    control,
  });

  const handleAddActivity = () => {
    append({ description: '', timeSpent: '' });
  };

  const handleDeleteActivity = (index: number) => {
    remove(index);
  };

  return (
    <>
      <form onSubmit={onSubmit} className="user-form">
        <h1 className="heading">User Activity</h1>
        <div className="form-item">
          <label htmlFor="name">Name </label>
          <input
            {...register('user.name', {
              required: 'Name is required',
              minLength: {
                value: 3,
                message: 'Name must have atleast 3 characters',
              },
            })}
            type="text"
          />
          {errors?.user?.name && (
            <span className="error-message">{errors.user.name.message}</span>
          )}
        </div>
        <div className="form-item">
          <label htmlFor="age">Age </label>
          <input
            {...register('user.age', {
              required: 'Age is required',
              pattern: {
                value: /^[1-9]*$/,
                message: 'Please enter a valid number',
              },
            })}
            type="text"
          />
          {errors?.user?.age && (
            <span className="error-message">{errors.user.age.message}</span>
          )}
        </div>
        <div className="form-item">
          <label htmlFor="contactNumber">Contact Number </label>
          <input
            {...register('user.contactNumber', {
              required: 'Contact Number is required',
              pattern: {
                value: /^\d{10}$/,
                message: 'Please enter a valid 10-digit contact number',
              },
            })}
            type="text"
          />
          {errors?.user?.contactNumber && (
            <span className="error-message">{errors.user.contactNumber.message}</span>
          )}
        </div>

        {fields.map((field, index) => {
          return (
            <div key={field.id}>
              <div className="activity-main">
                <div className="form-item activity-detail">
                  <label htmlFor="description">Activity Description </label>
                  <input {...register(`activities.${index}.description`)} type="text" />
                </div>
                <div className="form-item activity-detail">
                  <label htmlFor="timeSpent">Time Spent </label>
                  <input
                    {...register(`activities.${index}.timeSpent`, {
                      pattern: {
                        value: /^[0-9]+h [0-9]+m$/,
                        message: 'Invalid time format.',
                      },
                    })}
                    placeholder="0h 0m"
                    type="text"
                  />
                  {errors?.activities?.[index]?.timeSpent && (
                    <span className="activity-error-message">
                      {errors?.activities[index]?.timeSpent?.message}
                    </span>
                  )}
                </div>
                <div className="form-item activity-detail">
                  <button
                    type="button"
                    className="delete-button"
                    onClick={() => handleDeleteActivity(index)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          );
        })}

        <div className="action-button">
          <button type="button" onClick={handleAddActivity}>
            Add Activity
          </button>

          <button type="submit">Submit</button>
        </div>
      </form>
      <UserDataDisplay data={userData} />
    </>
  );
};

export default UserActivityForm;
