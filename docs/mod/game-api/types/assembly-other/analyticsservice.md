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

- **Listed in** [Other Alta assemblies](/mod/game-api/types/assembly-other)
- **Inherits or implements** [`IAnalyticsService`](/mod/game-api/types/assembly-other/ianalyticsservice), [`IEventSource<IReadonlyAnalyticsData>`](/mod/game-api/types/assembly-other/ieventsource-t)
- **Attributes** `UsedImplicitly`, `Preserve`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AnalyticsService(IObjectResolver resolver)"}</code> | <span className="api-desc">Built by the game's dependency injection (VContainer), which passes the services in.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-eventbus" /><code>{"private readonly "}<Link to="/mod/game-api/types/assembly-other/eventbus-t">{"EventBus"}</Link>{"<"}<Link to="/mod/game-api/types/assembly-other/ireadonlyanalyticsdata">{"IReadonlyAnalyticsData"}</Link>{"> eventBus"}</code> | <span className="api-desc">Event bus that delivers data to listeners.</span> |
| <Link id="m-resolver" /><code>{"private readonly IObjectResolver resolver"}</code> | <span className="api-desc">VContainer resolver used to inject sent events.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-preventstripping" /><code>{"static void __PreventStripping()"}</code> | <span className="api-desc">Creates an instance so the IL2CPP linker does not strip the class. Not meant to be called.</span> |
| <Link id="m-addlistener" /><code>{"void AddListener(Action<"}<Link to="/mod/game-api/types/assembly-other/ireadonlyanalyticsdata">{"IReadonlyAnalyticsData"}</Link>{"> listener)"}</code> | <span className="api-desc">Adds a listener that gets each event's data.</span> |
| <Link id="m-removelistener" /><code>{"void RemoveListener(Action<"}<Link to="/mod/game-api/types/assembly-other/ireadonlyanalyticsdata">{"IReadonlyAnalyticsData"}</Link>{"> listener)"}</code> | <span className="api-desc">Removes a listener.</span> |
| <Link id="m-send" /><code>{"void Send("}<Link to="/mod/game-api/types/assembly-other/ianalyticsevent">{"IAnalyticsEvent"}</Link>{" analyticsEvent)"}</code> | <span className="api-desc">Injects the event (so its instruments run) and passes its data to all listeners.</span> |
