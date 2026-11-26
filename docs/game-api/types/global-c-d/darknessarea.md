---
title: "DarknessArea"
description: "A space-defined area of SpacePoints that sets DarknessTrigger when the player leaves it, based on the closest point's weight."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DarknessArea

A **class** in `Root.Township`, no namespace.

A space-defined area of `SpacePoint`s that sets `DarknessTrigger` when the player leaves it, based on the closest point's weight.

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)
- **Inherits or implements** [`SpaceDefinedAttribute<SpacePoint>`](/game-api/types/global-s/spacedefinedattribute-t)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"DarknessArea()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-spacepoints" /><code>{"private "}<Link to="/game-api/types/global-s/spacepoint">{"SpacePoint"}</Link>{"[] spacePoints"}</code> | Backing array for `Points`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-points" /><code>{"override IEnumerable<"}<Link to="/game-api/types/global-s/spacepoint">{"SpacePoint"}</Link>{"> Points { get; }"}</code> | The area's space points. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-exitarea" /><code>{"protected override void ExitArea()"}</code> | Sets darkness on if the closest point's weight is above 0.5. |
| <Link id="m-sendnewcloserpoint" /><code>{"protected override void SendNewCloserPoint("}<Link to="/game-api/types/global-s/spacepoint">{"SpacePoint"}</Link>{" from, "}<Link to="/game-api/types/global-s/spacepoint">{"SpacePoint"}</Link>{" to, float progress)"}</code> | Empty; moving between points does nothing. |
