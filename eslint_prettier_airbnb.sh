yarn add eslint prettier --dev

npx install-peerdeps --dev eslint-config-airbnb

yarn add --dev eslint-config-prettier eslint-plugin-prettier

echo -e "{
  \"extends\": [\"airbnb\", \"prettier\"],
  \"plugins\": [\"prettier\"],
  \"rules\": {
    \"prettier/prettier\": [\"error\"]
  },
}" > .eslintrc.json

echo -e "{
  \"printWidth\": 100,
  \"singleQuote\": true,
  \"jsxSingleQuote\": true
}" > .prettierrc.json

echo "Finalized configuration"