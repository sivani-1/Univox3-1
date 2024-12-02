


// import React, { useState } from "react";
// import "./Train.css";

// function Train() {
//   const [userId, setUserId] = useState("");
//   const [videoFile, setVideoFile] = useState(null);

//   const handleFileUpload = (event) => {
//     const file = event.target.files[0];
//     if (file && file.type.startsWith("video/")) {
//       setVideoFile(file);
//     } else {
//       alert("Please upload a valid video file.");
//     }
//   };

//   const handleDragOver = (event) => {
//     event.preventDefault();
//   };

//   const handleDrop = (event) => {
//     event.preventDefault();
//     const file = event.dataTransfer.files[0];
//     if (file && file.type.startsWith("video/")) {
//       setVideoFile(file);
//     } else {
//       alert("Please drop a valid video file.");
//     }
//   };

//   const handleSubmit = () => {
//     if (!userId) {
//       alert("Please enter a User ID.");
//       return;
//     }
//     if (!videoFile) {
//       alert("Please upload a video.");
//       return;
//     }
//     alert(`Submitting video: ${videoFile.name} for User ID: ${userId}`);
//     // Add your form submission logic here
//   };

//   return (
//     <div className="train-container">
//       <h1>Give me a video within a time span of 15 minutes</h1>
//       <div className="input-container">
//         <label htmlFor="userId">User ID:</label>
//         <input
//           type="text"
//           id="userId"
//           value={userId}
//           onChange={(e) => setUserId(e.target.value)}
//           placeholder="Enter your User ID"
//         />
//       </div>
//       <div
//         className="drag-drop-container"
//         onDragOver={handleDragOver}
//         onDrop={handleDrop}
//       >
//         {videoFile ? (
//           <p>{videoFile.name}</p>
//         ) : (
//           <p>Drag and drop a video file here</p>
//         )}
//         <input
//           type="file"
//           id="fileUpload"
//           style={{ display: "none" }}
//           accept="video/*"
//           onChange={handleFileUpload}
//         />
//         <button
//           className="upload-button"
//           onClick={() => document.getElementById("fileUpload").click()}
//         >
//           Upload
//         </button>
//       </div>
//       <button className="submit-button" onClick={handleSubmit}>
//         Submit
//       </button>
//     </div>
//   );
// }

// export default Train;                                //state1


// import React, { useState } from "react";
// import "./Train.css";

// function Train() {
//   const [userId, setUserId] = useState("");
//   const [videoFile, setVideoFile] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);

//   const handleFileUpload = (event) => {
//     const file = event.target.files[0];
//     if (file && file.type.startsWith("video/")) {
//       setVideoFile(file);
//     } else {
//       alert("Please upload a valid video file.");
//     }
//   };

//   const handleDragOver = (event) => {
//     event.preventDefault();
//   };

//   const handleDrop = (event) => {
//     event.preventDefault();
//     const file = event.dataTransfer.files[0];
//     if (file && file.type.startsWith("video/")) {
//       setVideoFile(file);
//     } else {
//       alert("Please drop a valid video file.");
//     }
//   };

//   const handleSubmit = () => {
//     if (!userId) {
//       alert("Please enter a User ID.");
//       return;
//     }
//     if (!videoFile) {
//       alert("Please upload a video.");
//       return;
//     }
//     alert(`Submitting video: ${videoFile.name} for User ID: ${userId}`);
//     // Set loading state
//     setIsLoading(true);

//     // Simulate a delay for the loading process (replace with actual API call logic)
//     setTimeout(() => {
//       console.log("Training process started...");
//     }, 1000);
//   };

//   if (isLoading) {
//     return (
//       <div className="loading-container">
//         <div className="loader"></div>
//         <h1>Loading...</h1>
//         <h2>Training under process</h2>
//       </div>
//     );
//   }

//   return (
//     <div className="train-container">
//       <h1>Give me a video within a time span of 15 minutes</h1>
//       <div className="input-container">
//         <label htmlFor="userId">User ID:</label>
//         <input
//           type="text"
//           id="userId"
//           value={userId}
//           onChange={(e) => setUserId(e.target.value)}
//           placeholder="Enter your User ID"
//         />
//       </div>
//       <div
//         className="drag-drop-container"
//         onDragOver={handleDragOver}
//         onDrop={handleDrop}
//       >
//         {videoFile ? (
//           <p>{videoFile.name}</p>
//         ) : (
//           <p>Drag and drop a video file here</p>
//         )}
//         <input
//           type="file"
//           id="fileUpload"
//           style={{ display: "none" }}
//           accept="video/*"
//           onChange={handleFileUpload}
//         />
//         <button
//           className="upload-button"
//           onClick={() => document.getElementById("fileUpload").click()}
//         >
//           Upload
//         </button>
//       </div>
//       <button className="submit-button" onClick={handleSubmit}>
//         Submit
//       </button>
//     </div>
//   );
// }

