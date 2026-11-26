---
title: "ButtonAttribute"
description: "Inspector attribute that draws a button for a bool field and calls a method on the component when it's clicked."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ButtonAttribute

A **class** in `Alta.Attributes`, no namespace.

Inspector attribute that draws a button for a bool field and calls a method on the component when it's clicked. Editor only in effect.

- **Listed in** [Other Alta assemblies](/game-api/types/assembly-other)
- **Inherits or implements** `PropertyAttribute`
- **Attributes** `MeansImplicitUse`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ButtonAttribute(string text, string method = null, bool isDelayedCall = true, string validationMethod = null)"}</code> | Creates a `ButtonAttribute` from `text`, `method`, `isDelayedCall` and `validationMethod`. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isdelayedcall" /><code>{"bool IsDelayedCall { get; private set; }"}</code> | Whether the method is called on a delayed editor call rather than straight away. Defaults to true. |
| <Link id="m-method" /><code>{"string Method { get; private set; }"}</code> | Name of the method to call when the button is clicked. Can be null, as with `ChooseRandomChild`, which reads the bool in `OnValidate` instead. |
| <Link id="m-text" /><code>{"string Text { get; private set; }"}</code> | Label shown on the button. |
| <Link id="m-validationmethod" /><code>{"string ValidationMethod { get; private set; }"}</code> | Name of an optional method that decides whether the button is usable. |
