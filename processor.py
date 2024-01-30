from PIL import Image
import os


def resize_images_in_folder(source_folder, target_folder, breakpoints):
    if not os.path.exists(target_folder):
        os.makedirs(target_folder)

    for filename in os.listdir(source_folder):
        if filename.lower().endswith((".png", ".jpg", ".jpeg")):
            image_path = os.path.join(source_folder, filename)
            with Image.open(image_path) as img:
                original_width, original_height = img.size
                for breakpoint, max_width in breakpoints.items():
                    if original_width > max_width:
                        new_height = int((max_width / original_width) * original_height)
                        img_resized = img.resize(
                            (max_width, new_height), Image.ANTIALIAS
                        )
                        new_filename = f"{os.path.splitext(filename)[0]}_{breakpoint}{os.path.splitext(filename)[1]}"
                        img_resized.save(os.path.join(target_folder, new_filename))


breakpoints = {
    "md": 1250,
    "sm": 991,
    "xs": 600,
}

source_folder = "src/assets/images"
target_folder = "src/assets/resized_images"

resize_images_in_folder(source_folder, source_folder, breakpoints)
