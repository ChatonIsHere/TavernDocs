---
title: "ShootArguments"
description: "struct ShootArguments in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ShootArguments

A **struct** in `Root.Township`, no namespace.

- **Listed in** [No namespace: S](/game-api/types/global-s)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ShootArguments("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" shot, float strength)"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-chunk" /><code><Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk"}</code> |  |
| <Link id="m-position" /><code>{"Vector3 position"}</code> |  |
| <Link id="m-rotation" /><code>{"Quaternion rotation"}</code> |  |
| <Link id="m-strength" /><code>{"float strength"}</code> |  |
| <Link id="m-target" /><code>{"uint target"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-serialize" /><code>{"void Serialize("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |

## Used in

Members of other types that take, return or hold a `ShootArguments`:

[`BowString.syncShoot`](/game-api/types/global-a-b/bowstring#m-syncshoot), [`Shooter.syncShoot`](/game-api/types/global-s/shooter#m-syncshoot), [`Shooter.SyncShoot`](/game-api/types/global-s/shooter#m-syncshoot-2).
