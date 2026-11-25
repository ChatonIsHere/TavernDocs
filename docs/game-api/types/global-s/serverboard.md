---
title: "ServerBoard"
description: "class ServerBoard in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ServerBoard

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: S](/game-api/types/global-s)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ServerBoard()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-createserverboards" /><code>{"private Coroutine createServerBoards"}</code> |  |
| <Link id="m-display" /><code>{"private "}<Link to="/game-api/types/global-s/serverselectiondisplay">{"ServerSelectionDisplay"}</Link>{" display"}</code> |  |
| <Link id="m-elementparent" /><code>{"private Transform elementParent"}</code> |  |
| <Link id="m-filter" /><code>{"private "}<Link to="/game-api/types/game-other-namespaces/serverboardfilter">{"ServerBoardFilter"}</Link>{" filter"}</code> |  |
| <Link id="m-hasfilterchanged" /><code>{"private bool hasFilterChanged"}</code> |  |
| <Link id="m-headingtext" /><code>{"private string headingText"}</code> |  |
| <Link id="m-interval" /><code>{"private int interval"}</code> |  |
| <Link id="m-isfirstserverload" /><code>{"private bool isFirstServerLoad"}</code> |  |
| <Link id="m-joiningservertext" /><code>{"private "}<Link to="/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" joiningServerText"}</code> |  |
| <Link id="m-lastfilteredservers" /><code>{"private IEnumerable<"}<Link to="/game-api/types/assembly-api-models/gameserverinfo">{"GameServerInfo"}</Link>{"> lastFilteredServers"}</code> |  |
| <Link id="m-lastreceivedservers" /><code>{"private IEnumerable<"}<Link to="/game-api/types/assembly-api-models/gameserverinfo">{"GameServerInfo"}</Link>{"> lastReceivedServers"}</code> |  |
| <Link id="m-loadservers" /><code>{"private Coroutine loadServers"}</code> |  |
| <Link id="m-serverdisplays" /><code>{"private List<"}<Link to="/game-api/types/global-s/serverelement">{"ServerElement"}</Link>{"> serverDisplays"}</code> |  |
| <Link id="m-serverelementprefab" /><code>{"private "}<Link to="/game-api/types/global-s/serverelement">{"ServerElement"}</Link>{" serverElementPrefab"}</code> |  |
| <Link id="m-serverelements" /><code>{"private Dictionary<int, "}<Link to="/game-api/types/global-s/serverelement">{"ServerElement"}</Link>{"> serverElements"}</code> |  |
| <Link id="m-type" /><code>{"private "}<Link to="/game-api/types/global-s/serverboardtype">{"ServerBoardType"}</Link>{" type"}</code> |  |
| <Link id="m-updatecountdowntext" /><code>{"private "}<Link to="/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" updateCountdownText"}</code> |  |
| <Link id="m-updateinterval" /><code>{"private int updateInterval"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-display-2" /><code><Link to="/game-api/types/global-s/serverselectiondisplay">{"ServerSelectionDisplay"}</Link>{" Display { get; }"}</code> |  |
| <Link id="m-headingtext-2" /><code>{"string HeadingText { get; }"}</code> |  |
| <Link id="m-isemptyoronlytutorial" /><code>{"bool IsEmptyOrOnlyTutorial { get; }"}</code> |  |
| <Link id="m-type-2" /><code><Link to="/game-api/types/global-s/serverboardtype">{"ServerBoardType"}</Link>{" Type { get; }"}</code> |  |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-onrefreshfinished" /><code>{"event Action OnRefreshFinished"}</code> |  |
| <Link id="m-selectedchanged" /><code>{"event "}<Link to="/game-api/types/global-s/selectedelementchanged">{"SelectedElementChanged"}</Link>{" SelectedChanged"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-disableupdate" /><code>{"void DisableUpdate()"}</code> |  |
| <Link id="m-refreshserverslist" /><code>{"async Task RefreshServersList()"}</code> |  |
| <Link id="m-resumeupdate" /><code>{"void ResumeUpdate()"}</code> |  |
| <Link id="m-selectserver" /><code>{"void SelectServer("}<Link to="/game-api/types/assembly-api-models/gameserverinfo">{"GameServerInfo"}</Link>{" server)"}</code> |  |
| <Link id="m-setactive" /><code>{"void SetActive(bool isActive)"}</code> |  |
| <Link id="m-updatevalue" /><code>{"void UpdateValue(float value)"}</code> |  |
| <Link id="m-filterservers" /><code>{"private void FilterServers()"}</code> |  |
| <Link id="m-loadservers-2" /><code>{"private IEnumerator LoadServers() (iterator)"}</code> |  |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> |  |
| <Link id="m-onfilterchanged" /><code>{"private void OnFilterChanged()"}</code> |  |
| <Link id="m-onselectedchanged" /><code>{"private void OnSelectedChanged("}<Link to="/game-api/types/global-s/serverelement">{"ServerElement"}</Link>{" oldElement, "}<Link to="/game-api/types/global-s/serverelement">{"ServerElement"}</Link>{" newElement)"}</code> |  |
| <Link id="m-sortandupdateserverslist" /><code>{"private void SortAndUpdateServersList()"}</code> |  |
| <Link id="m-startupdatingservers" /><code>{"private void StartUpdatingServers()"}</code> |  |
| <Link id="m-stopupdatingserver" /><code>{"private void StopUpdatingServer()"}</code> |  |
| <Link id="m-updateserverslist" /><code>{"private IEnumerator UpdateServersList() (iterator)"}</code> |  |

## Used in

Members of other types that take, return or hold a `ServerBoard`:

[`ServerSelectionMenu.boards`](/game-api/types/global-s/serverselectionmenu#m-boards), [`ServerSelectionMenu.boardsByType`](/game-api/types/global-s/serverselectionmenu#m-boardsbytype), [`ServerSelectionMenu.currentBoard`](/game-api/types/global-s/serverselectionmenu#m-currentboard), [`ServerSelectionMenu.CurrentBoard`](/game-api/types/global-s/serverselectionmenu#m-currentboard-2).
