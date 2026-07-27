export function generateMockReadme(repositoryUrl: string) {
  const name = repositoryUrl.replace(/\/$/, "").split("/").at(-1) || "project";
  return `# ${name}

A professionally documented project, generated from its repository context.

## Features

- Clear project overview
- Focused installation guidance
- Contribution-ready documentation

## Installation

\`\`\`bash
git clone ${repositoryUrl}
cd ${name}
npm install
\`\`\`

## Usage

\`\`\`bash
npm run dev
\`\`\`

## Contributing

Contributions are welcome. Open an issue before submitting a pull request.

## License

Add the appropriate license for this project.
`;
}
