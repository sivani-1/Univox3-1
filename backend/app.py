from fastapi import FastAPI, File, UploadFile, Form, HTTPException
from fastapi.responses import JSONResponse
import os
from werkzeug.utils import secure_filename
from fastapi.middleware.cors import CORSMiddleware
# FastAPI app initialization
app = FastAPI()

# Add CORS middleware to allow requests from your frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allow all origins (or specify frontend URL if known)
    allow_credentials=True,
    allow_methods=["*"],  # Allow all methods (GET, POST, etc.)
    allow_headers=["*"],  # Allow all headers
)

# Temporary folder for uploads
UPLOAD_FOLDER = "uploads"
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

@app.post("/dub")
async def dub_video(
    file: UploadFile = File(...),
    source_language: str = Form(...),
    target_language: str = Form(...),
):
    try:
        # Validate input
        if not source_language or not target_language:
            raise HTTPException(status_code=400, detail="Source and target languages are required")

        # Validate file type
        if not file.filename.endswith((".mp4", ".wav", ".mp3")):
            raise HTTPException(status_code=400, detail="Unsupported file type. Please upload .mp4, .wav, or .mp3 files")

        # Save the uploaded file
        filename = secure_filename(file.filename)
        file_path = os.path.join(UPLOAD_FOLDER, filename)
        with open(file_path, "wb") as f:
            f.write(await file.read())

        # Perform dubbing (mocked response for now)
        output_file_path = f"/mock/output/{filename}"
        return JSONResponse(content={"message": "Dubbing completed", "file_path": output_file_path}, status_code=200)

    except HTTPException as he:
        raise he
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

# Run the FastAPI app using Uvicorn
if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="127.0.0.1", port=8000, reload=True)
