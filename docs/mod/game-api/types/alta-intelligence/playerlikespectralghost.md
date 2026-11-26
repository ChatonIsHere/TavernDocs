---
title: "PlayerLikeSpectralGhost"
description: "A Phantom that looks like a player: the server dresses it in random cosmetics from the dev-free items and syncs that look to clients, which give it a..."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerLikeSpectralGhost

A **class** in `Root.Township`, `Alta.Intelligence`.

A `Phantom` that looks like a player: the server dresses it in random cosmetics from the dev-free items and syncs that look to clients, which give it a see-through ghost material.

- **Listed in** [Creatures and AI](/mod/game-api/types/alta-intelligence)
- **Inherits or implements** [`Phantom`](/mod/game-api/types/alta-intelligence/phantom)
- **Documented in** [Other creatures](/mod/game-api/creatures/other-creatures#playerlikespectralghost), [Creature data](/mod/game-api/creatures/creature-data), [Creatures and AI](/mod/game-api/creatures/overview)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlayerLikeSpectralGhost()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>7 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-animatingmaterials" /><code>{"private List<Material> animatingMaterials"}</code> | <span className="api-desc">The ghost materials made for this ghost, cleaned up on destroy.</span> |
| <Link id="m-basematerial" /><code>{"private Material baseMaterial"}</code> | <span className="api-desc">The ghost material copied for each renderer.</span> |
| <Link id="m-handler" /><code>{"private "}<Link to="/mod/game-api/types/alta-customization/playercustomizationhandler">{"PlayerCustomizationHandler"}</Link>{" handler"}</code> | <span className="api-desc">Customization handler for the ghost's character dummy.</span> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">Class logger, used when syncing or randomizing fails.</span> |
| <Link id="m-manager" /><code>{"private "}<Link to="/mod/game-api/types/alta-customization/playercharactercustomizationmanager">{"PlayerCharacterCustomizationManager"}</Link>{" manager"}</code> | <span className="api-desc">Cosmetics manager holding the ghost's outfit.</span> |
| <Link id="m-owned" /><code>{"private static Dictionary<"}<Link to="/mod/game-api/types/alta-customization/playercosmeticcategory">{"PlayerCosmeticCategory"}</Link>{", List<uint>> owned"}</code> | <span className="api-desc">Static map from cosmetic category to the dev-free item hashes the ghost can pick from.</span> |
| <Link id="m-syncbody" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncBody"}</code> | <span className="api-desc">Network sync for the ghost's cosmetics.</span> |

</details>

## Properties

<details className="api-private">
<summary>2 private and internal properties</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-cutout" /><code>{"private static int _Cutout { get; }"}</code> | <span className="api-desc">Shader property ID for `_Cutout`.</span> |
| <Link id="m-maintex" /><code>{"private static int _MainTex { get; }"}</code> | <span className="api-desc">Shader property ID for `_MainTex`.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | <span className="api-desc">Sets up an empty cosmetics manager on the customization handler and the body sync. Off headless, also the material list.</span> |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | <span className="api-desc">Sends the ghost's cosmetics to the joining player.</span> |
| <Link id="m-initializeai" /><code>{"protected override void InitializeAi()"}</code> | <span className="api-desc">Server: randomizes the cosmetics. Off headless, sets up the ghost materials once the cosmetics are packed.</span> |
| <Link id="m-initializestatic" /><code>{"protected override void InitializeStatic()"}</code> | <span className="api-desc">Once per class, loads every `Purchasable` marked free for devs and groups their hashes by cosmetic category.</span> |
| <Link id="m-ondestroy" /><code>{"protected override void OnDestroy()"}</code> | <span className="api-desc">Cleans up the ghost materials. The list is only made off headless, so on a headless server this probably throws.</span> |

<details className="api-private">
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-processrenderer" /><code>{"private void ProcessRenderer(Renderer renderer)"}</code> | <span className="api-desc">Gives a renderer a ghost material, using a new one with its main texture as the cutout if it has one.</span> |
| <Link id="m-randomize" /><code>{"private async void Randomize("}<Link to="/mod/game-api/types/alta-customization/playercosmeticwrapper">{"PlayerCosmeticWrapper"}</Link>{" cosmeticWrapper)"}</code> | <span className="api-desc">Async: clears the cosmetics and adds one random item from each category in `owned`, then runs the post-randomize step.</span> |
| <Link id="m-setupmaterials" /><code>{"private void SetupMaterials()"}</code> | <span className="api-desc">Makes the base ghost material and applies ghost materials to every main renderer of the character dummy.</span> |
| <Link id="m-syncbody-2" /><code>{"private async void SyncBody("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Network handler (`SyncA`) that sends the cosmetics and, on a remote client, sets up the ghost materials after packing.</span> |

</details>
