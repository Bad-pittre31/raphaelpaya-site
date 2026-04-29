import glob
import re

for filepath in glob.glob("*.html"):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # 1. Remove pointer-events: none from all nav elements
    content = content.replace('pointer-events: none;', 'pointer-events: auto;')
    content = content.replace('pointer-events:none;', 'pointer-events:auto;')
    
    # 2. Force loader to be non-blocking
    if '.loader {' in content:
        content = content.replace('.loader {', '.loader { pointer-events: none !important; display: none !important;')

    # 3. Ensure redesign nav and links are clickable
    content = content.replace('.dh-nav {', '.dh-nav { pointer-events: auto !important;')
    content = content.replace('.dh-nav-links {', '.dh-nav-links { pointer-events: auto !important;')
    content = content.replace('.dh-nav-link {', '.dh-nav-link { pointer-events: auto !important; position: relative; z-index: 110;')

    # 4. Fix mobile menu toggle
    content = content.replace('.mm-btn {', '.mm-btn { pointer-events: auto !important; z-index: 10001 !important;')

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

print("Blocking elements fixed")
