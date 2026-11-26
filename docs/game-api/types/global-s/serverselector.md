---
title: "ServerSelector"
description: "Main-menu server list helper: when a server is selected it fills a gauge, then fires the selection finished event; deselecting fades the gauge out."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ServerSelector

A **class** in `Root.Township`, no namespace.

Main-menu server list helper: when a server is selected it fills a gauge, then fires the selection finished event; deselecting fades the gauge out.

- **Listed in** [No namespace: S](/game-api/types/global-s)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ServerSelector()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>8 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-gaugeanimation" /><code>{"private Coroutine gaugeAnimation"}</code> | The running gauge coroutine. |
| <Link id="m-gaugefadeawayduration" /><code>{"private float gaugeFadeAwayDuration"}</code> | Seconds to fade the gauge out. Default 1.5. |
| <Link id="m-gaugefillduration" /><code>{"private float gaugeFillDuration"}</code> | Seconds to fill the gauge. Default 0.8. |
| <Link id="m-gaugeprogress" /><code>{"private "}<Link to="/game-api/types/global-e-h/gaugeprogressbar">{"GaugeProgressBar"}</Link>{" gaugeProgress"}</code> | The gauge progress bar. |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger for this class. |
| <Link id="m-menuboards" /><code>{"private "}<Link to="/game-api/types/global-s/serverselectionmenu">{"ServerSelectionMenu"}</Link>{" menuBoards"}</code> | The server selection menu whose selection it watches. |
| <Link id="m-oldelementdeselected" /><code>{"private "}<Link to="/game-api/types/global-s/serverelementevent">{"ServerElementEvent"}</Link>{" oldElementDeselected"}</code> | Event fired with the server that was deselected (or null). |
| <Link id="m-selectionfinished" /><code>{"private "}<Link to="/game-api/types/global-s/serverelementevent">{"ServerElementEvent"}</Link>{" selectionFinished"}</code> | Event fired with the server once the gauge is full (or null). |

</details>

## Methods

<details>
<summary>9 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-animategaugealpha" /><code>{"private IEnumerator AnimateGaugeAlpha(float startAlpha, float targetAlpha) (iterator)"}</code> | Coroutine that fades the gauge alpha over `gaugeFadeAwayDuration`. |
| <Link id="m-animategaugeprogress" /><code>{"private IEnumerator AnimateGaugeProgress("}<Link to="/game-api/types/global-s/serverelement">{"ServerElement"}</Link>{" selectedServer) (iterator)"}</code> | Coroutine that fills the gauge over `gaugeFillDuration`, then finishes the selection. |
| <Link id="m-deselect" /><code>{"private void Deselect()"}</code> | Deselects with no old element. Called on logout. |
| <Link id="m-newserverelementselected" /><code>{"private void NewServerElementSelected("}<Link to="/game-api/types/global-s/serverelement">{"ServerElement"}</Link>{" oldElement, "}<Link to="/game-api/types/global-s/serverelement">{"ServerElement"}</Link>{" newElement)"}</code> | Handles a selection change: deselects the old one, then starts the gauge or finishes with null. |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | Unhooks from logout. |
| <Link id="m-onselectionfinished" /><code>{"private void OnSelectionFinished("}<Link to="/game-api/types/global-s/serverelement">{"ServerElement"}</Link>{" selectedServer)"}</code> | Fires `selectionFinished` with the server. |
| <Link id="m-onserverdeselected" /><code>{"private void OnServerDeselected("}<Link to="/game-api/types/global-s/serverelement">{"ServerElement"}</Link>{" oldElement)"}</code> | Fades the gauge out if there was an old element, and fires `oldElementDeselected`. |
| <Link id="m-onserverdisplaysettled" /><code>{"private void OnServerDisplaySettled("}<Link to="/game-api/types/global-s/serverelement">{"ServerElement"}</Link>{" selectedServer)"}</code> | Restarts the gauge fill for the newly selected server. |
| <Link id="m-start" /><code>{"private void Start()"}</code> | Hooks logout and the menu's selection change. |

</details>
