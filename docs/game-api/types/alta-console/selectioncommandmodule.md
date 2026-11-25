---
title: "SelectionCommandModule"
description: "static class SelectionCommandModule in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SelectionCommandModule

A **static class** in `Root.Township`, `Alta.Console.Commands`.

- **Listed in** [Console, logging and analytics](/game-api/types/alta-console)
- **Nested types** [`MovingModule`](/game-api/types/alta-console/selectioncommandmodule-movingmodule), [`RotatingModule`](/game-api/types/alta-console/selectioncommandmodule-rotatingmodule)
- **Attributes** `Module`, `NonSimpleServer`, `Alias`

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-clearselection" /><code>{"private static void ClearSelection()"}</code> |  |
| <Link id="m-destroyselection" /><code>{"private static void DestroySelection()"}</code> |  |
| <Link id="m-exporttostring" /><code>{"private static string ExportToString()"}</code> |  |
| <Link id="m-findobjects" /><code>{"private static IEnumerable<"}<Link to="/game-api/types/alta-console/networkentityinfo">{"NetworkEntityInfo"}</Link>{"> FindObjects("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player, float distance = 10)"}</code> |  |
| <Link id="m-findprefab" /><code>{"private static void FindPrefab("}<Link to="/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" prefab, "}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> |  |
| <Link id="m-get" /><code>{"private static "}<Link to="/game-api/types/alta-console/entityinfo">{"EntityInfo"}</Link>{" Get(uint identifier = 0)"}</code> |  |
| <Link id="m-lookat" /><code>{"private static void LookAt("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player, bool isRotatingAllAxis = false)"}</code> |  |
| <Link id="m-selectentity" /><code>{"private static string SelectEntity(uint identifier)"}</code> |  |
| <Link id="m-snaptoground" /><code>{"private static void SnapToGround()"}</code> |  |
| <Link id="m-snaptootherobject" /><code>{"private static void SnapToOtherObject(uint identifier)"}</code> |  |
