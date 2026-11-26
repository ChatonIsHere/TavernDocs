---
title: "SkillShrine.ConnectionSyncArgument"
description: "Network message telling clients which skill orbs on a shrine to draw connections between, built on the server from the spawned orbs and their slot dependencies."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SkillShrine.ConnectionSyncArgument

A **private class** in `Root.Township`, no namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Network message telling clients which skill orbs on a shrine to draw connections between, built on the server from the spawned orbs and their slot dependencies.

- **Listed in** [No namespace: S](/game-api/types/global-s)
- **Nested in** [`SkillShrine`](/game-api/types/global-s/skillshrine)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ConnectionSyncArgument()"}</code> |
| <Link id="m-ctor-2" /><code>{"ConnectionSyncArgument(Dictionary<uint, "}<Link to="/game-api/types/global-s/skillshrine-apliedslottuple">{"SkillShrine.ApliedSlotTuple"}</Link>{"> spawnedOrbs)"}</code> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-orbstoconnect" /><code>{"List<uint> OrbsToConnect { get; }"}</code> | Flat list of orb entity ID pairs; an orb with no dependencies is paired with 0. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-serialize" /><code>{"void Serialize("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Writes the count and IDs; clients read them back. The count is limited to 127 IDs. |

## Used in

Members of other types that take, return or hold a `ConnectionSyncArgument`:

[`SkillShrine.syncConnections`](/game-api/types/global-s/skillshrine#m-syncconnections), [`SkillShrine.SyncConnections`](/game-api/types/global-s/skillshrine#m-syncconnections-2).
