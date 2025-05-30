import { useParams, useOutletContext } from "react-router-dom";

function UserProfile() {
  const params = useParams();
  const users = useOutletContext();

  const user = users.find(user => user.id === params.id);

  if (!user) {
    return (
      <aside>
        <h1>Loading...</h1>
      </aside>
    )
  };

  return (
    <aside>
      <h1>{user.name}</h1>
    </aside>
  );
};

export default UserProfile;