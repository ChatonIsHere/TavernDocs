---
title: "ColorModelCore<TR, TG, TB, TA>"
description: "Works out vertex colours for a mesh from values on its bones, one channel per point list, and reports when any channel leaves its default."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ColorModelCore&lt;TR, TG, TB, TA&gt;

A **class** in `Root.Township`, the global namespace.

Works out vertex colours for a mesh from values on its bones, one channel per point list, and reports when any channel leaves its default. Used by `ColorModel` (forging heat) and woodcut trees.

- **Listed in** [Global namespace: C to D](/mod/game-api/types/global-c-d)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ColorModelCore(MonoBehaviour subject)"}</code> | <span className="api-desc">Creates a `ColorModelCore` from `subject`.</span> |

## Fields

<details className="api-private">
<summary>11 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-isalphachanged" /><code>{"private bool isAlphaChanged"}</code> | <span className="api-desc">Set when an alpha point changed since the last check.</span> |
| <Link id="m-isalphaoff" /><code>{"private bool isAlphaOff"}</code> | <span className="api-desc">True when some alpha point differs from `DefaultAlpha`, so the alpha channel is written.</span> |
| <Link id="m-isbluechanged" /><code>{"private bool isBlueChanged"}</code> | <span className="api-desc">Set when a blue point changed since the last check.</span> |
| <Link id="m-isblueoff" /><code>{"private bool isBlueOff"}</code> | <span className="api-desc">True when some blue point differs from `DefaultBlue`, so the blue channel is written.</span> |
| <Link id="m-isgreenchanged" /><code>{"private bool isGreenChanged"}</code> | <span className="api-desc">Set when a green point changed since the last check.</span> |
| <Link id="m-isgreenoff" /><code>{"private bool isGreenOff"}</code> | <span className="api-desc">True when some green point differs from `DefaultGreen`, so the green channel is written.</span> |
| <Link id="m-isneedingcheck" /><code>{"private bool isNeedingCheck"}</code> | <span className="api-desc">Set by `CheckAtEndOfFrame`; cleared once `CheckForColor` runs.</span> |
| <Link id="m-isredchanged" /><code>{"private bool isRedChanged"}</code> | <span className="api-desc">Set when a red point changed since the last check.</span> |
| <Link id="m-isredoff" /><code>{"private bool isRedOff"}</code> | <span className="api-desc">True when some red point differs from `DefaultRed`, so the red channel is written.</span> |
| <Link id="m-iswaitingforcheck" /><code>{"private bool isWaitingForCheck"}</code> | <span className="api-desc">True while the `WaitForCheck` coroutine is running, so only one is started.</span> |
| <Link id="m-subject" /><code>{"private MonoBehaviour subject"}</code> | <span className="api-desc">The behaviour that owns this colour model and runs its coroutine. Backing field for `Subject`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-alphapoints" /><code>{"List<TA> AlphaPoints { get; set; }"}</code> | <span className="api-desc">Points whose values drive the alpha channel.</span> |
| <Link id="m-bluepoints" /><code>{"List<TB> BluePoints { get; set; }"}</code> | <span className="api-desc">Points whose values drive the blue channel.</span> |
| <Link id="m-defaultalpha" /><code>{"float DefaultAlpha { get; set; }"}</code> | <span className="api-desc">Alpha value that counts as unchanged.</span> |
| <Link id="m-defaultblue" /><code>{"float DefaultBlue { get; set; }"}</code> | <span className="api-desc">Blue value that counts as unchanged.</span> |
| <Link id="m-defaultgreen" /><code>{"float DefaultGreen { get; set; }"}</code> | <span className="api-desc">Green value that counts as unchanged.</span> |
| <Link id="m-defaultred" /><code>{"float DefaultRed { get; set; }"}</code> | <span className="api-desc">Red value that counts as unchanged.</span> |
| <Link id="m-greenpoints" /><code>{"List<TG> GreenPoints { get; set; }"}</code> | <span className="api-desc">Points whose values drive the green channel.</span> |
| <Link id="m-iscoloroff" /><code>{"bool IsColorOff { get; private set; }"}</code> | <span className="api-desc">True when any channel differs from its default, so the mesh needs vertex colours.</span> |
| <Link id="m-mesh" /><code>{"Mesh Mesh { get; set; }"}</code> | <span className="api-desc">The mesh being coloured.</span> |
| <Link id="m-redpoints" /><code>{"List<TR> RedPoints { get; set; }"}</code> | <span className="api-desc">Points whose values drive the red channel.</span> |
| <Link id="m-subject-2" /><code>{"MonoBehaviour Subject { get; }"}</code> | <span className="api-desc">The component that owns this core, used to run its coroutine.</span> |
| <Link id="m-weights" /><code>{"BoneWeight[] Weights { get; set; }"}</code> | <span className="api-desc">Per-vertex bone weights for blending point values.</span> |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-modified" /><code>{"event Action<"}<Link to="/mod/game-api/types/global-c-d/colormodelcore-tr-tg-tb-ta">{"ColorModelCore"}</Link>{"<TR, TG, TB, TA>> Modified"}</code> | <span className="api-desc">Raised after a check that found changes.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-applycolorsto" /><code>{"void ApplyColorsTo(List<Color> colors, int offset)"}</code> | <span className="api-desc">Writes each changed channel into a colour list, blending point values by the bone weights.</span> |
| <Link id="m-checkatendofframe" /><code>{"void CheckAtEndOfFrame()"}</code> | <span className="api-desc">Client: schedules `CheckForColor` at the end of the frame.</span> |
| <Link id="m-checkforcolor" /><code>{"void CheckForColor(bool? forceTo = null, bool isCheckingAll = true)"}</code> | <span className="api-desc">Rechecks which channels differ from their defaults (or forces the result) and raises `Modified` if anything was flagged.</span> |
| <Link id="m-initialize" /><code>{"void Initialize()"}</code> | <span className="api-desc">Starts listening to every point's `Changed` event.</span> |

