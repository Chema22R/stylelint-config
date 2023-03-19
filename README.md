[![CodeQL](https://github.com/Chema22R/stylelint-config/actions/workflows/codeql-analysis.yml/badge.svg)](https://github.com/Chema22R/stylelint-config/actions/workflows/codeql-analysis.yml)
[![MIT License](https://camo.githubusercontent.com/d59450139b6d354f15a2252a47b457bb2cc43828/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f6c2f7365727665726c6573732e737667)](LICENSE)

# Stylelint Config

Stylelint basic configuration for personal projects.


## Installation

```
npm install --save-dev stylelint-config-chema22r
```


## Usage

This Stylelint config adds the rules modularly, depending on the needs of the project. Those are the possible extensions and their requirements:

| Extension ID | Requirements (plugins) |
|:-------------|:-----------------------:|
| [stylelint-config-chema22r](./index.js) | [stylelint-config-standard](https://www.npmjs.com/package/stylelint-config-standard) <br/> [stylelint-config-sass-guidelines](https://www.npmjs.com/package/stylelint-config-sass-guidelines) |

> All the extensions are compatible and can be combined.

> All the extensions include a default configuration that can be overwritten (parserOptions, rules, settings, etc.).

> All the extensions requirements must be installed or some of the imported rules might not work. E.g.: the extension [stylelint-config-chema22r](./index.js) imports a custom set of rules based on the extensions `stylelint-config-standard` and `stylelint-config-sass-guidelines` so in this case, not installing the plugin [stylelint-config-standard](https://www.npmjs.com/package/stylelint-config-standard) or [stylelint-config-sass-guidelines](https://www.npmjs.com/package/stylelint-config-sass-guidelines) will disable all the rules related to the corresponding plugin, but the stylelint rules will still be enabled.


# Examples

```json
{
    "extends": [
        "stylelint-config-chema22r"
    ],
    "ignoreFiles": [
        "**/*.html",
        "**/*.js",
        "**/*.jsx",
        "**/*.json"
    ],
    "rules": {}
}