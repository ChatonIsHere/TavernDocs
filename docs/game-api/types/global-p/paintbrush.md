---
title: "PaintBrush"
description: "class PaintBrush in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PaintBrush

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PaintBrush()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-color" /><code>{"private "}<Link to="/game-api/types/alta-customization/cosmeticcolor">{"CosmeticColor"}</Link>{" color"}</code> |  |
| <Link id="m-colorapplied" /><code>{"private "}<Link to="/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" ColorApplied"}</code> |  |
| <Link id="m-defaultposition" /><code>{"private TransformSave defaultPosition"}</code> |  |
| <Link id="m-dippingshape" /><code>{"private "}<Link to="/game-api/types/global-t-x/triggershape">{"TriggerShape"}</Link>{" dippingShape"}</code> |  |
| <Link id="m-dummy" /><code>{"private "}<Link to="/game-api/types/global-c-d/characterdummypointer">{"CharacterDummyPointer"}</Link>{" dummy"}</code> |  |
| <Link id="m-handler" /><code>{"private "}<Link to="/game-api/types/alta-customization/playercustomizationhandler">{"PlayerCustomizationHandler"}</Link>{" handler"}</code> |  |
| <Link id="m-isprimary" /><code>{"private bool isPrimary"}</code> |  |
| <Link id="m-isselecting" /><code>{"private bool isSelecting"}</code> |  |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> |  |
| <Link id="m-manager" /><code>{"private "}<Link to="/game-api/types/alta-customization/cosmeticcustomizationmanager">{"CosmeticCustomizationManager"}</Link>{" manager"}</code> |  |
| <Link id="m-pickup" /><code>{"private "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup"}</code> |  |
| <Link id="m-raylength" /><code>{"private float rayLength"}</code> |  |
| <Link id="m-tip" /><code>{"private MeshRenderer tip"}</code> |  |
| <Link id="m-uvraycaster" /><code>{"private "}<Link to="/game-api/types/global-t-x/uvraycaster">{"UvRaycaster"}</Link>{" uvRaycaster"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-active" /><code>{"static "}<Link to="/game-api/types/global-p/paintbrush">{"PaintBrush"}</Link>{" Active { get; private set; }"}</code> |  |
| <Link id="m-color-2" /><code><Link to="/game-api/types/alta-customization/cosmeticcolor">{"CosmeticColor"}</Link>{" Color { get; set; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-apply" /><code>{"private async void Apply()"}</code> |  |
| <Link id="m-apply-2" /><code>{"private async Task Apply(Vector3 position, Vector3 direction, float distance)"}</code> |  |
| <Link id="m-applycolor" /><code>{"private bool ApplyColor("}<Link to="/game-api/types/alta-customization/playercustomizationslot">{"PlayerCustomizationSlot"}</Link>{" slot)"}</code> |  |
| <Link id="m-applycolor-2" /><code>{"private async Task<bool> ApplyColor("}<Link to="/game-api/types/alta-customization/cosmeticpacker-partid">{"CosmeticPacker.PartId"}</Link>{" part)"}</code> |  |
| <Link id="m-dipped" /><code>{"private void Dipped(Collider collider)"}</code> |  |
| <Link id="m-interactended" /><code>{"private void InteractEnded("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" arg1, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" arg2)"}</code> |  |
| <Link id="m-interactstarted" /><code>{"private void InteractStarted("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" arg1, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" arg2)"}</code> |  |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> |  |
| <Link id="m-ondrawgizmos" /><code>{"private void OnDrawGizmos()"}</code> |  |
| <Link id="m-start" /><code>{"private void Start()"}</code> |  |
| <Link id="m-update" /><code>{"private void Update()"}</code> |  |
