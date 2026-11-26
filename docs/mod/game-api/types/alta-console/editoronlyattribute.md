---
title: "EditorOnlyAttribute"
description: "Console requirement: the command only runs outside play mode (in the Unity editor)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# EditorOnlyAttribute

A **class** in `Root.Township`, `Alta.Console`.

Console requirement: the command only runs outside play mode (in the Unity editor).

- **Listed in** [Console, logging and analytics](/mod/game-api/types/alta-console)
- **Inherits or implements** [`RequirementAttribute`](/mod/game-api/types/alta-console/requirementattribute)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"EditorOnlyAttribute()"}</code> | Creates an `EditorOnlyAttribute` with default values. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-check" /><code>{"override bool Check()"}</code> | True when the application is not playing. |
| <Link id="m-tostring" /><code>{"override string ToString()"}</code> | Returns "Editor Only". |
