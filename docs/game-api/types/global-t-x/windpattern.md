---
title: "WindPattern"
description: "A ScriptableObject holding one wind speed and strength pair, used by the grass and local wind managers."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# WindPattern

A **class** in `Root.Township`, no namespace.

A ScriptableObject holding one wind speed and strength pair, used by the grass and local wind managers.

- **Listed in** [No namespace: T to X](/game-api/types/global-t-x)
- **Inherits or implements** `ScriptableObject`
- **Derived types** [`WindPattern.CreateInstance`](/game-api/types/global-t-x/windpattern-createinstance)
- **Nested types** [`CreateInstance`](/game-api/types/global-t-x/windpattern-createinstance)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"WindPattern()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-windspeed" /><code>{"private float windSpeed"}</code> |  |
| <Link id="m-windstrength" /><code>{"private float windStrength"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-windspeed-2" /><code>{"float WindSpeed { get; }"}</code> | Wind speed. |
| <Link id="m-windstrength-2" /><code>{"float WindStrength { get; }"}</code> | Wind strength. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-create" /><code>{"void Create(float windSpeed, float windStrength)"}</code> | Sets the speed and strength. |

## Used in

Members of other types that take, return or hold a `WindPattern`:

[`GrassManager.availablePatterns`](/game-api/types/alta-world/grassmanager#m-availablepatterns), [`GrassManager.AvailablePatterns`](/game-api/types/alta-world/grassmanager#m-availablepatterns-2), [`GrassManager.ReadPattern`](/game-api/types/alta-world/grassmanager#m-readpattern), [`LocalWindManager.availablePatterns`](/game-api/types/alta-world/localwindmanager#m-availablepatterns), [`LocalWindManager.AvailablePatterns`](/game-api/types/alta-world/localwindmanager#m-availablepatterns-2), [`LocalWindManager.ReadPattern`](/game-api/types/alta-world/localwindmanager#m-readpattern).
