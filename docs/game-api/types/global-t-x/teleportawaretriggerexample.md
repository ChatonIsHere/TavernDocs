---
title: "TeleportAwareTriggerExample"
description: "Example ITeleportAwareTrigger that logs when a player teleports through the trigger."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TeleportAwareTriggerExample

An **abstract class** in `Root.Township`, no namespace.

Example `ITeleportAwareTrigger` that logs when a player teleports through the trigger.

- **Listed in** [No namespace: T to X](/game-api/types/global-t-x)
- **Inherits or implements** `MonoBehaviour`, [`ITeleportAwareTrigger`](/game-api/types/global-i-l/iteleportawaretrigger)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected TeleportAwareTriggerExample()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-ontriggerexit" /><code>{"void OnTriggerExit(Collider other)"}</code> | Does nothing. |
| <Link id="m-ontriggerteleportedthrough" /><code>{"void OnTriggerTeleportedThrough("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | Logs the player that teleported through. |
