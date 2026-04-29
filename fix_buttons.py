import glob
import re

for filepath in glob.glob("*.html"):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Convert <button ... href="/..."> to <a ... href="/...">
    # and </button> to </a>
    # We match <button followed by anything containing href="/..." up to >
    
    # First, find all buttons with href
    def replace_button(match):
        attrs = match.group(1)
        content = match.group(2)
        # Convert tag but keep attributes
        return f'<a {attrs}>{content}</a>'

    content = re.sub(r'<button\s+([^>]*href="(/[^"]*)"[^>]*)>(.*?)</button>', replace_button, content, flags=re.DOTALL)
    
    # Also handle buttons with single quotes
    content = re.sub(r"<button\s+([^>]*href='(/[^']*)'[^>]*)>(.*?)</button>", replace_button, content, flags=re.DOTALL)

    # Final check: are there any <a> tags that still have onclick="sp(...)" which might have return false?
    # We want them to just be standard links now.
    content = re.sub(r'onclick="sp\(\'(.*?)\'\);?\s*return false;"', '', content)
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

print("Converted buttons with href to a tags and removed sp() blockers")
