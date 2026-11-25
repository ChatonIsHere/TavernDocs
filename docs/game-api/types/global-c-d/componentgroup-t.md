---
title: "ComponentGroup<T>"
description: "class ComponentGroup<T> in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ComponentGroup&lt;T&gt;

A **class** in `Root.Township`, no namespace.

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
| <Link id="m-components" /><code>{"protected List<T> components"}</code> |  |
| <Link id="m-componentstoignorewhenadding" /><code>{"private List<T> componentsToIgnoreWhenAdding"}</code> |  |
| <Link id="m-isaddingcomponents" /><code>{"private bool isAddingComponents"}</code> |  |
| <Link id="m-parentstoignorewhenadding" /><code>{"private List<Transform> parentsToIgnoreWhenAdding"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-components-2" /><code>{"List<T> Components { get; }"}</code> |  |
| <Link id="m-count" /><code>{"int Count { get; }"}</code> |  |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-itemadded" /><code>{"event "}<Link to="/game-api/types/global-c-d/componentgroup-t-groupmodifiedhandler">{"ComponentGroup"}</Link>{"<T> ItemAdded"}</code> |  |
| <Link id="m-itemremoved" /><code>{"event "}<Link to="/game-api/types/global-c-d/componentgroup-t-groupmodifiedhandler">{"ComponentGroup"}</Link>{"<T> ItemRemoved"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-add" /><code>{"void Add(T item)"}</code> |  |
| <Link id="m-getchildcomponents" /><code>{"virtual void GetChildComponents(bool isAddingOn = false)"}</code> |  |
| <Link id="m-remove" /><code>{"void Remove(T item)"}</code> |  |
| <Link id="m-removenullcomponents" /><code>{"void RemoveNullComponents()"}</code> |  |
| <Link id="m-getenumerator" /><code>{"private IEnumerator System.Collections.IEnumerable.GetEnumerator()"}</code> |  |
| <Link id="m-iselementvalid" /><code>{"protected virtual bool IsElementValid(T element)"}</code> |  |
| <Link id="m-onvalidate" /><code>{"protected virtual void OnValidate()"}</code> |  |
| <Link id="m-postbake" /><code>{"private void IBuildRendererPostBake.PostBake()"}</code> |  |
| <Link id="m-recursivlyaddcomponents" /><code>{"private void RecursivlyAddComponents(Transform transform)"}</code> |  |

## Used in

Members of other types that take, return or hold a `ComponentGroup&lt;T>`:

[`ComponentGroup<T>.GroupModifiedHandler.BeginInvoke`](/game-api/types/global-c-d/componentgroup-t-groupmodifiedhandler#m-begininvoke), [`ComponentGroup<T>.GroupModifiedHandler.Invoke`](/game-api/types/global-c-d/componentgroup-t-groupmodifiedhandler#m-invoke), [`MaterialGroup.UpdateMaterial`](/game-api/types/global-m-o/materialgroup#m-updatematerial).
