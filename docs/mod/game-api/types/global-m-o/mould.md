---
title: "Mould"
description: "A casting mould item that holds a MouldDefinition (what it casts and how many ingots it costs) and optionally a limited number of uses."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Mould

A **class** in `Root.Township`, the global namespace.

A casting mould item that holds a `MouldDefinition` (what it casts and how many ingots it costs) and optionally a limited number of uses. Both sides; the server picks and syncs the definition.

- **Listed in** [Global namespace: M to O](/mod/game-api/types/global-m-o)
- **Inherits or implements** [`GeneratedNetworkEntityBehaviour`](/mod/game-api/types/alta-networking/generatednetworkentitybehaviour), [`IBlockGenericDecrafting`](/mod/game-api/types/alta-crafting/iblockgenericdecrafting), [`ISavable<MouldSaveData>`](/mod/game-api/types/global-i-l/isavable-t), [`ISavableSave<MouldSaveData>`](/mod/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/mod/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`MouldSaveData`](/mod/game-api/types/global-m-o/mouldsavedata)
- **Nested types** [`IBlockGenericDecrafting`](/mod/game-api/types/global-m-o/mould-iblockgenericdecrafting)
- **Documented in** [Smelting and forging](/mod/game-api/game-systems/smelting-and-forging)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Mould()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>14 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-definition" /><code>{"private "}<Link to="/mod/game-api/types/global-m-o/moulddefinition">{"MouldDefinition"}</Link>{" definition"}</code> | <span className="api-desc">Backing field for `Definition`. Saved.</span> |
| <Link id="m-graphic" /><code>{"private MeshFilter graphic"}</code> | <span className="api-desc">Mesh showing the shape the mould makes.</span> |
| <Link id="m-inputcount" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" inputCount"}</code> | <span className="api-desc">Text showing the definition's cost.</span> |
| <Link id="m-isgenerating" /><code>{"private bool isGenerating"}</code> | <span className="api-desc">Whether a blank mould picks a random definition when spawned. Off for crafted moulds.</span> |
| <Link id="m-isusingrestrictor" /><code>{"private bool isUsingRestrictor"}</code> | <span className="api-desc">Backing field for `IsUsingRestrictor`. Defaults to true.</span> |
| <Link id="m-lodgroup" /><code>{"private LODGroup lodGroup"}</code> | <span className="api-desc">LOD group whose first level gets the shape and text renderers.</span> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">Private: logger. Not used in this build.</span> |
| <Link id="m-outputcount" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" outputCount"}</code> | <span className="api-desc">Text showing how many items one use makes, shown when more than one.</span> |
| <Link id="m-outputquantityrenderer" /><code>{"private MeshRenderer outputQuantityRenderer"}</code> | <span className="api-desc">The 'x' renderer next to `outputCount`.</span> |
| <Link id="m-sync" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" sync"}</code> | <span className="api-desc">Private: message for `Sync`, sent when the definition changes and to joining players.</span> |
| <Link id="m-syncuse" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncUse"}</code> | <span className="api-desc">Private: message for `SyncUse`, sent by `Consume`.</span> |
| <Link id="m-usage" /><code>{"private int usage"}</code> | <span className="api-desc">Backing field for `Usage`. -1 means unlimited uses.</span> |
| <Link id="m-usagevisual" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/integervisual">{"IntegerVisual"}</Link>{" usageVisual"}</code> | <span className="api-desc">Optional visual showing the uses left.</span> |
| <Link id="m-workingrendererslist" /><code>{"private static List<Renderer> workingRenderersList"}</code> | <span className="api-desc">Private static: scratch list used to rebuild the LOD renderers.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-definition-2" /><code><Link to="/mod/game-api/types/global-m-o/moulddefinition">{"MouldDefinition"}</Link>{" Definition { get; }"}</code> | <span className="api-desc">What this mould casts, or null for an empty mould. Saved with the mould.</span> |
| <Link id="m-isusingrestrictor-2" /><code>{"bool IsUsingRestrictor { get; }"}</code> | <span className="api-desc">Whether a `MouldRestrictor` keeps only one mould per definition, destroying the older copy when a new one registers.</span> |
| <Link id="m-usage-2" /><code>{"int Usage { get; }"}</code> | <span className="api-desc">Uses left. -1 means unlimited; the smelter breaks the mould when `Consume` takes it to zero.</span> |
| <Link id="m-isgeneratingfirsttime" /><code>{"protected override bool IsGeneratingFirstTime { get; }"}</code> | <span className="api-desc">True only when the mould has no definition yet and is set to generate one.</span> |

<details className="api-private">
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-alta-crafting-iblockgenericdecrafting-candecraft" /><code>{"private bool Alta.Crafting.IBlockGenericDecrafting.CanDecraft { get; }"}</code> | <span className="api-desc">True only while the mould has no definition (it is blank).</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-consume" /><code>{"bool Consume()"}</code> | <span className="api-desc">Server: uses up one charge if the mould has limited uses and syncs it. Returns true when uses reach zero.</span> |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | <span className="api-desc">Sets up the network syncs for the definition and the remaining uses.</span> |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | <span className="api-desc">Sends the current definition and uses to a player who joins.</span> |
| <Link id="m-setdefinition" /><code>{"void SetDefinition("}<Link to="/mod/game-api/types/global-m-o/moulddefinition">{"MouldDefinition"}</Link>{" definition, bool isOnvalidate = false)"}</code> | <span className="api-desc">Changes what the mould casts. The server syncs it; clients rebuild the mesh, cost and output-count visuals.</span> |
| <Link id="m-generate" /><code>{"protected override void Generate("}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | <span className="api-desc">On first spawn, gives the mould a random definition if generation is turned on for it.</span> |

<details className="api-private">
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | <span className="api-desc">Empty in this build.</span> |
| <Link id="m-sync-2" /><code>{"private void Sync("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Private: syncs the definition hash and, if the mould has limited uses, the uses left. Clients apply them.</span> |
| <Link id="m-syncuse-2" /><code>{"private void SyncUse("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Private: syncs the uses left and updates the visual on clients.</span> |

</details>

## Used in

Members of other types that take, return or hold a `Mould`:

<div className="api-used-in">

[`Smelter.currentMould`](/mod/game-api/types/alta-crafting/smelter#m-currentmould), [`MouldCopyTest.CheckMouldDock`](/mod/game-api/types/global-m-o/mouldcopytest#m-checkmoulddock), [`MouldCopyTest.mould`](/mod/game-api/types/global-m-o/mouldcopytest#m-mould).

</div>
