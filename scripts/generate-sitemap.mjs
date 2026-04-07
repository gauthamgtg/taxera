import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { SERVICES_DATA } from '../src/data/servicesData.js';
import { TOOLS_DATA } from '../src/data/toolsData.js';
import { PROBLEM_PAGES } from '../src/data/problemPagesData.js';

const BASE_URL = 'https://taxera.in';

function xmlEscape(value) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;');
}

function toUrl(pathname) {
  if (pathname === '/') return BASE_URL;
  return `${BASE_URL}${pathname}`;
}

function buildRoutes() {
  const routes = [
    { path: '/', changefreq: 'weekly', priority: '1.0' },
    { path: '/tools', changefreq: 'weekly', priority: '0.9' },
    { path: '/templates', changefreq: 'weekly', priority: '0.85' },
  ];

  SERVICES_DATA.forEach((category) => {
    routes.push({
      path: `/services/${category.id}`,
      changefreq: 'weekly',
      priority: '0.9',
    });

    category.services.forEach((service) => {
      routes.push({
        path: `/services/${category.id}/${service.slug}`,
        changefreq: 'weekly',
        priority: '0.8',
      });
    });
  });

  TOOLS_DATA.forEach((tool) => {
    routes.push({
      path: `/tools/${tool.slug}`,
      changefreq: 'monthly',
      priority: '0.75',
    });
  });

  PROBLEM_PAGES.forEach((page) => {
    routes.push({
      path: `/${page.slug}`,
      changefreq: 'weekly',
      priority: '0.8',
    });
  });

  const unique = new Map();
  routes.forEach((route) => {
    if (!unique.has(route.path)) {
      unique.set(route.path, route);
    }
  });

  return Array.from(unique.values());
}

function buildSitemapXml(routes) {
  const today = new Intl.DateTimeFormat('en-CA', {
    timeZone: 'Asia/Kolkata',
  }).format(new Date());
  const urls = routes
    .map((route) => {
      const loc = xmlEscape(toUrl(route.path));
      return [
        '  <url>',
        `    <loc>${loc}</loc>`,
        `    <lastmod>${today}</lastmod>`,
        `    <changefreq>${route.changefreq}</changefreq>`,
        `    <priority>${route.priority}</priority>`,
        '  </url>',
      ].join('\n');
    })
    .join('\n');

  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    urls,
    '</urlset>',
    '',
  ].join('\n');
}

function buildRobotsTxt() {
  return [
    'User-agent: *',
    'Allow: /',
    '',
    `Sitemap: ${BASE_URL}/sitemap.xml`,
    '',
  ].join('\n');
}

async function main() {
  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  const publicDir = path.resolve(__dirname, '../public');
  const sitemapPath = path.join(publicDir, 'sitemap.xml');
  const robotsPath = path.join(publicDir, 'robots.txt');

  await mkdir(publicDir, { recursive: true });

  const routes = buildRoutes();
  const sitemapXml = buildSitemapXml(routes);
  const robotsTxt = buildRobotsTxt();

  await writeFile(sitemapPath, sitemapXml, 'utf8');
  await writeFile(robotsPath, robotsTxt, 'utf8');

  console.log(`Generated sitemap with ${routes.length} URLs at ${sitemapPath}`);
  console.log(`Generated robots.txt at ${robotsPath}`);
}

main().catch((error) => {
  console.error('Failed to generate sitemap/robots:', error);
  process.exit(1);
});
