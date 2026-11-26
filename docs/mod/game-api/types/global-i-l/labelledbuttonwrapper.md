---
title: "LabelledButtonWrapper"
description: "A physical button with a text label that updates when the label changes."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LabelledButtonWrapper

A **class** in `Root.Township`, the global namespace.

A physical button with a text label that updates when the label changes.

- **Listed in** [Global namespace: I to L](/mod/game-api/types/global-i-l)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LabelledButtonWrapper()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-button" /><code>{"private "}<Link to="/mod/game-api/types/global-p/physicalbutton">{"PhysicalButton"}</Link>{" button"}</code> | <span className="api-desc">Backing field for `Button`, the wrapped physical button.</span> |
| <Link id="m-label" /><code>{"private string label"}</code> | <span className="api-desc">Backing field for `Label`.</span> |
| <Link id="m-textrenderer" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" textRenderer"}</code> | <span className="api-desc">The text that shows the label.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-button-2" /><code><Link to="/mod/game-api/types/global-p/physicalbutton">{"PhysicalButton"}</Link>{" Button { get; }"}</code> | <span className="api-desc">The wrapped physical button.</span> |
| <Link id="m-label-2" /><code>{"string Label { get; set; }"}</code> | <span className="api-desc">The button text. Setting a new value updates the text and raises `LabelChanged`.</span> |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-labelchanged" /><code>{"event Action<"}<Link to="/mod/game-api/types/global-i-l/labelledbuttonwrapper">{"LabelledButtonWrapper"}</Link>{"> LabelChanged"}</code> | <span className="api-desc">Raised when the label changes.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"protected void Awake()"}</code> | <span className="api-desc">Shows the serialized label and starts updating the text on changes.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-onlabelchanged" /><code>{"private void OnLabelChanged("}<Link to="/mod/game-api/types/global-i-l/labelledbuttonwrapper">{"LabelledButtonWrapper"}</Link>{" buttonWrapper)"}</code> | <span className="api-desc">Copies the new label to the text renderer.</span> |

</details>

## Used in

Members of other types that take, return or hold a `LabelledButtonWrapper`:

<div className="api-used-in">

[`GymnasiumOnDemandPrefabSpawner.buttonPrefab`](/mod/game-api/types/game-other-namespaces/gymnasiumondemandprefabspawner#m-buttonprefab), [`GymnasiumOnDemandPrefabSpawner.CreateButton`](/mod/game-api/types/game-other-namespaces/gymnasiumondemandprefabspawner#m-createbutton), [`GymnasiumOnDemandPrefabSpawner.SetupButton`](/mod/game-api/types/game-other-namespaces/gymnasiumondemandprefabspawner#m-setupbutton), [`GymnasiumXpStatusDisplay.backButton`](/mod/game-api/types/game-other-namespaces/gymnasiumxpstatusdisplay#m-backbutton), [`GymnasiumXpStatusDisplay.forwardButton`](/mod/game-api/types/game-other-namespaces/gymnasiumxpstatusdisplay#m-forwardbutton), [`GymnasiumXpStatusDisplay.increaseXpButton`](/mod/game-api/types/game-other-namespaces/gymnasiumxpstatusdisplay#m-increasexpbutton), [`GymnasiumXpStatusDisplay.maxOutXpButton`](/mod/game-api/types/game-other-namespaces/gymnasiumxpstatusdisplay#m-maxoutxpbutton), [`GymnasiumXpStatusDisplay.resetXpButton`](/mod/game-api/types/game-other-namespaces/gymnasiumxpstatusdisplay#m-resetxpbutton).

</div>
