---
title: "ColorModelCore<TR, TG, TB, TA>"
description: "Works out vertex colours for a mesh from values on its bones, one channel per point list, and reports when any channel leaves its default."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ColorModelCore&lt;TR, TG, TB, TA&gt;

A **class** in `Root.Township`, no namespace.

Works out vertex colours for a mesh from values on its bones, one channel per point list, and reports when any channel leaves its default. Used by `ColorModel` (forging heat) and woodcut trees.

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ColorModelCore(MonoBehaviour subject)"}</code> | Creates a `ColorModelCore` from `subject`. |

## Fields

<details>
<summary>11 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-isalphachanged" /><code>{"private bool isAlphaChanged"}</code> | Set when an alpha point changed since the last check. |
| <Link id="m-isalphaoff" /><code>{"private bool isAlphaOff"}</code> | True when some alpha point differs from `DefaultAlpha`, so the alpha channel is written. |
| <Link id="m-isbluechanged" /><code>{"private bool isBlueChanged"}</code> | Set when a blue point changed since the last check. |
| <Link id="m-isblueoff" /><code>{"private bool isBlueOff"}</code> | True when some blue point differs from `DefaultBlue`, so the blue channel is written. |
| <Link id="m-isgreenchanged" /><code>{"private bool isGreenChanged"}</code> | Set when a green point changed since the last check. |
| <Link id="m-isgreenoff" /><code>{"private bool isGreenOff"}</code> | True when some green point differs from `DefaultGreen`, so the green channel is written. |
| <Link id="m-isneedingcheck" /><code>{"private bool isNeedingCheck"}</code> | Set by `CheckAtEndOfFrame`; cleared once `CheckForColor` runs. |
| <Link id="m-isredchanged" /><code>{"private bool isRedChanged"}</code> | Set when a red point changed since the last check. |
| <Link id="m-isredoff" /><code>{"private bool isRedOff"}</code> | True when some red point differs from `DefaultRed`, so the red channel is written. |
| <Link id="m-iswaitingforcheck" /><code>{"private bool isWaitingForCheck"}</code> | True while the `WaitForCheck` coroutine is running, so only one is started. |
| <Link id="m-subject" /><code>{"private MonoBehaviour subject"}</code> | The behaviour that owns this colour model and runs its coroutine. Backing field for `Subject`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-alphapoints" /><code>{"List<TA> AlphaPoints { get; set; }"}</code> | Points whose values drive the alpha channel. |
| <Link id="m-bluepoints" /><code>{"List<TB> BluePoints { get; set; }"}</code> | Points whose values drive the blue channel. |
| <Link id="m-defaultalpha" /><code>{"float DefaultAlpha { get; set; }"}</code> | Alpha value that counts as unchanged. |
| <Link id="m-defaultblue" /><code>{"float DefaultBlue { get; set; }"}</code> | Blue value that counts as unchanged. |
| <Link id="m-defaultgreen" /><code>{"float DefaultGreen { get; set; }"}</code> | Green value that counts as unchanged. |
| <Link id="m-defaultred" /><code>{"float DefaultRed { get; set; }"}</code> | Red value that counts as unchanged. |
| <Link id="m-greenpoints" /><code>{"List<TG> GreenPoints { get; set; }"}</code> | Points whose values drive the green channel. |
| <Link id="m-iscoloroff" /><code>{"bool IsColorOff { get; private set; }"}</code> | True when any channel differs from its default, so the mesh needs vertex colours. |
| <Link id="m-mesh" /><code>{"Mesh Mesh { get; set; }"}</code> | The mesh being coloured. |
| <Link id="m-redpoints" /><code>{"List<TR> RedPoints { get; set; }"}</code> | Points whose values drive the red channel. |
| <Link id="m-subject-2" /><code>{"MonoBehaviour Subject { get; }"}</code> | The component that owns this core, used to run its coroutine. |
| <Link id="m-weights" /><code>{"BoneWeight[] Weights { get; set; }"}</code> | Per-vertex bone weights for blending point values. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-modified" /><code>{"event Action<"}<Link to="/game-api/types/global-c-d/colormodelcore-tr-tg-tb-ta">{"ColorModelCore"}</Link>{"<TR, TG, TB, TA>> Modified"}</code> | Raised after a check that found changes. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-applycolorsto" /><code>{"void ApplyColorsTo(List<Color> colors, int offset)"}</code> | Writes each changed channel into a colour list, blending point values by the bone weights. |
| <Link id="m-checkatendofframe" /><code>{"void CheckAtEndOfFrame()"}</code> | Client: schedules `CheckForColor` at the end of the frame. |
| <Link id="m-checkforcolor" /><code>{"void CheckForColor(bool? forceTo = null, bool isCheckingAll = true)"}</code> | Rechecks which channels differ from their defaults (or forces the result) and raises `Modified` if anything was flagged. |
| <Link id="m-initialize" /><code>{"void Initialize()"}</code> | Starts listening to every point's `Changed` event. |

