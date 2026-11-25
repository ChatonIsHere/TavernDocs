---
title: "ServerSelectionMenu"
description: "The main menu server picker: switches between server boards (my servers, open servers and so on), scrolls them by rope or wheel, and joins the selected server."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ServerSelectionMenu

A **class** in `Root.Township`, no namespace.

The main menu server picker: switches between server boards (my servers, open servers and so on), scrolls them by rope or wheel, and joins the selected server. Sets up once logged in.

- **Listed in** [No namespace: S](/game-api/types/global-s)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ServerSelectionMenu()"}</code> |

## Fields

<details>
<summary>15 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-boardlevers" /><code>{"private "}<Link to="/game-api/types/global-s/selectionlever">{"SelectionLever"}</Link>{"[] boardLevers"}</code> |
| <Link id="m-boards" /><code>{"private "}<Link to="/game-api/types/global-s/serverboard">{"ServerBoard"}</Link>{"[] boards"}</code> |
| <Link id="m-boardsbytype" /><code>{"private Dictionary<"}<Link to="/game-api/types/global-s/serverboardtype">{"ServerBoardType"}</Link>{", "}<Link to="/game-api/types/global-s/serverboard">{"ServerBoard"}</Link>{"> boardsByType"}</code> |
| <Link id="m-currentboard" /><code>{"private "}<Link to="/game-api/types/global-s/serverboard">{"ServerBoard"}</Link>{" currentBoard"}</code> |
| <Link id="m-elementselected" /><code>{"private "}<Link to="/game-api/types/global-s/serverelementevent">{"ServerElementEvent"}</Link>{" elementSelected"}</code> |
| <Link id="m-headingtext" /><code>{"private "}<Link to="/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" headingText"}</code> |
| <Link id="m-ropegrabs" /><code>{"private "}<Link to="/game-api/types/global-q-r/ropegrab">{"RopeGrab"}</Link>{"[] ropeGrabs"}</code> |
| <Link id="m-ropespeedmultiplier" /><code>{"private float ropeSpeedMultiplier"}</code> |
| <Link id="m-serverelementprefab" /><code>{"private "}<Link to="/game-api/types/global-s/serverelement">{"ServerElement"}</Link>{" serverElementPrefab"}</code> |
| <Link id="m-serverinfoboard" /><code>{"private "}<Link to="/game-api/types/global-s/serverinfoboard">{"ServerInfoBoard"}</Link>{" serverInfoBoard"}</code> |
| <Link id="m-startingboard" /><code>{"private "}<Link to="/game-api/types/global-s/serverboardtype">{"ServerBoardType"}</Link>{" startingBoard"}</code> |
| <Link id="m-updatecountdowntext" /><code>{"private "}<Link to="/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" updateCountdownText"}</code> |
| <Link id="m-waitingforlogintext" /><code>{"private "}<Link to="/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" waitingForLoginText"}</code> |
| <Link id="m-wheel" /><code>{"private "}<Link to="/game-api/types/global-c-d/captainswheel">{"CaptainsWheel"}</Link>{" wheel"}</code> |
| <Link id="m-wheelspeedmultiplier" /><code>{"private float wheelSpeedMultiplier"}</code> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-currentboard-2" /><code><Link to="/game-api/types/global-s/serverboard">{"ServerBoard"}</Link>{" CurrentBoard { get; }"}</code> | The board being shown. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-selectedchanged" /><code>{"event "}<Link to="/game-api/types/global-s/selectedelementchanged">{"SelectedElementChanged"}</Link>{" SelectedChanged"}</code> | Raised when the selected server element changes. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-disableupdate" /><code>{"void DisableUpdate()"}</code> | Pauses the current board's updates. |
| <Link id="m-joincurrentserver" /><code>{"void JoinCurrentServer("}<Link to="/game-api/types/global-s/serverelement">{"ServerElement"}</Link>{" serverElement)"}</code> | Joins the given element's server through the VR main menu. |
| <Link id="m-refreshserverslist" /><code>{"Task RefreshServersList()"}</code> | Refreshes the current board's server list. |
| <Link id="m-resumeupdate" /><code>{"void ResumeUpdate()"}</code> | Resumes the current board's updates. |
| <Link id="m-selectserver" /><code>{"void SelectServer("}<Link to="/game-api/types/assembly-api-models/gameserverinfo">{"GameServerInfo"}</Link>{" server, "}<Link to="/game-api/types/global-s/serverboardtype">{"ServerBoardType"}</Link>{" board)"}</code> | Switches to a board and selects a server on it. |
| <Link id="m-switchtoboard" /><code>{"void SwitchToBoard(int boardType)"}</code> | Shows another board and updates the heading, lever and info board. |
| <Link id="m-switchtoboard-2" /><code>{"void SwitchToBoard("}<Link to="/game-api/types/global-s/serverboardtype">{"ServerBoardType"}</Link>{" board)"}</code> | Shows another board and updates the heading, lever and info board. |

<details>
<summary>8 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-checkforempty" /><code>{"private void CheckForEmpty()"}</code> |
| <Link id="m-clear" /><code>{"private void Clear()"}</code> |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> |
| <Link id="m-onselectedchanged" /><code>{"private void OnSelectedChanged("}<Link to="/game-api/types/global-s/serverelement">{"ServerElement"}</Link>{" oldElement, "}<Link to="/game-api/types/global-s/serverelement">{"ServerElement"}</Link>{" newElement)"}</code> |
| <Link id="m-scrollserverlist" /><code>{"private void ScrollServerList(float oldRopeValue, float ropeValue)"}</code> |
| <Link id="m-scrollserverlistfromwheel" /><code>{"private void ScrollServerListFromWheel(float oldRopeValue, float ropeValue)"}</code> |
| <Link id="m-setup" /><code>{"private void Setup()"}</code> |
| <Link id="m-start" /><code>{"private void Start()"}</code> |

</details>

## Used in

Members of other types that take, return or hold a `ServerSelectionMenu`:

[`ServerCreator.menu`](/game-api/types/global-s/servercreator#m-menu), [`ServerSelector.menuBoards`](/game-api/types/global-s/serverselector#m-menuboards), [`VrMainMenu.serverSelection`](/game-api/types/global-t-x/vrmainmenu#m-serverselection).
