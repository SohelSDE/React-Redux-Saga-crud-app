// updateAndCreate.js
import React, { useState } from 'react';
import { Button, Grid, TextField, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import axios from 'axios';

const UpdateAndCreate = () => {
  const localUrl = 'http://localhost:5000/api/users';
  const productionUrl = 'https://tame-hospital-gown-mite.cyclic.app/api/users';

  const saveUser = async (data) => {
    const isLocal = window.location.host.includes('localhost');
    const url = isLocal ? localUrl : productionUrl;

    try {
      const response = await axios.post(url, data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return response.data;
    } catch (error) {
      throw new Error(`Error during save: ${error.message}`);
    }
  };

  const [formData, setFormData] = useState({
    username: '',
    password: '',
    userType: '',
    socialLinks: 'https://www.linkedin.com/in/sohel-islam-7491341a3/',
    avatar: null,
    team: '',
    description: '',
    role: '',
  });

  const handleFileChange = (file) => {
    setFormData({
      ...formData,
      avatar: file,
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await saveUser(formData);
      console.log('Save successful:', response);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} encType="multipart/form-data" style={{ width: '100%', marginTop: 2 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            label="Username"
            variant="outlined"
            fullWidth
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Password"
            variant="outlined"
            fullWidth
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </Grid>
        <Grid item xs={12}>
          <FormControl variant="outlined" fullWidth>
            <InputLabel htmlFor="userType">User Type</InputLabel>
            <Select
              label="User Type"
              name="userType"
              id="userType"
              value={formData.userType}
              onChange={handleChange}
              required
            >
              <MenuItem value="admin">Admin</MenuItem>
              <MenuItem value="employee">Employee</MenuItem>
              <MenuItem value="student">Student</MenuItem>
            </Select>
          </FormControl>
          </Grid>
      <Grid item xs={12}>
        {/* Add the Avatar component or file input for avatar upload */}
        <input
    accept="image/*"
    style={{ display: 'none' }}
    id="avatar"
    type="file"
    name="avatar"
    onChange={(e) => handleFileChange(e.target.files[0])} 
  />
        <label htmlFor="avatar">
          <Button component="span" variant="outlined" fullWidth >
            Upload Avatar
          </Button>
        </label>
        {formData.avatar && (
          <img
            src={URL.createObjectURL(formData.avatar)}
            alt="Avatar Preview"
            style={{ maxWidth: '100%', marginTop: '10px' }}
          />
        )}
      </Grid>

         <Grid item xs={12}>
        <FormControl variant="outlined" fullWidth>
          <InputLabel htmlFor="team">Team</InputLabel>
          <Select
            label="Team"
            name="team"
            id="team"
            value={formData.team}
            onChange={handleChange}
          >
            <MenuItem value="members">Members</MenuItem>
            <MenuItem value="cordTeam">CordTeam</MenuItem>
            <MenuItem value="mocTeam">MocTeam</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Description"
          variant="outlined"
          fullWidth
          multiline
          rows={3}
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
      </Grid>
      <Grid item xs={12}>
        <FormControl variant="outlined" fullWidth>
          <InputLabel htmlFor="role">Role</InputLabel>
          <Select
            label="Role"
            name="role"
            id="role"
            value={formData.role}
            onChange={handleChange}
          >
            <MenuItem value="faculty">Faculty</MenuItem>
            <MenuItem value="student">Student</MenuItem>
          </Select>
        </FormControl>
      </Grid>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            style={{ marginTop: 20 }}
          >
            Save
          </Button>
        </Grid>
    </form>
  );
};

export default UpdateAndCreate;
