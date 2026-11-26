---
title: "HandyCameraManager.EffectArguments"
description: "Payload for the manager's effect message: where a hand camera appeared or vanished and whose it is."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# HandyCameraManager.EffectArguments

A **private struct** in `Root.Township`, `Alta.ScreenshotCamera`. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Payload for the manager's effect message: where a hand camera appeared or vanished and whose it is. The server sends it to chunks when it spawns or removes a player's camera.

- **Listed in** [Customization and screenshots](/mod/game-api/types/alta-customization)
- **Nested in** [`HandyCameraManager`](/mod/game-api/types/alta-customization/handycameramanager)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"EffectArguments(Vector3 position, bool isSpawn, uint playerIdentifier)"}</code> | Creates a `HandyCameraManager.EffectArguments` from `position`, `isSpawn` and `playerIdentifier`. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-isspawn" /><code>{"bool isSpawn"}</code> | True when the camera spawned, false when it disappeared. Picks which effects clients play. |
| <Link id="m-playeridentifier" /><code>{"uint playerIdentifier"}</code> | Identifier of the player who owns the camera. That player's client also updates its own distance check. |
| <Link id="m-position" /><code>{"Vector3 position"}</code> | World position to play the spawn or disappear effects at. |

## Used in

Members of other types that take, return or hold a `EffectArguments`:

[`HandyCameraManager.syncEffects`](/mod/game-api/types/alta-customization/handycameramanager#m-synceffects), [`HandyCameraManager.SyncEffects`](/mod/game-api/types/alta-customization/handycameramanager#m-synceffects-2).
