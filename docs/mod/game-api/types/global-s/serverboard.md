---
title: "ServerBoard"
description: "A server list board in the main menu (public, my servers, open or discover)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ServerBoard

A **class** in `Root.Township`, the global namespace.

A server list board in the main menu (public, my servers, open or discover). Fetches its list from the Alta API every `updateInterval` seconds while logged in, filters and shows it. Client only.

- **Listed in** [Global namespace: S](/mod/game-api/types/global-s)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ServerBoard()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>18 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-createserverboards" /><code>{"private Coroutine createServerBoards"}</code> | <span className="api-desc">The running `UpdateServersList` coroutine, if any.</span> |
| <Link id="m-display" /><code>{"private "}<Link to="/mod/game-api/types/global-s/serverselectiondisplay">{"ServerSelectionDisplay"}</Link>{" display"}</code> | <span className="api-desc">The curved `ServerSelectionDisplay` that shows and selects this board's elements.</span> |
| <Link id="m-elementparent" /><code>{"private Transform elementParent"}</code> | <span className="api-desc">Transform that spawned server elements go under. Shown and hidden with the board.</span> |
| <Link id="m-filter" /><code>{"private "}<Link to="/mod/game-api/types/game-other-namespaces/serverboardfilter">{"ServerBoardFilter"}</Link>{" filter"}</code> | <span className="api-desc">The `ServerBoardFilter` applied to the received servers.</span> |
| <Link id="m-hasfilterchanged" /><code>{"private bool hasFilterChanged"}</code> | <span className="api-desc">Set when the filter changes so the next rebuild selects the first server.</span> |
| <Link id="m-headingtext" /><code>{"private string headingText"}</code> | <span className="api-desc">Heading shown for this board, read through `HeadingText`.</span> |
| <Link id="m-interval" /><code>{"private int interval"}</code> | <span className="api-desc">Seconds left until the next refresh. Reset to `updateInterval` on each refresh.</span> |
| <Link id="m-isfirstserverload" /><code>{"private bool isFirstServerLoad"}</code> | <span className="api-desc">True until the first rebuild with servers, which selects the first server.</span> |
| <Link id="m-joiningservertext" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" joiningServerText"}</code> | <span className="api-desc">Text shown by `DisableUpdate` while joining a server.</span> |
| <Link id="m-lastfilteredservers" /><code>{"private IEnumerable<"}<Link to="/mod/game-api/types/assembly-api-models/gameserverinfo">{"GameServerInfo"}</Link>{"> lastFilteredServers"}</code> | <span className="api-desc">The received servers after filtering and validity checks, as last shown.</span> |
| <Link id="m-lastreceivedservers" /><code>{"private IEnumerable<"}<Link to="/mod/game-api/types/assembly-api-models/gameserverinfo">{"GameServerInfo"}</Link>{"> lastReceivedServers"}</code> | <span className="api-desc">The last unfiltered server list from the API.</span> |
| <Link id="m-loadservers" /><code>{"private Coroutine loadServers"}</code> | <span className="api-desc">The running `LoadServers` coroutine, if any.</span> |
| <Link id="m-serverdisplays" /><code>{"private List<"}<Link to="/mod/game-api/types/global-s/serverelement">{"ServerElement"}</Link>{"> serverDisplays"}</code> | <span className="api-desc">Spawned `ServerElement` objects in display order, reused across refreshes.</span> |
| <Link id="m-serverelementprefab" /><code>{"private "}<Link to="/mod/game-api/types/global-s/serverelement">{"ServerElement"}</Link>{" serverElementPrefab"}</code> | <span className="api-desc">Prefab spawned for each server in the list.</span> |
| <Link id="m-serverelements" /><code>{"private Dictionary<int, "}<Link to="/mod/game-api/types/global-s/serverelement">{"ServerElement"}</Link>{"> serverElements"}</code> | <span className="api-desc">Server elements keyed by server identifier, rebuilt on each refresh to restore the selection.</span> |
| <Link id="m-type" /><code>{"private "}<Link to="/mod/game-api/types/global-s/serverboardtype">{"ServerBoardType"}</Link>{" type"}</code> | <span className="api-desc">Which API list this board shows: public, my (joined), open or discover servers.</span> |
| <Link id="m-updatecountdowntext" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" updateCountdownText"}</code> | <span className="api-desc">Text that shows "Updating in Ns".</span> |
| <Link id="m-updateinterval" /><code>{"private int updateInterval"}</code> | <span className="api-desc">Seconds between list refreshes. Default 30.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-display-2" /><code><Link to="/mod/game-api/types/global-s/serverselectiondisplay">{"ServerSelectionDisplay"}</Link>{" Display { get; }"}</code> | <span className="api-desc">The selection display that holds the server elements.</span> |
| <Link id="m-headingtext-2" /><code>{"string HeadingText { get; }"}</code> | <span className="api-desc">Heading shown for this board.</span> |
| <Link id="m-isemptyoronlytutorial" /><code>{"bool IsEmptyOrOnlyTutorial { get; }"}</code> | <span className="api-desc">True if every server in the last list is on scene index 1 (the tutorial), or the list is empty.</span> |
| <Link id="m-type-2" /><code><Link to="/mod/game-api/types/global-s/serverboardtype">{"ServerBoardType"}</Link>{" Type { get; }"}</code> | <span className="api-desc">Which API list this board shows.</span> |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-onrefreshfinished" /><code>{"event Action OnRefreshFinished"}</code> | <span className="api-desc">Raised once after the next refresh, then cleared. Add a handler again for each refresh.</span> |
| <Link id="m-selectedchanged" /><code>{"event "}<Link to="/mod/game-api/types/global-s/selectedelementchanged">{"SelectedElementChanged"}</Link>{" SelectedChanged"}</code> | <span className="api-desc">Raised when the selected server entry changes.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-disableupdate" /><code>{"void DisableUpdate()"}</code> | <span className="api-desc">Stops refreshing and hides the server entries, showing the joining text instead.</span> |
| <Link id="m-refreshserverslist" /><code>{"async Task RefreshServersList()"}</code> | <span className="api-desc">Fetches this board type's servers from the API, then filters and rebuilds the list.</span> |
| <Link id="m-resumeupdate" /><code>{"void ResumeUpdate()"}</code> | <span className="api-desc">Hides the joining text, shows the entries again and restarts refreshing.</span> |
| <Link id="m-selectserver" /><code>{"void SelectServer("}<Link to="/mod/game-api/types/assembly-api-models/gameserverinfo">{"GameServerInfo"}</Link>{" server)"}</code> | <span className="api-desc">Selects the entry for the given server.</span> |
| <Link id="m-setactive" /><code>{"void SetActive(bool isActive)"}</code> | <span className="api-desc">Shows or hides the board and starts or stops refreshing.</span> |
| <Link id="m-updatevalue" /><code>{"void UpdateValue(float value)"}</code> | <span className="api-desc">Adds to the display's scroll value.</span> |

