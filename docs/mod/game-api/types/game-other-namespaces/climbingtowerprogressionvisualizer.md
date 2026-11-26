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
| <Link id="m-ctor" /><code>{"ClimbingTowerProgressionVisualizer()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>8 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-fillprogress" /><code>{"private static readonly int _FillProgress"}</code> | Shader property ID for the gauge fill. |
| <Link id="m-furthestpoint" /><code>{"private static readonly int _FurthestPoint"}</code> | Shader property ID for the gauge's furthest point marker. |
| <Link id="m-instantiatedmaterial" /><code>{"private Material instantiatedMaterial"}</code> | Backing field for `InstantiatedMaterial`. |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> | NLog logger for this class. |
| <Link id="m-maximumvisualizergaugevalue" /><code>{"private const int MaximumVisualizerGaugeValue"}</code> | Upper clamp for the gauge height value, 3. |
| <Link id="m-runeactivationelements" /><code>{"private List<"}<Link to="/mod/game-api/types/game-other-namespaces/climbingtowerprogressionvisualizer-runeactivationelement">{"ClimbingTowerProgressionVisualizer.RuneActivationElement"}</Link>{"> runeActivationElements"}</code> | Runes, each with its particle object, the orb index that lights it and its gauge height. |
| <Link id="m-syncruneactivationelements" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsyncclass-t">{"MethodSyncClass"}</Link>{"<List<"}<Link to="/mod/game-api/types/game-other-namespaces/climbingtowerprogressionvisualizer-runeactivationelement">{"ClimbingTowerProgressionVisualizer.RuneActivationElement"}</Link>{">> syncRuneActivationElements"}</code> | Method sync for the rune settings. |
| <Link id="m-teleportergauges" /><code>{"private Renderer[] teleporterGauges"}</code> | Gauge renderers that share the instanced material. |

</details>

## Properties

<details>
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-instantiatedmaterial-2" /><code>{"private Material InstantiatedMaterial { get; }"}</code> | Gauge material instance, created from the first gauge on first use and shared by all gauges. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Creates the `syncRuneActivationElements` method sync on `SyncC`. |
| <Link id="m-load" /><code>{"void Load("}<Link to="/mod/game-api/types/game-other-namespaces/climbingtowerprogressionvisualizersavedata">{"ClimbingTowerProgressionVisualizerSaveData"}</Link>{" data, "}<Link to="/mod/game-api/types/alta-networking/iserializechildren">{"ISerializeChildren"}</Link>{" childSerializer)"}</code> | Restores each rune's orb index and gauge height from save data, keeping the scene's particle objects. |
| <Link id="m-save" /><code><Link to="/mod/game-api/types/game-other-namespaces/climbingtowerprogressionvisualizersavedata">{"ClimbingTowerProgressionVisualizerSaveData"}</Link>{" Save("}<Link to="/mod/game-api/types/alta-networking/iserializechildren">{"ISerializeChildren"}</Link>{" childSerializer)"}</code> | Saves each rune's orb index and gauge height. |
| <Link id="m-setgaugematerialprogression" /><code>{"void SetGaugeMaterialProgression(float progress)"}</code> | Sets the gauge fill (`_FillProgress`) to a value clamped from 0 to 1. |

<details>
<summary>11 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | Unhooks player events and destroys the instanced material. |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> | Unhooks the unlock manager's `Modified` event. |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> | Client: sets up for the local player now, or waits for `Player.LocalPlayerSet`. |
| <Link id="m-postbake" /><code>{"private void IBuildRendererPostBake.PostBake()"}</code> | Build step that removes missing renderers from `teleporterGauges`. |
| <Link id="m-removeruneupdatefrommodificationevent" /><code>{"private void RemoveRuneUpdateFromModificationEvent()"}</code> | Unhooks `UpdateActiveTeleporterRunes` from the local player's unlock manager. |
| <Link id="m-setheightpointongauge" /><code>{"private void SetHeightPointOnGauge(float heightPoint)"}</code> | Sets the gauge's furthest point (`_FurthestPoint`), clamped from 0 to 3. |
| <Link id="m-setteleporterruneasactive" /><code>{"private void SetTeleporterRuneAsActive("}<Link to="/mod/game-api/types/game-other-namespaces/climbingtowerprogressionvisualizer-runeactivationelement">{"ClimbingTowerProgressionVisualizer.RuneActivationElement"}</Link>{" activationElement)"}</code> | Turns on the rune's particles and moves the gauge marker to its height. |
| <Link id="m-setteleporterruneasinactive" /><code>{"private void SetTeleporterRuneAsInactive("}<Link to="/mod/game-api/types/game-other-namespaces/climbingtowerprogressionvisualizer-runeactivationelement">{"ClimbingTowerProgressionVisualizer.RuneActivationElement"}</Link>{" activationElement)"}</code> | Turns off the rune's particles. |
| <Link id="m-setup" /><code>{"private void Setup("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | Hooks the local player's unlock manager `Modified` event and refreshes the runes. |
| <Link id="m-syncruneactivationelements-2" /><code>{"private void SyncRuneActivationElements("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, List<"}<Link to="/mod/game-api/types/game-other-namespaces/climbingtowerprogressionvisualizer-runeactivationelement">{"ClimbingTowerProgressionVisualizer.RuneActivationElement"}</Link>{"> runeActivationElementsToSync)"}</code> | Writes or reads each rune's orb index and gauge height; remote clients then refresh the runes. Nothing in this class sends it. |
| <Link id="m-updateactiveteleporterrunes" /><code>{"private void UpdateActiveTeleporterRunes()"}</code> | Client: lights only the last rune whose orb the local player has, and turns the others off. |

</details>
