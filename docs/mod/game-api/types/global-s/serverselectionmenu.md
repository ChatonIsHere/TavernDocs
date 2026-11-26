---
title: "ServerSelectionMenu"
description: "The main menu server picker: switches between server boards (my servers, open servers and so on), scrolls them by rope or wheel, and joins the selected server."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ServerSelectionMenu

A **class** in `Root.Township`, the global namespace.

The main menu server picker: switches between server boards (my servers, open servers and so on), scrolls them by rope or wheel, and joins the selected server. Sets up once logged in.

- **Listed in** [Global namespace: S](/mod/game-api/types/global-s)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ServerSelectionMenu()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>15 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-boardlevers" /><code>{"private "}<Link to="/mod/game-api/types/global-s/selectionlever">{"SelectionLever"}</Link>{"[] boardLevers"}</code> | <span className="api-desc">One lever per board type, set when that board opens.</span> |
| <Link id="m-boards" /><code>{"private "}<Link to="/mod/game-api/types/global-s/serverboard">{"ServerBoard"}</Link>{"[] boards"}</code> | <span className="api-desc">All server boards.</span> |
| <Link id="m-boardsbytype" /><code>{"private Dictionary<"}<Link to="/mod/game-api/types/global-s/serverboardtype">{"ServerBoardType"}</Link>{", "}<Link to="/mod/game-api/types/global-s/serverboard">{"ServerBoard"}</Link>{"> boardsByType"}</code> | <span className="api-desc">Boards keyed by type.</span> |
| <Link id="m-currentboard" /><code>{"private "}<Link to="/mod/game-api/types/global-s/serverboard">{"ServerBoard"}</Link>{" currentBoard"}</code> | <span className="api-desc">Backing field for `CurrentBoard`.</span> |
| <Link id="m-elementselected" /><code>{"private "}<Link to="/mod/game-api/types/global-s/serverelementevent">{"ServerElementEvent"}</Link>{" elementSelected"}</code> | <span className="api-desc">Inspector event raised with the newly selected server.</span> |
| <Link id="m-headingtext" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" headingText"}</code> | <span className="api-desc">Heading that shows the current board's title.</span> |
| <Link id="m-ropegrabs" /><code>{"private "}<Link to="/mod/game-api/types/global-q-r/ropegrab">{"RopeGrab"}</Link>{"[] ropeGrabs"}</code> | <span className="api-desc">Ropes the player pulls to scroll the list.</span> |
| <Link id="m-ropespeedmultiplier" /><code>{"private float ropeSpeedMultiplier"}</code> | <span className="api-desc">Scroll speed for the ropes.</span> |
| <Link id="m-serverelementprefab" /><code>{"private "}<Link to="/mod/game-api/types/global-s/serverelement">{"ServerElement"}</Link>{" serverElementPrefab"}</code> | <span className="api-desc">Server entry prefab. Not used by this class's code.</span> |
| <Link id="m-serverinfoboard" /><code>{"private "}<Link to="/mod/game-api/types/global-s/serverinfoboard">{"ServerInfoBoard"}</Link>{" serverInfoBoard"}</code> | <span className="api-desc">Board that shows details of the selected server.</span> |
| <Link id="m-startingboard" /><code>{"private "}<Link to="/mod/game-api/types/global-s/serverboardtype">{"ServerBoardType"}</Link>{" startingBoard"}</code> | <span className="api-desc">Board shown after log in, My Servers by default.</span> |
| <Link id="m-updatecountdowntext" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" updateCountdownText"}</code> | <span className="api-desc">Countdown text. Not used by this class's code.</span> |
| <Link id="m-waitingforlogintext" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" waitingForLoginText"}</code> | <span className="api-desc">Text shown while not logged in.</span> |
| <Link id="m-wheel" /><code>{"private "}<Link to="/mod/game-api/types/global-c-d/captainswheel">{"CaptainsWheel"}</Link>{" wheel"}</code> | <span className="api-desc">Captain's wheel that scrolls the list.</span> |
| <Link id="m-wheelspeedmultiplier" /><code>{"private float wheelSpeedMultiplier"}</code> | <span className="api-desc">Scroll speed for the wheel.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-currentboard-2" /><code><Link to="/mod/game-api/types/global-s/serverboard">{"ServerBoard"}</Link>{" CurrentBoard { get; }"}</code> | <span className="api-desc">The board being shown.</span> |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-selectedchanged" /><code>{"event "}<Link to="/mod/game-api/types/global-s/selectedelementchanged">{"SelectedElementChanged"}</Link>{" SelectedChanged"}</code> | <span className="api-desc">Raised when the selected server element changes.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-disableupdate" /><code>{"void DisableUpdate()"}</code> | <span className="api-desc">Pauses the current board's updates.</span> |
| <Link id="m-joincurrentserver" /><code>{"void JoinCurrentServer("}<Link to="/mod/game-api/types/global-s/serverelement">{"ServerElement"}</Link>{" serverElement)"}</code> | <span className="api-desc">Joins the given element's server through the VR main menu.</span> |
| <Link id="m-refreshserverslist" /><code>{"Task RefreshServersList()"}</code> | <span className="api-desc">Refreshes the current board's server list.</span> |
| <Link id="m-resumeupdate" /><code>{"void ResumeUpdate()"}</code> | <span className="api-desc">Resumes the current board's updates.</span> |
| <Link id="m-selectserver" /><code>{"void SelectServer("}<Link to="/mod/game-api/types/assembly-api-models/gameserverinfo">{"GameServerInfo"}</Link>{" server, "}<Link to="/mod/game-api/types/global-s/serverboardtype">{"ServerBoardType"}</Link>{" board)"}</code> | <span className="api-desc">Switches to a board and selects a server on it.</span> |
| <Link id="m-switchtoboard" /><code>{"void SwitchToBoard(int boardType)"}</code> | <span className="api-desc">Shows another board and updates the heading, lever and info board.</span> |
| <Link id="m-switchtoboard-2" /><code>{"void SwitchToBoard("}<Link to="/mod/game-api/types/global-s/serverboardtype">{"ServerBoardType"}</Link>{" board)"}</code> | <span className="api-desc">Shows another board and updates the heading, lever and info board.</span> |

