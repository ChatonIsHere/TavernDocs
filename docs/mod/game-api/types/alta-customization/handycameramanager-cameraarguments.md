---
title: "HandyCameraManager.CameraArguments"
description: "Private message struct holding a camera and player identifier."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# HandyCameraManager.CameraArguments

A **private struct** in `Root.Township`, `Alta.ScreenshotCamera`. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Private message struct holding a camera and player identifier. Not used anywhere in this build.

- **Listed in** [Customization and screenshots](/mod/game-api/types/alta-customization)
- **Nested in** [`HandyCameraManager`](/mod/game-api/types/alta-customization/handycameramanager)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CameraArguments(uint cameraIdentifier, int playerIdentifier)"}</code> | Creates a `HandyCameraManager.CameraArguments` from `cameraIdentifier` and `playerIdentifier`. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-cameraidentifier" /><code>{"uint cameraIdentifier"}</code> | Entity identifier of the camera. |
| <Link id="m-playeridentifier" /><code>{"int playerIdentifier"}</code> | Identifier of the player. |
