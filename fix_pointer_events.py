import glob
import re

for filepath in glob.glob("*.html"):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Replace pointer-events: all with pointer-events: auto
    content = content.replace('pointer-events: all', 'pointer-events: auto')
    content = content.replace('pointer-events:all', 'pointer-events:auto')
    
    # Ensure .dh-nav-link has pointer-events: auto
    if '.dh-nav-link {' in content:
        content = content.replace('.dh-nav-link {', '.dh-nav-link { pointer-events: auto !important;')

    # Ensure .nav-pill a has pointer-events: auto
    if '.nav-pill a {' in content:
        content = content.replace('.nav-pill a {', '.nav-pill a { pointer-events: auto !important;')

    # Remove any stray "return false" that might be blocking links
    content = re.sub(r'onclick="[^"]*return false;"', '', content)

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

print("Pointer events and return false fixed")
