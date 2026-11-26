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

- **Listed in** [Utilities and other Alta namespaces](/game-api/types/alta-utilities)
- **Inherits or implements** [`SingletonBehaviour<NetworkingProfiler>`](/game-api/types/assembly-other/singletonbehaviour-t)
- **Derived types** [`NetworkingProfiler`](/game-api/types/alta-utilities/networkingprofiler)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"NetworkingProfiler()"}</code> |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-connectionconfiguration" /><code>{"private "}<Link to="/game-api/types/alta-networking/connectionsimulatorconfiguration">{"ConnectionSimulatorConfiguration"}</Link>{" connectionConfiguration"}</code> | Inspector values for in and out delay and packet loss. |
| <Link id="m-isusingsimulatorsettings" /><code>{"private bool isUsingSimulatorSettings"}</code> | Backing field for `IsUsingSimulatorSettings`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isusingsimulatorsettings-2" /><code>{"bool IsUsingSimulatorSettings { get; set; }"}</code> | Whether the connection simulator settings should be applied. Can be set at runtime. |
| <Link id="m-simulatorconfiguration" /><code>{"ConnectionSimulatorConfig SimulatorConfiguration { get; }"}</code> | Builds a UNET `ConnectionSimulatorConfig` from the inspector delay and packet loss values. |
