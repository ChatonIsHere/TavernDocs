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
| <Link id="m-ctor" /><code>{"ColorModelCore(MonoBehaviour subject)"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-isalphachanged" /><code>{"private bool isAlphaChanged"}</code> |  |
| <Link id="m-isalphaoff" /><code>{"private bool isAlphaOff"}</code> |  |
| <Link id="m-isbluechanged" /><code>{"private bool isBlueChanged"}</code> |  |
| <Link id="m-isblueoff" /><code>{"private bool isBlueOff"}</code> |  |
| <Link id="m-isgreenchanged" /><code>{"private bool isGreenChanged"}</code> |  |
| <Link id="m-isgreenoff" /><code>{"private bool isGreenOff"}</code> |  |
| <Link id="m-isneedingcheck" /><code>{"private bool isNeedingCheck"}</code> |  |
| <Link id="m-isredchanged" /><code>{"private bool isRedChanged"}</code> |  |
| <Link id="m-isredoff" /><code>{"private bool isRedOff"}</code> |  |
| <Link id="m-iswaitingforcheck" /><code>{"private bool isWaitingForCheck"}</code> |  |
| <Link id="m-subject" /><code>{"private MonoBehaviour subject"}</code> |  |

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
| <Link id="m-alphavaluechanged" /><code>{"private void AlphaValueChanged(TA point)"}</code> |  |
| <Link id="m-bluevaluechanged" /><code>{"private void BlueValueChanged(TB point)"}</code> |  |
| <Link id="m-checkchanged" /><code>{"private bool CheckChanged<T>(List<T> points, float defaultValue)"}</code> |  |
| <Link id="m-greenvaluechanged" /><code>{"private void GreenValueChanged(TG point)"}</code> |  |
| <Link id="m-redvaluechanged" /><code>{"private void RedValueChanged(TR point)"}</code> |  |
| <Link id="m-setlisteningto" /><code>{"private void SetListeningTo(bool isListening)"}</code> |  |
| <Link id="m-setlisteningto-2" /><code>{"private void SetListeningTo<T>(List<T> points, Action<T> callback, bool isListening)"}</code> |  |
| <Link id="m-updatecolors" /><code>{"private void UpdateColors<T>(List<T> points, List<Color> colors, int offset, int channel)"}</code> |  |
| <Link id="m-waitforcheck" /><code>{"private IEnumerator WaitForCheck() (iterator)"}</code> |  |

## Used in

Members of other types that take, return or hold a `ColorModelCore&lt;TR, TG, TB, TA>`:

[`WoodcutTreeBaker.NodeModified`](/game-api/types/alta-crafting/woodcuttreebaker#m-nodemodified), [`WoodcutTreeBakingHandler.ModifyColors`](/game-api/types/alta-crafting/woodcuttreebakinghandler#m-modifycolors), [`WoodcutTreeModel.Core`](/game-api/types/alta-crafting/woodcuttreemodel#m-core), [`ColorModel<TR, TG, TB, TA>.core`](/game-api/types/global-c-d/colormodel-tr-tg-tb-ta#m-core), [`ColorModel<TR, TG, TB, TA>.Core`](/game-api/types/global-c-d/colormodel-tr-tg-tb-ta#m-core-2), [`ColorModel<TR, TG, TB, TA>.Modified`](/game-api/types/global-c-d/colormodel-tr-tg-tb-ta#m-modified).
