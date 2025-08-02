import os

# Get the current directory
directory_path = os.path.dirname(os.path.abspath(__file__))

# Iterate through all files in the directory
for filename in os.listdir(directory_path):
    # Check if the file has a .js extension
    if filename.endswith(".js"):
        # Construct the full file paths
        old_file_path = os.path.join(directory_path, filename)
        new_file_path = os.path.join(directory_path, filename.replace(".js", ".jsx"))
        
        # Rename the file
        try:
            os.rename(old_file_path, new_file_path)
            print(f"Renamed: {filename} -> {os.path.basename(new_file_path)}")
        except Exception as e:
            print(f"Error renaming file {filename}: {e}")