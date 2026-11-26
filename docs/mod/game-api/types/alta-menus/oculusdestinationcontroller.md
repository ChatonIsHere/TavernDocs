---
title: "OculusDestinationController"
description: "Client component that keeps Quest rich presence up to date: the region the player is in, the server deep link and whether there is a free slot."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# OculusDestinationController

A **class** in `Root.Township`, `Alta.PlatformSpecific.Oculus`.

Client component that keeps Quest rich presence up to date: the region the player is in, the server deep link and whether there is a free slot. Removes itself on other platforms.

- **Listed in** [Menus, UI and platforms](/mod/game-api/types/alta-menus)
- **Inherits or implements** `MonoBehaviour`, [`IBuildRendererBakeable`](/mod/game-api/types/assembly-other/ibuildrendererbakeable), [`IBuildBakeable`](/mod/game-api/types/assembly-other/ibuildbakeable)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"OculusDestinationController()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-currentfrienddestination" /><code>{"private "}<Link to="/mod/game-api/types/alta-menus/chunkregion">{"ChunkRegion"}</Link>{" currentFriendDestination"}</code> | <span className="api-desc">The region last sent as the destination.</span> |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |

</details>

## Properties

<details className="api-private">
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ibuildrendererbakeable-sortingorder" /><code>{"private int IBuildRendererBakeable.SortingOrder { get; }"}</code> | <span className="api-desc">Bake order; always 0.</span> |

</details>

## Methods

<details className="api-private">
<summary>13 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-bake" /><code>{"private void IBuildRendererBakeable.Bake(bool isSaving)"}</code> | <span className="api-desc">Build bake step; does nothing.</span> |
| <Link id="m-clean" /><code>{"private void IBuildRendererBakeable.Clean()"}</code> | <span className="api-desc">Build clean step; removes the object on non-Quest builds.</span> |
| <Link id="m-hasfreeplayerslot" /><code>{"private static async Task<bool> HasFreePlayerSlot(int serverId)"}</code> | <span className="api-desc">Asks the Alta API whether the server has fewer players than its limit.</span> |
| <Link id="m-initializedeeplinkfromsetup" /><code>{"private async void InitializeDeepLinkFromSetup()"}</code> | <span className="api-desc">Sets the deep link to the joined server, marks presence joinable if there's room, and sets the current region.</span> |
| <Link id="m-initializedeeplinkinvalidteleportlocation" /><code>{"private void InitializeDeepLinkInvalidTeleportLocation()"}</code> | <span className="api-desc">Before the local player exists: clears the deep link, marks presence not joinable and sets the destination to the main menu.</span> |
| <Link id="m-islastdestination" /><code>{"private bool IsLastDestination("}<Link to="/mod/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" chunk)"}</code> | <span className="api-desc">True if the chunk's region is the one already set.</span> |
| <Link id="m-isvaliddestination" /><code>{"private static bool IsValidDestination("}<Link to="/mod/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" chunk)"}</code> | <span className="api-desc">True if the chunk exists and has a region other than `none`.</span> |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | <span className="api-desc">Unhooks events and clears rich presence on Quest.</span> |
| <Link id="m-onplayercountchanged" /><code>{"private async void OnPlayerCountChanged("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | <span className="api-desc">When a player joins or leaves, rechecks free slots and updates joinable presence.</span> |
| <Link id="m-setdestination" /><code>{"private void SetDestination("}<Link to="/mod/game-api/types/alta-menus/chunkregion">{"ChunkRegion"}</Link>{" destination)"}</code> | <span className="api-desc">Sets the rich presence destination to a chunk region's name and pushes it.</span> |
| <Link id="m-setup" /><code>{"private void Setup("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | <span className="api-desc">Once the local player exists, hooks chunk changes and player join and leave, then sets up the deep link.</span> |
| <Link id="m-start" /><code>{"private void Start()"}</code> | <span className="api-desc">Destroys itself off Quest; otherwise sets up now or waits for the local player.</span> |
| <Link id="m-updatepresence" /><code>{"private void UpdatePresence("}<Link to="/mod/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" chunk)"}</code> | <span className="api-desc">Sets the destination to the local player's new chunk region if it is valid and changed.</span> |

</details>
