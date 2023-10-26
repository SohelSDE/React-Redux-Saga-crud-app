export const usersFetch = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      if (!response.ok) {
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
    } finally {
      console.log('User API Hit');
    }
  };
  export const getUserByIdApi = async (id) => {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
      if (!response.ok) {
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }
      const userById = await response.json();
      return userById;
    } catch (error) {
      console.error(error);
      throw error; // Rethrow the error so that it can be caught in the saga
    } finally {
      console.log(`User by ID API Hit for userId: ${id}`);
    }
  };
  
  export const deleteUserByIdApi = async (id) => {
    console.log('hit reaching here', id);
    try {
      const response = await fetch(`http://localhost:5000/api/users/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }
  
      // Check if response has a body before trying to parse JSON
      // const hasBody = response.headers.get('content-length') > '0';
      // const userById = hasBody ? await response.json() : null;
      // console.log('userById in delete :-', userById);
      console.log('delete response:-',response)
  
      return response.text();
    } catch (error) {
      console.error(error);
      throw error;
    } finally {
      console.log(`User deleted by ID API Hit for userId: ${id}`);
    }
  };
  