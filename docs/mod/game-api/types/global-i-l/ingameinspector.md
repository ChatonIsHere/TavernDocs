---
title: "InGameInspector"
description: "A debug tool item with 12 modes (LOD tools, chunk bounds, teleporters, console command runner, cloner, bubble inspector)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# InGameInspector

A **class** in `Root.Township`, the global namespace.

A debug tool item with 12 modes (LOD tools, chunk bounds, teleporters, console command runner, cloner, bubble inspector). Only players with the `debug_features` permission can hold it; others are forced to drop it.

- **Listed in** [Global namespace: I to L](/mod/game-api/types/global-i-l)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour)
- **Nested types** [`BubbleInspectorTool`](/mod/game-api/types/global-i-l/ingameinspector-bubbleinspectortool), [`ChunkBounds`](/mod/game-api/types/global-i-l/ingameinspector-chunkbounds), [`ClonerTool`](/mod/game-api/types/global-i-l/ingameinspector-clonertool), [`CommandRunner`](/mod/game-api/types/global-i-l/ingameinspector-commandrunner), [`DirectTeleporter`](/mod/game-api/types/global-i-l/ingameinspector-directteleporter), [`InGameTool`](/mod/game-api/types/global-i-l/ingameinspector-ingametool), [`LODBias`](/mod/game-api/types/global-i-l/ingameinspector-lodbias), [`LODForcer`](/mod/game-api/types/global-i-l/ingameinspector-lodforcer), [`LODUpdater`](/mod/game-api/types/global-i-l/ingameinspector-lodupdater), [`LODVizualizer`](/mod/game-api/types/global-i-l/ingameinspector-lodvizualizer), [`MineStairsPointer`](/mod/game-api/types/global-i-l/ingameinspector-minestairspointer), [`NonTeleporterInGameTool`](/mod/game-api/types/global-i-l/ingameinspector-nonteleporteringametool), [`SpawnPointTeleporter`](/mod/game-api/types/global-i-l/ingameinspector-spawnpointteleporter), [`StraightJumper`](/mod/game-api/types/global-i-l/ingameinspector-straightjumper)
- **Attributes** `RequireComponent`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"InGameInspector()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>18 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-availabletools" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/ingameinspector-ingametool">{"InGameInspector.InGameTool"}</Link>{"[] availableTools"}</code> | <span className="api-desc">The debug tools: LOD tools, chunk bounds, teleporters, mine stairs pointer, command runner, cloner and bubble inspector.</span> |
| <Link id="m-bg" /><code>{"private Image bg"}</code> | <span className="api-desc">Background image behind the label.</span> |
| <Link id="m-chunkboundsmaterial" /><code>{"private Material chunkBoundsMaterial"}</code> | <span className="api-desc">Material used by the chunk bounds tool.</span> |
| <Link id="m-controller" /><code>{"private "}<Link to="/mod/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" controller"}</code> | <span className="api-desc">Player input of whoever is holding the inspector.</span> |
| <Link id="m-currenttool" /><code>{"private int currentTool"}</code> | <span className="api-desc">Backing field for `CurrentTool`, the index into `availableTools`.</span> |
| <Link id="m-displayingmessage" /><code>{"private "}<Link to="/mod/game-api/types/assembly-other/altacoroutine">{"AltaCoroutine"}</Link>{" displayingMessage"}</code> | <span className="api-desc">The running `DisplayMessage` coroutine, if any.</span> |
| <Link id="m-isdoubleclicking" /><code>{"private bool isDoubleClicking"}</code> | <span className="api-desc">Not used in this build.</span> |
| <Link id="m-israycasting" /><code>{"private bool isRaycasting"}</code> | <span className="api-desc">Whether the pointer ray is on. Tools only pick targets while it is.</span> |
| <Link id="m-isrotating" /><code>{"private bool isRotating"}</code> | <span className="api-desc">True while a swipe rotation is being tracked.</span> |
| <Link id="m-lodcolors" /><code>{"private Color[] lodColors"}</code> | <span className="api-desc">Colours, one per LOD level, used by the LOD visualiser.</span> |
| <Link id="m-lodmaterial" /><code>{"private Material lodMaterial"}</code> | <span className="api-desc">Base material the LOD visualiser tints with `lodColors`.</span> |
| <Link id="m-log" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/lodchange">{"LODChange"}</Link>{" log"}</code> | <span className="api-desc">Serialized `LODChange` reference. Not read by the inspector's own code.</span> |
| <Link id="m-messageduration" /><code>{"private float messageDuration"}</code> | <span className="api-desc">How long a timed message stays up, in seconds (2 by default).</span> |
| <Link id="m-minescompass" /><code>{"private Image minesCompass"}</code> | <span className="api-desc">Arrow image the mine stairs pointer turns toward the nearest stairs.</span> |
| <Link id="m-objectname" /><code>{"private Text objectName"}</code> | <span className="api-desc">Text label that shows tool names and results.</span> |
| <Link id="m-pointertransform" /><code>{"private Transform pointerTransform"}</code> | <span className="api-desc">Where the pointer ray starts and which way it points.</span> |
| <Link id="m-previousvalue" /><code>{"private Vector2 previousValue"}</code> | <span className="api-desc">Swipe position when rotation tracking started.</span> |
| <Link id="m-syncmessage" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<int> syncMessage"}</code> | <span className="api-desc">Method sync made in `Initialize` and sent by `SendMessage` to share the current tool's data.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-counttools" /><code>{"int CountTools { get; private set; }"}</code> | <span className="api-desc">Number of tools (12).</span> |
| <Link id="m-currenttool-2" /><code>{"int CurrentTool { get; set; }"}</code> | <span className="api-desc">Index of the active tool. Setting it disables the old tool, enables the new one if held, and shows its name.</span> |

