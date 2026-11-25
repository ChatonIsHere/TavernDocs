---
title: "ServerElement"
description: "class ServerElement in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ServerElement

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: S](/game-api/types/global-s)
- **Inherits or implements** [`Interactable`](/game-api/types/global-i-l/interactable), [`IBuildRendererPostBake`](/game-api/types/assembly-other/ibuildrendererpostbake), [`IBuildBakeable`](/game-api/types/assembly-other/ibuildbakeable)
- **Derived types** [`ServerElementEvent`](/game-api/types/global-s/serverelementevent), [`ServerElementUnityEvent`](/game-api/types/global-s/serverelementunityevent)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ServerElement()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-display" /><code>{"private "}<Link to="/game-api/types/global-s/serverselectiondisplay">{"ServerSelectionDisplay"}</Link>{" display"}</code> |  |
| <Link id="m-elementselected" /><code>{"private "}<Link to="/game-api/types/global-t-x/toggleevent">{"ToggleEvent"}</Link>{" elementSelected"}</code> |  |
| <Link id="m-isconnectingtoserver" /><code>{"private bool isConnectingToServer"}</code> |  |
| <Link id="m-isinstancedmaterials" /><code>{"private bool isInstancedMaterials"}</code> |  |
| <Link id="m-numberofplayerstext" /><code>{"private "}<Link to="/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" numberOfPlayersText"}</code> |  |
| <Link id="m-playabilityrenderers" /><code>{"private Renderer[] playabilityRenderers"}</code> |  |
| <Link id="m-renderertoselect" /><code>{"private Renderer rendererToSelect"}</code> |  |
| <Link id="m-servernametext" /><code>{"private "}<Link to="/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" serverNameText"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-serverinfo" /><code><Link to="/game-api/types/assembly-api-models/gameserverinfo">{"GameServerInfo"}</Link>{" ServerInfo { get; private set; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-select" /><code>{"void Select()"}</code> |  |
| <Link id="m-setdisplay" /><code>{"void SetDisplay("}<Link to="/game-api/types/global-s/serverselectiondisplay">{"ServerSelectionDisplay"}</Link>{" display)"}</code> |  |
| <Link id="m-setselected" /><code>{"void SetSelected(bool isSelected)"}</code> |  |
| <Link id="m-setupforserver" /><code>{"void SetupForServer("}<Link to="/game-api/types/assembly-api-models/gameserverinfo">{"GameServerInfo"}</Link>{" server)"}</code> |  |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> |  |
| <Link id="m-onvalidate" /><code>{"protected override void OnValidate()"}</code> |  |
| <Link id="m-postbake" /><code>{"private void IBuildRendererPostBake.PostBake()"}</code> |  |

## Used in

Members of other types that take, return or hold a `ServerElement`:

[`CubeMapUpdater.SetupServer`](/game-api/types/global-c-d/cubemapupdater#m-setupserver), [`SelectedElementChanged.BeginInvoke`](/game-api/types/global-s/selectedelementchanged#m-begininvoke), [`SelectedElementChanged.Invoke`](/game-api/types/global-s/selectedelementchanged#m-invoke), [`ServerBoard.OnSelectedChanged`](/game-api/types/global-s/serverboard#m-onselectedchanged), [`ServerBoard.serverDisplays`](/game-api/types/global-s/serverboard#m-serverdisplays), [`ServerBoard.serverElementPrefab`](/game-api/types/global-s/serverboard#m-serverelementprefab), [`ServerBoard.serverElements`](/game-api/types/global-s/serverboard#m-serverelements), [`ServerInfoBoard.SetServer`](/game-api/types/global-s/serverinfoboard#m-setserver), [`ServerSelectionDisplay.AddServerElement`](/game-api/types/global-s/serverselectiondisplay#m-addserverelement), [`ServerSelectionDisplay.CurrentSelection`](/game-api/types/global-s/serverselectiondisplay#m-currentselection), [`ServerSelectionDisplay.OnSelectionChanged`](/game-api/types/global-s/serverselectiondisplay#m-onselectionchanged), [`ServerSelectionDisplay.RemoveServerElement`](/game-api/types/global-s/serverselectiondisplay#m-removeserverelement), [`ServerSelectionDisplay.SelectElement`](/game-api/types/global-s/serverselectiondisplay#m-selectelement), [`ServerSelectionDisplay.serverElements`](/game-api/types/global-s/serverselectiondisplay#m-serverelements), [`ServerSelectionDisplay.ServerElements`](/game-api/types/global-s/serverselectiondisplay#m-serverelements-2), [`ServerSelectionMenu.JoinCurrentServer`](/game-api/types/global-s/serverselectionmenu#m-joincurrentserver), [`ServerSelectionMenu.OnSelectedChanged`](/game-api/types/global-s/serverselectionmenu#m-onselectedchanged), [`ServerSelectionMenu.serverElementPrefab`](/game-api/types/global-s/serverselectionmenu#m-serverelementprefab), [`ServerSelectionOrb.selectedElement`](/game-api/types/global-s/serverselectionorb#m-selectedelement), [`ServerSelectionOrb.UpdateSelectionOrbBasedOnSelection`](/game-api/types/global-s/serverselectionorb#m-updateselectionorbbasedonselection), [`ServerSelector.AnimateGaugeProgress`](/game-api/types/global-s/serverselector#m-animategaugeprogress), [`ServerSelector.NewServerElementSelected`](/game-api/types/global-s/serverselector#m-newserverelementselected), [`ServerSelector.OnSelectionFinished`](/game-api/types/global-s/serverselector#m-onselectionfinished), [`ServerSelector.OnServerDeselected`](/game-api/types/global-s/serverselector#m-onserverdeselected), [`ServerSelector.OnServerDisplaySettled`](/game-api/types/global-s/serverselector#m-onserverdisplaysettled).