<details className="api-private">
<summary>9 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-alphavaluechanged" /><code>{"private void AlphaValueChanged(TA point)"}</code> | <span className="api-desc">Listener on each alpha point's `Changed` event; marks the alpha channel for rechecking.</span> |
| <Link id="m-bluevaluechanged" /><code>{"private void BlueValueChanged(TB point)"}</code> | <span className="api-desc">Listener on each blue point's `Changed` event; marks the blue channel for rechecking.</span> |
| <Link id="m-checkchanged" /><code>{"private bool CheckChanged<T>(List<T> points, float defaultValue)"}</code> | <span className="api-desc">Returns true if any point in the list has a value other than the channel default.</span> |
| <Link id="m-greenvaluechanged" /><code>{"private void GreenValueChanged(TG point)"}</code> | <span className="api-desc">Listener on each green point's `Changed` event; marks the green channel for rechecking.</span> |
| <Link id="m-redvaluechanged" /><code>{"private void RedValueChanged(TR point)"}</code> | <span className="api-desc">Listener on each red point's `Changed` event; marks the red channel for rechecking.</span> |
| <Link id="m-setlisteningto" /><code>{"private void SetListeningTo(bool isListening)"}</code> | <span className="api-desc">Subscribes or unsubscribes the channel change listeners on every red, green, blue and alpha point.</span> |
| <Link id="m-setlisteningto-2" /><code>{"private void SetListeningTo<T>(List<T> points, Action<T> callback, bool isListening)"}</code> | <span className="api-desc">Subscribes or unsubscribes the channel change listeners on every red, green, blue and alpha point.</span> |
| <Link id="m-updatecolors" /><code>{"private void UpdateColors<T>(List<T> points, List<Color> colors, int offset, int channel)"}</code> | <span className="api-desc">Writes one colour channel into the vertex colour list, blending point values by each vertex's bone weights.</span> |
| <Link id="m-waitforcheck" /><code>{"private IEnumerator WaitForCheck() (iterator)"}</code> | <span className="api-desc">Coroutine that runs `CheckForColor` at the end of each frame while a check is still pending.</span> |

</details>

## Used in

Members of other types that take, return or hold a `ColorModelCore&lt;TR, TG, TB, TA>`:

<div className="api-used-in">

[`WoodcutTreeBaker.NodeModified`](/mod/game-api/types/alta-crafting/woodcuttreebaker#m-nodemodified), [`WoodcutTreeBakingHandler.ModifyColors`](/mod/game-api/types/alta-crafting/woodcuttreebakinghandler#m-modifycolors), [`WoodcutTreeModel.Core`](/mod/game-api/types/alta-crafting/woodcuttreemodel#m-core), [`ColorModel<TR, TG, TB, TA>.core`](/mod/game-api/types/global-c-d/colormodel-tr-tg-tb-ta#m-core), [`ColorModel<TR, TG, TB, TA>.Core`](/mod/game-api/types/global-c-d/colormodel-tr-tg-tb-ta#m-core-2), [`ColorModel<TR, TG, TB, TA>.Modified`](/mod/game-api/types/global-c-d/colormodel-tr-tg-tb-ta#m-modified).

</div>