// export default Train;                                             // state1 & state2


// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import Navbar from "./Navbar";
// import "./Train.css";

// function Train() {
//   const [userId, setUserId] = useState("");
//   const [videoFile, setVideoFile] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);
//   const [trainingComplete, setTrainingComplete] = useState(false);
//   const navigate = useNavigate();

//   const handleFileUpload = (event) => {
//     const file = event.target.files[0];
//     if (file && file.type.startsWith("video/")) {
//       setVideoFile(file);
//     } else {
//       alert("Please upload a valid video file.");
//     }
//   };

//   const handleDragOver = (event) => {
//     event.preventDefault();
//   };

//   const handleDrop = (event) => {
//     event.preventDefault();
//     const file = event.dataTransfer.files[0];
//     if (file && file.type.startsWith("video/")) {
//       setVideoFile(file);
//     } else {
//       alert("Please drop a valid video file.");
//     }
//   };

//   const handleSubmit = () => {
//     if (!userId) {
//       alert("Please enter a User ID.");
//       return;
//     }
//     if (!videoFile) {
//       alert("Please upload a video.");
//       return;
//     }
//     alert(`Submitting video: ${videoFile.name} for User ID: ${userId}`);
//     setIsLoading(true);

//     // Simulate the training process
//     setTimeout(() => {
//       setIsLoading(false);
//       setTrainingComplete(true);
//     }, 3000); // 3-second delay for loading simulation
//   };

//   const handleTestNavigation = () => {
//     navigate("/test");
//   };

//   if (isLoading) {
//     return (
//       <div className="loading-container">
//         <div className="loader"></div>
//         <h1>Loading...</h1>
//         <h2>Training under process</h2>
//       </div>
//     );
//   }

//   if (trainingComplete) {
//     return (
//       <div className="training-completed-container">
//         <Navbar />
//         <h1>Training is completed</h1>
//         <h2>Start testing</h2>
//         <button className="test-button" onClick={handleTestNavigation}>
//           Test Now
//         </button>
//       </div>
//     );
//   }

//   return (
//     <div className="train-container">
//       <h1>Give me a video within a time span of 15 minutes</h1>
//       <div className="input-container">
//         <label htmlFor="userId">User ID:</label>
//         <input
//           type="text"
//           id="userId"
//           value={userId}
//           onChange={(e) => setUserId(e.target.value)}
//           placeholder="Enter your User ID"
//         />
//       </div>
//       <div
//         className="drag-drop-container"
//         onDragOver={handleDragOver}
//         onDrop={handleDrop}
//       >
//         {videoFile ? (
//           <p>{videoFile.name}</p>
//         ) : (
//           <p>Drag and drop a video file here</p>
//         )}
//         <input
//           type="file"
//           id="fileUpload"
//           style={{ display: "none" }}
//           accept="video/*"
//           onChange={handleFileUpload}
//         />
//         <button
//           className="upload-button"
//           onClick={() => document.getElementById("fileUpload").click()}
//         >
//           Upload
//         </button>
//       </div>
//       <button className="submit-button" onClick={handleSubmit}>
//         Submit
//       </button>
//     </div>
//   );
// }

// export default Train;                                      

                                 //state1 & state2 & state3

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import Navbar from "./Navbar";
// import "./Train.css";

// function Train() {
//   const [userId, setUserId] = useState("");
//   const [videoFile, setVideoFile] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);
//   const [trainingComplete, setTrainingComplete] = useState(false);
//   const navigate = useNavigate();

//   const handleFileUpload = (event) => {
//   const file = event.target.files[0];
//   if (file && file.type.startsWith("video/")) {
//     setVideoFile(file);
//   } else {
//   alert("Please upload a valid video file.");
//   }
//   };

//   const handleDragOver = (event) => {
//   event.preventDefault();
//   };
//   const handleDrop = (event) => {
//   event.preventDefault();
//   const file = event.dataTransfer.files[0];
//   if (file && file.type.startsWith("video/")) {
//   setVideoFile(file);
//   } else {
//   alert("Please drop a valid video file.");
//   }
//   };

//   const handleSubmit = () => {
//   if (!userId) {
//   alert("Please enter a User ID.");
//   return;
//   }
//   if (!videoFile) {
//     alert("Please upload a video.");
//     return;
//   }
//   alert(`Submitting video: ${videoFile.name} for User ID: ${userId}`);
//   setIsLoading(true);

