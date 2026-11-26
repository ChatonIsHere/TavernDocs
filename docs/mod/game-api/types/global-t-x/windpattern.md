---
title: "WindPattern"
description: "A ScriptableObject holding one wind speed and strength pair, used by the grass and local wind managers."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# WindPattern

A **class** in `Root.Township`, the global namespace.

A ScriptableObject holding one wind speed and strength pair, used by the grass and local wind managers.

- **Listed in** [Global namespace: T to X](/mod/game-api/types/global-t-x)
- **Inherits or implements** `ScriptableObject`
- **Derived types** [`WindPattern.CreateInstance`](/mod/game-api/types/global-t-x/windpattern-createinstance)
- **Nested types** [`CreateInstance`](/mod/game-api/types/global-t-x/windpattern-createinstance)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"WindPattern()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-windspeed" /><code>{"private float windSpeed"}</code> | <span className="api-desc">Backing field for `WindSpeed`.</span> |
| <Link id="m-windstrength" /><code>{"private float windStrength"}</code> | <span className="api-desc">Backing field for `WindStrength`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-windspeed-2" /><code>{"float WindSpeed { get; }"}</code> | <span className="api-desc">Wind speed.</span> |
| <Link id="m-windstrength-2" /><code>{"float WindStrength { get; }"}</code> | <span className="api-desc">Wind strength.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-create" /><code>{"void Create(float windSpeed, float windStrength)"}</code> | <span className="api-desc">Sets the speed and strength.</span> |

## Used in

Members of other types that take, return or hold a `WindPattern`:

<div className="api-used-in">

[`GrassManager.availablePatterns`](/mod/game-api/types/alta-world/grassmanager#m-availablepatterns), [`GrassManager.AvailablePatterns`](/mod/game-api/types/alta-world/grassmanager#m-availablepatterns-2), [`GrassManager.ReadPattern`](/mod/game-api/types/alta-world/grassmanager#m-readpattern), [`LocalWindManager.availablePatterns`](/mod/game-api/types/alta-world/localwindmanager#m-availablepatterns), [`LocalWindManager.AvailablePatterns`](/mod/game-api/types/alta-world/localwindmanager#m-availablepatterns-2), [`LocalWindManager.ReadPattern`](/mod/game-api/types/alta-world/localwindmanager#m-readpattern).

</div>
