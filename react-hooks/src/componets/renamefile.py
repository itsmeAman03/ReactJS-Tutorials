import os

def change_js_to_jsx(directory):
    for root, _, files in os.walk(directory):
        for filename in files:
            if filename.endswith(".js"):
                base = os.path.splitext(filename)[0]
                new_name = f"{base}.jsx"
                os.rename(os.path.join(root, filename), os.path.join(root, new_name))
                print(f"Renamed: {os.path.join(root, filename)} -> {os.path.join(root, new_name)}")

if __name__ == "__main__":
    target_directory = input("Enter the directory path: ").strip()
    if os.path.isdir(target_directory):
        change_js_to_jsx(target_directory)
    else:
        print("Invalid directory path.")
