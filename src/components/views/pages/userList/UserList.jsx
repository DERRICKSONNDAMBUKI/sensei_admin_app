import "./userList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";

export default function UserList({ users, deleteUser }) {
  // const [data, setData] = useState(users);
  // console.log(data);

  const handleDelete = (id) => {
    // setData(users.filter((item) => item.id !== id));
    deleteUser(id);
  };

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "user",
      headerName: "User",
      width: 200,
      editable: false,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <img
              className="userListImg"
              src={params.row.avatar}
              alt="user img"
            />
            {params.row.username}
          </div>
        );
      },
    },
    {
      field: "email",
      headerName: "Email",
      width: 150,
      editable: false,
    },
    {
      field: "status",
      headerName: "Status",
      width: 120,
      editable: true,
    },
    {
      field: "transaction",
      headerName: "Transaction Volume",
      width: 160,
      editable: false,
    },
    {
      field: "action",
      headerName: "Action",
      width: 160,
      editable: false,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/user/" + params.row.id}>
              <button className="userListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="userListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="userList">
      <DataGrid
        className="userTable"
        rows={users}
        columns={columns}
        // pageSize={5}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}
