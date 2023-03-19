module.exports = {
    "extends": [
        "stylelint-config-standard",
        "stylelint-config-sass-guidelines"
    ],
    "rules": {
        "alpha-value-notation": "number",
        "at-rule-semicolon-space-before": "never",
        "color-function-notation": "legacy",
        "custom-media-pattern": "^[a-z][a-zA-Z0-9]+$",
        "custom-property-pattern": "^[a-z][a-zA-Z0-9]+$",
        "declaration-block-no-redundant-longhand-properties": true,
        "declaration-no-important": true,
        "declaration-empty-line-before": null,
        "declaration-property-unit-allowed-list": {
            "font-size": ["rem"],
            "line-height": ["rem"]
        },
        "font-family-name-quotes": "always-where-recommended",
        "font-weight-notation": "numeric",
        "function-no-unknown": null,
        "function-parentheses-space-inside": "never-single-line",
        "hue-degree-notation": "angle",
        "indentation": 4,
        "keyframes-name-pattern": "^[a-z][a-zA-Z0-9]+$",
        "max-empty-lines": 2,
        "max-line-length": 150,
        "max-nesting-depth": 5,
        "no-empty-first-line": true,
        "no-missing-end-of-source-newline": null,
        "no-unknown-animations": true,
        "number-leading-zero": "never",
        "order/properties-alphabetical-order": null,
        "order/properties-order": [
            [
                {
                    "emptyLineBefore": "threshold",
                    "groupName": "Position",
                    "noEmptyLineBetween": true,
                    "properties": [
                        "position",
                        "top",
                        "right",
                        "bottom",
                        "left",
                        "z-index"
                    ]
                }, {
                    "emptyLineBefore": "threshold",
                    "groupName": "Display",
                    "noEmptyLineBetween": true,
                    "properties": [
                        "display",

                        "flex",
                        "flex-basis",
                        "flex-direction",
                        "flex-flow",
                        "flex-grow",
                        "flex-shrink",
                        "flex-wrap",
                        "order",

                        "grid",
                        "grid-area",
                        "grid-template",
                        "grid-template-areas",
                        "grid-template-rows",
                        "grid-template-columns",
                        "grid-row",
                        "grid-row-start",
                        "grid-row-end",
                        "grid-column",
                        "grid-column-start",
                        "grid-column-end",
                        "grid-auto-rows",
                        "grid-auto-columns",
                        "grid-auto-flow",
                        "grid-gap",
                        "grid-row-gap",
                        "grid-column-gap"
                    ]
                }, {
                    "emptyLineBefore": "threshold",
                    "groupName": "Box Model",
                    "noEmptyLineBetween": true,
                    "properties": [
                        "box-sizing",

                        "float",
                        "clear",

                        "width",
                        "min-width",
                        "max-width",

                        "height",
                        "min-height",
                        "max-height",

                        "padding",
                        "padding-top",
                        "padding-right",
                        "padding-bottom",
                        "padding-left",

                        "margin",
                        "margin-top",
                        "margin-right",
                        "margin-bottom",
                        "margin-left",

                        "overflow",
                        "overflow-x",
                        "overflow-y",
                        "overflow-scrolling",
                        "overflow-style",

                        "object-fit",
                        "object-position",

                        "clip",
                        "clip-path"
                    ]
                }, {
                    "emptyLineBefore": "threshold",
                    "groupName": "Gap",
                    "noEmptyLineBetween": true,
                    "properties": [
                        "gap",
                        "row-gap",
                        "column-gap"
                    ]
                }, {
                    "emptyLineBefore": "threshold",
                    "groupName": "Align",
                    "noEmptyLineBetween": true,
                    "properties": [
                        "align-content",
                        "align-items",
                        "align-self"
                    ]
                }, {
                    "emptyLineBefore": "threshold",
                    "groupName": "Justify",
                    "noEmptyLineBetween": true,
                    "properties": [
                        "justify-content",
                        "justify-items",
                        "justify-self"
                    ]
                }, {
                    "emptyLineBefore": "threshold",
                    "groupName": "Typography",
                    "noEmptyLineBetween": true,
                    "properties": [
                        "font",
                        "font-family",
                        "font-size",
                        "font-style",
                        "font-weight",
                        "font-variant",
                        "font-size-adjust",
                        "font-stretch",
                        "font-effect",
                        "font-emphasize",
                        "font-emphasize-position",
                        "font-emphasize-style",
                        "font-smoothing",
                        "font-smooth",

                        "hyphens",
                        "line-height",
                        "color",

                        "text-align",
                        "text-align-last",
                        "text-emphasis",
                        "text-emphasis-color",
                        "text-emphasis-style",
                        "text-emphasis-position",
                        "text-decoration",
                        "text-indent",
                        "text-justify",
                        "text-outline",
                        "text-overflow",
                        "text-overflow-ellipsis",
                        "text-overflow-mode",
                        "text-shadow",
                        "text-transform",
                        "text-wrap",
                        "text-size-adjust",

                        "letter-spacing",

                        "word-break",
                        "word-spacing",
                        "word-wrap",

                        "overflow-wrap",
                        "tab-size",
                        "white-space",
                        "vertical-align",

                        "list-style",
                        "list-style-position",
                        "list-style-type",
                        "list-style-image"
                    ]
                }, {
                    "emptyLineBefore": "threshold",
                    "groupName": "Accessibility & Interactions",
                    "noEmptyLineBetween": true,
                    "properties": [
                        "pointer-events",
                        "touch-action",
                        "cursor",
                        "visibility",
                        "zoom",
                        "table-layout",
                        "empty-cells",
                        "caption-side",
                        "border-spacing",
                        "border-collapse",
                        "content",
                        "quotes",
                        "counter-reset",
                        "counter-increment",
                        "resize",
                        "user-select",
                        "nav-index",
                        "nav-up",
                        "nav-right",
                        "nav-down",
                        "nav-left"
                    ]
                }, {
                    "emptyLineBefore": "threshold",
                    "groupName": "Background & Borders",
                    "noEmptyLineBetween": true,
                    "properties": [
                        "filter",
                        "opacity",

                        "background",
                        "background-color",
                        "background-image",
                        "background-repeat",
                        "background-attachment",
                        "background-position",
                        "background-position-x",
                        "background-position-y",
                        "background-clip",
                        "background-origin",
                        "background-size",
                        "background-blend-mode",
                        "isolation",

                        "border",
                        "border-color",
                        "border-style",
                        "border-width",
                        "border-top",
                        "border-top-color",
                        "border-top-style",
                        "border-top-width",
                        "border-right",
                        "border-right-color",
                        "border-right-style",
                        "border-right-width",
                        "border-bottom",
                        "border-bottom-color",
                        "border-bottom-style",
                        "border-bottom-width",
                        "border-left",
                        "border-left-color",
                        "border-left-style",
                        "border-left-width",
                        "border-radius",
                        "border-top-left-radius",
                        "border-top-right-radius",
                        "border-bottom-right-radius",
                        "border-bottom-left-radius",
                        "border-image",
                        "border-image-source",
                        "border-image-slice",
                        "border-image-width",
                        "border-image-outset",
                        "border-image-repeat",

                        "outline",
                        "outline-width",
                        "outline-style",
                        "outline-color",
                        "outline-offset",

                        "box-shadow",
                        "appearance",
                        "mix-blend-mode",
                        "interpolation-mode"
                    ]
                }, {
                    "emptyLineBefore": "threshold",
                    "groupName": "SVG Presentation Attributes",
                    "noEmptyLineBetween": true,
                    "properties": [
                        "alignment-baseline",
                        "baseline-shift",
                        "dominant-baseline",
                        "text-anchor",
                        "word-spacing",
                        "writing-mode",

                        "fill",
                        "fill-opacity",
                        "fill-rule",
                        "stroke",
                        "stroke-dasharray",
                        "stroke-dashoffset",
                        "stroke-linecap",
                        "stroke-linejoin",
                        "stroke-miterlimit",
                        "stroke-opacity",
                        "stroke-width",

                        "color-interpolation",
                        "color-interpolation-filters",
                        "color-profile",
                        "color-rendering",
                        "flood-color",
                        "flood-opacity",
                        "image-rendering",
                        "lighting-color",
                        "marker-start",
                        "marker-mid",
                        "marker-end",
                        "mask",
                        "shape-rendering",
                        "stop-color",
                        "stop-opacity"
                    ]
                }, {
                    "emptyLineBefore": "threshold",
                    "groupName": "Transitions & Animation",
                    "noEmptyLineBetween": true,
                    "properties": [
                        "transition",
                        "transition-delay",
                        "transition-timing-function",
                        "transition-duration",
                        "transition-property",

                        "transform",
                        "transform-origin",

                        "animation",
                        "animation-name",
                        "animation-duration",
                        "animation-play-state",
                        "animation-timing-function",
                        "animation-delay",
                        "animation-iteration-count",
                        "animation-direction"
                    ]
                }
            ],
            {
                "emptyLineBeforeUnspecified": "threshold",
                "emptyLineMinimumPropertyThreshold": 3,
                "unspecified": "bottomAlphabetical"
            }
        ],
        "scss/at-mixin-pattern": "^[a-z][a-zA-Z0-9]+$",
        "scss/dollar-variable-pattern": "^[a-z][a-zA-Z0-9]+$",
        "selector-attribute-quotes": "always",
        "selector-class-pattern": "^[a-z][a-zA-Z0-9]+$",
        "selector-id-pattern": "^[a-z][a-zA-Z0-9]+$",
        "selector-max-compound-selectors": 5,
        "selector-no-qualifying-type": [true, { "ignore": ["attribute", "class"] }],
        "unit-allowed-list": ["%", "deg", "px", "rem", "s", "vw", "vh"]
    }
};