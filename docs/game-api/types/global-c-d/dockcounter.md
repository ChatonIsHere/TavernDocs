---
title: "DockCounter"
description: "class DockCounter in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DockCounter

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"DockCounter()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-dock" /><code>{"private "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock"}</code> |  |
| <Link id="m-isactive" /><code>{"private bool isActive"}</code> |  |
| <Link id="m-isrunonclient" /><code>{"private bool isRunOnClient"}</code> |  |
| <Link id="m-isrunonserver" /><code>{"private bool isRunOnServer"}</code> |  |
| <Link id="m-threshold" /><code>{"private int threshold"}</code> |  |
| <Link id="m-thresholddropped" /><code>{"private "}<Link to="/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" thresholdDropped"}</code> |  |
| <Link id="m-thresholdreached" /><code>{"private "}<Link to="/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" thresholdReached"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |  |
| <Link id="m-itemdocked" /><code>{"private void ItemDocked("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> |  |
| <Link id="m-itemundocked" /><code>{"private void ItemUndocked("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> |  |
| <Link id="m-shouldrun" /><code>{"private bool ShouldRun()"}</code> |  |
