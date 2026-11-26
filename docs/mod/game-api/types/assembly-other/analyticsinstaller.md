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

- **Listed in** [Other Alta assemblies](/mod/game-api/types/assembly-other)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AnalyticsInstaller()"}</code> | <span className="api-desc">Creates an `AnalyticsInstaller` with default values.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-enterevent" /><code>{"private "}<Link to="/mod/game-api/types/game-other-namespaces/zoneanalyticstriggerevent">{"ZoneAnalyticsTriggerEvent"}</Link>{" enterEvent"}</code> | <span className="api-desc">Zone analytics event for entering a zone, injected after build.</span> |
| <Link id="m-exitevent" /><code>{"private "}<Link to="/mod/game-api/types/game-other-namespaces/zoneanalyticstriggerevent">{"ZoneAnalyticsTriggerEvent"}</Link>{" exitEvent"}</code> | <span className="api-desc">Zone analytics event for leaving a zone, injected after build.</span> |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-install" /><code>{"void Install(IContainerBuilder builder)"}</code> | <span className="api-desc">Registers the analytics service and dispatcher, then injects the zone events and a `ClimbingHandlerAnalytics` once the container is built.</span> |

## Used in

Members of other types that take, return or hold a `AnalyticsInstaller`:

<div className="api-used-in">

[`ProjectLifetimeScope.analyticsInstaller`](/mod/game-api/types/assembly-other/projectlifetimescope#m-analyticsinstaller).

</div>
