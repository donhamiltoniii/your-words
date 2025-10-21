// release.config.js
module.exports = {
  branches: ['main'],
  plugins: [
    // 1️⃣ Verify the code compiles (fails fast if TS errors exist)
    [
      '@semantic-release/exec',
      {
        // This runs *before* any version is calculated.
        // If the command exits with a non‑zero status, the release aborts.
        verifyReleaseCmd: 'npm run build'
      }
    ],

    // 2️⃣ Normal Semantic Release plugins
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    [
      '@semantic-release/changelog',
      { changelogFile: 'CHANGELOG.md' }
    ],
    [
      '@semantic-release/git',
      {
        assets: [
          'package.json',
          'package-lock.json', // or yarn.lock / pnpm-lock.yaml
          'CHANGELOG.md'
        ],
        message:
          'chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}'
      }
    ],
    '@semantic-release/github'

    // Uncomment if you also publish to npm
    // [
    //   '@semantic-release/npm',
    //   { npmPublish: true }
    // ]
  ]
};