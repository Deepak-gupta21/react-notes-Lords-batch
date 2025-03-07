import "./App.css";
import React, { useState } from "react";
import { TextField, Button, Card, CardContent, Typography, Stack } from "@mui/material";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';


const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});


function App() {
  const [alltask, setAlltask] = useState([]);
  const [task, setTask] = useState("");

  function addTask() {
    if (task.trim()) {
      setAlltask([...alltask, task]);
      setTask("");
    }
  }

  function deleteTask(i) {
    const updatedArray = alltask.filter((_, index) => i !== index);
    setAlltask(updatedArray);
  }

  function editTask(i) {
    const promptValue = prompt("Enter the new task!", alltask[i]);
    
    if (promptValue) {
      const updatedArray = alltask.map((item, index) =>
        i === index ? promptValue : item
      );
      setAlltask(updatedArray);
    }
  }

  return (


    // <ThemeProvider theme={darkTheme}>
    // <CssBaseline />

    <div className="App">
      <Typography variant="h2" gutterBottom>
        To-Do Application
      </Typography>
      
      <Stack spacing={2} direction="row">
        <TextField
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter task"
          variant="outlined"
          fullWidth
          sx={{ width: '80vw', color: 'success.main' }}
        />
        <Button variant="contained" color="primary" onClick={addTask}>
          Add Task
        </Button>
      </Stack>

      <Stack spacing={2} mt={3}>
        {alltask.length > 0 ? (
          alltask.map((task, index) => (
            <Card key={index} variant="outlined">
              <CardContent>
                <Stack direction="row" justifyContent="space-between" alignItems="center">
                  <Typography>{task}</Typography>
                  <Stack direction="row" spacing={1}>
                    <Button variant="contained" color="error" onClick={() => deleteTask(index)}>
                      Delete
                    </Button>
                    <Button variant="contained" color="secondary" onClick={() => editTask(index)}>
                      Edit
                    </Button>
                  </Stack>
                </Stack>
              </CardContent>
            </Card>
          ))
        ) : (
          <Typography color="textSecondary">No tasks added yet</Typography>
        )}
      </Stack>
    </div>


    // </ThemeProvider>
  );
}




export default App;
