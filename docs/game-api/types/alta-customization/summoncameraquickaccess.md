---
title: "SummonCameraQuickAccess"
description: "Quick access menu action that summons or dismisses the local player's hand camera."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SummonCameraQuickAccess

A **class** in `Root.Township`, `Alta.ScreenshotCamera`.

Quick access menu action that summons or dismisses the local player's hand camera.

- **Listed in** [Customization and screenshots](/game-api/types/alta-customization)
- **Inherits or implements** [`QuickAccessMenuAction`](/game-api/types/alta-player/quickaccessmenuaction)
- **Attributes** `CreateAssetMenu`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SummonCameraQuickAccess()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isactive" /><code>{"override bool IsActive { get; }"}</code> | True when the local player has a camera out. |
| <Link id="m-isvalid" /><code>{"override bool IsValid { get; }"}</code> | False while the local player is downed. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-run" /><code>{"override void Run("}<Link to="/game-api/types/global-c-d/controller">{"Controller"}</Link>{" controller)"}</code> | Toggles the camera through `HandyCameraManager.UpdateCameraStatusForLocalPlayer`. |
