---
title: "LerpModifier"
description: "Float modifier that maps its input from 0 to 1 onto a range between from and to."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LerpModifier

A **class** in `Root.Township`, no namespace.

Float modifier that maps its input from 0 to 1 onto a range between `from` and `to`.

- **Listed in** [No namespace: I to L](/game-api/types/global-i-l)
- **Inherits or implements** [`FloatModifier`](/game-api/types/global-e-h/floatmodifier)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LerpModifier()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-from" /><code>{"private float from"}</code> | Output for an input of 0. |
| <Link id="m-to" /><code>{"private float to"}</code> | Output for an input of 1. Defaults to 10. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-input" /><code>{"override void Input(float value)"}</code> | Outputs the value lerped between `from` and `to`. Inputs are clamped to 0 to 1. |
