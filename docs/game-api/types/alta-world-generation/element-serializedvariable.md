---
title: "Element.SerializedVariable"
description: "Name and value pair that Unity can save."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Element.SerializedVariable

A **class** in `Root.Township`, `Alta.Caves`.

Name and value pair that Unity can save. `Element` copies its `Variables` dictionary into a list of these before serialising and back after loading.

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Nested in** [`Element`](/game-api/types/alta-world-generation/element)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"SerializedVariable()"}</code> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-name" /><code>{"string name"}</code> | The variable's name, the dictionary key. |
| <Link id="m-value" /><code><Link to="/game-api/types/assembly-other/generalvalue">{"GeneralValue"}</Link>{" value"}</code> | The variable's value. |

## Used in

Members of other types that take, return or hold a `SerializedVariable`:

[`Element.serializedVariables`](/game-api/types/alta-world-generation/element#m-serializedvariables).
