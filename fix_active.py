import glob

files = {
    'index.html': 'nb-home',
    'bio.html': 'nb-bio',
    'tribu.html': 'nb-tribu',
    'miixeo.html': 'nb-miixeo',
    'silvernest.html': 'nb-silvernest',
    'gerard-ai.html': 'nb-gerard',
    'piers-mayers.html': 'nb-musique',
    'contact.html': '' # no active state strictly needed if no id
}

for filepath, id_active in files.items():
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        if id_active:
            content = content.replace(f'id="{id_active}"', f'id="{id_active}" class="active"')
            
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Fixed active in {filepath}")
    except FileNotFoundError:
        print(f"File {filepath} not found")

