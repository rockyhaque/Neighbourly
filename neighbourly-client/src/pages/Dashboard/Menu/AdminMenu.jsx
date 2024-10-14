import MenuItem from "./MenuItem";
import { FaUserFriends } from "react-icons/fa";

const AdminMenu = () => {
  return (
    <>
      <MenuItem
        icon={FaUserFriends}
        label="Manage Users"
        address="manage-users"
      />
    </>
  );
};

export default AdminMenu;
