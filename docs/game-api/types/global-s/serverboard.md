---
title: "ServerBoard"
description: "A server list board in the main menu (public, my servers, open or discover)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ServerBoard

A **class** in `Root.Township`, no namespace.

A server list board in the main menu (public, my servers, open or discover). Fetches its list from the Alta API every `updateInterval` seconds while logged in, filters and shows it. Client only.

- **Listed in** [No namespace: S](/game-api/types/global-s)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ServerBoard()"}</code> |

## Fields

<details>
<summary>18 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-createserverboards" /><code>{"private Coroutine createServerBoards"}</code> | The running `UpdateServersList` coroutine, if any. |
| <Link id="m-display" /><code>{"private "}<Link to="/game-api/types/global-s/serverselectiondisplay">{"ServerSelectionDisplay"}</Link>{" display"}</code> | The curved `ServerSelectionDisplay` that shows and selects this board's elements. |
| <Link id="m-elementparent" /><code>{"private Transform elementParent"}</code> | Transform that spawned server elements go under. Shown and hidden with the board. |
| <Link id="m-filter" /><code>{"private "}<Link to="/game-api/types/game-other-namespaces/serverboardfilter">{"ServerBoardFilter"}</Link>{" filter"}</code> | The `ServerBoardFilter` applied to the received servers. |
| <Link id="m-hasfilterchanged" /><code>{"private bool hasFilterChanged"}</code> | Set when the filter changes so the next rebuild selects the first server. |
| <Link id="m-headingtext" /><code>{"private string headingText"}</code> | Heading shown for this board, read through `HeadingText`. |
| <Link id="m-interval" /><code>{"private int interval"}</code> | Seconds left until the next refresh. Reset to `updateInterval` on each refresh. |
| <Link id="m-isfirstserverload" /><code>{"private bool isFirstServerLoad"}</code> | True until the first rebuild with servers, which selects the first server. |
| <Link id="m-joiningservertext" /><code>{"private "}<Link to="/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" joiningServerText"}</code> | Text shown by `DisableUpdate` while joining a server. |
| <Link id="m-lastfilteredservers" /><code>{"private IEnumerable<"}<Link to="/game-api/types/assembly-api-models/gameserverinfo">{"GameServerInfo"}</Link>{"> lastFilteredServers"}</code> | The received servers after filtering and validity checks, as last shown. |
| <Link id="m-lastreceivedservers" /><code>{"private IEnumerable<"}<Link to="/game-api/types/assembly-api-models/gameserverinfo">{"GameServerInfo"}</Link>{"> lastReceivedServers"}</code> | The last unfiltered server list from the API. |
| <Link id="m-loadservers" /><code>{"private Coroutine loadServers"}</code> | The running `LoadServers` coroutine, if any. |
| <Link id="m-serverdisplays" /><code>{"private List<"}<Link to="/game-api/types/global-s/serverelement">{"ServerElement"}</Link>{"> serverDisplays"}</code> | Spawned `ServerElement` objects in display order, reused across refreshes. |
| <Link id="m-serverelementprefab" /><code>{"private "}<Link to="/game-api/types/global-s/serverelement">{"ServerElement"}</Link>{" serverElementPrefab"}</code> | Prefab spawned for each server in the list. |
| <Link id="m-serverelements" /><code>{"private Dictionary<int, "}<Link to="/game-api/types/global-s/serverelement">{"ServerElement"}</Link>{"> serverElements"}</code> | Server elements keyed by server identifier, rebuilt on each refresh to restore the selection. |
| <Link id="m-type" /><code>{"private "}<Link to="/game-api/types/global-s/serverboardtype">{"ServerBoardType"}</Link>{" type"}</code> | Which API list this board shows: public, my (joined), open or discover servers. |
| <Link id="m-updatecountdowntext" /><code>{"private "}<Link to="/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" updateCountdownText"}</code> | Text that shows "Updating in Ns". |
| <Link id="m-updateinterval" /><code>{"private int updateInterval"}</code> | Seconds between list refreshes. Default 30. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-display-2" /><code><Link to="/game-api/types/global-s/serverselectiondisplay">{"ServerSelectionDisplay"}</Link>{" Display { get; }"}</code> | The selection display that holds the server elements. |
| <Link id="m-headingtext-2" /><code>{"string HeadingText { get; }"}</code> | Heading shown for this board. |
| <Link id="m-isemptyoronlytutorial" /><code>{"bool IsEmptyOrOnlyTutorial { get; }"}</code> | True if every server in the last list is on scene index 1 (the tutorial), or the list is empty. |
| <Link id="m-type-2" /><code><Link to="/game-api/types/global-s/serverboardtype">{"ServerBoardType"}</Link>{" Type { get; }"}</code> | Which API list this board shows. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-onrefreshfinished" /><code>{"event Action OnRefreshFinished"}</code> | Raised once after the next refresh, then cleared. Add a handler again for each refresh. |
| <Link id="m-selectedchanged" /><code>{"event "}<Link to="/game-api/types/global-s/selectedelementchanged">{"SelectedElementChanged"}</Link>{" SelectedChanged"}</code> | Raised when the selected server entry changes. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-disableupdate" /><code>{"void DisableUpdate()"}</code> | Stops refreshing and hides the server entries, showing the joining text instead. |
| <Link id="m-refreshserverslist" /><code>{"async Task RefreshServersList()"}</code> | Fetches this board type's servers from the API, then filters and rebuilds the list. |
| <Link id="m-resumeupdate" /><code>{"void ResumeUpdate()"}</code> | Hides the joining text, shows the entries again and restarts refreshing. |
| <Link id="m-selectserver" /><code>{"void SelectServer("}<Link to="/game-api/types/assembly-api-models/gameserverinfo">{"GameServerInfo"}</Link>{" server)"}</code> | Selects the entry for the given server. |
| <Link id="m-setactive" /><code>{"void SetActive(bool isActive)"}</code> | Shows or hides the board and starts or stops refreshing. |
| <Link id="m-updatevalue" /><code>{"void UpdateValue(float value)"}</code> | Adds to the display's scroll value. |

