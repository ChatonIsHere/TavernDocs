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

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)
- **Nested in** [`Element`](/mod/game-api/types/alta-world-generation/element)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SerializedVariable()"}</code> | <span className="api-desc">Creates an `Element.SerializedVariable` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-name" /><code>{"string name"}</code> | <span className="api-desc">The variable's name, the dictionary key.</span> |
| <Link id="m-value" /><code><Link to="/mod/game-api/types/assembly-other/generalvalue">{"GeneralValue"}</Link>{" value"}</code> | <span className="api-desc">The variable's value.</span> |

## Used in

Members of other types that take, return or hold a `SerializedVariable`:

<div className="api-used-in">

[`Element.serializedVariables`](/mod/game-api/types/alta-world-generation/element#m-serializedvariables).

</div>
