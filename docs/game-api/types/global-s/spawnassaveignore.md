---
title: "SpawnAsSaveIgnore"
description: "Server: marks the entity's prefab so it is never saved."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SpawnAsSaveIgnore

A **class** in `Root.Township`, no namespace.

Server: marks the entity's prefab so it is never saved.

- **Listed in** [No namespace: S](/game-api/types/global-s)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"SpawnAsSaveIgnore()"}</code> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | Sets the entity's prefab save mode to `Ignore`. |
