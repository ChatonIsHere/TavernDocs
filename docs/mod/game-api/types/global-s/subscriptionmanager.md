---
title: "SubscriptionManager"
description: "Client tool that, after login, asks the API for supporter subscription rewards and shows a popup with an effect and sound for each Talem reward."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SubscriptionManager

A **class** in `Root.Township`, the global namespace.

Client tool that, after login, asks the API for supporter subscription rewards and shows a popup with an effect and sound for each Talem reward.

- **Listed in** [Global namespace: S](/mod/game-api/types/global-s)
- **Inherits or implements** [`LoggedInTool`](/mod/game-api/types/global-i-l/loggedintool)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SubscriptionManager()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-effect" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" effect"}</code> | <span className="api-desc">Pooled effect spawned at the popup.</span> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">NLog logger for API errors.</span> |
| <Link id="m-soundeffectset" /><code>{"private "}<Link to="/mod/game-api/types/global-s/soundeffectset">{"SoundEffectSet"}</Link>{" soundEffectSet"}</code> | <span className="api-desc">Sound played at the popup.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-loggedin" /><code>{"protected override async void LoggedIn()"}</code> | <span className="api-desc">Checks for subscription rewards and shows a popup for each Talem reward.</span> |
| <Link id="m-loggedout" /><code>{"protected override void LoggedOut()"}</code> | <span className="api-desc">Does nothing.</span> |
