---
title: "Pinboard"
description: "Server: a board pages can be pinned to by dropping them in its pickup area."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Pinboard

A **class** in `Root.Township`, `Alta.Pages`.

Server: a board pages can be pinned to by dropping them in its pickup area. Looks unfinished: `AddPage` never counts pages and always returns false, so dropped pages are re-parented but never removed.

- **Listed in** [Items, inventory and logic](/mod/game-api/types/alta-items)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour)
- **Documented in** [Pages and books](/mod/game-api/items/pages-and-books)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Pinboard()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>11 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-counttext" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" countText"}</code> | Text for the page count; not used here. |
| <Link id="m-height" /><code>{"private float height"}</code> | Board height, for the gizmo. |
| <Link id="m-hovering" /><code>{"private List<"}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{"> hovering"}</code> | Pickups in the area being watched. |
| <Link id="m-maximum" /><code>{"private int maximum"}</code> | Most pages the board takes (10); not serialized. |
| <Link id="m-maximumtext" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" maximumText"}</code> | Text for the maximum; not used here. |
| <Link id="m-pages" /><code>{"private List<"}<Link to="/mod/game-api/types/alta-items/pageinstance">{"PageInstance"}</Link>{"> pages"}</code> | Pinned pages; nothing adds to it. |
| <Link id="m-pickuparea" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pickuparea">{"PickupArea"}</Link>{" pickupArea"}</code> | Area that detects pages held over the board. |
| <Link id="m-pinasset" /><code>{"private GameObject pinAsset"}</code> | Pin object spawned for each pinned page. |
| <Link id="m-pinoffset" /><code>{"private Vector2 pinOffset"}</code> | Offset of the pin from the page position. |
| <Link id="m-pins" /><code>{"private List<GameObject> pins"}</code> | Pin objects spawned. |
| <Link id="m-width" /><code>{"private float width"}</code> | Board width, for the gizmo. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | Server: hooks the pickup area's added and removed events. |

<details>
<summary>7 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-addpage" /><code>{"private bool AddPage("}<Link to="/mod/game-api/types/alta-items/pageinstance">{"PageInstance"}</Link>{" page)"}</code> | Parents the page to the board at its drop spot and adds a pin, unless full. Always returns false and never adds to `pages`. |
| <Link id="m-checkinsert" /><code>{"private void CheckInsert("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" pickup, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | When a hovering page is let go, tries `AddPage` and destroys the page entity if it returns true. |
| <Link id="m-listenforpagedrop" /><code>{"private void ListenForPageDrop("}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup)"}</code> | Starts watching a pickup that entered the area for being let go. |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> | Editor: draws the board's area as a cyan box. |
| <Link id="m-startlisteningfordrops" /><code>{"private void StartListeningForDrops()"}</code> | Turns the pickup area on; not called here. |
| <Link id="m-stoplistenforpagedrop" /><code>{"private void StopListenForPageDrop("}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup)"}</code> | Stops watching a pickup that left the area. |
| <Link id="m-stoplisteningfordrops" /><code>{"private void StopListeningForDrops()"}</code> | Turns the pickup area off and stops watching all pickups; not called here. |

</details>