//    // Simulate the training process
//   setTimeout(() => {
//             setIsLoading(false);
//             setTrainingComplete(true);
//           }, 3000); // 3-second delay for loading simulation
//           };
//           const handleTestNavigation = () => {
//            navigate("/test");
//           };
//           return (
//           <div>
//           <Navbar />
//           {isLoading ? (
//             <div className="loading-container">
//             <div className="loader"></div>
//             <h1>Loading...</h1>
//             <h2>Training under process</h2>
//             </div>
//             ) : trainingComplete ? (
//             <div className="training-completed-container">
//             <h1>Training is completed</h1>
//             <h2>Start testing</h2>
//             <button className="test-button" onClick={handleTestNavigation}>
//               Test Now
//             </button>
//           </div>
//           ) : (
//           <div className="train-container">
//           <h1>Give me a video within a time span of 15 minutes</h1>
//           <div className="input-container">
//           <label htmlFor="userId">User ID:</label>
//           <input
//           type="text"
//           id="userId"
//           value={userId}
//           onChange={(e) => setUserId(e.target.value)}
//           placeholder="Enter your User ID"
//         />
//         </div>
//         <div
//           className="drag-drop-container"
//           onDragOver={handleDragOver}
//           onDrop={handleDrop}
//           >
//           {videoFile ? (
//           <p>{videoFile.name}</p>
//           ) : (
//           <p>Drag and drop a video file here</p>
//           )}
//           <input
//           type="file"
//           id="fileUpload"
//           style={{ display: "none" }}
//           accept="video/*"
//           onChange={handleFileUpload}
//         />
//         <button
//           className="upload-button"
//           onClick={() => document.getElementById("fileUpload").click()}
//         >
//           Upload
//         </button>
//         </div>
//         <button className="submit-button" onClick={handleSubmit}>
//           Submit
//         </button>
//       </div>
//     )}
//     </div>
//   );
// }
                                 
// export default Train;                     // everything without ui


import { CloudUpload, PlayCircle } from "@mui/icons-material";
import { Box, Button, CircularProgress, Paper, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

function Train() {
  const [userId, setUserId] = useState("");
  const [videoFile, setVideoFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [trainingComplete, setTrainingComplete] = useState(false);
  const navigate = useNavigate();

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith("video/")) {
      setVideoFile(file);
    } else {
      alert("Please upload a valid video file.");
    }
  };

  const handleSubmit = () => {
    if (!userId) {
      alert("Please enter a User ID.");
      return;
    }
    if (!videoFile) {
      alert("Please upload a video.");
      return;
    }
    alert(`Submitting video: ${videoFile.name} for User ID: ${userId}`);
    setIsLoading(true);

    // Simulate the training process
    setTimeout(() => {
      setIsLoading(false);
      setTrainingComplete(true);
    }, 3000); // 3-second delay for loading simulation
  };

  const handleTestNavigation = () => {
    navigate("/test");
  };

  return (
    <Box>
      <Navbar />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "90vh",
          padding: 3,
          gap: 3,
          background: "linear-gradient(to right, #6a11cb, #2575fc)",
          color: "white",
        }}
      >
        {isLoading ? (
          <Box textAlign="center">
            <CircularProgress color="inherit" />
            <Typography variant="h4" mt={2}>
              Loading...
            </Typography>
            <Typography variant="subtitle1">Training under process</Typography>
          </Box>
        ) : trainingComplete ? (
          <Box textAlign="center">
            <Typography variant="h4">Training is completed</Typography>
            <Typography variant="subtitle1" mt={2}>
              Start testing
            </Typography>
            <Button
              variant="contained"
              color="secondary"
              startIcon={<PlayCircle />}
              onClick={handleTestNavigation}
              sx={{ mt: 3 }}
            >
              Test Now
            </Button>
          </Box>
        ) : (
          <Paper
            elevation={3}
            sx={{
              padding: 4,
              width: "100%",
              maxWidth: "500px",
              textAlign: "center",
              backgroundColor: "rgba(255, 255, 255, 0.9)",
              borderRadius: 3,
            }}
          >
            <Typography variant="h5" mb={2}>
              Give me a video within a time span of 15 minutes
            </Typography>
            <TextField
              fullWidth
              label="User ID"
              variant="outlined"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              sx={{ mb: 2 }}
            />
            <Box
              sx={{
                border: "2px dashed #ccc",
                borderRadius: 2,
                padding: 2,
                textAlign: "center",
                cursor: "pointer",
              }}
              onClick={() => document.getElementById("fileUpload").click()}
            >
              <CloudUpload fontSize="large" />
              <Typography>{videoFile ? videoFile.name : "Upload Video"}</Typography>
              <input
                type="file"
                id="fileUpload"
                accept="video/*"
                onChange={handleFileUpload}
                style={{ display: "none" }}
              />
            </Box>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={handleSubmit}
              sx={{ mt: 3 }}
            >
              Submit
            </Button>
          </Paper>
        )}
      </Box>
    </Box>
  );
}

export default Train;

                                 