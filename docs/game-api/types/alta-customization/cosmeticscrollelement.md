---
title: "CosmeticScrollElement"
description: "class CosmeticScrollElement in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CosmeticScrollElement

A **class** in `Root.Township`, `Alta.Customization`.

- **Listed in** [Customization and screenshots](/game-api/types/alta-customization)
- **Inherits or implements** [`ScrollElement`](/game-api/types/global-s/scrollelement)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CosmeticScrollElement()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-animator" /><code>{"private Animator animator"}</code> |  |
| <Link id="m-currentdefinitions" /><code>{"private uint[] currentDefinitions"}</code> |  |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |  |
| <Link id="m-manager" /><code>{"private "}<Link to="/game-api/types/alta-customization/cosmeticscrollmanager">{"CosmeticScrollManager"}</Link>{" manager"}</code> |  |
| <Link id="m-pickups" /><code>{"private "}<Link to="/game-api/types/alta-customization/customizationpickup">{"CustomizationPickup"}</Link>{"[] pickups"}</code> |  |
| <Link id="m-scroller" /><code>{"private "}<Link to="/game-api/types/global-i-l/itemscroller">{"ItemScroller"}</Link>{" scroller"}</code> |  |
| <Link id="m-scrollsource" /><code>{"private "}<Link to="/game-api/types/alta-customization/cosmeticscrollsource">{"CosmeticScrollSource"}</Link>{" scrollSource"}</code> |  |
| <Link id="m-slots" /><code>{"private Transform[] slots"}</code> |  |
| <Link id="m-unownedicons" /><code>{"private GameObject[] unownedIcons"}</code> |  |
| <Link id="m-visible" /><code>{"private static int Visible"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-hide" /><code>{"override void Hide()"}</code> |  |
| <Link id="m-show" /><code>{"override async void Show(int index)"}</code> |  |
| <Link id="m-filterinteractionafterrelease" /><code>{"private void FilterInteractionAfterRelease("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, ref bool result)"}</code> |  |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> |  |
| <Link id="m-updateowned" /><code>{"private void UpdateOwned()"}</code> |  |
