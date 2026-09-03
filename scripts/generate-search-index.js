const fs = require('fs');
const path = require('path');

function walk(dir) {
  const files = [];
  for (const entry of fs.readdirSync(dir, {withFileTypes: true})) {
    const res = path.resolve(dir, entry.name);
    if (entry.isDirectory()) files.push(...walk(res));
    else files.push(res);
  }
  return files;
}

function stripFrontmatter(content) {
  return content.replace(/^---[\s\S]*?---\s*/,'');
}

function stripMarkdown(md) {
  return md
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/`[^`]*`/g, ' ')
    .replace(/!\[[^\]]*\]\([^)]*\)/g, ' ')
    .replace(/\[[^\]]*\]\([^)]*\)/g, ' ')
    .replace(/[#>*-]/g, ' ')
    .replace(/\n+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function buildIndex(docsDir, outFile) {
  const files = walk(docsDir).filter(f => f.endsWith('.md') || f.endsWith('.mdx'));
  const index = files.map(f => {
    const rel = path.relative(docsDir, f);
    const url = '/docs/' + rel.replace(/\\\\/g, '/').replace(/\.mdx?$/,'');
    let content = fs.readFileSync(f, 'utf-8');
    const original = content;
    content = stripFrontmatter(content);
    const titleMatch = original.match(/title:\s*(?:"|')?([^\n\r"]+)/i);
    const title = titleMatch ? titleMatch[1].trim() : path.basename(f).replace(/\.mdx?$/,'');
    const text = stripMarkdown(content).slice(0, 2000);
    return {title, url, text};
  });
  fs.mkdirSync(path.dirname(outFile), {recursive:true});
  fs.writeFileSync(outFile, JSON.stringify(index, null, 2), 'utf-8');
  console.log('Wrote', outFile, 'with', index.length, 'entries');
}

const docsDir = path.resolve(__dirname, '..', 'docs');
const outFile = path.resolve(__dirname, '..', 'static', 'search-index.json');
buildIndex(docsDir, outFile);
