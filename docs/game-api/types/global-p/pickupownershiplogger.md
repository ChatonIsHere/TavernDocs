---
title: "PickupOwnershipLogger"
description: "Trace logging for when a player grabs a pickup that another player last held."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PickupOwnershipLogger

A **static class** in `Root.Township`, no namespace.

Trace logging for when a player grabs a pickup that another player last held. Called from `Pickup`.

- **Listed in** [No namespace: P](/game-api/types/global-p)

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger for this class. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-changedownership" /><code>{"static void ChangedOwnership("}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, int oldOwner, int newOwner)"}</code> | Logs a pickup moving from its old owner to a new one. The message puts the old owner as the one who picked it up. |
| <Link id="m-removedfromownership" /><code>{"static void RemovedFromOwnership("}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" removedPickup, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" basePickup, int oldOwner, int newOwner)"}</code> | Logs a pickup being taken off another pickup that belonged to someone else. |