<details className="api-private">
<summary>4 private and internal properties</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-displaytext" /><code>{"private string DisplayText { get; set; }"}</code> | <span className="api-desc">Text on the inspector's label. Setting it shows the label, unless a timed message is showing.</span> |
| <Link id="m-pickup" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" { get; set; }"}</code> | <span className="api-desc">The pickup this inspector is on, found in `Awake`.</span> |
| <Link id="m-pointing" /><code>{"private Vector3 Pointing { get; set; }"}</code> | <span className="api-desc">Direction the mines compass arrow points. Setting it turns the arrow toward that direction and shows it.</span> |
| <Link id="m-renderer" /><code>{"private LineRenderer Renderer { get; set; }"}</code> | <span className="api-desc">Line renderer that draws the pointer ray while raycasting is on.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-changetooldown" /><code>{"void ChangeToolDown()"}</code> | <span className="api-desc">Switches to the previous tool, wrapping round. Only for the local player holding it.</span> |
| <Link id="m-changetoolup" /><code>{"void ChangeToolUp()"}</code> | <span className="api-desc">Switches to the next tool, wrapping round. Only for the local player holding it.</span> |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | <span className="api-desc">Sets up the network message that syncs the active tool's data.</span> |
| <Link id="m-pressclear" /><code>{"void PressClear()"}</code> | <span className="api-desc">Sends the clear press to the active tool. Only for the local player holding it.</span> |
| <Link id="m-pressdown" /><code>{"void PressDown()"}</code> | <span className="api-desc">Sends the down press to the active tool. Only for the local player holding it.</span> |
| <Link id="m-pressup" /><code>{"void PressUp()"}</code> | <span className="api-desc">Sends the up press to the active tool. Only for the local player holding it.</span> |
| <Link id="m-sendmessage" /><code>{"void SendMessage()"}</code> | <span className="api-desc">Sends the active tool's data to everyone in the item's chunks.</span> |
| <Link id="m-toggleraycasting" /><code>{"void ToggleRaycasting(bool isEnabled)"}</code> | <span className="api-desc">Shows or hides the pointer line.</span> |

