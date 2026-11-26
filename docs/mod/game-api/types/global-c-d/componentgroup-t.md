---
title: "ComponentGroup<T>"
description: "A component that keeps a list of other components of one type, usually filled from its children in the editor."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ComponentGroup&lt;T&gt;

A **class** in `Root.Township`, the global namespace.

A component that keeps a list of other components of one type, usually filled from its children in the editor. `ColliderGroup` builds on it.

- **Listed in** [Global namespace: C to D](/mod/game-api/types/global-c-d)
- **Inherits or implements** `MonoBehaviour`, `IReadOnlyCollection<T>`, `IEnumerable<T>`, `IEnumerable`, [`IBuildRendererPostBake`](/mod/game-api/types/assembly-other/ibuildrendererpostbake), [`IBuildBakeable`](/mod/game-api/types/assembly-other/ibuildbakeable)
- **Derived types** [`FixedImpactorGroup`](/mod/game-api/types/alta-items/fixedimpactorgroup), [`CharacterDockManager`](/mod/game-api/types/alta-items/characterdockmanager), [`ColliderGroup`](/mod/game-api/types/global-c-d/collidergroup), [`ControllerExtensionGroup`](/mod/game-api/types/global-c-d/controllerextensiongroup), [`CopyBoneGroup`](/mod/game-api/types/global-c-d/copybonegroup), [`MaterialGroup`](/mod/game-api/types/global-m-o/materialgroup), [`PickupDockGroup`](/mod/game-api/types/global-p/pickupdockgroup), [`RendererGroup`](/mod/game-api/types/global-q-r/renderergroup), [`RigidbodyGroup`](/mod/game-api/types/global-q-r/rigidbodygroup), [`SkinnedMeshRendererGroup`](/mod/game-api/types/global-s/skinnedmeshrenderergroup), [`VisibleNetworkRigidbody`](/mod/game-api/types/global-t-x/visiblenetworkrigidbody)
- **Nested types** [`GroupModifiedHandler`](/mod/game-api/types/global-c-d/componentgroup-t-groupmodifiedhandler)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ComponentGroup()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-components" /><code>{"protected List<T> components"}</code> | The backing list. |

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-componentstoignorewhenadding" /><code>{"private List<T> componentsToIgnoreWhenAdding"}</code> | Components left out when collecting from children. |
| <Link id="m-isaddingcomponents" /><code>{"private bool isAddingComponents"}</code> | Inspector button flag for adding components in children. |
| <Link id="m-parentstoignorewhenadding" /><code>{"private List<Transform> parentsToIgnoreWhenAdding"}</code> | Child transforms whose subtree is skipped when collecting. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-components-2" /><code>{"List<T> Components { get; }"}</code> | The list of grouped components. |
| <Link id="m-count" /><code>{"int Count { get; }"}</code> | Number of grouped components. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-itemadded" /><code>{"event "}<Link to="/mod/game-api/types/global-c-d/componentgroup-t-groupmodifiedhandler">{"ComponentGroup"}</Link>{"<T> ItemAdded"}</code> | Raised when `Add` adds an item. |
| <Link id="m-itemremoved" /><code>{"event "}<Link to="/mod/game-api/types/global-c-d/componentgroup-t-groupmodifiedhandler">{"ComponentGroup"}</Link>{"<T> ItemRemoved"}</code> | Raised when `Remove` removes an item. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-add" /><code>{"void Add(T item)"}</code> | Adds an item if it is not already in the list and raises `ItemAdded`. |
| <Link id="m-getchildcomponents" /><code>{"virtual void GetChildComponents(bool isAddingOn = false)"}</code> | Fills the list from this object and its children, skipping ignored components and parents. Can add to the existing list. |
| <Link id="m-remove" /><code>{"void Remove(T item)"}</code> | Removes an item and raises `ItemRemoved` if it was there. |
| <Link id="m-removenullcomponents" /><code>{"void RemoveNullComponents()"}</code> | Removes destroyed or missing entries from the list. |
| <Link id="m-iselementvalid" /><code>{"protected virtual bool IsElementValid(T element)"}</code> | Filter used by `GetChildComponents`. Accepts everything by default. |
| <Link id="m-onvalidate" /><code>{"protected virtual void OnValidate()"}</code> | Editor hook. Empty in the base class. |

<details>
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-getenumerator" /><code>{"private IEnumerator System.Collections.IEnumerable.GetEnumerator()"}</code> | Enumerates the components in the group. |
| <Link id="m-postbake" /><code>{"private void IBuildRendererPostBake.PostBake()"}</code> | Build step: removes null entries from the list. |
| <Link id="m-recursivlyaddcomponents" /><code>{"private void RecursivlyAddComponents(Transform transform)"}</code> | Adds every valid `T` on a transform and its children, skipping the ignore lists. |

</details>

## Used in

Members of other types that take, return or hold a `ComponentGroup&lt;T>`:

[`ComponentGroup<T>.GroupModifiedHandler.BeginInvoke`](/mod/game-api/types/global-c-d/componentgroup-t-groupmodifiedhandler#m-begininvoke), [`ComponentGroup<T>.GroupModifiedHandler.Invoke`](/mod/game-api/types/global-c-d/componentgroup-t-groupmodifiedhandler#m-invoke), [`MaterialGroup.UpdateMaterial`](/mod/game-api/types/global-m-o/materialgroup#m-updatematerial).
