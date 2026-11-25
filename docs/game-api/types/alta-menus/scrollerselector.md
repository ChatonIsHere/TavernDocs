---
title: "ScrollerSelector"
description: "class ScrollerSelector in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ScrollerSelector

A **class** in `Root.Township`, `Alta.Menu`.

- **Listed in** [Menus, UI and platforms](/game-api/types/alta-menus)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ScrollerSelector()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-androiddefaulttextsides" /><code>{"private Renderer androidDefaultTextSides"}</code> |  |
| <Link id="m-angleperside" /><code>{"private float anglePerSide"}</code> |  |
| <Link id="m-currentangle" /><code>{"private float currentAngle"}</code> |  |
| <Link id="m-currentindex" /><code>{"private int currentIndex"}</code> |  |
| <Link id="m-currentlyselectedpanel" /><code>{"private int currentlySelectedPanel"}</code> |  |
| <Link id="m-defaulttextsides" /><code>{"private Renderer defaultTextSides"}</code> |  |
| <Link id="m-islocalplayeronly" /><code>{"private bool isLocalPlayerOnly"}</code> |  |
| <Link id="m-jumptoselected" /><code>{"private bool jumpToSelected"}</code> |  |
| <Link id="m-lever" /><code>{"private "}<Link to="/game-api/types/global-s/selectionlever">{"SelectionLever"}</Link>{" lever"}</code> |  |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |  |
| <Link id="m-middleangle" /><code>{"private float middleAngle"}</code> |  |
| <Link id="m-negativerange" /><code>{"private float negativeRange"}</code> |  |
| <Link id="m-numberofsides" /><code>{"private int numberOfSides"}</code> |  |
| <Link id="m-positiverange" /><code>{"private float positiveRange"}</code> |  |
| <Link id="m-possiblevalues" /><code>{"private List<string> possibleValues"}</code> |  |
| <Link id="m-scroller" /><code>{"private Transform scroller"}</code> |  |
| <Link id="m-speedcurve" /><code>{"private AnimationCurve speedCurve"}</code> |  |
| <Link id="m-speedmultiplier" /><code>{"private float speedMultiplier"}</code> |  |
| <Link id="m-textsides" /><code>{"private "}<Link to="/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{"[] textSides"}</code> |  |
| <Link id="m-update" /><code>{"private "}<Link to="/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" update"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-currentindex-2" /><code>{"int CurrentIndex { get; private set; }"}</code> |  |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-updatedvalue" /><code>{"event Action<int> UpdatedValue"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-gotonextvalue" /><code>{"void GoToNextValue()"}</code> |  |
| <Link id="m-gotopreviousvalue" /><code>{"void GoToPreviousValue()"}</code> |  |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |  |
| <Link id="m-finishedrefresh" /><code>{"private void FinishedRefresh()"}</code> |  |
| <Link id="m-jumptoselected-2" /><code>{"private void JumpToSelected()"}</code> |  |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> |  |
| <Link id="m-refresh" /><code>{"private void Refresh()"}</code> |  |
| <Link id="m-refreshvalues" /><code>{"private void RefreshValues(IEnumerable<string> values)"}</code> |  |
| <Link id="m-setscrollerrotation" /><code>{"private void SetScrollerRotation(float angle)"}</code> |  |
| <Link id="m-startupdatingscroller" /><code>{"private void StartUpdatingScroller("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> |  |
| <Link id="m-stopupdatingscroller" /><code>{"private void StopUpdatingScroller("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> |  |
| <Link id="m-updatescroller" /><code>{"private void UpdateScroller()"}</code> |  |
| <Link id="m-updatescroller-2" /><code>{"private void UpdateScroller(int direction)"}</code> |  |
| <Link id="m-updatetextsides" /><code>{"private void UpdateTextSides()"}</code> |  |
| <Link id="m-updatevalues" /><code>{"private void UpdateValues("}<Link to="/game-api/types/alta-menus/iprovideenumerable-t">{"IProvideEnumerable"}</Link>{"<string> valueProvider)"}</code> |  |
| <Link id="m-wrapenumindex" /><code>{"private int WrapEnumIndex(int index)"}</code> |  |
| <Link id="m-wrapindex" /><code>{"private int WrapIndex(int number, int length)"}</code> |  |

## Used in

Members of other types that take, return or hold a `ScrollerSelector`:

[`FriendSelector.scroller`](/game-api/types/global-e-h/friendselector#m-scroller).
