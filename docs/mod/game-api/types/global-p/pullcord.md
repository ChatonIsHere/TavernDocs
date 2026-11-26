---
title: "PullCord"
description: "Fires an event when a held pickup is pulled far enough from an origin point, like a cord or rip handle."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PullCord

A **class** in `Root.Township`, the global namespace.

Fires an event when a held pickup is pulled far enough from an origin point, like a cord or rip handle. Runs wherever the pickup is held.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Inherits or implements** `MonoBehaviour`
- **Attributes** `RequireComponent`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PullCord()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ispulled" /><code>{"private bool isPulled"}</code> | <span className="api-desc">True while the pickup is past the pull distance, so the event only fires once per pull.</span> |
| <Link id="m-origin" /><code>{"private Transform origin"}</code> | <span className="api-desc">Point the pull distance is measured from.</span> |
| <Link id="m-pickup" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup"}</code> | <span className="api-desc">Pickup on this object that is pulled.</span> |
| <Link id="m-pulldistancesquared" /><code>{"private float pullDistanceSquared"}</code> | <span className="api-desc">Squared distance from `origin` that counts as pulled.</span> |
| <Link id="m-pulled" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" pulled"}</code> | <span className="api-desc">Event fired when the cord is pulled.</span> |
| <Link id="m-update" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" update"}</code> | <span className="api-desc">Handle for the registered late-update check.</span> |

</details>

## Methods

<details className="api-private">
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Hooks the pickup's interaction start and end to start and stop checking.</span> |
| <Link id="m-endcheck" /><code>{"private void EndCheck("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" arg1, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" arg2)"}</code> | <span className="api-desc">Stops the distance check when the pickup is let go.</span> |
| <Link id="m-startcheck" /><code>{"private void StartCheck("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" arg1, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" arg2)"}</code> | <span className="api-desc">Starts a late-update distance check when the pickup is grabbed.</span> |
| <Link id="m-updatepull" /><code>{"private void UpdatePull()"}</code> | <span className="api-desc">Fires `pulled` the first time the pickup passes the pull distance; resets once it comes back.</span> |

</details>
