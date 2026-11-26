---
title: "InGameInspector"
description: "A debug tool item with 12 modes (LOD tools, chunk bounds, teleporters, console command runner, cloner, bubble inspector)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# InGameInspector

A **class** in `Root.Township`, no namespace.

A debug tool item with 12 modes (LOD tools, chunk bounds, teleporters, console command runner, cloner, bubble inspector). Only players with the `debug_features` permission can hold it; others are forced to drop it.

- **Listed in** [No namespace: I to L](/game-api/types/global-i-l)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour)
- **Nested types** [`BubbleInspectorTool`](/game-api/types/global-i-l/ingameinspector-bubbleinspectortool), [`ChunkBounds`](/game-api/types/global-i-l/ingameinspector-chunkbounds), [`ClonerTool`](/game-api/types/global-i-l/ingameinspector-clonertool), [`CommandRunner`](/game-api/types/global-i-l/ingameinspector-commandrunner), [`DirectTeleporter`](/game-api/types/global-i-l/ingameinspector-directteleporter), [`InGameTool`](/game-api/types/global-i-l/ingameinspector-ingametool), [`LODBias`](/game-api/types/global-i-l/ingameinspector-lodbias), [`LODForcer`](/game-api/types/global-i-l/ingameinspector-lodforcer), [`LODUpdater`](/game-api/types/global-i-l/ingameinspector-lodupdater), [`LODVizualizer`](/game-api/types/global-i-l/ingameinspector-lodvizualizer), [`MineStairsPointer`](/game-api/types/global-i-l/ingameinspector-minestairspointer), [`NonTeleporterInGameTool`](/game-api/types/global-i-l/ingameinspector-nonteleporteringametool), [`SpawnPointTeleporter`](/game-api/types/global-i-l/ingameinspector-spawnpointteleporter), [`StraightJumper`](/game-api/types/global-i-l/ingameinspector-straightjumper)
- **Attributes** `RequireComponent`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"InGameInspector()"}</code> |

## Fields

<details>
<summary>18 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-availabletools" /><code>{"private "}<Link to="/game-api/types/global-i-l/ingameinspector-ingametool">{"InGameInspector.InGameTool"}</Link>{"[] availableTools"}</code> | The debug tools: LOD tools, chunk bounds, teleporters, mine stairs pointer, command runner, cloner and bubble inspector. |
| <Link id="m-bg" /><code>{"private Image bg"}</code> | Background image behind the label. |
| <Link id="m-chunkboundsmaterial" /><code>{"private Material chunkBoundsMaterial"}</code> | Material used by the chunk bounds tool. |
| <Link id="m-controller" /><code>{"private "}<Link to="/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" controller"}</code> | Player input of whoever is holding the inspector. |
| <Link id="m-currenttool" /><code>{"private int currentTool"}</code> | Backing field for `CurrentTool`, the index into `availableTools`. |
| <Link id="m-displayingmessage" /><code>{"private "}<Link to="/game-api/types/assembly-other/altacoroutine">{"AltaCoroutine"}</Link>{" displayingMessage"}</code> | The running `DisplayMessage` coroutine, if any. |
| <Link id="m-isdoubleclicking" /><code>{"private bool isDoubleClicking"}</code> | Not used in this build. |
| <Link id="m-israycasting" /><code>{"private bool isRaycasting"}</code> | Whether the pointer ray is on. Tools only pick targets while it is. |
| <Link id="m-isrotating" /><code>{"private bool isRotating"}</code> | True while a swipe rotation is being tracked. |
| <Link id="m-lodcolors" /><code>{"private Color[] lodColors"}</code> | Colours, one per LOD level, used by the LOD visualiser. |
| <Link id="m-lodmaterial" /><code>{"private Material lodMaterial"}</code> | Base material the LOD visualiser tints with `lodColors`. |
| <Link id="m-log" /><code>{"private "}<Link to="/game-api/types/global-i-l/lodchange">{"LODChange"}</Link>{" log"}</code> | Serialized `LODChange` reference. Not read by the inspector's own code. |
| <Link id="m-messageduration" /><code>{"private float messageDuration"}</code> | How long a timed message stays up, in seconds (2 by default). |
| <Link id="m-minescompass" /><code>{"private Image minesCompass"}</code> | Arrow image the mine stairs pointer turns toward the nearest stairs. |
| <Link id="m-objectname" /><code>{"private Text objectName"}</code> | Text label that shows tool names and results. |
| <Link id="m-pointertransform" /><code>{"private Transform pointerTransform"}</code> | Where the pointer ray starts and which way it points. |
| <Link id="m-previousvalue" /><code>{"private Vector2 previousValue"}</code> | Swipe position when rotation tracking started. |
| <Link id="m-syncmessage" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<int> syncMessage"}</code> | Method sync made in `Initialize` and sent by `SendMessage` to share the current tool's data. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-counttools" /><code>{"int CountTools { get; private set; }"}</code> | Number of tools (12). |
| <Link id="m-currenttool-2" /><code>{"int CurrentTool { get; set; }"}</code> | Index of the active tool. Setting it disables the old tool, enables the new one if held, and shows its name. |