<details>
<summary>9 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-alphavaluechanged" /><code>{"private void AlphaValueChanged(TA point)"}</code> | Listener on each alpha point's `Changed` event; marks the alpha channel for rechecking. |
| <Link id="m-bluevaluechanged" /><code>{"private void BlueValueChanged(TB point)"}</code> | Listener on each blue point's `Changed` event; marks the blue channel for rechecking. |
| <Link id="m-checkchanged" /><code>{"private bool CheckChanged<T>(List<T> points, float defaultValue)"}</code> | Returns true if any point in the list has a value other than the channel default. |
| <Link id="m-greenvaluechanged" /><code>{"private void GreenValueChanged(TG point)"}</code> | Listener on each green point's `Changed` event; marks the green channel for rechecking. |
| <Link id="m-redvaluechanged" /><code>{"private void RedValueChanged(TR point)"}</code> | Listener on each red point's `Changed` event; marks the red channel for rechecking. |
| <Link id="m-setlisteningto" /><code>{"private void SetListeningTo(bool isListening)"}</code> | Subscribes or unsubscribes the channel change listeners on every red, green, blue and alpha point. |
| <Link id="m-setlisteningto-2" /><code>{"private void SetListeningTo<T>(List<T> points, Action<T> callback, bool isListening)"}</code> | Subscribes or unsubscribes the channel change listeners on every red, green, blue and alpha point. |
| <Link id="m-updatecolors" /><code>{"private void UpdateColors<T>(List<T> points, List<Color> colors, int offset, int channel)"}</code> | Writes one colour channel into the vertex colour list, blending point values by each vertex's bone weights. |
| <Link id="m-waitforcheck" /><code>{"private IEnumerator WaitForCheck() (iterator)"}</code> | Coroutine that runs `CheckForColor` at the end of each frame while a check is still pending. |

</details>

## Used in

Members of other types that take, return or hold a `ColorModelCore&lt;TR, TG, TB, TA>`:

[`WoodcutTreeBaker.NodeModified`](/game-api/types/alta-crafting/woodcuttreebaker#m-nodemodified), [`WoodcutTreeBakingHandler.ModifyColors`](/game-api/types/alta-crafting/woodcuttreebakinghandler#m-modifycolors), [`WoodcutTreeModel.Core`](/game-api/types/alta-crafting/woodcuttreemodel#m-core), [`ColorModel<TR, TG, TB, TA>.core`](/game-api/types/global-c-d/colormodel-tr-tg-tb-ta#m-core), [`ColorModel<TR, TG, TB, TA>.Core`](/game-api/types/global-c-d/colormodel-tr-tg-tb-ta#m-core-2), [`ColorModel<TR, TG, TB, TA>.Modified`](/game-api/types/global-c-d/colormodel-tr-tg-tb-ta#m-modified).