<details className="api-private">
<summary>8 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-checkforempty" /><code>{"private void CheckForEmpty()"}</code> | <span className="api-desc">If My Servers is empty or only has the tutorial after refreshing, switches to Open Servers.</span> |
| <Link id="m-clear" /><code>{"private void Clear()"}</code> | <span className="api-desc">On log out, shows the waiting text and turns off the current board.</span> |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | <span className="api-desc">Unhooks the login events.</span> |
| <Link id="m-onselectedchanged" /><code>{"private void OnSelectedChanged("}<Link to="/mod/game-api/types/global-s/serverelement">{"ServerElement"}</Link>{" oldElement, "}<Link to="/mod/game-api/types/global-s/serverelement">{"ServerElement"}</Link>{" newElement)"}</code> | <span className="api-desc">Raises `SelectedChanged` and `elementSelected` and shows the server on the info board.</span> |
| <Link id="m-scrollserverlist" /><code>{"private void ScrollServerList(float oldRopeValue, float ropeValue)"}</code> | <span className="api-desc">Scrolls the current board by a rope's change times `ropeSpeedMultiplier`.</span> |
| <Link id="m-scrollserverlistfromwheel" /><code>{"private void ScrollServerListFromWheel(float oldRopeValue, float ropeValue)"}</code> | <span className="api-desc">Scrolls the current board by the wheel's change times `wheelSpeedMultiplier`.</span> |
| <Link id="m-setup" /><code>{"private void Setup()"}</code> | <span className="api-desc">On log in, hides the waiting text, opens the starting board and hooks the ropes and wheel.</span> |
| <Link id="m-start" /><code>{"private void Start()"}</code> | <span className="api-desc">Indexes boards by type and hooks login events, setting up now if already logged in.</span> |

</details>

## Used in

Members of other types that take, return or hold a `ServerSelectionMenu`:

<div className="api-used-in">

[`ServerCreator.menu`](/mod/game-api/types/global-s/servercreator#m-menu), [`ServerSelector.menuBoards`](/mod/game-api/types/global-s/serverselector#m-menuboards), [`VrMainMenu.serverSelection`](/mod/game-api/types/global-t-x/vrmainmenu#m-serverselection).

</div>
