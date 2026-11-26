---
title: "TeleportAwareTriggerExample"
description: "Example ITeleportAwareTrigger that logs when a player teleports through the trigger."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TeleportAwareTriggerExample

An **abstract class** in `Root.Township`, the global namespace.

Example `ITeleportAwareTrigger` that logs when a player teleports through the trigger.

- **Listed in** [Global namespace: T to X](/mod/game-api/types/global-t-x)
- **Inherits or implements** `MonoBehaviour`, [`ITeleportAwareTrigger`](/mod/game-api/types/global-i-l/iteleportawaretrigger)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected TeleportAwareTriggerExample()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-ontriggerexit" /><code>{"void OnTriggerExit(Collider other)"}</code> | <span className="api-desc">Does nothing.</span> |
| <Link id="m-ontriggerteleportedthrough" /><code>{"void OnTriggerTeleportedThrough("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | <span className="api-desc">Logs the player that teleported through.</span> |
