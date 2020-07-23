import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { products } from '../../service/factory';
import '../../App.css';
import { TextField } from '../LoginCard/styles';
import { Modal, Content} from './styles';
import { productFormMembers } from './constants';

function DashBoardPage() {
  const [status, setStatus] = useState(false);
  const [modifiedProducts, setModifiedProducts] = useState(products);
  const [productMember, setProductMember] = useState(productFormMembers);
  const user = sessionStorage.getItem('user');
  const userName = user && user.split('@')[0];
  const onOpenModal = () => {
    setStatus(true);
  };

  const onCloseModal= () => {
    setStatus(false);
  };

  const onChangeText = e => {
    const { name, value } = e.target;
    setProductMember({
      ...productMember,
      [name]: value,
    });
  };

  const onSave = () => {
    const newProduct = {
      id: uuidv4(),
      ...productMember,
    };
    modifiedProducts.push(newProduct);
    setModifiedProducts(modifiedProducts);
    setStatus(false);
  }

  const onDelete = index => () => {
    const products = [...modifiedProducts];
    products.splice(index,1);
    setModifiedProducts(products);
  }

  useEffect(
    () => {
      if (!status) {
        setProductMember(productFormMembers);
      }
    },
    [status],
  );

  const { rate, quality, name } = productMember;

  return(
    <div>
      <h1>Hello {userName}</h1>
      <button onClick={onOpenModal}>Add Product</button>
      <table>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Rate</th>
          <th>Quality</th>
        </tr>
      {modifiedProducts && modifiedProducts.length > 0 ? modifiedProducts.map((product, index) => {
        const { id, name, rate, quality } = product;
        return(
            <tr key={id}>
              <td>{id}</td>
              <td>{name}</td>
              <td>Rs. {rate}</td>
              <td>{quality}</td>
              <button onClick={onDelete(index)}>Delete</button>
            </tr>
        )
      }): <span>No products added</span>
      }
        </table>
        {status && <Modal>
          <Content>
            <span>Add Product</span>
          <TextField
            type="text"
            name="name"
            value={name}
            placeholder="name"
            onChange={onChangeText}
          />
           <TextField
            type="text"
            name="rate"
            placeholder="rate"
            value={rate}
            onChange={onChangeText}
          />
           <TextField
            type="text"
            name="quality"
            value={quality}
            placeholder="quality"
            onChange={onChangeText}
          />
            <button onClick={onSave}>Add</button>
            <button onClick={onCloseModal}>Cancel</button>
          </Content>
          </Modal>
        }
  </div>
  );
}

export default DashBoardPage;
