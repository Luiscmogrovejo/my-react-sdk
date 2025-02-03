// release.config.js
module.exports = {
  branches: ['main', { name: 'next', prerelease: true }],
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    '@semantic-release/changelog',
    // 1) Publish to npmjs.org
    [
      '@semantic-release/npm',
      {
        npmPublish: true,
        registry: 'https://registry.npmjs.org',
      },
    ],
    // 2) Publish to GitHub Packages
    [
      '@semantic-release/npm',
      {
        npmPublish: true,
        registry: 'https://npm.pkg.github.com',
      },
    ],
    '@semantic-release/github',
  ],
};
