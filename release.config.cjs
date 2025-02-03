// release.config.js
module.exports = {
  branches: ['main', { name: 'next', prerelease: true }],
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    '@semantic-release/changelog',
    [
      '@semantic-release/npm',
      {
        npmPublish: true,
        registry: 'https://registry.npmjs.org',
      },
    ],
    '@semantic-release/github',
  ],
};
