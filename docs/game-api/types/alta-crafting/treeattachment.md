---
title: "TreeAttachment"
description: "class TreeAttachment in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TreeAttachment

A **class** in `Root.Township`, `Alta.Woodcutting`.

- **Listed in** [Crafting and making](/game-api/types/alta-crafting)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour), [`IBuildRendererBakeable`](/game-api/types/assembly-other/ibuildrendererbakeable), [`IBuildBakeable`](/game-api/types/assembly-other/ibuildbakeable)
- **Derived types** [`AttachmentEvent`](/game-api/types/alta-crafting/attachmentevent), [`UnityAttachmentEvent`](/game-api/types/alta-crafting/unityattachmentevent), [`WoodcutTreeAttachmentBaker`](/game-api/types/alta-crafting/woodcuttreeattachmentbaker)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TreeAttachment()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-broken" /><code>{"private "}<Link to="/game-api/types/alta-crafting/attachmentevent">{"AttachmentEvent"}</Link>{" broken"}</code> |  |
| <Link id="m-forcebreak" /><code>{"private float forceBreak"}</code> |  |
| <Link id="m-imposter" /><code>{"private MeshRenderer imposter"}</code> |  |
| <Link id="m-isbreakingonunroot" /><code>{"private bool isBreakingOnUnroot"}</code> |  |
| <Link id="m-pcmeshes" /><code>{"private Mesh[] pcMeshes"}</code> |  |
| <Link id="m-syncbroken" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncBroken"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-attachedto" /><code><Link to="/game-api/types/alta-crafting/woodcuttree-mapnode">{"WoodcutTree.MapNode"}</Link>{" AttachedTo { get; set; }"}</code> |  |
| <Link id="m-imposter-2" /><code>{"Renderer Imposter { get; }"}</code> |  |
| <Link id="m-lods" /><code>{"Mesh[] Lods { get; }"}</code> |  |
| <Link id="m-renderers" /><code>{"MeshRenderer[] Renderers { get; private set; }"}</code> |  |
| <Link id="m-ibuildrendererbakeable-sortingorder" /><code>{"private int IBuildRendererBakeable.SortingOrder { get; }"}</code> |  |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-broken-2" /><code>{"event Action<"}<Link to="/game-api/types/alta-crafting/treeattachment">{"TreeAttachment"}</Link>{"> Broken"}</code> |  |
| <Link id="m-moved" /><code>{"event Action<"}<Link to="/game-api/types/alta-crafting/treeattachment">{"TreeAttachment"}</Link>{"> Moved"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-break" /><code>{"void Break()"}</code> |  |
| <Link id="m-checkforce" /><code>{"void CheckForce(float forceSquared)"}</code> |  |
| <Link id="m-generaterenderers" /><code>{"void GenerateRenderers("}<Link to="/game-api/types/alta-utilities/atlasdefinition">{"AtlasDefinition"}</Link>{"[] attachmentDefinitions)"}</code> |  |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> |  |
| <Link id="m-onmoved" /><code>{"void OnMoved()"}</code> |  |
| <Link id="m-unroot" /><code>{"void Unroot()"}</code> |  |
| <Link id="m-bake" /><code>{"private void IBuildRendererBakeable.Bake(bool isSaving)"}</code> |  |
| <Link id="m-clean" /><code>{"private void IBuildRendererBakeable.Clean()"}</code> |  |
| <Link id="m-getrendereratlod" /><code>{"private MeshRenderer GetRendererAtLOD(int lod)"}</code> |  |
| <Link id="m-syncbreak" /><code>{"private void SyncBreak("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |

## Used in

Members of other types that take, return or hold a `TreeAttachment`:

[`WoodcutTree.SyncAttachment`](/game-api/types/alta-crafting/woodcuttree#m-syncattachment), [`WoodcutTree.MapNode.AddAttachment`](/game-api/types/alta-crafting/woodcuttree-mapnode#m-addattachment), [`WoodcutTree.MapNode.Attachments`](/game-api/types/alta-crafting/woodcuttree-mapnode#m-attachments), [`WoodcutTree.MapNode.RemoveAttachment`](/game-api/types/alta-crafting/woodcuttree-mapnode#m-removeattachment), [`WoodcutTreeAttachmentBaker.GetAttachmentMaterial`](/game-api/types/alta-crafting/woodcuttreeattachmentbaker#m-getattachmentmaterial), [`WoodcutTreeAttachmentBaker.GetLodCount`](/game-api/types/alta-crafting/woodcuttreeattachmentbaker#m-getlodcount), [`WoodcutTreeAttachmentBaker.GetMaterial`](/game-api/types/alta-crafting/woodcuttreeattachmentbaker#m-getmaterial), [`WoodcutTreeAttachmentBaker.GetMesh`](/game-api/types/alta-crafting/woodcuttreeattachmentbaker#m-getmesh), [`WoodcutTreeAttachmentBaker.GetName`](/game-api/types/alta-crafting/woodcuttreeattachmentbaker#m-getname), [`WoodcutTreeAttachmentBaker.GetTransform`](/game-api/types/alta-crafting/woodcuttreeattachmentbaker#m-gettransform), [`WoodcutTreeAttachmentBaker.IsValid`](/game-api/types/alta-crafting/woodcuttreeattachmentbaker#m-isvalid), [`WoodcutTreeBaker.attachments`](/game-api/types/alta-crafting/woodcuttreebaker#m-attachments), [`WoodcutTreeBaker.Remove`](/game-api/types/alta-crafting/woodcuttreebaker#m-remove).
