---
title: "InGameInspector.LODUpdater"
description: "class InGameInspector.LODUpdater in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# InGameInspector.LODUpdater

A **private class** in `Root.Township`, no namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

- **Listed in** [No namespace: I to L](/game-api/types/global-i-l)
- **Nested in** [`InGameInspector`](/game-api/types/global-i-l/ingameinspector)
- **Inherits or implements** [`InGameInspector.NonTeleporterInGameTool`](/game-api/types/global-i-l/ingameinspector-nonteleporteringametool)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LODUpdater("}<Link to="/game-api/types/global-i-l/ingameinspector">{"InGameInspector"}</Link>{" inspector)"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-changed" /><code>{"private bool changed"}</code> |  |
| <Link id="m-lods" /><code>{"private LOD[] lods"}</code> |  |
| <Link id="m-selected" /><code>{"private int selected"}</code> |  |
| <Link id="m-selectedgroup" /><code>{"private LODGroup selectedGroup"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-name" /><code>{"override string Name { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-disable" /><code>{"override void Disable()"}</code> |  |
| <Link id="m-enable" /><code>{"override void Enable("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" pickup, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> |  |
| <Link id="m-pressclearasync" /><code>{"override void PressClearAsync()"}</code> |  |
| <Link id="m-pressdown" /><code>{"override void PressDown()"}</code> |  |
| <Link id="m-pressup" /><code>{"override void PressUp()"}</code> |  |
| <Link id="m-receiveangle" /><code>{"override void ReceiveAngle(float angle)"}</code> |  |
| <Link id="m-receiveinput" /><code>{"override void ReceiveInput("}<Link to="/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" controller)"}</code> |  |
| <Link id="m-update" /><code>{"override void Update()"}</code> |  |
| <Link id="m-checkselect" /><code>{"private void CheckSelect()"}</code> |  |
