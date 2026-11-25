---
title: "InGameInspector"
description: "class InGameInspector in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# InGameInspector

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: I to L](/game-api/types/global-i-l)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour)
- **Nested types** [`BubbleInspectorTool`](/game-api/types/global-i-l/ingameinspector-bubbleinspectortool), [`ChunkBounds`](/game-api/types/global-i-l/ingameinspector-chunkbounds), [`ClonerTool`](/game-api/types/global-i-l/ingameinspector-clonertool), [`CommandRunner`](/game-api/types/global-i-l/ingameinspector-commandrunner), [`DirectTeleporter`](/game-api/types/global-i-l/ingameinspector-directteleporter), [`InGameTool`](/game-api/types/global-i-l/ingameinspector-ingametool), [`LODBias`](/game-api/types/global-i-l/ingameinspector-lodbias), [`LODForcer`](/game-api/types/global-i-l/ingameinspector-lodforcer), [`LODUpdater`](/game-api/types/global-i-l/ingameinspector-lodupdater), [`LODVizualizer`](/game-api/types/global-i-l/ingameinspector-lodvizualizer), [`MineStairsPointer`](/game-api/types/global-i-l/ingameinspector-minestairspointer), [`NonTeleporterInGameTool`](/game-api/types/global-i-l/ingameinspector-nonteleporteringametool), [`SpawnPointTeleporter`](/game-api/types/global-i-l/ingameinspector-spawnpointteleporter), [`StraightJumper`](/game-api/types/global-i-l/ingameinspector-straightjumper)
- **Attributes** `RequireComponent`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"InGameInspector()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-availabletools" /><code>{"private "}<Link to="/game-api/types/global-i-l/ingameinspector-ingametool">{"InGameInspector.InGameTool"}</Link>{"[] availableTools"}</code> |  |
| <Link id="m-bg" /><code>{"private Image bg"}</code> |  |
| <Link id="m-chunkboundsmaterial" /><code>{"private Material chunkBoundsMaterial"}</code> |  |
| <Link id="m-controller" /><code>{"private "}<Link to="/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" controller"}</code> |  |
| <Link id="m-currenttool" /><code>{"private int currentTool"}</code> |  |
| <Link id="m-displayingmessage" /><code>{"private "}<Link to="/game-api/types/assembly-other/altacoroutine">{"AltaCoroutine"}</Link>{" displayingMessage"}</code> |  |
| <Link id="m-isdoubleclicking" /><code>{"private bool isDoubleClicking"}</code> |  |
| <Link id="m-israycasting" /><code>{"private bool isRaycasting"}</code> |  |
| <Link id="m-isrotating" /><code>{"private bool isRotating"}</code> |  |
| <Link id="m-lodcolors" /><code>{"private Color[] lodColors"}</code> |  |
| <Link id="m-lodmaterial" /><code>{"private Material lodMaterial"}</code> |  |
| <Link id="m-log" /><code>{"private "}<Link to="/game-api/types/global-i-l/lodchange">{"LODChange"}</Link>{" log"}</code> |  |
| <Link id="m-messageduration" /><code>{"private float messageDuration"}</code> |  |
| <Link id="m-minescompass" /><code>{"private Image minesCompass"}</code> |  |
| <Link id="m-objectname" /><code>{"private Text objectName"}</code> |  |
| <Link id="m-pointertransform" /><code>{"private Transform pointerTransform"}</code> |  |
| <Link id="m-previousvalue" /><code>{"private Vector2 previousValue"}</code> |  |
| <Link id="m-syncmessage" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<int> syncMessage"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-counttools" /><code>{"int CountTools { get; private set; }"}</code> |  |
| <Link id="m-currenttool-2" /><code>{"int CurrentTool { get; set; }"}</code> |  |
| <Link id="m-displaytext" /><code>{"private string DisplayText { get; set; }"}</code> |  |
| <Link id="m-pickup" /><code>{"private "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" { get; set; }"}</code> |  |
| <Link id="m-pointing" /><code>{"private Vector3 Pointing { get; set; }"}</code> |  |
| <Link id="m-renderer" /><code>{"private LineRenderer Renderer { get; set; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-changetooldown" /><code>{"void ChangeToolDown()"}</code> |  |
| <Link id="m-changetoolup" /><code>{"void ChangeToolUp()"}</code> |  |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> |  |
| <Link id="m-pressclear" /><code>{"void PressClear()"}</code> |  |
| <Link id="m-pressdown" /><code>{"void PressDown()"}</code> |  |
| <Link id="m-pressup" /><code>{"void PressUp()"}</code> |  |
| <Link id="m-sendmessage" /><code>{"void SendMessage()"}</code> |  |
| <Link id="m-toggleraycasting" /><code>{"void ToggleRaycasting(bool isEnabled)"}</code> |  |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |  |
| <Link id="m-checkinput" /><code>{"private void CheckInput("}<Link to="/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" playerInput)"}</code> |  |
| <Link id="m-displaymessage" /><code>{"private IEnumerator DisplayMessage(string message) (iterator)"}</code> |  |
| <Link id="m-interact" /><code>{"private void Interact("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" pickup, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> |  |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> |  |
| <Link id="m-start" /><code>{"private void Start()"}</code> |  |
| <Link id="m-stop" /><code>{"private void Stop("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" arg1, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" arg2)"}</code> |  |
| <Link id="m-syncmessage-2" /><code>{"private void SyncMessage("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, int arguments)"}</code> |  |
| <Link id="m-toggleenable" /><code>{"private void ToggleEnable(bool isEnabled)"}</code> |  |
| <Link id="m-update" /><code>{"private void Update()"}</code> |  |

## Used in

Members of other types that take, return or hold a `InGameInspector`:

[`InGameInspector.BubbleInspectorTool.BubbleInspectorTool`](/game-api/types/global-i-l/ingameinspector-bubbleinspectortool#m-ctor), [`InGameInspector.ChunkBounds.ChunkBounds`](/game-api/types/global-i-l/ingameinspector-chunkbounds#m-ctor), [`InGameInspector.ClonerTool.ClonerTool`](/game-api/types/global-i-l/ingameinspector-clonertool#m-ctor), [`InGameInspector.CommandRunner.CommandRunner`](/game-api/types/global-i-l/ingameinspector-commandrunner#m-ctor), [`InGameInspector.DirectTeleporter.DirectTeleporter`](/game-api/types/global-i-l/ingameinspector-directteleporter#m-ctor), [`InGameInspector.InGameTool.InGameTool`](/game-api/types/global-i-l/ingameinspector-ingametool#m-ctor), [`InGameInspector.InGameTool.Inspector`](/game-api/types/global-i-l/ingameinspector-ingametool#m-inspector), [`InGameInspector.LODBias.LODBias`](/game-api/types/global-i-l/ingameinspector-lodbias#m-ctor), [`InGameInspector.LODForcer.LODForcer`](/game-api/types/global-i-l/ingameinspector-lodforcer#m-ctor), [`InGameInspector.LODUpdater.LODUpdater`](/game-api/types/global-i-l/ingameinspector-lodupdater#m-ctor), [`InGameInspector.LODVizualizer.LODVizualizer`](/game-api/types/global-i-l/ingameinspector-lodvizualizer#m-ctor), [`InGameInspector.MineStairsPointer.MineStairsPointer`](/game-api/types/global-i-l/ingameinspector-minestairspointer#m-ctor), [`InGameInspector.NonTeleporterInGameTool.NonTeleporterInGameTool`](/game-api/types/global-i-l/ingameinspector-nonteleporteringametool#m-ctor), [`InGameInspector.SpawnPointTeleporter.SpawnPointTeleporter`](/game-api/types/global-i-l/ingameinspector-spawnpointteleporter#m-ctor), [`InGameInspector.StraightJumper.StraightJumper`](/game-api/types/global-i-l/ingameinspector-straightjumper#m-ctor), [`InGameInspectorWheel.inspector`](/game-api/types/global-i-l/ingameinspectorwheel#m-inspector).
