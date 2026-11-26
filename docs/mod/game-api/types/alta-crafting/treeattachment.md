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

- **Listed in** [Crafting and making](/mod/game-api/types/alta-crafting)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour), [`IBuildRendererBakeable`](/mod/game-api/types/assembly-other/ibuildrendererbakeable), [`IBuildBakeable`](/mod/game-api/types/assembly-other/ibuildbakeable)
- **Derived types** [`AttachmentEvent`](/mod/game-api/types/alta-crafting/attachmentevent), [`UnityAttachmentEvent`](/mod/game-api/types/alta-crafting/unityattachmentevent), [`WoodcutTreeAttachmentBaker`](/mod/game-api/types/alta-crafting/woodcuttreeattachmentbaker)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TreeAttachment()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-broken" /><code>{"private "}<Link to="/mod/game-api/types/alta-crafting/attachmentevent">{"AttachmentEvent"}</Link>{" broken"}</code> | <span className="api-desc">Event invoked on `Break`. The `Broken` event adds to it.</span> |
| <Link id="m-forcebreak" /><code>{"private float forceBreak"}</code> | <span className="api-desc">Force that breaks the attachment off. -1 or less means force never breaks it.</span> |
| <Link id="m-imposter" /><code>{"private MeshRenderer imposter"}</code> | <span className="api-desc">Backing field for `Imposter`, the far imposter renderer, added last to `Renderers` if set.</span> |
| <Link id="m-isbreakingonunroot" /><code>{"private bool isBreakingOnUnroot"}</code> | <span className="api-desc">Whether `Unroot` breaks the attachment off.</span> |
| <Link id="m-pcmeshes" /><code>{"private Mesh[] pcMeshes"}</code> | <span className="api-desc">Backing field for `Lods`, the LOD meshes used to build `Renderers`.</span> |
| <Link id="m-syncbroken" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncBroken"}</code> | <span className="api-desc">Method sync made in `Initialize` for `SyncBreak`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-attachedto" /><code><Link to="/mod/game-api/types/alta-crafting/woodcuttree-mapnode">{"WoodcutTree.MapNode"}</Link>{" AttachedTo { get; set; }"}</code> | <span className="api-desc">The tree map node this attachment hangs on.</span> |
| <Link id="m-imposter-2" /><code>{"Renderer Imposter { get; }"}</code> | <span className="api-desc">The far-distance imposter renderer, if any.</span> |
| <Link id="m-lods" /><code>{"Mesh[] Lods { get; }"}</code> | <span className="api-desc">The LOD meshes for this attachment.</span> |
| <Link id="m-renderers" /><code>{"MeshRenderer[] Renderers { get; private set; }"}</code> | <span className="api-desc">The renderers built by `GenerateRenderers`, null before that.</span> |

<details className="api-private">
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ibuildrendererbakeable-sortingorder" /><code>{"private int IBuildRendererBakeable.SortingOrder { get; }"}</code> | <span className="api-desc">Bake order for this bakeable: 1.</span> |

</details>

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-broken-2" /><code>{"event Action<"}<Link to="/mod/game-api/types/alta-crafting/treeattachment">{"TreeAttachment"}</Link>{"> Broken"}</code> | <span className="api-desc">Raised when the attachment breaks. `WoodcutTree` uses it to remove the attachment.</span> |
| <Link id="m-moved" /><code>{"event Action<"}<Link to="/mod/game-api/types/alta-crafting/treeattachment">{"TreeAttachment"}</Link>{"> Moved"}</code> | <span className="api-desc">Raised by `OnMoved` when the tree baker moves the attachment.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-break" /><code>{"void Break()"}</code> | <span className="api-desc">Raises `Broken`; on the server also tells clients to break it.</span> |
| <Link id="m-checkforce" /><code>{"void CheckForce(float forceSquared)"}</code> | <span className="api-desc">Breaks the attachment if it has a break force set and the given squared force is above it. Called by the tree on impacts.</span> |
| <Link id="m-generaterenderers" /><code>{"void GenerateRenderers("}<Link to="/mod/game-api/types/alta-utilities/atlasdefinition">{"AtlasDefinition"}</Link>{"[] attachmentDefinitions)"}</code> | <span className="api-desc">Builds one renderer per LOD mesh (plus the imposter) once, with atlased materials from the baker.</span> |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | <span className="api-desc">Sets up the synced break message.</span> |
| <Link id="m-onmoved" /><code>{"void OnMoved()"}</code> | <span className="api-desc">Raises `Moved`. Called by `WoodcutTreeBaker`.</span> |
| <Link id="m-unroot" /><code>{"void Unroot()"}</code> | <span className="api-desc">Breaks the attachment if it is set to break when the tree is uprooted.</span> |

<details className="api-private">
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-bake" /><code>{"private void IBuildRendererBakeable.Bake(bool isSaving)"}</code> | <span className="api-desc">Build bake hook. Empty.</span> |
| <Link id="m-clean" /><code>{"private void IBuildRendererBakeable.Clean()"}</code> | <span className="api-desc">Build clean hook. Empty.</span> |
| <Link id="m-getrendereratlod" /><code>{"private MeshRenderer GetRendererAtLOD(int lod)"}</code> | <span className="api-desc">Makes a "Leaves LOD" child with the LOD mesh, atlased with the material from `WoodcutTreeAttachmentBaker`.</span> |
| <Link id="m-syncbreak" /><code>{"private void SyncBreak("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Method sync sent by the server on `Break`. Clients run `Break` when they get it.</span> |

</details>

## Used in

Members of other types that take, return or hold a `TreeAttachment`:

<div className="api-used-in">

[`WoodcutTree.SyncAttachment`](/mod/game-api/types/alta-crafting/woodcuttree#m-syncattachment), [`WoodcutTree.MapNode.AddAttachment`](/mod/game-api/types/alta-crafting/woodcuttree-mapnode#m-addattachment), [`WoodcutTree.MapNode.Attachments`](/mod/game-api/types/alta-crafting/woodcuttree-mapnode#m-attachments), [`WoodcutTree.MapNode.RemoveAttachment`](/mod/game-api/types/alta-crafting/woodcuttree-mapnode#m-removeattachment), [`WoodcutTreeAttachmentBaker.GetAttachmentMaterial`](/mod/game-api/types/alta-crafting/woodcuttreeattachmentbaker#m-getattachmentmaterial), [`WoodcutTreeAttachmentBaker.GetLodCount`](/mod/game-api/types/alta-crafting/woodcuttreeattachmentbaker#m-getlodcount), [`WoodcutTreeAttachmentBaker.GetMaterial`](/mod/game-api/types/alta-crafting/woodcuttreeattachmentbaker#m-getmaterial), [`WoodcutTreeAttachmentBaker.GetMesh`](/mod/game-api/types/alta-crafting/woodcuttreeattachmentbaker#m-getmesh), [`WoodcutTreeAttachmentBaker.GetName`](/mod/game-api/types/alta-crafting/woodcuttreeattachmentbaker#m-getname), [`WoodcutTreeAttachmentBaker.GetTransform`](/mod/game-api/types/alta-crafting/woodcuttreeattachmentbaker#m-gettransform), [`WoodcutTreeAttachmentBaker.IsValid`](/mod/game-api/types/alta-crafting/woodcuttreeattachmentbaker#m-isvalid), [`WoodcutTreeBaker.attachments`](/mod/game-api/types/alta-crafting/woodcuttreebaker#m-attachments), [`WoodcutTreeBaker.Remove`](/mod/game-api/types/alta-crafting/woodcuttreebaker#m-remove).

</div>
