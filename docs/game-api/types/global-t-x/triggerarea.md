---
title: "TriggerArea"
description: "A space-defined area of SpacePoints that fires events on entering and leaving, passing whether the closest point's weight is over half."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TriggerArea

A **class** in `Root.Township`, no namespace.

A space-defined area of `SpacePoint`s that fires events on entering and leaving, passing whether the closest point's weight is over half.

- **Listed in** [No namespace: T to X](/game-api/types/global-t-x)
- **Inherits or implements** [`SpaceDefinedAttribute<SpacePoint>`](/game-api/types/global-s/spacedefinedattribute-t)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TriggerArea()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-onenterarea" /><code>{"private "}<Link to="/game-api/types/global-a-b/boolunityevent">{"BoolUnityEvent"}</Link>{" onEnterArea"}</code> | Bool event fired on entering the area. |
| <Link id="m-onexitarea" /><code>{"private "}<Link to="/game-api/types/global-a-b/boolunityevent">{"BoolUnityEvent"}</Link>{" onExitArea"}</code> | Bool event fired on leaving the area. |
| <Link id="m-spacepoints" /><code>{"private "}<Link to="/game-api/types/global-s/spacepoint">{"SpacePoint"}</Link>{"[] spacePoints"}</code> | Backing field for `Points`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-points" /><code>{"override IEnumerable<"}<Link to="/game-api/types/global-s/spacepoint">{"SpacePoint"}</Link>{"> Points { get; }"}</code> | The area's space points. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-enterarea" /><code>{"protected override void EnterArea()"}</code> | Invokes `onEnterArea` with whether the closest point's set weight is above 0.5. |
| <Link id="m-exitarea" /><code>{"protected override void ExitArea()"}</code> | Invokes `onExitArea` with whether the closest point's set weight is above 0.5. |
| <Link id="m-sendnewcloserpoint" /><code>{"protected override void SendNewCloserPoint("}<Link to="/game-api/types/global-s/spacepoint">{"SpacePoint"}</Link>{" from, "}<Link to="/game-api/types/global-s/spacepoint">{"SpacePoint"}</Link>{" to, float progress)"}</code> | Does nothing here. |
