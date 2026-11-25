---
title: "ScrollerEnumMenuSetting"
description: "class ScrollerEnumMenuSetting in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ScrollerEnumMenuSetting

A **class** in `Root.Township`, `Alta.Menu`.

- **Listed in** [Menus, UI and platforms](/game-api/types/alta-menus)
- **Inherits or implements** [`EnumMenuSettingBase`](/game-api/types/alta-menus/enummenusettingbase)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ScrollerEnumMenuSetting()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-angleperside" /><code>{"private float anglePerSide"}</code> |  |
| <Link id="m-currentangle" /><code>{"private float currentAngle"}</code> |  |
| <Link id="m-currentlyselectedpanel" /><code>{"private int currentlySelectedPanel"}</code> |  |
| <Link id="m-debugleverangle" /><code>{"private float debugLeverAngle"}</code> |  |
| <Link id="m-isusingdebugleverangle" /><code>{"private bool isUsingDebugLeverAngle"}</code> |  |
| <Link id="m-jumptoselected" /><code>{"private bool jumpToSelected"}</code> |  |
| <Link id="m-lever" /><code>{"private "}<Link to="/game-api/types/global-s/selectionlever">{"SelectionLever"}</Link>{" lever"}</code> |  |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |  |
| <Link id="m-middleangle" /><code>{"private float middleAngle"}</code> |  |
| <Link id="m-negativerange" /><code>{"private float negativeRange"}</code> |  |
| <Link id="m-numberofsides" /><code>{"private int numberOfSides"}</code> |  |
| <Link id="m-positiverange" /><code>{"private float positiveRange"}</code> |  |
| <Link id="m-scroller" /><code>{"private Transform scroller"}</code> |  |
| <Link id="m-speedcurve" /><code>{"private AnimationCurve speedCurve"}</code> |  |
| <Link id="m-speedmultiplier" /><code>{"private float speedMultiplier"}</code> |  |
| <Link id="m-textsides" /><code>{"private List<"}<Link to="/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{"> textSides"}</code> |  |
| <Link id="m-update" /><code>{"private "}<Link to="/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" update"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |  |
| <Link id="m-finishedrefresh" /><code>{"protected override void FinishedRefresh()"}</code> |  |
| <Link id="m-jumptoselected-2" /><code>{"private void JumpToSelected()"}</code> |  |
| <Link id="m-onvalidate" /><code>{"protected override void OnValidate()"}</code> |  |
| <Link id="m-setscrollerrotation" /><code>{"private void SetScrollerRotation(float angle)"}</code> |  |
| <Link id="m-setup" /><code>{"protected override void Setup()"}</code> |  |
| <Link id="m-startupdatingscroller" /><code>{"private void StartUpdatingScroller("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" arg1, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" arg2)"}</code> |  |
| <Link id="m-stopupdatingscroller" /><code>{"private void StopUpdatingScroller("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" arg1, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" arg2)"}</code> |  |
| <Link id="m-updatescroller" /><code>{"private void UpdateScroller()"}</code> |  |
| <Link id="m-updatescroller-2" /><code>{"private void UpdateScroller(int direction)"}</code> |  |
| <Link id="m-updatetext" /><code>{"protected override void UpdateText()"}</code> |  |
| <Link id="m-updatetextsides" /><code>{"private void UpdateTextSides()"}</code> |  |
| <Link id="m-wrapindex" /><code>{"private int WrapIndex(int number, int length)"}</code> |  |