<details className="api-private">
<summary>9 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-filterservers" /><code>{"private void FilterServers()"}</code> | <span className="api-desc">Runs the last received server list through `filter` and then sorts and rebuilds the displayed list.</span> |
| <Link id="m-loadservers-2" /><code>{"private IEnumerator LoadServers() (iterator)"}</code> | <span className="api-desc">Coroutine started by `SetActive(true)`: refreshes the list, then counts down `updateInterval` seconds on `updateCountdownText`, repeating while logged in.</span> |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> | <span className="api-desc">Subscribes `OnFilterChanged` to the filter's change event.</span> |
| <Link id="m-onfilterchanged" /><code>{"private void OnFilterChanged()"}</code> | <span className="api-desc">Marks the filter as changed (so the first server gets selected again) and refilters the list.</span> |
| <Link id="m-onselectedchanged" /><code>{"private void OnSelectedChanged("}<Link to="/mod/game-api/types/global-s/serverelement">{"ServerElement"}</Link>{" oldElement, "}<Link to="/mod/game-api/types/global-s/serverelement">{"ServerElement"}</Link>{" newElement)"}</code> | <span className="api-desc">Forwards the display's selection change to this board's `SelectedChanged` event.</span> |
| <Link id="m-sortandupdateserverslist" /><code>{"private void SortAndUpdateServersList()"}</code> | <span className="api-desc">Reverses the filtered list, drops servers `ServerFeatureSetProvider` says are invalid, and restarts the `UpdateServersList` coroutine.</span> |
| <Link id="m-startupdatingservers" /><code>{"private void StartUpdatingServers()"}</code> | <span className="api-desc">Stops any running refresh loop and starts `LoadServers` again.</span> |
| <Link id="m-stopupdatingserver" /><code>{"private void StopUpdatingServer()"}</code> | <span className="api-desc">Stops the `LoadServers` refresh loop.</span> |
| <Link id="m-updateserverslist" /><code>{"private IEnumerator UpdateServersList() (iterator)"}</code> | <span className="api-desc">Coroutine that reuses or spawns one `ServerElement` per server (one per frame), removes extras, and keeps or resets the selection.</span> |

</details>

## Used in

Members of other types that take, return or hold a `ServerBoard`:

<div className="api-used-in">

[`ServerSelectionMenu.boards`](/mod/game-api/types/global-s/serverselectionmenu#m-boards), [`ServerSelectionMenu.boardsByType`](/mod/game-api/types/global-s/serverselectionmenu#m-boardsbytype), [`ServerSelectionMenu.currentBoard`](/mod/game-api/types/global-s/serverselectionmenu#m-currentboard), [`ServerSelectionMenu.CurrentBoard`](/mod/game-api/types/global-s/serverselectionmenu#m-currentboard-2).

</div>
