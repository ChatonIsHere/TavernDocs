---
title: "GenericCraftingResult"
description: "Component on a finished generic-crafting item (one built from pieces on a crafting station)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GenericCraftingResult

A **class** in `Root.Township`, `Alta.Crafting`.

Component on a finished generic-crafting item (one built from pieces on a crafting station). It maps part hashes to their materials, and lets the item be put back on a station to take it apart. Both sides.

- **Listed in** [Crafting and making](/mod/game-api/types/alta-crafting)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour), `ISerializationCallbackReceiver`, [`IGenericCraftingComponent`](/mod/game-api/types/alta-crafting/igenericcraftingcomponent), [`IPreventAtlasing`](/mod/game-api/types/alta-utilities/ipreventatlasing)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"GenericCraftingResult()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-baker" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/lodbaker">{"LODBaker"}</Link>{" baker"}</code> | LOD baker run on clients after the bake message. |
| <Link id="m-blockdecrafting" /><code>{"private MonoBehaviour[] blockDecrafting"}</code> | Serialized components that implement `IBlockGenericDecrafting`. Any of them can stop the item being taken apart. |
| <Link id="m-blockdecraftingcomponents" /><code>{"private "}<Link to="/mod/game-api/types/alta-crafting/iblockgenericdecrafting">{"IBlockGenericDecrafting"}</Link>{"[] blockDecraftingComponents"}</code> | `blockDecrafting` cast to `IBlockGenericDecrafting`, filled in after deserialization. |
| <Link id="m-hashes" /><code>{"private int[] hashes"}</code> | Hashes matching each entry in `parts`, by index. |
| <Link id="m-parts" /><code>{"private "}<Link to="/mod/game-api/types/global-p/physicalmaterialpart">{"PhysicalMaterialPart"}</Link>{"[] parts"}</code> | Material parts that make up the item. |
| <Link id="m-syncbake" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncBake"}</code> | Method sync that tells clients to bake the item's LODs. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-parts-2" /><code>{"Dictionary<int, "}<Link to="/mod/game-api/types/global-p/physicalmaterialpart">{"PhysicalMaterialPart"}</Link>{"> Parts { get; }"}</code> | Material parts of the item keyed by their hash. Built after deserialization. |

<details>
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-alta-crafting-igenericcraftingcomponent-isaddingproject" /><code>{"private bool Alta.Crafting.IGenericCraftingComponent.IsAddingProject { get; }"}</code> | Always true: this item starts a new project when added, so a station only accepts it while empty. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Sets up the `SyncBake` method sync on the entity. |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | Server: when a player connects, sends them the bake message if the item has an LOD baker. |

<details>
<summary>7 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ispreventatlasing" /><code>{"private bool Alta.Utilities.Atlas.IPreventAtlasing.IsPreventAtlasing(Renderer renderer)"}</code> | True if any of the item's material parts says the renderer must not be atlased. |
| <Link id="m-onafterdeserialize" /><code>{"private void UnityEngine.ISerializationCallbackReceiver.OnAfterDeserialize()"}</code> | Rebuilds `Parts` from the serialized hash and part arrays, and casts the decraft blockers to their interface. |
| <Link id="m-onbeforeserialize" /><code>{"private void UnityEngine.ISerializationCallbackReceiver.OnBeforeSerialize()"}</code> | Does nothing. |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | Editor: keeps `hashes` the same length as `parts`, drops empty parts and fills in missing hashes. |
| <Link id="m-released" /><code>{"private void Alta.Crafting.IGenericCraftingComponent.Released("}<Link to="/mod/game-api/types/alta-crafting/genericcraftingstation">{"GenericCraftingStation"}</Link>{" station)"}</code> | Called when the item is let go on a crafting station. Unless a decraft blocker says no, the station sets up a project from this item. |
| <Link id="m-syncbake-2" /><code>{"private void SyncBake("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Client: on the bake message, waits one second and bakes the LODs. Skipped on headless builds. |
| <Link id="m-track" /><code>{"private void Alta.Crafting.IGenericCraftingComponent.Track("}<Link to="/mod/game-api/types/alta-crafting/genericcraftingstation">{"GenericCraftingStation"}</Link>{" station)"}</code> | Does nothing for a result. |

</details>

## Used in

Members of other types that take, return or hold a `GenericCraftingResult`:

[`GenericCraftingProject.SetupResult`](/mod/game-api/types/alta-crafting/genericcraftingproject#m-setupresult), [`GenericCraftingStation.SetupProjectFromResult`](/mod/game-api/types/alta-crafting/genericcraftingstation#m-setupprojectfromresult), [`IProject.SetupResult`](/mod/game-api/types/alta-crafting/iproject#m-setupresult).
