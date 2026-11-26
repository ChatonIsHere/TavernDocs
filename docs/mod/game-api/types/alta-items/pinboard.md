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
| <Link id="m-ctor" /><code>{"Pinboard()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>11 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-counttext" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" countText"}</code> | <span className="api-desc">Text for the page count; not used here.</span> |
| <Link id="m-height" /><code>{"private float height"}</code> | <span className="api-desc">Board height, for the gizmo.</span> |
| <Link id="m-hovering" /><code>{"private List<"}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{"> hovering"}</code> | <span className="api-desc">Pickups in the area being watched.</span> |
| <Link id="m-maximum" /><code>{"private int maximum"}</code> | <span className="api-desc">Most pages the board takes (10); not serialized.</span> |
| <Link id="m-maximumtext" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" maximumText"}</code> | <span className="api-desc">Text for the maximum; not used here.</span> |
| <Link id="m-pages" /><code>{"private List<"}<Link to="/mod/game-api/types/alta-items/pageinstance">{"PageInstance"}</Link>{"> pages"}</code> | <span className="api-desc">Pinned pages; nothing adds to it.</span> |
| <Link id="m-pickuparea" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pickuparea">{"PickupArea"}</Link>{" pickupArea"}</code> | <span className="api-desc">Area that detects pages held over the board.</span> |
| <Link id="m-pinasset" /><code>{"private GameObject pinAsset"}</code> | <span className="api-desc">Pin object spawned for each pinned page.</span> |
| <Link id="m-pinoffset" /><code>{"private Vector2 pinOffset"}</code> | <span className="api-desc">Offset of the pin from the page position.</span> |
| <Link id="m-pins" /><code>{"private List<GameObject> pins"}</code> | <span className="api-desc">Pin objects spawned.</span> |
| <Link id="m-width" /><code>{"private float width"}</code> | <span className="api-desc">Board width, for the gizmo.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | <span className="api-desc">Server: hooks the pickup area's added and removed events.</span> |

<details className="api-private">
<summary>7 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-addpage" /><code>{"private bool AddPage("}<Link to="/mod/game-api/types/alta-items/pageinstance">{"PageInstance"}</Link>{" page)"}</code> | <span className="api-desc">Parents the page to the board at its drop spot and adds a pin, unless full. Always returns false and never adds to `pages`.</span> |
| <Link id="m-checkinsert" /><code>{"private void CheckInsert("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" pickup, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | <span className="api-desc">When a hovering page is let go, tries `AddPage` and destroys the page entity if it returns true.</span> |
| <Link id="m-listenforpagedrop" /><code>{"private void ListenForPageDrop("}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup)"}</code> | <span className="api-desc">Starts watching a pickup that entered the area for being let go.</span> |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> | <span className="api-desc">Editor: draws the board's area as a cyan box.</span> |
| <Link id="m-startlisteningfordrops" /><code>{"private void StartListeningForDrops()"}</code> | <span className="api-desc">Turns the pickup area on; not called here.</span> |
| <Link id="m-stoplistenforpagedrop" /><code>{"private void StopListenForPageDrop("}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup)"}</code> | <span className="api-desc">Stops watching a pickup that left the area.</span> |
| <Link id="m-stoplisteningfordrops" /><code>{"private void StopListeningForDrops()"}</code> | <span className="api-desc">Turns the pickup area off and stops watching all pickups; not called here.</span> |

</details>
