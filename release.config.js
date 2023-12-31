// export const config={
//     "branches": ["main"],
//     "plugins": [
//       "@semantic-release/commit-analyzer",
//       "@semantic-release/release-notes-generator",
//       "@semantic-release/changelog",
//       "@semantic-release/github"
//     ]
//   }

// const config = {
//     branches: ['main'],
//     plugins: [
//       '@semantic-release/commit-analyzer',
//       '@semantic-release/release-notes-generator',
//       '@semantic-release/npm',
//       ['@semantic-release/git', {
//         'assets': ['package.json'],
//         'message': 'chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}'
//       }],
//       '@semantic-release/github'
//     ]
//   };

const config = {
  branches: ["main"],
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    "@semantic-release/changelog",
    "@semantic-release/npm",
    [
      "@semantic-release/git",
      {
        message:
          "chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}",
      },
    ],
  ],
};

module.exports = config;
