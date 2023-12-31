import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUserById, getUserFetch, getUserbyId } from '../Actions/action';

import '../styles/CrudApp.css'; 
import UpdateAndCreate from './updateAndCreate';

const CrudApp = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userReducer.user);
  const userByid = useSelector((state=> state.userReducerById.userById))
  const deleteById =useSelector((state)=> state.deleteReducerById.deleteById)
  console.log("gettingback?",deleteById);

  useEffect(() => {
    // Fetch user when the component mounts
    dispatch(getUserFetch());
  }, [dispatch]);

  const handleCreate = () => {
    // Handle create logic
    return <><div><UpdateAndCreate/></div></>
  };

  const handleUpdate = () => {
    // Handle update logic
  };

  const handleDelete = (id) => {

    console.log("Delete ID called :", id);
        dispatch (deleteUserById(id))
        if(deleteById==='User deleted'){
          alert('Deleted Successfully');
        }
  };

  const  handleReadById = async(id) => {
    console.log("User ID called :", id);
    await dispatch(getUserbyId(id));

  };

  return (
    <div className="crud-app-container">
      <h4>CRUD App</h4>
      <button className="custom-button" onClick={handleCreate}>
        Create
      </button>
      <button className="custom-button" onClick={handleUpdate}>
        Update
      </button>
      <form onSubmit={(e) => {
        e.preventDefault(); // Prevents the form from submitting and reloading the page
        const userId = e.target.elements.userId.value;
        handleDelete(userId);
      }}>
        <input name="userId" placeholder="Enter user ID" />
        <button type="submit" className="custom-button">
          Delete by ID
        </button>
     
      </form>
      <form onSubmit={(e) => {
        e.preventDefault(); // Prevents the form from submitting and reloading the page
        const userId = e.target.elements.userId.value;
        handleReadById(userId);
      }}>
        <input name="userId" placeholder="Enter user ID" />
        <button type="submit" className="custom-button">
          Read by ID
        </button>
      </form>

      <button className="custom-button" onClick={() => dispatch(getUserFetch())}>
        Fetch user
      </button>
      <div className="user-grid">
        {user?.map((user) => (
          <div key={user.id} className="user-item">
            <span>user: {user.name}</span>
          </div>
        ))}
      </div>
      <div className='user-grid'>
         
            <div >
              <p>Employee Found:-</p>
              {userByid.name}
            </div>

      
      </div>

    </div>
  );
};

export default CrudApp;
