import os
import re

root_dir = '/home/deadpool/Projects/luci-theme-aurora'
exclude_dirs = {'.git', 'node_modules'}

# Rename contents first
for dirpath, dirnames, filenames in os.walk(root_dir):
    dirnames[:] = [d for d in dirnames if d not in exclude_dirs]
    for filename in filenames:
        if filename == 'rebrand.py': continue
        filepath = os.path.join(dirpath, filename)
        try:
            with open(filepath, 'r', encoding='utf-8') as f:
                content = f.read()
            new_content = content.replace('aurora', 'matrix').replace('Aurora', 'Matrix')
            if content != new_content:
                with open(filepath, 'w', encoding='utf-8') as f:
                    f.write(new_content)
        except Exception:
            pass # ignore binary

# Then rename files and directories bottom-up
for dirpath, dirnames, filenames in os.walk(root_dir, topdown=False):
    for name in dirnames:
        if name in exclude_dirs:
            continue
    for name in filenames + dirnames:
        if name == 'rebrand.py': continue
        if 'aurora' in name.lower():
            old_path = os.path.join(dirpath, name)
            new_name = name.replace('aurora', 'matrix').replace('Aurora', 'Matrix')
            new_path = os.path.join(dirpath, new_name)
            os.rename(old_path, new_path)
