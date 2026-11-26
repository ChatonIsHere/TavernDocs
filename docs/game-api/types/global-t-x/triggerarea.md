---
title: "TriggerArea"
description: "class TriggerArea in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TriggerArea

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: T to X](/game-api/types/global-t-x)
- **Inherits or implements** [`SpaceDefinedAttribute<SpacePoint>`](/game-api/types/global-s/spacedefinedattribute-t)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"TriggerArea()"}</code> |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-onenterarea" /><code>{"private "}<Link to="/game-api/types/global-a-b/boolunityevent">{"BoolUnityEvent"}</Link>{" onEnterArea"}</code> |
| <Link id="m-onexitarea" /><code>{"private "}<Link to="/game-api/types/global-a-b/boolunityevent">{"BoolUnityEvent"}</Link>{" onExitArea"}</code> |
| <Link id="m-spacepoints" /><code>{"private "}<Link to="/game-api/types/global-s/spacepoint">{"SpacePoint"}</Link>{"[] spacePoints"}</code> |

</details>

## Properties

| Member |
| --- |
| <Link id="m-points" /><code>{"override IEnumerable<"}<Link to="/game-api/types/global-s/spacepoint">{"SpacePoint"}</Link>{"> Points { get; }"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-enterarea" /><code>{"protected override void EnterArea()"}</code> |
| <Link id="m-exitarea" /><code>{"protected override void ExitArea()"}</code> |
| <Link id="m-sendnewcloserpoint" /><code>{"protected override void SendNewCloserPoint("}<Link to="/game-api/types/global-s/spacepoint">{"SpacePoint"}</Link>{" from, "}<Link to="/game-api/types/global-s/spacepoint">{"SpacePoint"}</Link>{" to, float progress)"}</code> |
