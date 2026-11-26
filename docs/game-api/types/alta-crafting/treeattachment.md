---
title: "TreeAttachment"
description: "Something attached to a tree's node, such as leaves, that can break off."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TreeAttachment

A **class** in `Root.Township`, `Alta.Woodcutting`.

Something attached to a tree's node, such as leaves, that can break off. Attached by `WoodcutTree`; breaking is synced from the server.

- **Listed in** [Crafting and making](/game-api/types/alta-crafting)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour), [`IBuildRendererBakeable`](/game-api/types/assembly-other/ibuildrendererbakeable), [`IBuildBakeable`](/game-api/types/assembly-other/ibuildbakeable)
- **Derived types** [`AttachmentEvent`](/game-api/types/alta-crafting/attachmentevent), [`UnityAttachmentEvent`](/game-api/types/alta-crafting/unityattachmentevent), [`WoodcutTreeAttachmentBaker`](/game-api/types/alta-crafting/woodcuttreeattachmentbaker)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"TreeAttachment()"}</code> |

## Fields

<details>
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-broken" /><code>{"private "}<Link to="/game-api/types/alta-crafting/attachmentevent">{"AttachmentEvent"}</Link>{" broken"}</code> | Event invoked on `Break`. The `Broken` event adds to it. |
| <Link id="m-forcebreak" /><code>{"private float forceBreak"}</code> | Force that breaks the attachment off. -1 or less means force never breaks it. |
| <Link id="m-imposter" /><code>{"private MeshRenderer imposter"}</code> | Backing field for `Imposter`, the far imposter renderer, added last to `Renderers` if set. |
| <Link id="m-isbreakingonunroot" /><code>{"private bool isBreakingOnUnroot"}</code> | Whether `Unroot` breaks the attachment off. |
| <Link id="m-pcmeshes" /><code>{"private Mesh[] pcMeshes"}</code> | Backing field for `Lods`, the LOD meshes used to build `Renderers`. |
| <Link id="m-syncbroken" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncBroken"}</code> | Method sync made in `Initialize` for `SyncBreak`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-attachedto" /><code><Link to="/game-api/types/alta-crafting/woodcuttree-mapnode">{"WoodcutTree.MapNode"}</Link>{" AttachedTo { get; set; }"}</code> | The tree map node this attachment hangs on. |
| <Link id="m-imposter-2" /><code>{"Renderer Imposter { get; }"}</code> | The far-distance imposter renderer, if any. |
| <Link id="m-lods" /><code>{"Mesh[] Lods { get; }"}</code> | The LOD meshes for this attachment. |
| <Link id="m-renderers" /><code>{"MeshRenderer[] Renderers { get; private set; }"}</code> | The renderers built by `GenerateRenderers`, null before that. |

<details>
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ibuildrendererbakeable-sortingorder" /><code>{"private int IBuildRendererBakeable.SortingOrder { get; }"}</code> | Bake order for this bakeable: 1. |

</details>

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-broken-2" /><code>{"event Action<"}<Link to="/game-api/types/alta-crafting/treeattachment">{"TreeAttachment"}</Link>{"> Broken"}</code> | Raised when the attachment breaks. `WoodcutTree` uses it to remove the attachment. |
| <Link id="m-moved" /><code>{"event Action<"}<Link to="/game-api/types/alta-crafting/treeattachment">{"TreeAttachment"}</Link>{"> Moved"}</code> | Raised by `OnMoved` when the tree baker moves the attachment. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-break" /><code>{"void Break()"}</code> | Raises `Broken`; on the server also tells clients to break it. |
| <Link id="m-checkforce" /><code>{"void CheckForce(float forceSquared)"}</code> | Breaks the attachment if it has a break force set and the given squared force is above it. Called by the tree on impacts. |
| <Link id="m-generaterenderers" /><code>{"void GenerateRenderers("}<Link to="/game-api/types/alta-utilities/atlasdefinition">{"AtlasDefinition"}</Link>{"[] attachmentDefinitions)"}</code> | Builds one renderer per LOD mesh (plus the imposter) once, with atlased materials from the baker. |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Sets up the synced break message. |
| <Link id="m-onmoved" /><code>{"void OnMoved()"}</code> | Raises `Moved`. Called by `WoodcutTreeBaker`. |
| <Link id="m-unroot" /><code>{"void Unroot()"}</code> | Breaks the attachment if it is set to break when the tree is uprooted. |

<details>
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-bake" /><code>{"private void IBuildRendererBakeable.Bake(bool isSaving)"}</code> | Build bake hook. Empty. |
| <Link id="m-clean" /><code>{"private void IBuildRendererBakeable.Clean()"}</code> | Build clean hook. Empty. |
| <Link id="m-getrendereratlod" /><code>{"private MeshRenderer GetRendererAtLOD(int lod)"}</code> | Makes a "Leaves LOD" child with the LOD mesh, atlased with the material from `WoodcutTreeAttachmentBaker`. |
| <Link id="m-syncbreak" /><code>{"private void SyncBreak("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Method sync sent by the server on `Break`. Clients run `Break` when they get it. |

</details>

## Used in

Members of other types that take, return or hold a `TreeAttachment`:

[`WoodcutTree.SyncAttachment`](/game-api/types/alta-crafting/woodcuttree#m-syncattachment), [`WoodcutTree.MapNode.AddAttachment`](/game-api/types/alta-crafting/woodcuttree-mapnode#m-addattachment), [`WoodcutTree.MapNode.Attachments`](/game-api/types/alta-crafting/woodcuttree-mapnode#m-attachments), [`WoodcutTree.MapNode.RemoveAttachment`](/game-api/types/alta-crafting/woodcuttree-mapnode#m-removeattachment), [`WoodcutTreeAttachmentBaker.GetAttachmentMaterial`](/game-api/types/alta-crafting/woodcuttreeattachmentbaker#m-getattachmentmaterial), [`WoodcutTreeAttachmentBaker.GetLodCount`](/game-api/types/alta-crafting/woodcuttreeattachmentbaker#m-getlodcount), [`WoodcutTreeAttachmentBaker.GetMaterial`](/game-api/types/alta-crafting/woodcuttreeattachmentbaker#m-getmaterial), [`WoodcutTreeAttachmentBaker.GetMesh`](/game-api/types/alta-crafting/woodcuttreeattachmentbaker#m-getmesh), [`WoodcutTreeAttachmentBaker.GetName`](/game-api/types/alta-crafting/woodcuttreeattachmentbaker#m-getname), [`WoodcutTreeAttachmentBaker.GetTransform`](/game-api/types/alta-crafting/woodcuttreeattachmentbaker#m-gettransform), [`WoodcutTreeAttachmentBaker.IsValid`](/game-api/types/alta-crafting/woodcuttreeattachmentbaker#m-isvalid), [`WoodcutTreeBaker.attachments`](/game-api/types/alta-crafting/woodcuttreebaker#m-attachments), [`WoodcutTreeBaker.Remove`](/game-api/types/alta-crafting/woodcuttreebaker#m-remove).
