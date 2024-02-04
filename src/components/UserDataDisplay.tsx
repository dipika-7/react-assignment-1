import { FormDataDisplay } from '../interface/activityForm';

const UserDataDisplay = (props: FormDataDisplay) => {
  if (!props.data.isSubmitted) return <></>;

  const { user, activities } = props.data;

  return (
    <div className="user-form">
      <h1 className="heading">User Activity Details</h1>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <p>Contact Number: {user.contactNumber}</p>

      {activities &&
        activities.map((activity, index) => {
          if (activity.description == '' && activity.timeSpent == '') return;

          return (
            <div key={index} className="activity">
              <p>Description: {activity.description}</p>
              <p>Time Spent: {activity.timeSpent}</p>
            </div>
          );
        })}
    </div>
  );
};

export default UserDataDisplay;
