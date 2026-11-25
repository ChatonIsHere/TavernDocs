---
title: "GenericCraftingResult"
description: "class GenericCraftingResult in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GenericCraftingResult

A **class** in `Root.Township`, `Alta.Crafting`.

- **Listed in** [Crafting and making](/game-api/types/alta-crafting)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour), `ISerializationCallbackReceiver`, [`IGenericCraftingComponent`](/game-api/types/alta-crafting/igenericcraftingcomponent), [`IPreventAtlasing`](/game-api/types/alta-utilities/ipreventatlasing)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"GenericCraftingResult()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-baker" /><code>{"private "}<Link to="/game-api/types/global-i-l/lodbaker">{"LODBaker"}</Link>{" baker"}</code> |  |
| <Link id="m-blockdecrafting" /><code>{"private MonoBehaviour[] blockDecrafting"}</code> |  |
| <Link id="m-blockdecraftingcomponents" /><code>{"private "}<Link to="/game-api/types/alta-crafting/iblockgenericdecrafting">{"IBlockGenericDecrafting"}</Link>{"[] blockDecraftingComponents"}</code> |  |
| <Link id="m-hashes" /><code>{"private int[] hashes"}</code> |  |
| <Link id="m-parts" /><code>{"private "}<Link to="/game-api/types/global-p/physicalmaterialpart">{"PhysicalMaterialPart"}</Link>{"[] parts"}</code> |  |
| <Link id="m-syncbake" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncBake"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-parts-2" /><code>{"Dictionary<int, "}<Link to="/game-api/types/global-p/physicalmaterialpart">{"PhysicalMaterialPart"}</Link>{"> Parts { get; }"}</code> |  |
| <Link id="m-alta-crafting-igenericcraftingcomponent-isaddingproject" /><code>{"private bool Alta.Crafting.IGenericCraftingComponent.IsAddingProject { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> |  |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> |  |
| <Link id="m-ispreventatlasing" /><code>{"private bool Alta.Utilities.Atlas.IPreventAtlasing.IsPreventAtlasing(Renderer renderer)"}</code> |  |
| <Link id="m-onafterdeserialize" /><code>{"private void UnityEngine.ISerializationCallbackReceiver.OnAfterDeserialize()"}</code> |  |
| <Link id="m-onbeforeserialize" /><code>{"private void UnityEngine.ISerializationCallbackReceiver.OnBeforeSerialize()"}</code> |  |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> |  |
| <Link id="m-released" /><code>{"private void Alta.Crafting.IGenericCraftingComponent.Released("}<Link to="/game-api/types/alta-crafting/genericcraftingstation">{"GenericCraftingStation"}</Link>{" station)"}</code> |  |
| <Link id="m-syncbake-2" /><code>{"private void SyncBake("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |
| <Link id="m-track" /><code>{"private void Alta.Crafting.IGenericCraftingComponent.Track("}<Link to="/game-api/types/alta-crafting/genericcraftingstation">{"GenericCraftingStation"}</Link>{" station)"}</code> |  |

## Used in

Members of other types that take, return or hold a `GenericCraftingResult`:

[`GenericCraftingProject.SetupResult`](/game-api/types/alta-crafting/genericcraftingproject#m-setupresult), [`GenericCraftingStation.SetupProjectFromResult`](/game-api/types/alta-crafting/genericcraftingstation#m-setupprojectfromresult), [`IProject.SetupResult`](/game-api/types/alta-crafting/iproject#m-setupresult).