<details>
<summary>9 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-filterservers" /><code>{"private void FilterServers()"}</code> | Runs the last received server list through `filter` and then sorts and rebuilds the displayed list. |
| <Link id="m-loadservers-2" /><code>{"private IEnumerator LoadServers() (iterator)"}</code> | Coroutine started by `SetActive(true)`: refreshes the list, then counts down `updateInterval` seconds on `updateCountdownText`, repeating while logged in. |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> | Subscribes `OnFilterChanged` to the filter's change event. |
| <Link id="m-onfilterchanged" /><code>{"private void OnFilterChanged()"}</code> | Marks the filter as changed (so the first server gets selected again) and refilters the list. |
| <Link id="m-onselectedchanged" /><code>{"private void OnSelectedChanged("}<Link to="/game-api/types/global-s/serverelement">{"ServerElement"}</Link>{" oldElement, "}<Link to="/game-api/types/global-s/serverelement">{"ServerElement"}</Link>{" newElement)"}</code> | Forwards the display's selection change to this board's `SelectedChanged` event. |
| <Link id="m-sortandupdateserverslist" /><code>{"private void SortAndUpdateServersList()"}</code> | Reverses the filtered list, drops servers `ServerFeatureSetProvider` says are invalid, and restarts the `UpdateServersList` coroutine. |
| <Link id="m-startupdatingservers" /><code>{"private void StartUpdatingServers()"}</code> | Stops any running refresh loop and starts `LoadServers` again. |
| <Link id="m-stopupdatingserver" /><code>{"private void StopUpdatingServer()"}</code> | Stops the `LoadServers` refresh loop. |
| <Link id="m-updateserverslist" /><code>{"private IEnumerator UpdateServersList() (iterator)"}</code> | Coroutine that reuses or spawns one `ServerElement` per server (one per frame), removes extras, and keeps or resets the selection. |

</details>

## Used in

Members of other types that take, return or hold a `ServerBoard`:

[`ServerSelectionMenu.boards`](/game-api/types/global-s/serverselectionmenu#m-boards), [`ServerSelectionMenu.boardsByType`](/game-api/types/global-s/serverselectionmenu#m-boardsbytype), [`ServerSelectionMenu.currentBoard`](/game-api/types/global-s/serverselectionmenu#m-currentboard), [`ServerSelectionMenu.CurrentBoard`](/game-api/types/global-s/serverselectionmenu#m-currentboard-2).
