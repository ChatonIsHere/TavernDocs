---
title: "Pinboard"
description: "A board that shows a set of pages."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Pinboard

A **class** in `Root.Township`, `Alta.Pages`.

A board that shows a set of pages.

- **Listed in** [Items, inventory and logic](/game-api/types/alta-items)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour)
- **Documented in** [Pages and books](/game-api/items/pages-and-books)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Pinboard()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-counttext" /><code>{"private "}<Link to="/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" countText"}</code> |  |
| <Link id="m-height" /><code>{"private float height"}</code> |  |
| <Link id="m-hovering" /><code>{"private List<"}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{"> hovering"}</code> |  |
| <Link id="m-maximum" /><code>{"private int maximum"}</code> |  |
| <Link id="m-maximumtext" /><code>{"private "}<Link to="/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" maximumText"}</code> |  |
| <Link id="m-pages" /><code>{"private List<"}<Link to="/game-api/types/alta-items/pageinstance">{"PageInstance"}</Link>{"> pages"}</code> |  |
| <Link id="m-pickuparea" /><code>{"private "}<Link to="/game-api/types/global-p/pickuparea">{"PickupArea"}</Link>{" pickupArea"}</code> |  |
| <Link id="m-pinasset" /><code>{"private GameObject pinAsset"}</code> |  |
| <Link id="m-pinoffset" /><code>{"private Vector2 pinOffset"}</code> |  |
| <Link id="m-pins" /><code>{"private List<GameObject> pins"}</code> |  |
| <Link id="m-width" /><code>{"private float width"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> |  |
| <Link id="m-addpage" /><code>{"private bool AddPage("}<Link to="/game-api/types/alta-items/pageinstance">{"PageInstance"}</Link>{" page)"}</code> |  |
| <Link id="m-checkinsert" /><code>{"private void CheckInsert("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" pickup, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> |  |
| <Link id="m-listenforpagedrop" /><code>{"private void ListenForPageDrop("}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup)"}</code> |  |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> |  |
| <Link id="m-startlisteningfordrops" /><code>{"private void StartListeningForDrops()"}</code> |  |
| <Link id="m-stoplistenforpagedrop" /><code>{"private void StopListenForPageDrop("}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup)"}</code> |  |
| <Link id="m-stoplisteningfordrops" /><code>{"private void StopListeningForDrops()"}</code> |  |
