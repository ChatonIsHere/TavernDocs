---
title: "GarbageCollectIntervalPatch"
description: "Patches GarbageCollectTimer.Start to set the timer's interval from garbage_collection_timer in server_settings.json."
displayed_sidebar: tavernlib
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GarbageCollectIntervalPatch

A **class** in `TavernLib`, `TavernLib.Patches`.

Patches `GarbageCollectTimer.Start` to set the timer's interval from `garbage_collection_timer` in `server_settings.json`. Server.

- **Listed in** [TavernLib.Patches](/mod/tavernlib-api/types/patches)
- **Attributes** `HarmonyPatch`
- **Documented in** [GarbageCollectIntervalPatch](/mod/tavernlib-api/types/patches/garbagecollectintervalpatch)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"GarbageCollectIntervalPatch()"}</code> | <span className="api-desc">Created by TavernLib; mods don't make one.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-intervalfield" /><code>{"private static readonly FieldInfo IntervalField"}</code> | <span className="api-desc">Reflection handle on the private `interval` field of `GarbageCollectTimer`.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-overrideinterval" /><code>{"static void OverrideInterval("}<Link to="/mod/game-api/types/global-e-h/garbagecollecttimer">{"GarbageCollectTimer"}</Link>{" __instance)"}</code> | <span className="api-desc">Prefix that re-reads the server settings and sets the private `interval`. Keeps the prefab's value with no `TavernManager` or unreadable settings.</span> |
