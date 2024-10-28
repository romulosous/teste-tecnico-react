module.exports = {
  '*/**/*.{js,jsx,ts,tsx}': [
    'prettier --write',
    'eslint --fix',
    'eslint',
    'jest --bail --findRelatedTests --passWithNoTests'
  ],
  '*/**/*.{json,css,md}': ['prettier --write']
}
