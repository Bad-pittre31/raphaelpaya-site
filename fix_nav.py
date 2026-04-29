import glob
import re

nav_html = """  <div class="nav-pill">
    <a href="/" id="nb-home">Accueil</a>
    <a href="/bio" id="nb-bio">Bio</a>
    <a href="/tribu" id="nb-tribu">TRIBU</a>
    <a href="/miixeo" id="nb-miixeo">Miixeo</a>
    <a href="/silvernest" id="nb-silvernest">SilverNest</a>
    <a href="/gerard-ai" id="nb-gerard">Gérard AI</a>
    <a href="/piers-mayers" id="nb-musique">Musique</a>
    <a href="/contact">Contact</a>
  </div>"""

for filepath in glob.glob("*.html"):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Replace the nav-pill entirely
    content = re.sub(r'<div class="nav-pill">.*?</div>', nav_html, content, flags=re.DOTALL)
    
    # In index.html, we also need to remove the SPA `sp()` logic from the footer
    if filepath == 'index.html':
        content = re.sub(r'onclick="sp\(\'(.*?)\'\).*?"', r'href="/\1"', content)
        # Also replace href="#" onclick="sp..." in index.html for links
        content = re.sub(r'href="#" onclick="sp\(\'(.*?)\'\);? return false;"', r'href="/\1"', content)
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

