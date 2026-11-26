---
title: "ClimbingTowerProgressionVisualizer"
description: "Climbing tower gauge and rune display."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ClimbingTowerProgressionVisualizer

A **class** in `Root.Township`, `Features.Gameplay.ClimbingTower`.

Climbing tower gauge and rune display. On clients it lights the rune for the highest orb the local player has and sets the gauge marker to that rune's height. The rune settings are saved.

- **Listed in** [ATT, Features and other game namespaces](/mod/game-api/types/game-other-namespaces)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour), [`IBuildRendererPostBake`](/mod/game-api/types/assembly-other/ibuildrendererpostbake), [`IBuildBakeable`](/mod/game-api/types/assembly-other/ibuildbakeable), [`ISavable<ClimbingTowerProgressionVisualizerSaveData>`](/mod/game-api/types/global-i-l/isavable-t), [`ISavableSave<ClimbingTowerProgressionVisualizerSaveData>`](/mod/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/mod/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`ClimbingTowerProgressionVisualizerSaveData`](/mod/game-api/types/game-other-namespaces/climbingtowerprogressionvisualizersavedata)
- **Nested types** [`RuneActivationElement`](/mod/game-api/types/game-other-namespaces/climbingtowerprogressionvisualizer-runeactivationelement)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ClimbingTowerProgressionVisualizer()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>8 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-fillprogress" /><code>{"private static readonly int _FillProgress"}</code> | <span className="api-desc">Shader property ID for the gauge fill.</span> |
| <Link id="m-furthestpoint" /><code>{"private static readonly int _FurthestPoint"}</code> | <span className="api-desc">Shader property ID for the gauge's furthest point marker.</span> |
| <Link id="m-instantiatedmaterial" /><code>{"private Material instantiatedMaterial"}</code> | <span className="api-desc">Backing field for `InstantiatedMaterial`.</span> |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |
| <Link id="m-maximumvisualizergaugevalue" /><code>{"private const int MaximumVisualizerGaugeValue"}</code> | <span className="api-desc">Upper clamp for the gauge height value, 3.</span> |
| <Link id="m-runeactivationelements" /><code>{"private List<"}<Link to="/mod/game-api/types/game-other-namespaces/climbingtowerprogressionvisualizer-runeactivationelement">{"ClimbingTowerProgressionVisualizer.RuneActivationElement"}</Link>{"> runeActivationElements"}</code> | <span className="api-desc">Runes, each with its particle object, the orb index that lights it and its gauge height.</span> |
| <Link id="m-syncruneactivationelements" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsyncclass-t">{"MethodSyncClass"}</Link>{"<List<"}<Link to="/mod/game-api/types/game-other-namespaces/climbingtowerprogressionvisualizer-runeactivationelement">{"ClimbingTowerProgressionVisualizer.RuneActivationElement"}</Link>{">> syncRuneActivationElements"}</code> | <span className="api-desc">Method sync for the rune settings.</span> |
| <Link id="m-teleportergauges" /><code>{"private Renderer[] teleporterGauges"}</code> | <span className="api-desc">Gauge renderers that share the instanced material.</span> |

</details>

## Properties

<details className="api-private">
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-instantiatedmaterial-2" /><code>{"private Material InstantiatedMaterial { get; }"}</code> | <span className="api-desc">Gauge material instance, created from the first gauge on first use and shared by all gauges.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | <span className="api-desc">Creates the `syncRuneActivationElements` method sync on `SyncC`.</span> |
| <Link id="m-load" /><code>{"void Load("}<Link to="/mod/game-api/types/game-other-namespaces/climbingtowerprogressionvisualizersavedata">{"ClimbingTowerProgressionVisualizerSaveData"}</Link>{" data, "}<Link to="/mod/game-api/types/alta-networking/iserializechildren">{"ISerializeChildren"}</Link>{" childSerializer)"}</code> | <span className="api-desc">Restores each rune's orb index and gauge height from save data, keeping the scene's particle objects.</span> |
| <Link id="m-save" /><code><Link to="/mod/game-api/types/game-other-namespaces/climbingtowerprogressionvisualizersavedata">{"ClimbingTowerProgressionVisualizerSaveData"}</Link>{" Save("}<Link to="/mod/game-api/types/alta-networking/iserializechildren">{"ISerializeChildren"}</Link>{" childSerializer)"}</code> | <span className="api-desc">Saves each rune's orb index and gauge height.</span> |
| <Link id="m-setgaugematerialprogression" /><code>{"void SetGaugeMaterialProgression(float progress)"}</code> | <span className="api-desc">Sets the gauge fill (`_FillProgress`) to a value clamped from 0 to 1.</span> |

<details className="api-private">
<summary>11 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | <span className="api-desc">Unhooks player events and destroys the instanced material.</span> |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> | <span className="api-desc">Unhooks the unlock manager's `Modified` event.</span> |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> | <span className="api-desc">Client: sets up for the local player now, or waits for `Player.LocalPlayerSet`.</span> |
| <Link id="m-postbake" /><code>{"private void IBuildRendererPostBake.PostBake()"}</code> | <span className="api-desc">Build step that removes missing renderers from `teleporterGauges`.</span> |
| <Link id="m-removeruneupdatefrommodificationevent" /><code>{"private void RemoveRuneUpdateFromModificationEvent()"}</code> | <span className="api-desc">Unhooks `UpdateActiveTeleporterRunes` from the local player's unlock manager.</span> |
| <Link id="m-setheightpointongauge" /><code>{"private void SetHeightPointOnGauge(float heightPoint)"}</code> | <span className="api-desc">Sets the gauge's furthest point (`_FurthestPoint`), clamped from 0 to 3.</span> |
| <Link id="m-setteleporterruneasactive" /><code>{"private void SetTeleporterRuneAsActive("}<Link to="/mod/game-api/types/game-other-namespaces/climbingtowerprogressionvisualizer-runeactivationelement">{"ClimbingTowerProgressionVisualizer.RuneActivationElement"}</Link>{" activationElement)"}</code> | <span className="api-desc">Turns on the rune's particles and moves the gauge marker to its height.</span> |
| <Link id="m-setteleporterruneasinactive" /><code>{"private void SetTeleporterRuneAsInactive("}<Link to="/mod/game-api/types/game-other-namespaces/climbingtowerprogressionvisualizer-runeactivationelement">{"ClimbingTowerProgressionVisualizer.RuneActivationElement"}</Link>{" activationElement)"}</code> | <span className="api-desc">Turns off the rune's particles.</span> |
| <Link id="m-setup" /><code>{"private void Setup("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | <span className="api-desc">Hooks the local player's unlock manager `Modified` event and refreshes the runes.</span> |
| <Link id="m-syncruneactivationelements-2" /><code>{"private void SyncRuneActivationElements("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, List<"}<Link to="/mod/game-api/types/game-other-namespaces/climbingtowerprogressionvisualizer-runeactivationelement">{"ClimbingTowerProgressionVisualizer.RuneActivationElement"}</Link>{"> runeActivationElementsToSync)"}</code> | <span className="api-desc">Writes or reads each rune's orb index and gauge height; remote clients then refresh the runes. Nothing in this class sends it.</span> |
| <Link id="m-updateactiveteleporterrunes" /><code>{"private void UpdateActiveTeleporterRunes()"}</code> | <span className="api-desc">Client: lights only the last rune whose orb the local player has, and turns the others off.</span> |

</details>
