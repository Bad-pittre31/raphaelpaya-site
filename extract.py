import re

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Extract silvernest section
# We'll use a simple approach: find '<div id="page-silvernest" class="page">' and the corresponding closing div.
# But it's easier to use a Python script with html.parser or just write it if we know the structure.
