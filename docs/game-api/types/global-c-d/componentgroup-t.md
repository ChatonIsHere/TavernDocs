---
title: "ComponentGroup<T>"
description: "A component that keeps a list of other components of one type, usually filled from its children in the editor."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ComponentGroup&lt;T&gt;

A **class** in `Root.Township`, no namespace.

A component that keeps a list of other components of one type, usually filled from its children in the editor. `ColliderGroup` builds on it.

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)
- **Inherits or implements** `MonoBehaviour`, `IReadOnlyCollection<T>`, `IEnumerable<T>`, `IEnumerable`, [`IBuildRendererPostBake`](/game-api/types/assembly-other/ibuildrendererpostbake), [`IBuildBakeable`](/game-api/types/assembly-other/ibuildbakeable)
- **Derived types** [`FixedImpactorGroup`](/game-api/types/alta-items/fixedimpactorgroup), [`CharacterDockManager`](/game-api/types/alta-items/characterdockmanager), [`ColliderGroup`](/game-api/types/global-c-d/collidergroup), [`ControllerExtensionGroup`](/game-api/types/global-c-d/controllerextensiongroup), [`CopyBoneGroup`](/game-api/types/global-c-d/copybonegroup), [`MaterialGroup`](/game-api/types/global-m-o/materialgroup), [`PickupDockGroup`](/game-api/types/global-p/pickupdockgroup), [`RendererGroup`](/game-api/types/global-q-r/renderergroup), [`RigidbodyGroup`](/game-api/types/global-q-r/rigidbodygroup), [`SkinnedMeshRendererGroup`](/game-api/types/global-s/skinnedmeshrenderergroup), [`VisibleNetworkRigidbody`](/game-api/types/global-t-x/visiblenetworkrigidbody)
- **Nested types** [`GroupModifiedHandler`](/game-api/types/global-c-d/componentgroup-t-groupmodifiedhandler)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ComponentGroup()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-components" /><code>{"protected List<T> components"}</code> | The backing list. |
| <Link id="m-componentstoignorewhenadding" /><code>{"private List<T> componentsToIgnoreWhenAdding"}</code> |  |
| <Link id="m-isaddingcomponents" /><code>{"private bool isAddingComponents"}</code> |  |
| <Link id="m-parentstoignorewhenadding" /><code>{"private List<Transform> parentsToIgnoreWhenAdding"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-components-2" /><code>{"List<T> Components { get; }"}</code> | The list of grouped components. |
| <Link id="m-count" /><code>{"int Count { get; }"}</code> | Number of grouped components. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-itemadded" /><code>{"event "}<Link to="/game-api/types/global-c-d/componentgroup-t-groupmodifiedhandler">{"ComponentGroup"}</Link>{"<T> ItemAdded"}</code> | Raised when `Add` adds an item. |
| <Link id="m-itemremoved" /><code>{"event "}<Link to="/game-api/types/global-c-d/componentgroup-t-groupmodifiedhandler">{"ComponentGroup"}</Link>{"<T> ItemRemoved"}</code> | Raised when `Remove` removes an item. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-add" /><code>{"void Add(T item)"}</code> | Adds an item if it is not already in the list and raises `ItemAdded`. |
| <Link id="m-getchildcomponents" /><code>{"virtual void GetChildComponents(bool isAddingOn = false)"}</code> | Fills the list from this object and its children, skipping ignored components and parents. Can add to the existing list. |
| <Link id="m-remove" /><code>{"void Remove(T item)"}</code> | Removes an item and raises `ItemRemoved` if it was there. |
| <Link id="m-removenullcomponents" /><code>{"void RemoveNullComponents()"}</code> | Removes destroyed or missing entries from the list. |
| <Link id="m-getenumerator" /><code>{"private IEnumerator System.Collections.IEnumerable.GetEnumerator()"}</code> |  |
| <Link id="m-iselementvalid" /><code>{"protected virtual bool IsElementValid(T element)"}</code> | Filter used by `GetChildComponents`. Accepts everything by default. |
| <Link id="m-onvalidate" /><code>{"protected virtual void OnValidate()"}</code> | Editor hook. Empty in the base class. |
| <Link id="m-postbake" /><code>{"private void IBuildRendererPostBake.PostBake()"}</code> |  |
| <Link id="m-recursivlyaddcomponents" /><code>{"private void RecursivlyAddComponents(Transform transform)"}</code> |  |

## Used in

Members of other types that take, return or hold a `ComponentGroup&lt;T>`:

[`ComponentGroup<T>.GroupModifiedHandler.BeginInvoke`](/game-api/types/global-c-d/componentgroup-t-groupmodifiedhandler#m-begininvoke), [`ComponentGroup<T>.GroupModifiedHandler.Invoke`](/game-api/types/global-c-d/componentgroup-t-groupmodifiedhandler#m-invoke), [`MaterialGroup.UpdateMaterial`](/game-api/types/global-m-o/materialgroup#m-updatematerial).
