#!/usr/bin/env python3
"""
Generate HTML source document files for Sessions Cannabis assignment
"""

import os

BASE_DIR = r"C:\Users\Lenovo\Documents\Personal\Interview\sessions\docs\sources"

# HTML Template
def create_html(title, category, part, breadcrumb, prev_link, next_link, content):
    """Generate complete HTML page"""
    return f'''<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{title} | Sessions Cannabis Source Documents</title>
    <link rel="stylesheet" href="../css/styles.css">
</head>
<body>
    <header class="site-header">
        <div class="header-container">
            <div class="site-logo">
                <img src="../images/sessions-logo.svg" alt="Sessions Cannabis Logo">
                <div class="site-title">
                    <h1>SESSIONS CANNABIS ASSIGNMENT</h1>
                    <p class="subtitle">by Ravi Arul</p>
                </div>
            </div>
            <nav class="main-nav">
                <ul>
                    <li><a href="../index.html">Home</a></li>
                    <li><a href="index.html" class="active">Source Documents</a></li>
                </ul>
            </nav>
        </div>
    </header>

    <nav aria-label="Breadcrumb" style="max-width: 1200px; margin: 1rem auto; padding: 0 2rem;">
        <ol style="list-style: none; padding: 0; display: flex; gap: 0.5rem; font-size: 0.9rem;">
            <li><a href="../index.html">Home</a></li>
            <li>></li>
            <li><a href="index.html">Source Documents</a></li>
            <li>></li>
            <li><a href="index.html#{breadcrumb}">{category}</a></li>
            <li>></li>
            <li>{part}</li>
        </ol>
    </nav>

    <main class="container">
        <div class="content-wrapper">
            {content}

            <hr style="margin: 3rem 0;">
            <div style="display: flex; justify-content: space-between; margin-top: 2rem;">
                {f'<a href="{prev_link}" class="btn">← Previous</a>' if prev_link else '<div></div>'}
                {f'<a href="{next_link}" class="btn btn-primary">Next →</a>' if next_link else '<a href="index.html" class="btn">Back to Index</a>'}
            </div>
        </div>
    </main>

    <footer class="site-footer">
        <div class="footer-content">
            <p><strong>Sessions Cannabis Assignment</strong> | Submitted by <strong>Ravi Arul</strong> | December 2024</p>
        </div>
    </footer>
</body>
</html>'''

