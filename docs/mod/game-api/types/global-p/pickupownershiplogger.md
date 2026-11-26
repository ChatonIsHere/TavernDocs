---
title: "PickupOwnershipLogger"
description: "Trace logging for when a player grabs a pickup that another player last held."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PickupOwnershipLogger

A **static class** in `Root.Township`, the global namespace.

Trace logging for when a player grabs a pickup that another player last held. Called from `Pickup`.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-changedownership" /><code>{"static void ChangedOwnership("}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, int oldOwner, int newOwner)"}</code> | <span className="api-desc">Logs a pickup moving from its old owner to a new one. The message puts the old owner as the one who picked it up.</span> |
| <Link id="m-removedfromownership" /><code>{"static void RemovedFromOwnership("}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" removedPickup, "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" basePickup, int oldOwner, int newOwner)"}</code> | <span className="api-desc">Logs a pickup being taken off another pickup that belonged to someone else.</span> |
