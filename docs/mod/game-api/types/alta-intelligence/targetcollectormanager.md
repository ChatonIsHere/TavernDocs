---
title: "TargetCollectorManager"
description: "Static list of every registered target on the server (creatures, players, anything with a Target)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TargetCollectorManager

A **static class** in `Root.Township`, `Alta.Intelligence`.

Static list of every registered target on the server (creatures, players, anything with a `Target`). Each creature decision walks the whole list to add or drop targets by distance.

- **Listed in** [Creatures and AI](/mod/game-api/types/alta-intelligence)

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-targets" /><code>{"private static LinkedList<"}<Link to="/mod/game-api/types/alta-intelligence/itarget">{"ITarget"}</Link>{"> targets"}</code> | The linked list of registered targets. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-deregistertarget" /><code>{"static void DeregisterTarget("}<Link to="/mod/game-api/types/alta-intelligence/itarget">{"ITarget"}</Link>{" target)"}</code> | Removes a target from the list. `Target.OnDestroy` calls it. |
| <Link id="m-forceupdatecollector" /><code>{"static void ForceUpdateCollector("}<Link to="/mod/game-api/types/alta-intelligence/targetcollector">{"TargetCollector"}</Link>{" collector)"}</code> | Adds every target within the collector's radius to its agent and removes the rest. Targets that no longer exist are dropped from the list for good. |
| <Link id="m-registertarget" /><code>{"static void RegisterTarget("}<Link to="/mod/game-api/types/alta-intelligence/itarget">{"ITarget"}</Link>{" target)"}</code> | Adds a target to the end of the list. `Target.Initialize` calls it on the server. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-canaddtarget" /><code>{"private static bool CanAddTarget(float distance, float range, "}<Link to="/mod/game-api/types/alta-intelligence/itarget">{"ITarget"}</Link>{" target)"}</code> | True if the target is within range and, for a player, not downed. |

</details>
