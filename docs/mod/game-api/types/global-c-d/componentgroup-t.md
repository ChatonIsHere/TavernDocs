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
| <Link id="m-ctor" /><code>{"ComponentGroup()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-components" /><code>{"protected List<T> components"}</code> | <span className="api-desc">The backing list.</span> |

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-componentstoignorewhenadding" /><code>{"private List<T> componentsToIgnoreWhenAdding"}</code> | <span className="api-desc">Components left out when collecting from children.</span> |
| <Link id="m-isaddingcomponents" /><code>{"private bool isAddingComponents"}</code> | <span className="api-desc">Inspector button flag for adding components in children.</span> |
| <Link id="m-parentstoignorewhenadding" /><code>{"private List<Transform> parentsToIgnoreWhenAdding"}</code> | <span className="api-desc">Child transforms whose subtree is skipped when collecting.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-components-2" /><code>{"List<T> Components { get; }"}</code> | <span className="api-desc">The list of grouped components.</span> |
| <Link id="m-count" /><code>{"int Count { get; }"}</code> | <span className="api-desc">Number of grouped components.</span> |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-itemadded" /><code>{"event "}<Link to="/mod/game-api/types/global-c-d/componentgroup-t-groupmodifiedhandler">{"ComponentGroup"}</Link>{"<T> ItemAdded"}</code> | <span className="api-desc">Raised when `Add` adds an item.</span> |
| <Link id="m-itemremoved" /><code>{"event "}<Link to="/mod/game-api/types/global-c-d/componentgroup-t-groupmodifiedhandler">{"ComponentGroup"}</Link>{"<T> ItemRemoved"}</code> | <span className="api-desc">Raised when `Remove` removes an item.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-add" /><code>{"void Add(T item)"}</code> | <span className="api-desc">Adds an item if it is not already in the list and raises `ItemAdded`.</span> |
| <Link id="m-getchildcomponents" /><code>{"virtual void GetChildComponents(bool isAddingOn = false)"}</code> | <span className="api-desc">Fills the list from this object and its children, skipping ignored components and parents. Can add to the existing list.</span> |
| <Link id="m-remove" /><code>{"void Remove(T item)"}</code> | <span className="api-desc">Removes an item and raises `ItemRemoved` if it was there.</span> |
| <Link id="m-removenullcomponents" /><code>{"void RemoveNullComponents()"}</code> | <span className="api-desc">Removes destroyed or missing entries from the list.</span> |
| <Link id="m-iselementvalid" /><code>{"protected virtual bool IsElementValid(T element)"}</code> | <span className="api-desc">Filter used by `GetChildComponents`. Accepts everything by default.</span> |
| <Link id="m-onvalidate" /><code>{"protected virtual void OnValidate()"}</code> | <span className="api-desc">Editor hook. Empty in the base class.</span> |

<details className="api-private">
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-getenumerator" /><code>{"private IEnumerator System.Collections.IEnumerable.GetEnumerator()"}</code> | <span className="api-desc">Enumerates the components in the group.</span> |
| <Link id="m-postbake" /><code>{"private void IBuildRendererPostBake.PostBake()"}</code> | <span className="api-desc">Build step: removes null entries from the list.</span> |
| <Link id="m-recursivlyaddcomponents" /><code>{"private void RecursivlyAddComponents(Transform transform)"}</code> | <span className="api-desc">Adds every valid `T` on a transform and its children, skipping the ignore lists.</span> |

</details>

## Used in

Members of other types that take, return or hold a `ComponentGroup&lt;T>`:

<div className="api-used-in">

[`ComponentGroup<T>.GroupModifiedHandler.BeginInvoke`](/mod/game-api/types/global-c-d/componentgroup-t-groupmodifiedhandler#m-begininvoke), [`ComponentGroup<T>.GroupModifiedHandler.Invoke`](/mod/game-api/types/global-c-d/componentgroup-t-groupmodifiedhandler#m-invoke), [`MaterialGroup.UpdateMaterial`](/mod/game-api/types/global-m-o/materialgroup#m-updatematerial).

</div>
