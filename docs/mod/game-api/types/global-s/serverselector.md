---
title: "ServerSelector"
description: "Main-menu server list helper: when a server is selected it fills a gauge, then fires the selection finished event; deselecting fades the gauge out."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ServerSelector

A **class** in `Root.Township`, the global namespace.

Main-menu server list helper: when a server is selected it fills a gauge, then fires the selection finished event; deselecting fades the gauge out.

- **Listed in** [Global namespace: S](/mod/game-api/types/global-s)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ServerSelector()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>8 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-gaugeanimation" /><code>{"private Coroutine gaugeAnimation"}</code> | <span className="api-desc">The running gauge coroutine.</span> |
| <Link id="m-gaugefadeawayduration" /><code>{"private float gaugeFadeAwayDuration"}</code> | <span className="api-desc">Seconds to fade the gauge out. Default 1.5.</span> |
| <Link id="m-gaugefillduration" /><code>{"private float gaugeFillDuration"}</code> | <span className="api-desc">Seconds to fill the gauge. Default 0.8.</span> |
| <Link id="m-gaugeprogress" /><code>{"private "}<Link to="/mod/game-api/types/global-e-h/gaugeprogressbar">{"GaugeProgressBar"}</Link>{" gaugeProgress"}</code> | <span className="api-desc">The gauge progress bar.</span> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |
| <Link id="m-menuboards" /><code>{"private "}<Link to="/mod/game-api/types/global-s/serverselectionmenu">{"ServerSelectionMenu"}</Link>{" menuBoards"}</code> | <span className="api-desc">The server selection menu whose selection it watches.</span> |
| <Link id="m-oldelementdeselected" /><code>{"private "}<Link to="/mod/game-api/types/global-s/serverelementevent">{"ServerElementEvent"}</Link>{" oldElementDeselected"}</code> | <span className="api-desc">Event fired with the server that was deselected (or null).</span> |
| <Link id="m-selectionfinished" /><code>{"private "}<Link to="/mod/game-api/types/global-s/serverelementevent">{"ServerElementEvent"}</Link>{" selectionFinished"}</code> | <span className="api-desc">Event fired with the server once the gauge is full (or null).</span> |

</details>

## Methods

<details className="api-private">
<summary>9 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-animategaugealpha" /><code>{"private IEnumerator AnimateGaugeAlpha(float startAlpha, float targetAlpha) (iterator)"}</code> | <span className="api-desc">Coroutine that fades the gauge alpha over `gaugeFadeAwayDuration`.</span> |
| <Link id="m-animategaugeprogress" /><code>{"private IEnumerator AnimateGaugeProgress("}<Link to="/mod/game-api/types/global-s/serverelement">{"ServerElement"}</Link>{" selectedServer) (iterator)"}</code> | <span className="api-desc">Coroutine that fills the gauge over `gaugeFillDuration`, then finishes the selection.</span> |
| <Link id="m-deselect" /><code>{"private void Deselect()"}</code> | <span className="api-desc">Deselects with no old element. Called on logout.</span> |
| <Link id="m-newserverelementselected" /><code>{"private void NewServerElementSelected("}<Link to="/mod/game-api/types/global-s/serverelement">{"ServerElement"}</Link>{" oldElement, "}<Link to="/mod/game-api/types/global-s/serverelement">{"ServerElement"}</Link>{" newElement)"}</code> | <span className="api-desc">Handles a selection change: deselects the old one, then starts the gauge or finishes with null.</span> |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | <span className="api-desc">Unhooks from logout.</span> |
| <Link id="m-onselectionfinished" /><code>{"private void OnSelectionFinished("}<Link to="/mod/game-api/types/global-s/serverelement">{"ServerElement"}</Link>{" selectedServer)"}</code> | <span className="api-desc">Fires `selectionFinished` with the server.</span> |
| <Link id="m-onserverdeselected" /><code>{"private void OnServerDeselected("}<Link to="/mod/game-api/types/global-s/serverelement">{"ServerElement"}</Link>{" oldElement)"}</code> | <span className="api-desc">Fades the gauge out if there was an old element, and fires `oldElementDeselected`.</span> |
| <Link id="m-onserverdisplaysettled" /><code>{"private void OnServerDisplaySettled("}<Link to="/mod/game-api/types/global-s/serverelement">{"ServerElement"}</Link>{" selectedServer)"}</code> | <span className="api-desc">Restarts the gauge fill for the newly selected server.</span> |
| <Link id="m-start" /><code>{"private void Start()"}</code> | <span className="api-desc">Hooks logout and the menu's selection change.</span> |

</details>
