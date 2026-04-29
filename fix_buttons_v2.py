import glob
import re

def replace_button(match):
    attrs = match.group(1)
    inner_text = match.group(3)
    return f'<a {attrs}>{inner_text}</a>'

for filepath in glob.glob("*.html"):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # 1. Convert <button ... href="/...">...</button>
    content = re.sub(r'<button\s+([^>]*href="(/[^"]*)"[^>]*)>(.*?)</button>', replace_button, content, flags=re.DOTALL)
    
    # 2. Convert specific <button onclick="window.location.href='/...'">
    def replace_onclick_button(match):
        attrs = match.group(1)
        url = match.group(2)
        inner_text = match.group(3)
        # Remove the onclick attribute from attrs to avoid double navigation
        new_attrs = re.sub(r'onclick="window\.location\.href=\'/[^\']*\'"', '', attrs).strip()
        return f'<a {new_attrs} href="{url}">{inner_text}</a>'

    content = re.sub(r'<button\s+([^>]*onclick="window\.location\.href=\'(/[^.][^\']*)\'"[^>]*)>(.*?)</button>', replace_onclick_button, content, flags=re.DOTALL)

    # 3. Double check: remove any return false from <a> tags that have href
    content = re.sub(r'<a\s+([^>]*href="/[^"]*"[^>]*)\s+onclick="[^"]*return false;"', r'<a \1', content)

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

print("Buttons converted properly")
