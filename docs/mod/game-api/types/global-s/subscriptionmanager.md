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
| <Link id="m-ctor" /><code>{"SubscriptionManager()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-effect" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" effect"}</code> | Pooled effect spawned at the popup. |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger for API errors. |
| <Link id="m-soundeffectset" /><code>{"private "}<Link to="/mod/game-api/types/global-s/soundeffectset">{"SoundEffectSet"}</Link>{" soundEffectSet"}</code> | Sound played at the popup. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-loggedin" /><code>{"protected override async void LoggedIn()"}</code> | Checks for subscription rewards and shows a popup for each Talem reward. |
| <Link id="m-loggedout" /><code>{"protected override void LoggedOut()"}</code> | Does nothing. |
