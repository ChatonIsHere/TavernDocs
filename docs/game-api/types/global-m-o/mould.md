---
title: "Mould"
description: "A casting mould item that holds a MouldDefinition (what it casts and how many ingots it costs) and optionally a limited number of uses."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Mould

A **class** in `Root.Township`, no namespace.

A casting mould item that holds a `MouldDefinition` (what it casts and how many ingots it costs) and optionally a limited number of uses. Both sides; the server picks and syncs the definition.

- **Listed in** [No namespace: M to O](/game-api/types/global-m-o)
- **Inherits or implements** [`GeneratedNetworkEntityBehaviour`](/game-api/types/alta-networking/generatednetworkentitybehaviour), [`IBlockGenericDecrafting`](/game-api/types/alta-crafting/iblockgenericdecrafting), [`ISavable<MouldSaveData>`](/game-api/types/global-i-l/isavable-t), [`ISavableSave<MouldSaveData>`](/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`MouldSaveData`](/game-api/types/global-m-o/mouldsavedata)
- **Nested types** [`IBlockGenericDecrafting`](/game-api/types/global-m-o/mould-iblockgenericdecrafting)
- **Documented in** [Smelting and forging](/game-api/game-systems/smelting-and-forging)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Mould()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-definition" /><code>{"private "}<Link to="/game-api/types/global-m-o/moulddefinition">{"MouldDefinition"}</Link>{" definition"}</code> |  |
| <Link id="m-graphic" /><code>{"private MeshFilter graphic"}</code> |  |
| <Link id="m-inputcount" /><code>{"private "}<Link to="/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" inputCount"}</code> |  |
| <Link id="m-isgenerating" /><code>{"private bool isGenerating"}</code> |  |
| <Link id="m-isusingrestrictor" /><code>{"private bool isUsingRestrictor"}</code> |  |
| <Link id="m-lodgroup" /><code>{"private LODGroup lodGroup"}</code> |  |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |  |
| <Link id="m-outputcount" /><code>{"private "}<Link to="/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" outputCount"}</code> |  |
| <Link id="m-outputquantityrenderer" /><code>{"private MeshRenderer outputQuantityRenderer"}</code> |  |
| <Link id="m-sync" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" sync"}</code> |  |
| <Link id="m-syncuse" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncUse"}</code> |  |
| <Link id="m-usage" /><code>{"private int usage"}</code> |  |
| <Link id="m-usagevisual" /><code>{"private "}<Link to="/game-api/types/global-i-l/integervisual">{"IntegerVisual"}</Link>{" usageVisual"}</code> |  |
| <Link id="m-workingrendererslist" /><code>{"private static List<Renderer> workingRenderersList"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-definition-2" /><code><Link to="/game-api/types/global-m-o/moulddefinition">{"MouldDefinition"}</Link>{" Definition { get; }"}</code> | What this mould casts, or null for an empty mould. Saved with the mould. |
| <Link id="m-isusingrestrictor-2" /><code>{"bool IsUsingRestrictor { get; }"}</code> | Whether a `MouldRestrictor` keeps only one mould per definition, destroying the older copy when a new one registers. |
| <Link id="m-usage-2" /><code>{"int Usage { get; }"}</code> | Uses left. -1 means unlimited; the smelter breaks the mould when `Consume` takes it to zero. |
| <Link id="m-alta-crafting-iblockgenericdecrafting-candecraft" /><code>{"private bool Alta.Crafting.IBlockGenericDecrafting.CanDecraft { get; }"}</code> |  |
| <Link id="m-isgeneratingfirsttime" /><code>{"protected override bool IsGeneratingFirstTime { get; }"}</code> | True only when the mould has no definition yet and is set to generate one. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-consume" /><code>{"bool Consume()"}</code> | Server: uses up one charge if the mould has limited uses and syncs it. Returns true when uses reach zero. |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Sets up the network syncs for the definition and the remaining uses. |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | Sends the current definition and uses to a player who joins. |
| <Link id="m-setdefinition" /><code>{"void SetDefinition("}<Link to="/game-api/types/global-m-o/moulddefinition">{"MouldDefinition"}</Link>{" definition, bool isOnvalidate = false)"}</code> | Changes what the mould casts. The server syncs it; clients rebuild the mesh, cost and output-count visuals. |
| <Link id="m-generate" /><code>{"protected override void Generate("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | On first spawn, gives the mould a random definition if generation is turned on for it. |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> |  |
| <Link id="m-sync-2" /><code>{"private void Sync("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |
| <Link id="m-syncuse-2" /><code>{"private void SyncUse("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |

## Used in

Members of other types that take, return or hold a `Mould`:

[`Smelter.currentMould`](/game-api/types/alta-crafting/smelter#m-currentmould), [`MouldCopyTest.CheckMouldDock`](/game-api/types/global-m-o/mouldcopytest#m-checkmoulddock), [`MouldCopyTest.mould`](/game-api/types/global-m-o/mouldcopytest#m-mould).
