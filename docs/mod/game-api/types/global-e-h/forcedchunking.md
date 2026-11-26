---
title: "ForcedChunking"
description: "Bake-time marker that is destroyed on bake."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ForcedChunking

A **class** in `Root.Township`, the global namespace.

Bake-time marker that is destroyed on bake. Nothing in this build reads it.

- **Listed in** [Global namespace: E to H](/mod/game-api/types/global-e-h)
- **Inherits or implements** `MonoBehaviour`, [`IDestroyOnBake`](/mod/game-api/types/global-i-l/idestroyonbake)
- **Attributes** `DisallowMultipleComponent`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ForcedChunking()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-isforcedsingleprefab" /><code>{"bool isForcedSinglePrefab"}</code> | Flag for the chunking bake. Not read anywhere in this build. |
