---
title: "AnalyticsService"
description: "class AnalyticsService in Alta.Analytics.Runtime."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AnalyticsService

A **class** in `Alta.Analytics.Runtime`, `Alta.Analytics`.

- **Listed in** [Other Alta assemblies](/game-api/types/assembly-other)
- **Inherits or implements** [`IAnalyticsService`](/game-api/types/assembly-other/ianalyticsservice), [`IEventSource<IReadonlyAnalyticsData>`](/game-api/types/assembly-other/ieventsource-t)
- **Attributes** `UsedImplicitly`, `Preserve`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"AnalyticsService(IObjectResolver resolver)"}</code> |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-eventbus" /><code>{"private readonly "}<Link to="/game-api/types/assembly-other/eventbus-t">{"EventBus"}</Link>{"<"}<Link to="/game-api/types/assembly-other/ireadonlyanalyticsdata">{"IReadonlyAnalyticsData"}</Link>{"> eventBus"}</code> |
| <Link id="m-resolver" /><code>{"private readonly IObjectResolver resolver"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-preventstripping" /><code>{"static void __PreventStripping()"}</code> |
| <Link id="m-addlistener" /><code>{"void AddListener(Action<"}<Link to="/game-api/types/assembly-other/ireadonlyanalyticsdata">{"IReadonlyAnalyticsData"}</Link>{"> listener)"}</code> |
| <Link id="m-removelistener" /><code>{"void RemoveListener(Action<"}<Link to="/game-api/types/assembly-other/ireadonlyanalyticsdata">{"IReadonlyAnalyticsData"}</Link>{"> listener)"}</code> |
| <Link id="m-send" /><code>{"void Send("}<Link to="/game-api/types/assembly-other/ianalyticsevent">{"IAnalyticsEvent"}</Link>{" analyticsEvent)"}</code> |
