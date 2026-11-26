---
title: "NetworkEntityModifiers"
description: "Base class for spawn modifiers that work on a NetworkEntity."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# NetworkEntityModifiers

An **abstract class** in `Root.Township`, the global namespace.

Base class for spawn modifiers that work on a `NetworkEntity`. It adds nothing to `SpawnModifier`.

- **Listed in** [Global namespace: M to O](/mod/game-api/types/global-m-o)
- **Inherits or implements** [`SpawnModifier<NetworkEntity>`](/mod/game-api/types/global-s/spawnmodifier-t)
- **Derived types** [`SetKinematicModifier`](/mod/game-api/types/global-s/setkinematicmodifier)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected NetworkEntityModifiers()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Used in

Members of other types that take, return or hold a `NetworkEntityModifiers`:

[`SpawnModifiers.networkEntityModifiers`](/mod/game-api/types/alta-world-generation/spawnmodifiers#m-networkentitymodifiers).
