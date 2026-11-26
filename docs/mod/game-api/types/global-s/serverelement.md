---
title: "ServerElement"
description: "One entry on the main menu's server list: shows a server's name, player count and playability colour, and can be selected."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ServerElement

A **class** in `Root.Township`, the global namespace.

One entry on the main menu's server list: shows a server's name, player count and playability colour, and can be selected.

- **Listed in** [Global namespace: S](/mod/game-api/types/global-s)
- **Inherits or implements** [`Interactable`](/mod/game-api/types/global-i-l/interactable), [`IBuildRendererPostBake`](/mod/game-api/types/assembly-other/ibuildrendererpostbake), [`IBuildBakeable`](/mod/game-api/types/assembly-other/ibuildbakeable)
- **Derived types** [`ServerElementEvent`](/mod/game-api/types/global-s/serverelementevent), [`ServerElementUnityEvent`](/mod/game-api/types/global-s/serverelementunityevent)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ServerElement()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>8 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-display" /><code>{"private "}<Link to="/mod/game-api/types/global-s/serverselectiondisplay">{"ServerSelectionDisplay"}</Link>{" display"}</code> | The server selection display this element belongs to, set by `SetDisplay`. |
| <Link id="m-elementselected" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/toggleevent">{"ToggleEvent"}</Link>{" elementSelected"}</code> | Toggle event invoked with the selected state in `SetSelected`. |
| <Link id="m-isconnectingtoserver" /><code>{"private bool isConnectingToServer"}</code> | Inspector button: when ticked, joins the shown server through `VrMainMenu`. |
| <Link id="m-isinstancedmaterials" /><code>{"private bool isInstancedMaterials"}</code> | True once `SetupForServer` has made instanced materials for the playability renderers. |
| <Link id="m-numberofplayerstext" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" numberOfPlayersText"}</code> | Text showing the server's online player count. |
| <Link id="m-playabilityrenderers" /><code>{"private Renderer[] playabilityRenderers"}</code> | Renderers tinted by the server's playability using the menu settings gradient. |
| <Link id="m-renderertoselect" /><code>{"private Renderer rendererToSelect"}</code> | Renderer whose material swaps between selected and normal. |
| <Link id="m-servernametext" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" serverNameText"}</code> | Text showing the server name. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-serverinfo" /><code><Link to="/mod/game-api/types/assembly-api-models/gameserverinfo">{"GameServerInfo"}</Link>{" ServerInfo { get; private set; }"}</code> | The server shown. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-select" /><code>{"void Select()"}</code> | Selects this entry on its display, if it is interactable. |
| <Link id="m-setdisplay" /><code>{"void SetDisplay("}<Link to="/mod/game-api/types/global-s/serverselectiondisplay">{"ServerSelectionDisplay"}</Link>{" display)"}</code> | Sets the list this entry belongs to and deselects it. |
| <Link id="m-setselected" /><code>{"void SetSelected(bool isSelected)"}</code> | Shows the entry as selected or not. |
| <Link id="m-setupforserver" /><code>{"void SetupForServer("}<Link to="/mod/game-api/types/assembly-api-models/gameserverinfo">{"GameServerInfo"}</Link>{" server)"}</code> | Fills the entry from a `GameServerInfo`. |
| <Link id="m-onvalidate" /><code>{"protected override void OnValidate()"}</code> | Editor: the inspector's connect button joins the shown server. |

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | Destroys the instanced playability materials if any were made. |
| <Link id="m-postbake" /><code>{"private void IBuildRendererPostBake.PostBake()"}</code> | Build bake hook: strips null entries from `playabilityRenderers`. |

</details>

## Used in

Members of other types that take, return or hold a `ServerElement`:

[`CubeMapUpdater.SetupServer`](/mod/game-api/types/global-c-d/cubemapupdater#m-setupserver), [`SelectedElementChanged.BeginInvoke`](/mod/game-api/types/global-s/selectedelementchanged#m-begininvoke), [`SelectedElementChanged.Invoke`](/mod/game-api/types/global-s/selectedelementchanged#m-invoke), [`ServerBoard.OnSelectedChanged`](/mod/game-api/types/global-s/serverboard#m-onselectedchanged), [`ServerBoard.serverDisplays`](/mod/game-api/types/global-s/serverboard#m-serverdisplays), [`ServerBoard.serverElementPrefab`](/mod/game-api/types/global-s/serverboard#m-serverelementprefab), [`ServerBoard.serverElements`](/mod/game-api/types/global-s/serverboard#m-serverelements), [`ServerInfoBoard.SetServer`](/mod/game-api/types/global-s/serverinfoboard#m-setserver), [`ServerSelectionDisplay.AddServerElement`](/mod/game-api/types/global-s/serverselectiondisplay#m-addserverelement), [`ServerSelectionDisplay.CurrentSelection`](/mod/game-api/types/global-s/serverselectiondisplay#m-currentselection), [`ServerSelectionDisplay.OnSelectionChanged`](/mod/game-api/types/global-s/serverselectiondisplay#m-onselectionchanged), [`ServerSelectionDisplay.RemoveServerElement`](/mod/game-api/types/global-s/serverselectiondisplay#m-removeserverelement), [`ServerSelectionDisplay.SelectElement`](/mod/game-api/types/global-s/serverselectiondisplay#m-selectelement), [`ServerSelectionDisplay.serverElements`](/mod/game-api/types/global-s/serverselectiondisplay#m-serverelements), [`ServerSelectionDisplay.ServerElements`](/mod/game-api/types/global-s/serverselectiondisplay#m-serverelements-2), [`ServerSelectionMenu.JoinCurrentServer`](/mod/game-api/types/global-s/serverselectionmenu#m-joincurrentserver), [`ServerSelectionMenu.OnSelectedChanged`](/mod/game-api/types/global-s/serverselectionmenu#m-onselectedchanged), [`ServerSelectionMenu.serverElementPrefab`](/mod/game-api/types/global-s/serverselectionmenu#m-serverelementprefab), [`ServerSelectionOrb.selectedElement`](/mod/game-api/types/global-s/serverselectionorb#m-selectedelement), [`ServerSelectionOrb.UpdateSelectionOrbBasedOnSelection`](/mod/game-api/types/global-s/serverselectionorb#m-updateselectionorbbasedonselection), [`ServerSelector.AnimateGaugeProgress`](/mod/game-api/types/global-s/serverselector#m-animategaugeprogress), [`ServerSelector.NewServerElementSelected`](/mod/game-api/types/global-s/serverselector#m-newserverelementselected), [`ServerSelector.OnSelectionFinished`](/mod/game-api/types/global-s/serverselector#m-onselectionfinished), [`ServerSelector.OnServerDeselected`](/mod/game-api/types/global-s/serverselector#m-onserverdeselected), [`ServerSelector.OnServerDisplaySettled`](/mod/game-api/types/global-s/serverselector#m-onserverdisplaysettled).
