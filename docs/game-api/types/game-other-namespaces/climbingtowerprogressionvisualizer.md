---
title: "ClimbingTowerProgressionVisualizer"
description: "class ClimbingTowerProgressionVisualizer in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ClimbingTowerProgressionVisualizer

A **class** in `Root.Township`, `Features.Gameplay.ClimbingTower`.

- **Listed in** [ATT, Features and other game namespaces](/game-api/types/game-other-namespaces)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour), [`IBuildRendererPostBake`](/game-api/types/assembly-other/ibuildrendererpostbake), [`IBuildBakeable`](/game-api/types/assembly-other/ibuildbakeable), [`ISavable<ClimbingTowerProgressionVisualizerSaveData>`](/game-api/types/global-i-l/isavable-t), [`ISavableSave<ClimbingTowerProgressionVisualizerSaveData>`](/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`ClimbingTowerProgressionVisualizerSaveData`](/game-api/types/game-other-namespaces/climbingtowerprogressionvisualizersavedata)
- **Nested types** [`RuneActivationElement`](/game-api/types/game-other-namespaces/climbingtowerprogressionvisualizer-runeactivationelement)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ClimbingTowerProgressionVisualizer()"}</code> |

## Fields

<details>
<summary>8 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-fillprogress" /><code>{"private static readonly int _FillProgress"}</code> |
| <Link id="m-furthestpoint" /><code>{"private static readonly int _FurthestPoint"}</code> |
| <Link id="m-instantiatedmaterial" /><code>{"private Material instantiatedMaterial"}</code> |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> |
| <Link id="m-maximumvisualizergaugevalue" /><code>{"private const int MaximumVisualizerGaugeValue"}</code> |
| <Link id="m-runeactivationelements" /><code>{"private List<"}<Link to="/game-api/types/game-other-namespaces/climbingtowerprogressionvisualizer-runeactivationelement">{"ClimbingTowerProgressionVisualizer.RuneActivationElement"}</Link>{"> runeActivationElements"}</code> |
| <Link id="m-syncruneactivationelements" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncclass-t">{"MethodSyncClass"}</Link>{"<List<"}<Link to="/game-api/types/game-other-namespaces/climbingtowerprogressionvisualizer-runeactivationelement">{"ClimbingTowerProgressionVisualizer.RuneActivationElement"}</Link>{">> syncRuneActivationElements"}</code> |
| <Link id="m-teleportergauges" /><code>{"private Renderer[] teleporterGauges"}</code> |

</details>

## Properties

<details>
<summary>1 private and internal property</summary>

| Member |
| --- |
| <Link id="m-instantiatedmaterial-2" /><code>{"private Material InstantiatedMaterial { get; }"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> |
| <Link id="m-load" /><code>{"void Load("}<Link to="/game-api/types/game-other-namespaces/climbingtowerprogressionvisualizersavedata">{"ClimbingTowerProgressionVisualizerSaveData"}</Link>{" data, "}<Link to="/game-api/types/alta-networking/iserializechildren">{"ISerializeChildren"}</Link>{" childSerializer)"}</code> |
| <Link id="m-save" /><code><Link to="/game-api/types/game-other-namespaces/climbingtowerprogressionvisualizersavedata">{"ClimbingTowerProgressionVisualizerSaveData"}</Link>{" Save("}<Link to="/game-api/types/alta-networking/iserializechildren">{"ISerializeChildren"}</Link>{" childSerializer)"}</code> |
| <Link id="m-setgaugematerialprogression" /><code>{"void SetGaugeMaterialProgression(float progress)"}</code> |

<details>
<summary>11 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> |
| <Link id="m-postbake" /><code>{"private void IBuildRendererPostBake.PostBake()"}</code> |
| <Link id="m-removeruneupdatefrommodificationevent" /><code>{"private void RemoveRuneUpdateFromModificationEvent()"}</code> |
| <Link id="m-setheightpointongauge" /><code>{"private void SetHeightPointOnGauge(float heightPoint)"}</code> |
| <Link id="m-setteleporterruneasactive" /><code>{"private void SetTeleporterRuneAsActive("}<Link to="/game-api/types/game-other-namespaces/climbingtowerprogressionvisualizer-runeactivationelement">{"ClimbingTowerProgressionVisualizer.RuneActivationElement"}</Link>{" activationElement)"}</code> |
| <Link id="m-setteleporterruneasinactive" /><code>{"private void SetTeleporterRuneAsInactive("}<Link to="/game-api/types/game-other-namespaces/climbingtowerprogressionvisualizer-runeactivationelement">{"ClimbingTowerProgressionVisualizer.RuneActivationElement"}</Link>{" activationElement)"}</code> |
| <Link id="m-setup" /><code>{"private void Setup("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> |
| <Link id="m-syncruneactivationelements-2" /><code>{"private void SyncRuneActivationElements("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, List<"}<Link to="/game-api/types/game-other-namespaces/climbingtowerprogressionvisualizer-runeactivationelement">{"ClimbingTowerProgressionVisualizer.RuneActivationElement"}</Link>{"> runeActivationElementsToSync)"}</code> |
| <Link id="m-updateactiveteleporterrunes" /><code>{"private void UpdateActiveTeleporterRunes()"}</code> |

</details>
