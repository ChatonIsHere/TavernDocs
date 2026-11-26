---
title: "CosmeticScrollElement"
description: "One page of the cosmetic scroller in the customization room."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CosmeticScrollElement

A **class** in `Root.Township`, `Alta.Customization`.

One page of the cosmetic scroller in the customization room. Spawns a pickup per slot for the items on that page and shows a lock icon on unowned ones.

- **Listed in** [Customization and screenshots](/mod/game-api/types/alta-customization)
- **Inherits or implements** [`ScrollElement`](/mod/game-api/types/global-s/scrollelement)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CosmeticScrollElement()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>10 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-animator" /><code>{"private Animator animator"}</code> | <span className="api-desc">Animator that shows and hides the page.</span> |
| <Link id="m-currentdefinitions" /><code>{"private uint[] currentDefinitions"}</code> | <span className="api-desc">Item hash shown in each slot, 0 for empty.</span> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |
| <Link id="m-manager" /><code>{"private "}<Link to="/mod/game-api/types/alta-customization/cosmeticscrollmanager">{"CosmeticScrollManager"}</Link>{" manager"}</code> | <span className="api-desc">Parent scroll manager, which gives the customization session.</span> |
| <Link id="m-pickups" /><code>{"private "}<Link to="/mod/game-api/types/alta-customization/customizationpickup">{"CustomizationPickup"}</Link>{"[] pickups"}</code> | <span className="api-desc">Pickup spawned in each slot.</span> |
| <Link id="m-scroller" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/itemscroller">{"ItemScroller"}</Link>{" scroller"}</code> | <span className="api-desc">Item scroller this page belongs to; its count sets how many pages there are.</span> |
| <Link id="m-scrollsource" /><code>{"private "}<Link to="/mod/game-api/types/alta-customization/cosmeticscrollsource">{"CosmeticScrollSource"}</Link>{" scrollSource"}</code> | <span className="api-desc">Source of the item hashes to show.</span> |
| <Link id="m-slots" /><code>{"private Transform[] slots"}</code> | <span className="api-desc">Transforms where pickups are placed.</span> |
| <Link id="m-unownedicons" /><code>{"private GameObject[] unownedIcons"}</code> | <span className="api-desc">Per-slot icons shown when the item isn't owned.</span> |
| <Link id="m-visible" /><code>{"private static int Visible"}</code> | <span className="api-desc">Hash of the animator bool `Visible`.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-hide" /><code>{"override void Hide()"}</code> | <span className="api-desc">Hides the page and sets its pickups to destroy once released.</span> |
| <Link id="m-show" /><code>{"override async void Show(int index)"}</code> | <span className="api-desc">Shows the page for an index (wrapping around), clears old pickups and spawns the items for that page; stops early if the item list changes.</span> |

<details className="api-private">
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-filterinteractionafterrelease" /><code>{"private void FilterInteractionAfterRelease("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, ref bool result)"}</code> | <span className="api-desc">Interaction filter on the spawned pickups; blocks grabbing while the page is hidden.</span> |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | <span className="api-desc">Destroys the page's pickups and unsubscribes from ownership updates.</span> |
| <Link id="m-updateowned" /><code>{"private void UpdateOwned()"}</code> | <span className="api-desc">Refreshes the unowned icons when the owned list changes.</span> |

</details>