# Document content definitions
documents = {
    'nap-platforms.html': {
        'title': 'NAP Part 1C: Platform Analysis',
        'category': 'NAP Analysis',
        'part': 'Part 1C',
        'breadcrumb': 'nap-analysis',
        'prev': 'nap-errors.html',
        'next': 'nap-financial.html',
        'content': '''<h1>NAP CITATION RESEARCH</h1>
<h2>Part 1C: Platform Distribution & Competitive Analysis</h2>

<div class="stats">
<h3>Platform Presence Comparison</h3>
<table>
<thead><tr><th>Platform</th><th>Sessions</th><th>Tokyo Smoke</th><th>Gap</th></tr></thead>
<tbody>
<tr><td>Google Business Profile</td><td>45/45 locations</td><td>39/39 locations</td><td>✓ Complete</td></tr>
<tr><td>Weedmaps</td><td>42/45 (93%)</td><td>39/39 (100%)</td><td>3 missing</td></tr>
<tr><td>Leafly</td><td>38/45 (84%)</td><td>39/39 (100%)</td><td>7 missing</td></tr>
<tr><td>Yelp</td><td>40/45 (89%)</td><td>39/39 (100%)</td><td>5 missing</td></tr>
<tr><td>Apple Maps</td><td>45/45 (100%)</td><td>39/39 (100%)</td><td>✓ Complete</td></tr>
</tbody>
</table>
</div>

<h3>Key Findings</h3>
<ul>
<li><strong>Coverage Gap:</strong> Sessions missing from 15-20 important platform instances</li>
<li><strong>Quality Gap:</strong> Where Sessions IS listed, 35% have NAP errors</li>
<li><strong>Competitive Disadvantage:</strong> Tokyo Smoke has 90% consistency vs Sessions' 65%</li>
</ul>

<div class="important-points">
<h4>Financial Impact by Platform</h4>
<p><strong>Tier 1 Platforms (Google, Weedmaps, Leafly):</strong> $595K annual opportunity</p>
<p><strong>Tier 2 Platforms (Yelp, Bing, Facebook):</strong> $150K annual opportunity</p>
<p><strong>Tier 3 Platforms (Directories):</strong> $105K annual opportunity</p>
<p><strong>Total NAP Opportunity:</strong> $850K annually</p>
</div>'''
    },

    'nap-financial.html': {
        'title': 'NAP Part 1D: Financial Impact',
        'category': 'NAP Analysis',
        'part': 'Part 1D',
        'breadcrumb': 'nap-analysis',
        'prev': 'nap-platforms.html',
        'next': 'gbp-profile.html',
        'content': '''<h1>NAP CITATION RESEARCH</h1>
<h2>Part 1D: Financial Impact & Implementation Roadmap</h2>

<div class="stats">
<h3>Revenue Impact Calculation</h3>
<p><strong>Current State:</strong> 65% NAP consistency</p>
<p><strong>Target State:</strong> 90% NAP consistency</p>
<p><strong>Gap to Close:</strong> 25 percentage points</p>

<h4>Conservative Calculation</h4>
<ul>
<li>Current monthly visits: 273,200</li>
<li>45% from local search: 122,940 visits</li>
<li>15% visibility increase from NAP cleanup: 18,441 additional visits/month</li>
<li>Conversion rate 8% × $75 AOV = $110,646/month</li>
<li><strong>Annual Impact: $1,327,752</strong></li>
</ul>

<p><strong>Main assignment cited $595,000</strong> (focusing only on top 10 high-traffic locations)</p>
</div>

<h3>Investment Required</h3>
<div class="revision-box">
<h4>6-Week Implementation Plan</h4>
<table>
<thead><tr><th>Phase</th><th>Timeline</th><th>Investment</th><th>Activities</th></tr></thead>
<tbody>
<tr><td><strong>Phase 1</strong></td><td>Week 1-2</td><td>$12,000</td><td>Audit all 45 locations, fix critical errors, merge duplicates</td></tr>
<tr><td><strong>Phase 2</strong></td><td>Week 3-4</td><td>$8,000</td><td>Standardize naming, fix address abbreviations, add missing listings</td></tr>
<tr><td><strong>Phase 3</strong></td><td>Week 5-6</td><td>$7,000</td><td>Tier 2/3 platforms, phone standardization, ongoing monitoring setup</td></tr>
</tbody>
</table>
<p><strong>Total Year 1 Investment:</strong> $27,000</p>
<p><strong>Expected Annual Return:</strong> $595,000 (conservative) to $850,000 (full scope)</p>
<p><strong>ROI:</strong> 2,104% to 3,048%</p>
</div>

<div class="checklist">
<h4>Tools & Resources Needed</h4>
<ul>
<li><strong>BrightLocal</strong> ($399/year) - Citation tracking & management</li>
<li><strong>Spreadsheet System</strong> (Free) - Master NAP source of truth</li>
<li><strong>Labor:</strong> 60-80 hours @ $75/hr for cleanup</li>
<li><strong>Ongoing:</strong> 4 hours/month maintenance</li>
</ul>
</div>'''
    },
}

# Create all HTML files
for filename, data in documents.items():
    filepath = os.path.join(BASE_DIR, filename)
    html_content = create_html(
        title=data['title'],
        category=data['category'],
        part=data['part'],
        breadcrumb=data['breadcrumb'],
        prev_link=data.get('prev'),
        next_link=data.get('next'),
        content=data['content']
    )

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(html_content)
    print(f"Created: {filename}")

print(f"\nAll files created in: {BASE_DIR}")
