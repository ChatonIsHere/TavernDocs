---
title: "SelectionCommandModule"
description: "Console module select (alias s): picks a networked entity as the console's current selection and moves, snaps, exports or destroys it."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SelectionCommandModule

A **static class** in `Root.Township`, `Alta.Console.Commands`.

Console module `select` (alias `s`): picks a networked entity as the console's current selection and moves, snaps, exports or destroys it. On simple servers needs `debug_features`.

- **Listed in** [Console, logging and analytics](/game-api/types/alta-console)
- **Nested types** [`MovingModule`](/game-api/types/alta-console/selectioncommandmodule-movingmodule), [`RotatingModule`](/game-api/types/alta-console/selectioncommandmodule-rotatingmodule)
- **Attributes** `Module`, `NonSimpleServer`, `Alias`

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger shared by this module and its submodules. |

</details>

## Methods

<details>
<summary>10 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-clearselection" /><code>{"private static void ClearSelection()"}</code> | `select unselect`: clears the current selection. |
| <Link id="m-destroyselection" /><code>{"private static void DestroySelection()"}</code> | `select destroy`: destroys the selected entity through its spawner and clears the selection. |
| <Link id="m-exporttostring" /><code>{"private static string ExportToString()"}</code> | `select tostring`: returns the selected prefab's save as a string (for `spawn string`) and copies it to the clipboard. |
| <Link id="m-findobjects" /><code>{"private static IEnumerable<"}<Link to="/game-api/types/alta-console/networkentityinfo">{"NetworkEntityInfo"}</Link>{"> FindObjects("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player, float distance = 10)"}</code> | `select find`: lists prefab roots of all loaded entities within a distance of the player (default 10). |
| <Link id="m-findprefab" /><code>{"private static void FindPrefab("}<Link to="/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" prefab, "}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | `select prefab`: selects the nearest instance of the given prefab to the player. |
| <Link id="m-get" /><code>{"private static "}<Link to="/game-api/types/alta-console/entityinfo">{"EntityInfo"}</Link>{" Get(uint identifier = 0)"}</code> | `select get`: returns the current selection, or the entity with the given ID. |
| <Link id="m-lookat" /><code>{"private static void LookAt("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player, bool isRotatingAllAxis = false)"}</code> | `select look-at`: turns the selection to face a player's head, flat on the ground unless rotating all axes. |
| <Link id="m-selectentity" /><code>{"private static string SelectEntity(uint identifier)"}</code> | `select`: selects the entity with the given ID, or errors if none. |
| <Link id="m-snaptoground" /><code>{"private static void SnapToGround()"}</code> | `select snap-ground`: moves the selection down to the first thing a raycast hits within 1000 units. |
| <Link id="m-snaptootherobject" /><code>{"private static void SnapToOtherObject(uint identifier)"}</code> | `select snap-to`: copies another entity's position and rotation onto the selection. |

</details>
