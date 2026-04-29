import re

# Read index.html to extract sections
with open('index.html', 'r', encoding='utf-8') as f:
    idx = f.read()

gerard_match = re.search(r'(<div id="page-gerard" class="page">.*?)<!-- /page-gerard -->', idx, re.DOTALL)
gerard_html = gerard_match.group(1).replace('class="page"', '').replace('<div id="page-gerard"', '<main id="page-gerard"') + "</main>"

silvernest_match = re.search(r'(<div id="page-silvernest" class="page">.*?)<!-- FOOTER -->', idx, re.DOTALL)
sn_html = silvernest_match.group(1).replace('class="page"', '').replace('<div id="page-silvernest"', '<main id="page-silvernest"') + "</main>"

# Read tribu.html as a template
with open('tribu.html', 'r', encoding='utf-8') as f:
    template = f.read()

# Generate silvernest.html
sn_page = re.sub(r'<main id="page-tribu">.*?</main>', sn_html, template, flags=re.DOTALL)
sn_page = sn_page.replace('<title>TRIBU — Agence de Recrutement IT boostée par l\'Intelligence Artificielle</title>', '<title>SilverNest Design — Studio de Web Design Premium</title>')
sn_page = sn_page.replace('href="https://raphaelpaya.com/"', 'href="https://raphaelpaya.com/silvernest"')
sn_page = sn_page.replace('class="active"', '') # remove active from menu
sn_page = sn_page.replace('id="nb-silvernest"', 'id="nb-silvernest" class="active"')
with open('silvernest.html', 'w', encoding='utf-8') as f:
    f.write(sn_page)

# Generate gerard-ai.html
g_page = re.sub(r'<main id="page-tribu">.*?</main>', gerard_html, template, flags=re.DOTALL)
g_page = g_page.replace('<title>TRIBU — Agence de Recrutement IT boostée par l\'Intelligence Artificielle</title>', '<title>Gérard AI — Le futur de l\'assistant RH</title>')
g_page = g_page.replace('href="https://raphaelpaya.com/"', 'href="https://raphaelpaya.com/gerard-ai"')
g_page = g_page.replace('class="active"', '')
g_page = g_page.replace('id="nb-gerard"', 'id="nb-gerard" class="active"')
with open('gerard-ai.html', 'w', encoding='utf-8') as f:
    f.write(g_page)

# Fix canonicals in other files
files_to_fix = {
    'tribu.html': 'https://raphaelpaya.com/tribu',
    'miixeo.html': 'https://raphaelpaya.com/miixeo',
    'piers-mayers.html': 'https://raphaelpaya.com/piers-mayers',
    'contact.html': 'https://raphaelpaya.com/contact',
    'bio.html': 'https://raphaelpaya.com/bio'
}

for fname, canonical in files_to_fix.items():
    try:
        with open(fname, 'r', encoding='utf-8') as f:
            content = f.read()
        content = re.sub(r'<link rel="canonical" href="https://raphaelpaya.com/"\s*/>', f'<link rel="canonical" href="{canonical}" />', content)
        with open(fname, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Fixed canonical in {fname}")
    except Exception as e:
        print(f"Error fixing {fname}: {e}")