<details className="api-private">
<summary>10 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Hooks the pickup's interaction events, gets the line renderer and builds the 12 debug tools.</span> |
| <Link id="m-checkinput" /><code>{"private void CheckInput("}<Link to="/mod/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" playerInput)"}</code> | <span className="api-desc">On the local player's teleport press, starts tracking swipe rotation and passes the input to the current tool.</span> |
| <Link id="m-displaymessage" /><code>{"private IEnumerator DisplayMessage(string message) (iterator)"}</code> | <span className="api-desc">Coroutine that shows a message (such as the tool name) for `messageDuration` seconds, then hides it.</span> |
| <Link id="m-interact" /><code>{"private void Interact("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" pickup, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | <span className="api-desc">On grab, drops the item if the local player lacks the `debug_features` permission, else enables the current tool.</span> |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | <span className="api-desc">Disables the current tool.</span> |
| <Link id="m-start" /><code>{"private void Start()"}</code> | <span className="api-desc">Empty.</span> |
| <Link id="m-stop" /><code>{"private void Stop("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" arg1, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" arg2)"}</code> | <span className="api-desc">On release, unhooks the teleport input, disables the current tool and hides the label and compass.</span> |
| <Link id="m-syncmessage-2" /><code>{"private void SyncMessage("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, int arguments)"}</code> | <span className="api-desc">Method sync that sends the tool index, then lets that tool serialize its own data.</span> |
| <Link id="m-toggleenable" /><code>{"private void ToggleEnable(bool isEnabled)"}</code> | <span className="api-desc">When disabling, hides the label, background and mines compass.</span> |
| <Link id="m-update" /><code>{"private void Update()"}</code> | <span className="api-desc">While held, turns swipe motion into an angle for the tool, draws the pointer ray and updates the current tool.</span> |

</details>

## Used in

Members of other types that take, return or hold a `InGameInspector`:

<div className="api-used-in">

[`InGameInspector.BubbleInspectorTool.BubbleInspectorTool`](/mod/game-api/types/global-i-l/ingameinspector-bubbleinspectortool#m-ctor), [`InGameInspector.ChunkBounds.ChunkBounds`](/mod/game-api/types/global-i-l/ingameinspector-chunkbounds#m-ctor), [`InGameInspector.ClonerTool.ClonerTool`](/mod/game-api/types/global-i-l/ingameinspector-clonertool#m-ctor), [`InGameInspector.CommandRunner.CommandRunner`](/mod/game-api/types/global-i-l/ingameinspector-commandrunner#m-ctor), [`InGameInspector.DirectTeleporter.DirectTeleporter`](/mod/game-api/types/global-i-l/ingameinspector-directteleporter#m-ctor), [`InGameInspector.InGameTool.InGameTool`](/mod/game-api/types/global-i-l/ingameinspector-ingametool#m-ctor), [`InGameInspector.InGameTool.Inspector`](/mod/game-api/types/global-i-l/ingameinspector-ingametool#m-inspector), [`InGameInspector.LODBias.LODBias`](/mod/game-api/types/global-i-l/ingameinspector-lodbias#m-ctor), [`InGameInspector.LODForcer.LODForcer`](/mod/game-api/types/global-i-l/ingameinspector-lodforcer#m-ctor), [`InGameInspector.LODUpdater.LODUpdater`](/mod/game-api/types/global-i-l/ingameinspector-lodupdater#m-ctor), [`InGameInspector.LODVizualizer.LODVizualizer`](/mod/game-api/types/global-i-l/ingameinspector-lodvizualizer#m-ctor), [`InGameInspector.MineStairsPointer.MineStairsPointer`](/mod/game-api/types/global-i-l/ingameinspector-minestairspointer#m-ctor), [`InGameInspector.NonTeleporterInGameTool.NonTeleporterInGameTool`](/mod/game-api/types/global-i-l/ingameinspector-nonteleporteringametool#m-ctor), [`InGameInspector.SpawnPointTeleporter.SpawnPointTeleporter`](/mod/game-api/types/global-i-l/ingameinspector-spawnpointteleporter#m-ctor), [`InGameInspector.StraightJumper.StraightJumper`](/mod/game-api/types/global-i-l/ingameinspector-straightjumper#m-ctor), [`InGameInspectorWheel.inspector`](/mod/game-api/types/global-i-l/ingameinspectorwheel#m-inspector).

</div>
