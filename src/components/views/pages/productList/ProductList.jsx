import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import "./productList.css";

export default function ProductList({ products, deleteProduct }) {
  // const [data, setData] = useState(rows)

  const handleDelete = (id) => {
    deleteProduct(id);
  };

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "product",
      headerName: "Product",
      width: 200,
      editable: false,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            <img
              className="productListImg"
              src={params.row.img}
              alt="product img"
            />
            {params.row.name}
          </div>
        );
      },
    },
    {
      field: "stock",
      headerName: "Stock",
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
      field: "price",
      headerName: "Price",
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
            <Link to={"/product/" + params.row.id}>
              <button className="productListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="productListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <>
      <Link to={"/newproduct"}>
        <button className="productAddButton">Create</button>
      </Link>
      <div className="productList">
        <DataGrid
          rows={products}
          columns={columns}
          // pageSize={8}
          checkboxSelection
          disableSelectionOnClick
        />
      </div>
    </>
  );
}
