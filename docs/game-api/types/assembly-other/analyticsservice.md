---
title: "AnalyticsService"
description: "The analytics hub: events sent to it are injected and their data passed to every listener."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AnalyticsService

A **class** in `Alta.Analytics.Runtime`, `Alta.Analytics`.

The analytics hub: events sent to it are injected and their data passed to every listener. Registered in VContainer; listeners are dispatchers like `AltaAnalyticsDispatcher`.

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

| Member | What it is |
| --- | --- |
| <Link id="m-eventbus" /><code>{"private readonly "}<Link to="/game-api/types/assembly-other/eventbus-t">{"EventBus"}</Link>{"<"}<Link to="/game-api/types/assembly-other/ireadonlyanalyticsdata">{"IReadonlyAnalyticsData"}</Link>{"> eventBus"}</code> | Event bus that delivers data to listeners. |
| <Link id="m-resolver" /><code>{"private readonly IObjectResolver resolver"}</code> | VContainer resolver used to inject sent events. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-preventstripping" /><code>{"static void __PreventStripping()"}</code> | Creates an instance so the IL2CPP linker does not strip the class. Not meant to be called. |
| <Link id="m-addlistener" /><code>{"void AddListener(Action<"}<Link to="/game-api/types/assembly-other/ireadonlyanalyticsdata">{"IReadonlyAnalyticsData"}</Link>{"> listener)"}</code> | Adds a listener that gets each event's data. |
| <Link id="m-removelistener" /><code>{"void RemoveListener(Action<"}<Link to="/game-api/types/assembly-other/ireadonlyanalyticsdata">{"IReadonlyAnalyticsData"}</Link>{"> listener)"}</code> | Removes a listener. |
| <Link id="m-send" /><code>{"void Send("}<Link to="/game-api/types/assembly-other/ianalyticsevent">{"IAnalyticsEvent"}</Link>{" analyticsEvent)"}</code> | Injects the event (so its instruments run) and passes its data to all listeners. |
