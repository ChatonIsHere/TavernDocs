---
title: "PlayerLikeSpectralGhost"
description: "A phantom dressed as a player (prefab \"Spectral Ghost\", 2 health; it uses the phantom's passive set and destroys itself on death)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerLikeSpectralGhost

A **class** in `Root.Township`, `Alta.Intelligence`.

A phantom dressed as a player (prefab "Spectral Ghost", 2 health; it uses the phantom's passive set and destroys itself on death).

- **Listed in** [Creatures and AI](/game-api/types/alta-intelligence)
- **Inherits or implements** [`Phantom`](/game-api/types/alta-intelligence/phantom)
- **Documented in** [Other creatures](/game-api/creatures/other-creatures#playerlikespectralghost), [Creature data](/game-api/creatures/creature-data), [Creatures and AI](/game-api/creatures/overview)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlayerLikeSpectralGhost()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-animatingmaterials" /><code>{"private List<Material> animatingMaterials"}</code> |  |
| <Link id="m-basematerial" /><code>{"private Material baseMaterial"}</code> |  |
| <Link id="m-handler" /><code>{"private "}<Link to="/game-api/types/alta-customization/playercustomizationhandler">{"PlayerCustomizationHandler"}</Link>{" handler"}</code> |  |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |  |
| <Link id="m-manager" /><code>{"private "}<Link to="/game-api/types/alta-customization/playercharactercustomizationmanager">{"PlayerCharacterCustomizationManager"}</Link>{" manager"}</code> |  |
| <Link id="m-owned" /><code>{"private static Dictionary<"}<Link to="/game-api/types/alta-customization/playercosmeticcategory">{"PlayerCosmeticCategory"}</Link>{", List<uint>> owned"}</code> |  |
| <Link id="m-syncbody" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncBody"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-cutout" /><code>{"private static int _Cutout { get; }"}</code> |  |
| <Link id="m-maintex" /><code>{"private static int _MainTex { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> |  |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> |  |
| <Link id="m-initializeai" /><code>{"protected override void InitializeAi()"}</code> |  |
| <Link id="m-initializestatic" /><code>{"protected override void InitializeStatic()"}</code> |  |
| <Link id="m-ondestroy" /><code>{"protected override void OnDestroy()"}</code> |  |
| <Link id="m-processrenderer" /><code>{"private void ProcessRenderer(Renderer renderer)"}</code> |  |
| <Link id="m-randomize" /><code>{"private async void Randomize("}<Link to="/game-api/types/alta-customization/playercosmeticwrapper">{"PlayerCosmeticWrapper"}</Link>{" cosmeticWrapper)"}</code> |  |
| <Link id="m-setupmaterials" /><code>{"private void SetupMaterials()"}</code> |  |
| <Link id="m-syncbody-2" /><code>{"private async void SyncBody("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |
