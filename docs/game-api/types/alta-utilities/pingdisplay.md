---
title: "PingDisplay"
description: "class PingDisplay in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PingDisplay

A **class** in `Root.Township`, `Alta.Utilities.Profiling`.

- **Listed in** [Utilities and other Alta namespaces](/game-api/types/alta-utilities)
- **Inherits or implements** [`LiveDataDisplayBase`](/game-api/types/alta-utilities/livedatadisplaybase)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"PingDisplay()"}</code> |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-decimalplaces" /><code>{"private const int DecimalPlaces"}</code> |
| <Link id="m-gameping" /><code>{"private float gamePing"}</code> |
| <Link id="m-gamepingtitle" /><code>{"private const string GamePingTitle"}</code> |
| <Link id="m-islocalplayer" /><code>{"private bool? isLocalPlayer"}</code> |
| <Link id="m-ping" /><code>{"private float ping"}</code> |

</details>

## Properties

| Member |
| --- |
| <Link id="m-output" /><code>{"override string Output { get; }"}</code> |
| <Link id="m-title" /><code>{"protected override string Title { get; }"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-internalupdate" /><code>{"override void InternalUpdate("}<Link to="/game-api/types/alta-utilities/livedatadisplayview">{"LiveDataDisplayView"}</Link>{" coroutineRunner)"}</code> |
| <Link id="m-getdata" /><code>{"protected override string GetData()"}</code> |

<details>
<summary>3 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-customoutput" /><code>{"private string CustomOutput()"}</code> |
| <Link id="m-ping-2" /><code>{"private void Ping(MonoBehaviour coroutineRunner)"}</code> |
| <Link id="m-updateping" /><code>{"private void UpdatePing(float ping)"}</code> |

</details>
