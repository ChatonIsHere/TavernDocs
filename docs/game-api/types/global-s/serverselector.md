---
title: "ServerSelector"
description: "class ServerSelector in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ServerSelector

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: S](/game-api/types/global-s)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ServerSelector()"}</code> |

## Fields

<details>
<summary>8 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-gaugeanimation" /><code>{"private Coroutine gaugeAnimation"}</code> |
| <Link id="m-gaugefadeawayduration" /><code>{"private float gaugeFadeAwayDuration"}</code> |
| <Link id="m-gaugefillduration" /><code>{"private float gaugeFillDuration"}</code> |
| <Link id="m-gaugeprogress" /><code>{"private "}<Link to="/game-api/types/global-e-h/gaugeprogressbar">{"GaugeProgressBar"}</Link>{" gaugeProgress"}</code> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |
| <Link id="m-menuboards" /><code>{"private "}<Link to="/game-api/types/global-s/serverselectionmenu">{"ServerSelectionMenu"}</Link>{" menuBoards"}</code> |
| <Link id="m-oldelementdeselected" /><code>{"private "}<Link to="/game-api/types/global-s/serverelementevent">{"ServerElementEvent"}</Link>{" oldElementDeselected"}</code> |
| <Link id="m-selectionfinished" /><code>{"private "}<Link to="/game-api/types/global-s/serverelementevent">{"ServerElementEvent"}</Link>{" selectionFinished"}</code> |

</details>

## Methods

<details>
<summary>9 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-animategaugealpha" /><code>{"private IEnumerator AnimateGaugeAlpha(float startAlpha, float targetAlpha) (iterator)"}</code> |
| <Link id="m-animategaugeprogress" /><code>{"private IEnumerator AnimateGaugeProgress("}<Link to="/game-api/types/global-s/serverelement">{"ServerElement"}</Link>{" selectedServer) (iterator)"}</code> |
| <Link id="m-deselect" /><code>{"private void Deselect()"}</code> |
| <Link id="m-newserverelementselected" /><code>{"private void NewServerElementSelected("}<Link to="/game-api/types/global-s/serverelement">{"ServerElement"}</Link>{" oldElement, "}<Link to="/game-api/types/global-s/serverelement">{"ServerElement"}</Link>{" newElement)"}</code> |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> |
| <Link id="m-onselectionfinished" /><code>{"private void OnSelectionFinished("}<Link to="/game-api/types/global-s/serverelement">{"ServerElement"}</Link>{" selectedServer)"}</code> |
| <Link id="m-onserverdeselected" /><code>{"private void OnServerDeselected("}<Link to="/game-api/types/global-s/serverelement">{"ServerElement"}</Link>{" oldElement)"}</code> |
| <Link id="m-onserverdisplaysettled" /><code>{"private void OnServerDisplaySettled("}<Link to="/game-api/types/global-s/serverelement">{"ServerElement"}</Link>{" selectedServer)"}</code> |
| <Link id="m-start" /><code>{"private void Start()"}</code> |

</details>
