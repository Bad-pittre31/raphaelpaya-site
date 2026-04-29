import glob
import re

for filepath in glob.glob("*.html"):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Replace href="#" href="/something" -> href="/something"
    content = re.sub(r'href="#"\s+(class="[^"]*"\s+)?href="(/[^"]*)"', r'\1href="\2"', content)
    content = re.sub(r'href="#"\s+href="(/[^"]*)"', r'href="\1"', content)
    
    # Also fix some that might be class="..." href="#" href="..."
    content = re.sub(r'href="#"\s+class="([^"]*)"\s+href="(/[^"]*)"', r'class="\1" href="\2"', content)

    # In index.html specifically or all, replace .nav-pill button with .nav-pill a
    content = content.replace('.nav-pill button', '.nav-pill a')
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
        
print("Fixed hrefs and CSS")
