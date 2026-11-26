---
title: "PullCord"
description: "Fires an event when a held pickup is pulled far enough from an origin point, like a cord or rip handle."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PullCord

A **class** in `Root.Township`, no namespace.

Fires an event when a held pickup is pulled far enough from an origin point, like a cord or rip handle. Runs wherever the pickup is held.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Inherits or implements** `MonoBehaviour`
- **Attributes** `RequireComponent`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"PullCord()"}</code> |

## Fields

<details>
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ispulled" /><code>{"private bool isPulled"}</code> | True while the pickup is past the pull distance, so the event only fires once per pull. |
| <Link id="m-origin" /><code>{"private Transform origin"}</code> | Point the pull distance is measured from. |
| <Link id="m-pickup" /><code>{"private "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup"}</code> | Pickup on this object that is pulled. |
| <Link id="m-pulldistancesquared" /><code>{"private float pullDistanceSquared"}</code> | Squared distance from `origin` that counts as pulled. |
| <Link id="m-pulled" /><code>{"private "}<Link to="/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" pulled"}</code> | Event fired when the cord is pulled. |
| <Link id="m-update" /><code>{"private "}<Link to="/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" update"}</code> | Handle for the registered late-update check. |

</details>

## Methods

<details>
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Hooks the pickup's interaction start and end to start and stop checking. |
| <Link id="m-endcheck" /><code>{"private void EndCheck("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" arg1, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" arg2)"}</code> | Stops the distance check when the pickup is let go. |
| <Link id="m-startcheck" /><code>{"private void StartCheck("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" arg1, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" arg2)"}</code> | Starts a late-update distance check when the pickup is grabbed. |
| <Link id="m-updatepull" /><code>{"private void UpdatePull()"}</code> | Fires `pulled` the first time the pickup passes the pull distance; resets once it comes back. |

</details>
