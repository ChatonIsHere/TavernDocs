---
title: "LabelledButtonWrapper"
description: "A physical button with a text label that updates when the label changes."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LabelledButtonWrapper

A **class** in `Root.Township`, no namespace.

A physical button with a text label that updates when the label changes.

- **Listed in** [No namespace: I to L](/game-api/types/global-i-l)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"LabelledButtonWrapper()"}</code> |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-button" /><code>{"private "}<Link to="/game-api/types/global-p/physicalbutton">{"PhysicalButton"}</Link>{" button"}</code> | Backing field for `Button`, the wrapped physical button. |
| <Link id="m-label" /><code>{"private string label"}</code> | Backing field for `Label`. |
| <Link id="m-textrenderer" /><code>{"private "}<Link to="/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" textRenderer"}</code> | The text that shows the label. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-button-2" /><code><Link to="/game-api/types/global-p/physicalbutton">{"PhysicalButton"}</Link>{" Button { get; }"}</code> | The wrapped physical button. |
| <Link id="m-label-2" /><code>{"string Label { get; set; }"}</code> | The button text. Setting a new value updates the text and raises `LabelChanged`. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-labelchanged" /><code>{"event Action<"}<Link to="/game-api/types/global-i-l/labelledbuttonwrapper">{"LabelledButtonWrapper"}</Link>{"> LabelChanged"}</code> | Raised when the label changes. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"protected void Awake()"}</code> | Shows the serialized label and starts updating the text on changes. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-onlabelchanged" /><code>{"private void OnLabelChanged("}<Link to="/game-api/types/global-i-l/labelledbuttonwrapper">{"LabelledButtonWrapper"}</Link>{" buttonWrapper)"}</code> | Copies the new label to the text renderer. |

</details>

## Used in

Members of other types that take, return or hold a `LabelledButtonWrapper`:

[`GymnasiumOnDemandPrefabSpawner.buttonPrefab`](/game-api/types/game-other-namespaces/gymnasiumondemandprefabspawner#m-buttonprefab), [`GymnasiumOnDemandPrefabSpawner.CreateButton`](/game-api/types/game-other-namespaces/gymnasiumondemandprefabspawner#m-createbutton), [`GymnasiumOnDemandPrefabSpawner.SetupButton`](/game-api/types/game-other-namespaces/gymnasiumondemandprefabspawner#m-setupbutton), [`GymnasiumXpStatusDisplay.backButton`](/game-api/types/game-other-namespaces/gymnasiumxpstatusdisplay#m-backbutton), [`GymnasiumXpStatusDisplay.forwardButton`](/game-api/types/game-other-namespaces/gymnasiumxpstatusdisplay#m-forwardbutton), [`GymnasiumXpStatusDisplay.increaseXpButton`](/game-api/types/game-other-namespaces/gymnasiumxpstatusdisplay#m-increasexpbutton), [`GymnasiumXpStatusDisplay.maxOutXpButton`](/game-api/types/game-other-namespaces/gymnasiumxpstatusdisplay#m-maxoutxpbutton), [`GymnasiumXpStatusDisplay.resetXpButton`](/game-api/types/game-other-namespaces/gymnasiumxpstatusdisplay#m-resetxpbutton).
