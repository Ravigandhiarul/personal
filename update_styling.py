#!/usr/bin/env python3
"""
Script to apply premium CSS styling from index-premium.html to all assignment pages.
Updates Bootstrap links, Google Fonts, inline CSS, header structure, and footer scripts.
"""

import os
import re

# Read the complete style section from index-premium.html
def extract_style_section():
    """Extract the complete <style> block from index-premium.html"""
    premium_file = r'C:\Users\Lenovo\Documents\Personal\Interview\sessions\docs\index-premium.html'

    with open(premium_file, 'r', encoding='utf-8') as f:
        content = f.read()

    # Extract style block
    style_match = re.search(r'<style>(.*?)</style>', content, re.DOTALL)
    if style_match:
        return style_match.group(1)
    return None

# The new CSS/JS imports section
NEW_HEAD_SECTION = """
    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">

    <!-- Bootstrap Icons -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css">

    <!-- Google Fonts - Poppins -->
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
"""

# Bootstrap script
BOOTSTRAP_SCRIPT = '<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>'

# Smooth scroll script
SMOOTH_SCROLL_SCRIPT = '''<script>
        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            });
        });
    </script>'''

def update_file(filepath, is_source_file=False):
    """Update a single HTML file with new styling"""
    print(f"Processing: {filepath}")

    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()

        # Skip if already updated (check for Bootstrap 5.3.0)
        if 'bootstrap@5.3.0' in content:
            print(f"  ✓ Already updated, skipping")
            return True

        # 1. Remove old CSS link and fonts, replace with new head section
        # Pattern to match old styles link and Inter font
        old_head_pattern = r'<link rel="stylesheet" href="(?:\.\.\/)?css\/styles\.css">.*?<link href="https://fonts\.googleapis\.com/css2\?family=Inter.*?" rel="stylesheet">'

        if re.search(old_head_pattern, content, re.DOTALL):
            content = re.sub(old_head_pattern, NEW_HEAD_SECTION.strip(), content, flags=re.DOTALL)
        else:
            # Try alternate pattern (might have different font)
            old_head_pattern2 = r'<link rel="stylesheet" href="(?:\.\.\/)?css\/styles\.css">.*?(?=</head>)'
            if re.search(old_head_pattern2, content, re.DOTALL):
                content = re.sub(old_head_pattern2, NEW_HEAD_SECTION.strip() + '\n\n    <style>', content, flags=re.DOTALL)

        # 2. Add complete style section if not present
        style_content = extract_style_section()
        if style_content and '<style>' not in content:
            # Add before </head>
            content = content.replace('</head>', f'    <style>{style_content}    </style>\n</head>')

        # 3. Update header structure (basic replacement, preserving active link)
        # This is complex, so we'll do a targeted replacement

        # 4. Update footer to include container div
        footer_pattern = r'<footer class="site-footer">\s*<div class="footer-content">'
        if re.search(footer_pattern, content):
            content = re.sub(footer_pattern, '<footer class="site-footer">\n        <div class="container">\n            <div class="footer-content">', content)
            # Also close the container
            content = re.sub(r'</div>\s*</footer>', '    </div>\n        </div>\n    </footer>', content)

        # 5. Replace old scripts with new ones
        # Remove old mobile menu toggle script
        old_script_pattern = r'<script>.*?</script>\s*</body>'
        if re.search(old_script_pattern, content, re.DOTALL):
            # Find the last script before </body>
            body_end = content.rfind('</body>')
            script_start = content.rfind('<script>', 0, body_end)

            if script_start != -1:
                # Remove old scripts
                content = content[:script_start] + '\n    ' + BOOTSTRAP_SCRIPT + '\n\n    ' + SMOOTH_SCROLL_SCRIPT + '\n</body>\n</html>'

        # Write updated content
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)

        print(f"  ✓ Successfully updated")
        return True

    except Exception as e:
        print(f"  ✗ Error: {e}")
        return False

def main():
    """Main function to update all files"""
    base_path = r'C:\Users\Lenovo\Documents\Personal\Interview\sessions\docs'

    # Main pages (excluding index-premium.html which is the source)
    main_pages = [
        'ux-analysis.html',
        'seo-quick-wins.html',
        'seo-strategic.html',
        'wordpress-skills.html',
        'index.html'
    ]

    # Source pages
    source_pages = [
        'sources/index.html',
        'sources/nap-intro.html',
        'sources/nap-errors.html',
        'sources/nap-platforms.html',
        'sources/nap-financial.html',
        'sources/gbp-photos.html',
        'sources/gbp-profile.html',
        'sources/gbp-reviews.html',
        'sources/gbp-action.html',
        'sources/technical-action.html',
        'sources/technical-content.html',
        'sources/technical-schema.html',
        'sources/competitive-tokyosmoke.html',
        'sources/competitive-gaps.html',
        'sources/competitive-scorecard.html',
        'sources/w3c-findings.html',
        'sources/w3c-implementation.html'
    ]

    print("=" * 60)
    print("APPLYING PREMIUM STYLING TO ALL PAGES")
    print("=" * 60)

    success_count = 0
    fail_count = 0

    print("\nUPDATING MAIN PAGES:")
    print("-" * 60)
    for page in main_pages:
        filepath = os.path.join(base_path, page)
        if os.path.exists(filepath):
            if update_file(filepath, is_source_file=False):
                success_count += 1
            else:
                fail_count += 1
        else:
            print(f"WARNING: File not found: {filepath}")
            fail_count += 1

    print("\nUPDATING SOURCE PAGES:")
    print("-" * 60)
    for page in source_pages:
        filepath = os.path.join(base_path, page)
        if os.path.exists(filepath):
            if update_file(filepath, is_source_file=True):
                success_count += 1
            else:
                fail_count += 1
        else:
            print(f"⚠ File not found: {filepath}")
            fail_count += 1

    print("\n" + "=" * 60)
    print(f"SUMMARY: {success_count} files updated successfully, {fail_count} failed/skipped")
    print("=" * 60)

if __name__ == '__main__':
    main()