<details>
<summary>4 private and internal properties</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-displaytext" /><code>{"private string DisplayText { get; set; }"}</code> | Text on the inspector's label. Setting it shows the label, unless a timed message is showing. |
| <Link id="m-pickup" /><code>{"private "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" { get; set; }"}</code> | The pickup this inspector is on, found in `Awake`. |
| <Link id="m-pointing" /><code>{"private Vector3 Pointing { get; set; }"}</code> | Direction the mines compass arrow points. Setting it turns the arrow toward that direction and shows it. |
| <Link id="m-renderer" /><code>{"private LineRenderer Renderer { get; set; }"}</code> | Line renderer that draws the pointer ray while raycasting is on. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-changetooldown" /><code>{"void ChangeToolDown()"}</code> | Switches to the previous tool, wrapping round. Only for the local player holding it. |
| <Link id="m-changetoolup" /><code>{"void ChangeToolUp()"}</code> | Switches to the next tool, wrapping round. Only for the local player holding it. |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Sets up the network message that syncs the active tool's data. |
| <Link id="m-pressclear" /><code>{"void PressClear()"}</code> | Sends the clear press to the active tool. Only for the local player holding it. |
| <Link id="m-pressdown" /><code>{"void PressDown()"}</code> | Sends the down press to the active tool. Only for the local player holding it. |
| <Link id="m-pressup" /><code>{"void PressUp()"}</code> | Sends the up press to the active tool. Only for the local player holding it. |
| <Link id="m-sendmessage" /><code>{"void SendMessage()"}</code> | Sends the active tool's data to everyone in the item's chunks. |
| <Link id="m-toggleraycasting" /><code>{"void ToggleRaycasting(bool isEnabled)"}</code> | Shows or hides the pointer line. |

<details>
<summary>10 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Hooks the pickup's interaction events, gets the line renderer and builds the 12 debug tools. |
| <Link id="m-checkinput" /><code>{"private void CheckInput("}<Link to="/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" playerInput)"}</code> | On the local player's teleport press, starts tracking swipe rotation and passes the input to the current tool. |
| <Link id="m-displaymessage" /><code>{"private IEnumerator DisplayMessage(string message) (iterator)"}</code> | Coroutine that shows a message (such as the tool name) for `messageDuration` seconds, then hides it. |
| <Link id="m-interact" /><code>{"private void Interact("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" pickup, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | On grab, drops the item if the local player lacks the `debug_features` permission, else enables the current tool. |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | Disables the current tool. |
| <Link id="m-start" /><code>{"private void Start()"}</code> | Empty. |
| <Link id="m-stop" /><code>{"private void Stop("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" arg1, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" arg2)"}</code> | On release, unhooks the teleport input, disables the current tool and hides the label and compass. |
| <Link id="m-syncmessage-2" /><code>{"private void SyncMessage("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, int arguments)"}</code> | Method sync that sends the tool index, then lets that tool serialize its own data. |
| <Link id="m-toggleenable" /><code>{"private void ToggleEnable(bool isEnabled)"}</code> | When disabling, hides the label, background and mines compass. |
| <Link id="m-update" /><code>{"private void Update()"}</code> | While held, turns swipe motion into an angle for the tool, draws the pointer ray and updates the current tool. |

</details>

## Used in

Members of other types that take, return or hold a `InGameInspector`:

[`InGameInspector.BubbleInspectorTool.BubbleInspectorTool`](/game-api/types/global-i-l/ingameinspector-bubbleinspectortool#m-ctor), [`InGameInspector.ChunkBounds.ChunkBounds`](/game-api/types/global-i-l/ingameinspector-chunkbounds#m-ctor), [`InGameInspector.ClonerTool.ClonerTool`](/game-api/types/global-i-l/ingameinspector-clonertool#m-ctor), [`InGameInspector.CommandRunner.CommandRunner`](/game-api/types/global-i-l/ingameinspector-commandrunner#m-ctor), [`InGameInspector.DirectTeleporter.DirectTeleporter`](/game-api/types/global-i-l/ingameinspector-directteleporter#m-ctor), [`InGameInspector.InGameTool.InGameTool`](/game-api/types/global-i-l/ingameinspector-ingametool#m-ctor), [`InGameInspector.InGameTool.Inspector`](/game-api/types/global-i-l/ingameinspector-ingametool#m-inspector), [`InGameInspector.LODBias.LODBias`](/game-api/types/global-i-l/ingameinspector-lodbias#m-ctor), [`InGameInspector.LODForcer.LODForcer`](/game-api/types/global-i-l/ingameinspector-lodforcer#m-ctor), [`InGameInspector.LODUpdater.LODUpdater`](/game-api/types/global-i-l/ingameinspector-lodupdater#m-ctor), [`InGameInspector.LODVizualizer.LODVizualizer`](/game-api/types/global-i-l/ingameinspector-lodvizualizer#m-ctor), [`InGameInspector.MineStairsPointer.MineStairsPointer`](/game-api/types/global-i-l/ingameinspector-minestairspointer#m-ctor), [`InGameInspector.NonTeleporterInGameTool.NonTeleporterInGameTool`](/game-api/types/global-i-l/ingameinspector-nonteleporteringametool#m-ctor), [`InGameInspector.SpawnPointTeleporter.SpawnPointTeleporter`](/game-api/types/global-i-l/ingameinspector-spawnpointteleporter#m-ctor), [`InGameInspector.StraightJumper.StraightJumper`](/game-api/types/global-i-l/ingameinspector-straightjumper#m-ctor), [`InGameInspectorWheel.inspector`](/game-api/types/global-i-l/ingameinspectorwheel#m-inspector).
