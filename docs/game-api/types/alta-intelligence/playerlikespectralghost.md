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

- **Listed in** [Creatures and AI](/game-api/types/alta-intelligence)
- **Inherits or implements** [`Phantom`](/game-api/types/alta-intelligence/phantom)
- **Documented in** [Other creatures](/game-api/creatures/other-creatures#playerlikespectralghost), [Creature data](/game-api/creatures/creature-data), [Creatures and AI](/game-api/creatures/overview)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlayerLikeSpectralGhost()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>7 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-animatingmaterials" /><code>{"private List<Material> animatingMaterials"}</code> | The ghost materials made for this ghost, cleaned up on destroy. |
| <Link id="m-basematerial" /><code>{"private Material baseMaterial"}</code> | The ghost material copied for each renderer. |
| <Link id="m-handler" /><code>{"private "}<Link to="/game-api/types/alta-customization/playercustomizationhandler">{"PlayerCustomizationHandler"}</Link>{" handler"}</code> | Customization handler for the ghost's character dummy. |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | Class logger, used when syncing or randomizing fails. |
| <Link id="m-manager" /><code>{"private "}<Link to="/game-api/types/alta-customization/playercharactercustomizationmanager">{"PlayerCharacterCustomizationManager"}</Link>{" manager"}</code> | Cosmetics manager holding the ghost's outfit. |
| <Link id="m-owned" /><code>{"private static Dictionary<"}<Link to="/game-api/types/alta-customization/playercosmeticcategory">{"PlayerCosmeticCategory"}</Link>{", List<uint>> owned"}</code> | Static map from cosmetic category to the dev-free item hashes the ghost can pick from. |
| <Link id="m-syncbody" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncBody"}</code> | Network sync for the ghost's cosmetics. |

</details>

## Properties

<details>
<summary>2 private and internal properties</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-cutout" /><code>{"private static int _Cutout { get; }"}</code> | Shader property ID for `_Cutout`. |
| <Link id="m-maintex" /><code>{"private static int _MainTex { get; }"}</code> | Shader property ID for `_MainTex`. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Sets up an empty cosmetics manager on the customization handler and the body sync. Off headless, also the material list. |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | Sends the ghost's cosmetics to the joining player. |
| <Link id="m-initializeai" /><code>{"protected override void InitializeAi()"}</code> | Server: randomizes the cosmetics. Off headless, sets up the ghost materials once the cosmetics are packed. |
| <Link id="m-initializestatic" /><code>{"protected override void InitializeStatic()"}</code> | Once per class, loads every `Purchasable` marked free for devs and groups their hashes by cosmetic category. |
| <Link id="m-ondestroy" /><code>{"protected override void OnDestroy()"}</code> | Cleans up the ghost materials. The list is only made off headless, so on a headless server this probably throws. |

<details>
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-processrenderer" /><code>{"private void ProcessRenderer(Renderer renderer)"}</code> | Gives a renderer a ghost material, using a new one with its main texture as the cutout if it has one. |
| <Link id="m-randomize" /><code>{"private async void Randomize("}<Link to="/game-api/types/alta-customization/playercosmeticwrapper">{"PlayerCosmeticWrapper"}</Link>{" cosmeticWrapper)"}</code> | Async: clears the cosmetics and adds one random item from each category in `owned`, then runs the post-randomize step. |
| <Link id="m-setupmaterials" /><code>{"private void SetupMaterials()"}</code> | Makes the base ghost material and applies ghost materials to every main renderer of the character dummy. |
| <Link id="m-syncbody-2" /><code>{"private async void SyncBody("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Network handler (`SyncA`) that sends the cosmetics and, on a remote client, sets up the ghost materials after packing. |

</details>
