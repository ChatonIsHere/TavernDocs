---
title: "ButtonAttribute"
description: "Inspector attribute that draws a button for a bool field and calls a method on the component when it's clicked."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ButtonAttribute

A **class** in `Alta.Attributes`, the global namespace.

Inspector attribute that draws a button for a bool field and calls a method on the component when it's clicked. Editor only in effect.

- **Listed in** [Other Alta assemblies](/mod/game-api/types/assembly-other)
- **Inherits or implements** `PropertyAttribute`
- **Attributes** `MeansImplicitUse`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ButtonAttribute(string text, string method = null, bool isDelayedCall = true, string validationMethod = null)"}</code> | <span className="api-desc">Creates a `ButtonAttribute` from `text`, `method`, `isDelayedCall` and `validationMethod`.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isdelayedcall" /><code>{"bool IsDelayedCall { get; private set; }"}</code> | <span className="api-desc">Whether the method is called on a delayed editor call rather than straight away. Defaults to true.</span> |
| <Link id="m-method" /><code>{"string Method { get; private set; }"}</code> | <span className="api-desc">Name of the method to call when the button is clicked. Can be null, as with `ChooseRandomChild`, which reads the bool in `OnValidate` instead.</span> |
| <Link id="m-text" /><code>{"string Text { get; private set; }"}</code> | <span className="api-desc">Label shown on the button.</span> |
| <Link id="m-validationmethod" /><code>{"string ValidationMethod { get; private set; }"}</code> | <span className="api-desc">Name of an optional method that decides whether the button is usable.</span> |
