import urllib.request
import re

url = 'https://www.eyuel.me/assets/index-BU10dD1V.js'
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
content = urllib.request.urlopen(req).read().decode('utf-8', 'ignore')

# Print readable strings
matches = re.findall(r'["\']([A-Z][a-zA-Z0-9\s,.\-!/]{3,60})["\']', content)
print("=== Matches ===")
for m in set(matches):
    if any(w in m.lower() for w in ['project', 'experience', 'skill', 'about', 'contact', 'full stack', 'developer', 'software', 'eyuel', 'github', 'services', 'education', 'learning', 'management']):
        print(m)
