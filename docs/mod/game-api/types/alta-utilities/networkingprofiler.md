---
title: "NetworkingProfiler"
description: "Singleton behaviour that holds connection simulator settings (delay and packet loss) for testing bad networks."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# NetworkingProfiler

A **class** in `Root.Township`, `Alta.Utilities.Profiling.NetworkTransportMetrics`.

Singleton behaviour that holds connection simulator settings (delay and packet loss) for testing bad networks.

- **Listed in** [Utilities and other Alta namespaces](/mod/game-api/types/alta-utilities)
- **Inherits or implements** [`SingletonBehaviour<NetworkingProfiler>`](/mod/game-api/types/assembly-other/singletonbehaviour-t)
- **Derived types** [`NetworkingProfiler`](/mod/game-api/types/alta-utilities/networkingprofiler)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"NetworkingProfiler()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-connectionconfiguration" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/connectionsimulatorconfiguration">{"ConnectionSimulatorConfiguration"}</Link>{" connectionConfiguration"}</code> | <span className="api-desc">Inspector values for in and out delay and packet loss.</span> |
| <Link id="m-isusingsimulatorsettings" /><code>{"private bool isUsingSimulatorSettings"}</code> | <span className="api-desc">Backing field for `IsUsingSimulatorSettings`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isusingsimulatorsettings-2" /><code>{"bool IsUsingSimulatorSettings { get; set; }"}</code> | <span className="api-desc">Whether the connection simulator settings should be applied. Can be set at runtime.</span> |
| <Link id="m-simulatorconfiguration" /><code>{"ConnectionSimulatorConfig SimulatorConfiguration { get; }"}</code> | <span className="api-desc">Builds a UNET `ConnectionSimulatorConfig` from the inspector delay and packet loss values.</span> |
