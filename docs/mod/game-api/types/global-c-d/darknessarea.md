---
title: "DarknessArea"
description: "A space-defined area of SpacePoints that sets DarknessTrigger when the player leaves it, based on the closest point's weight."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DarknessArea

A **class** in `Root.Township`, the global namespace.

A space-defined area of `SpacePoint`s that sets `DarknessTrigger` when the player leaves it, based on the closest point's weight.

- **Listed in** [Global namespace: C to D](/mod/game-api/types/global-c-d)
- **Inherits or implements** [`SpaceDefinedAttribute<SpacePoint>`](/mod/game-api/types/global-s/spacedefinedattribute-t)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"DarknessArea()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-spacepoints" /><code>{"private "}<Link to="/mod/game-api/types/global-s/spacepoint">{"SpacePoint"}</Link>{"[] spacePoints"}</code> | <span className="api-desc">Backing array for `Points`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-points" /><code>{"override IEnumerable<"}<Link to="/mod/game-api/types/global-s/spacepoint">{"SpacePoint"}</Link>{"> Points { get; }"}</code> | <span className="api-desc">The area's space points.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-exitarea" /><code>{"protected override void ExitArea()"}</code> | <span className="api-desc">Sets darkness on if the closest point's weight is above 0.5.</span> |
| <Link id="m-sendnewcloserpoint" /><code>{"protected override void SendNewCloserPoint("}<Link to="/mod/game-api/types/global-s/spacepoint">{"SpacePoint"}</Link>{" from, "}<Link to="/mod/game-api/types/global-s/spacepoint">{"SpacePoint"}</Link>{" to, float progress)"}</code> | <span className="api-desc">Empty; moving between points does nothing.</span> |
