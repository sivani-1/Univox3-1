import os
import time
from elevenlabs.client import ElevenLabs
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

# Retrieve API key
ELEVENLABS_API_KEY = os.getenv("ELEVENLABS_API_KEY")
if not ELEVENLABS_API_KEY:
    raise ValueError("ELEVENLABS_API_KEY environment variable not set.")

# Initialize ElevenLabs client
client = ElevenLabs(api_key=ELEVENLABS_API_KEY)

def download_dubbed_file(dubbing_id: str, language_code: str) -> str:
    dir_path = f"data/{dubbing_id}"
    os.makedirs(dir_path, exist_ok=True)

    file_path = f"{dir_path}/{language_code}.mp4"
    with open(file_path, "wb") as file:
        for chunk in client.dubbing.get_dubbed_file(dubbing_id, language_code):
            file.write(chunk)

    return file_path

def wait_for_dubbing_completion(dubbing_id: str) -> bool:
    MAX_ATTEMPTS = 120
    CHECK_INTERVAL = 10  # seconds

    for _ in range(MAX_ATTEMPTS):
        metadata = client.dubbing.get_dubbing_project_metadata(dubbing_id)
        if metadata.status == "dubbed":
            return True
        elif metadata.status == "dubbing":
            print(f"Dubbing in progress... Retrying in {CHECK_INTERVAL} seconds.")
            time.sleep(CHECK_INTERVAL)
        else:
            print(f"Dubbing failed: {metadata.error_message}")
            return False

    print("Dubbing timed out.")
    return False

def create_dub(file_path: str, source_language: str, target_language: str) -> str:
    with open(file_path, "rb") as file:
        response = client.dubbing.dub_a_video_or_an_audio_file(
            file=file,
            target_lang=target_language,
            source_lang=source_language,
            num_speakers=1,
            watermark=True,
        )

    dubbing_id = response.dubbing_id
    print(f"Dubbing ID: {dubbing_id}")

    if wait_for_dubbing_completion(dubbing_id):
        return download_dubbed_file(dubbing_id, target_language)
    else:
        raise RuntimeError("Dubbing failed or timed out.")
