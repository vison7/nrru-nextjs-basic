import React from "react";

const EditProduct = () => {
  return (
    <div>
      <form>
        <table>
          <tbody>
            <tr>
              <td>Product Name :</td>
              <td>
                <div className="frmBox">
                  <input
                    type="text"
                    placeholder="Product Name"
                    // value={name}
                    // onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
              </td>
            </tr>

            <tr>
              <td>Description:</td>
              <td>
                <div className="frmBox">
                  <input
                    type="text"
                    placeholder="Description"
                    // value={description}
                    // onChange={(e) => setDescription(e.target.value)}
                    required
                  />
                </div>
              </td>
            </tr>

            <tr>
              <td>Price:</td>
              <td>
                <div className="frmBox">
                  <input
                    type="text"
                    placeholder="Price"
                    // value={price}
                    // onChange={(e) => setPrice(e.target.value)}
                    required
                  />
                </div>
              </td>
            </tr>

            <tr>
              <td></td>
              <td>
                <button type="submit">Submit</button>
                
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
};

export default EditProduct;
