---
title: "InGameInspector.DirectTeleporter"
description: "Debug inspector tool that teleports the player to wherever the pointer ray hits."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# InGameInspector.DirectTeleporter

A **private class** in `Root.Township`, no namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Debug inspector tool that teleports the player to wherever the pointer ray hits.

- **Listed in** [No namespace: I to L](/game-api/types/global-i-l)
- **Nested in** [`InGameInspector`](/game-api/types/global-i-l/ingameinspector)
- **Inherits or implements** [`InGameInspector.NonTeleporterInGameTool`](/game-api/types/global-i-l/ingameinspector-nonteleporteringametool)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"DirectTeleporter("}<Link to="/game-api/types/global-i-l/ingameinspector">{"InGameInspector"}</Link>{" inspector)"}</code> | Creates an `InGameInspector.DirectTeleporter` from `inspector`. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-name" /><code>{"override string Name { get; }"}</code> | Shown on the inspector as "Direct Teleporter". |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-disable" /><code>{"override void Disable()"}</code> | Restores teleport mode and turns off the pointer ray. |
| <Link id="m-enable" /><code>{"override void Enable("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" pickup, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | Takes over the teleport button and turns on the pointer ray. |
| <Link id="m-pressclearasync" /><code>{"override void PressClearAsync()"}</code> | Does nothing for this tool. |
| <Link id="m-pressdown" /><code>{"override void PressDown()"}</code> | Does nothing for this tool. |
| <Link id="m-pressup" /><code>{"override void PressUp()"}</code> | Does nothing for this tool. |
| <Link id="m-receiveangle" /><code>{"override void ReceiveAngle(float angle)"}</code> | Does nothing for this tool. |
| <Link id="m-receiveinput" /><code>{"override void ReceiveInput("}<Link to="/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" controller)"}</code> | On a teleport press, raycasts and teleports the player's feet to the hit point, or shows "Couldn't find point". |
| <Link id="m-update" /><code>{"override void Update()"}</code> | Does nothing for this tool. |
