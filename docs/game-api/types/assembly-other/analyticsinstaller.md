---
title: "AnalyticsInstaller"
description: "VContainer installer for analytics: registers AnalyticsService and the AltaAnalyticsDispatcher entry point, and injects the zone enter and exit analytics..."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AnalyticsInstaller

A **class** in `Alta.LifetimeScopes`, `Alta.ATT.LifetimeScopes`.

VContainer installer for analytics: registers `AnalyticsService` and the `AltaAnalyticsDispatcher` entry point, and injects the zone enter and exit analytics events.

- **Listed in** [Other Alta assemblies](/game-api/types/assembly-other)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AnalyticsInstaller()"}</code> | Creates an `AnalyticsInstaller` with default values. |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-enterevent" /><code>{"private "}<Link to="/game-api/types/game-other-namespaces/zoneanalyticstriggerevent">{"ZoneAnalyticsTriggerEvent"}</Link>{" enterEvent"}</code> | Zone analytics event for entering a zone, injected after build. |
| <Link id="m-exitevent" /><code>{"private "}<Link to="/game-api/types/game-other-namespaces/zoneanalyticstriggerevent">{"ZoneAnalyticsTriggerEvent"}</Link>{" exitEvent"}</code> | Zone analytics event for leaving a zone, injected after build. |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> | NLog logger for this class. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-install" /><code>{"void Install(IContainerBuilder builder)"}</code> | Registers the analytics service and dispatcher, then injects the zone events and a `ClimbingHandlerAnalytics` once the container is built. |

## Used in

Members of other types that take, return or hold a `AnalyticsInstaller`:

[`ProjectLifetimeScope.analyticsInstaller`](/game-api/types/assembly-other/projectlifetimescope#m-analyticsinstaller).
