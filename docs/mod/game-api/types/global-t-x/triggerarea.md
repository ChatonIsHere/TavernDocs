---
title: "TriggerArea"
description: "A space-defined area of SpacePoints that fires events on entering and leaving, passing whether the closest point's weight is over half."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TriggerArea

A **class** in `Root.Township`, the global namespace.

A space-defined area of `SpacePoint`s that fires events on entering and leaving, passing whether the closest point's weight is over half.

- **Listed in** [Global namespace: T to X](/mod/game-api/types/global-t-x)
- **Inherits or implements** [`SpaceDefinedAttribute<SpacePoint>`](/mod/game-api/types/global-s/spacedefinedattribute-t)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TriggerArea()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-onenterarea" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/boolunityevent">{"BoolUnityEvent"}</Link>{" onEnterArea"}</code> | <span className="api-desc">Bool event fired on entering the area.</span> |
| <Link id="m-onexitarea" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/boolunityevent">{"BoolUnityEvent"}</Link>{" onExitArea"}</code> | <span className="api-desc">Bool event fired on leaving the area.</span> |
| <Link id="m-spacepoints" /><code>{"private "}<Link to="/mod/game-api/types/global-s/spacepoint">{"SpacePoint"}</Link>{"[] spacePoints"}</code> | <span className="api-desc">Backing field for `Points`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-points" /><code>{"override IEnumerable<"}<Link to="/mod/game-api/types/global-s/spacepoint">{"SpacePoint"}</Link>{"> Points { get; }"}</code> | <span className="api-desc">The area's space points.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-enterarea" /><code>{"protected override void EnterArea()"}</code> | <span className="api-desc">Invokes `onEnterArea` with whether the closest point's set weight is above 0.5.</span> |
| <Link id="m-exitarea" /><code>{"protected override void ExitArea()"}</code> | <span className="api-desc">Invokes `onExitArea` with whether the closest point's set weight is above 0.5.</span> |
| <Link id="m-sendnewcloserpoint" /><code>{"protected override void SendNewCloserPoint("}<Link to="/mod/game-api/types/global-s/spacepoint">{"SpacePoint"}</Link>{" from, "}<Link to="/mod/game-api/types/global-s/spacepoint">{"SpacePoint"}</Link>{" to, float progress)"}</code> | <span className="api-desc">Does nothing here.</span> |
