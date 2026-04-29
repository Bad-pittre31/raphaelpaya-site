import glob
import re

for filepath in glob.glob("*.html"):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Fix URLs
    content = content.replace('href="/home"', 'href="/"')
    content = content.replace('href="/gerard"', 'href="/gerard-ai"')
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

print("Final URL fixes applied")
