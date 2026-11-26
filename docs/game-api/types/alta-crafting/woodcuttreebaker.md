---
title: "WoodcutTreeBaker"
description: "Client component on a woodcut tree that combines its damaged trunk pieces and attachments into baked meshes in the distance LOD group, and updates the baked..."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# WoodcutTreeBaker

A **class** in `Root.Township`, `Alta.Woodcutting`.

Client component on a woodcut tree that combines its damaged trunk pieces and attachments into baked meshes in the distance LOD group, and updates the baked vertex colours as pieces are chopped. Does nothing on headless servers.

- **Listed in** [Crafting and making](/game-api/types/alta-crafting)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"WoodcutTreeBaker()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>19 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-attachmentdefinitions" /><code>{"private "}<Link to="/game-api/types/alta-utilities/atlasdefinition">{"AtlasDefinition"}</Link>{"[] attachmentDefinitions"}</code> | Atlas definitions for attachment renderers. |
| <Link id="m-attachmentlodfilters" /><code>{"private MeshFilter[] attachmentLodFilters"}</code> | Mesh filters for baked attachment LODs. |
| <Link id="m-attachmentlodrenderers" /><code>{"private MeshRenderer[] attachmentLodRenderers"}</code> | Renderers for baked attachment LODs. |
| <Link id="m-attachmentlods" /><code>{"private Mesh[] attachmentLods"}</code> | Baked attachment meshes. |
| <Link id="m-attachments" /><code>{"private HashSet<"}<Link to="/game-api/types/alta-crafting/treeattachment">{"TreeAttachment"}</Link>{"> attachments"}</code> | Attachments currently included in the bake. |
| <Link id="m-damaged" /><code>{"private List<"}<Link to="/game-api/types/alta-crafting/woodcuttree-mapnode">{"WoodcutTree.MapNode"}</Link>{"> damaged"}</code> | Nodes with changed colours that are baked into the damaged mesh. |
| <Link id="m-damagedlod" /><code>{"private Mesh[] damagedLod"}</code> | Baked damaged-node meshes. |
| <Link id="m-damagedlodfilter" /><code>{"private MeshFilter[] damagedLodFilter"}</code> | Mesh filters that show the damaged bake. |
| <Link id="m-damagedlodrenderer" /><code>{"private MeshRenderer[] damagedLodRenderer"}</code> | Renderers that show the damaged bake. |
| <Link id="m-damagedvertexoffset" /><code>{"private List<int> damagedVertexOffset"}</code> | Start vertex of each damaged node within the damaged mesh. |
| <Link id="m-distancelodgroup" /><code>{"private "}<Link to="/game-api/types/global-c-d/distancelodgroup">{"DistanceLODGroup"}</Link>{" distanceLODGroup"}</code> | The tree's distance LOD group that renderers are added to and removed from. |
| <Link id="m-isleavesmodified" /><code>{"private bool isLeavesModified"}</code> | Leaves dirty flag. |
| <Link id="m-islod0modified" /><code>{"private bool isLod0Modified"}</code> | Set while a LOD 0 rebake is scheduled. |
| <Link id="m-lodfilters" /><code>{"private MeshFilter[] lodFilters"}</code> | Mesh filters for trunk LODs. Not used in this class. |
| <Link id="m-lodrenderers" /><code>{"private MeshRenderer[] lodRenderers"}</code> | Renderers for trunk LODs. Not used in this class. |
| <Link id="m-lods" /><code>{"private Mesh[] lods"}</code> | Trunk LOD meshes. Cleaned up on destroy but never created in this class. |
| <Link id="m-nodes" /><code>{"private HashSet<"}<Link to="/game-api/types/alta-crafting/woodcuttree-mapnode">{"WoodcutTree.MapNode"}</Link>{"> nodes"}</code> | Tree nodes found during the last setup. |
| <Link id="m-tree" /><code>{"private "}<Link to="/game-api/types/alta-crafting/woodcuttree">{"WoodcutTree"}</Link>{" tree"}</code> | The woodcut tree being baked. |
| <Link id="m-trunkdefinitions" /><code>{"private "}<Link to="/game-api/types/alta-utilities/atlasdefinition">{"AtlasDefinition"}</Link>{"[] trunkDefinitions"}</code> | Atlas definitions for trunk renderers. Not used in this class. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-editorinitialize" /><code>{"void EditorInitialize()"}</code> | Editor use: hooks `Setup` to the tree's ready-for-bake event. |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | On clients, hooks `Setup` to the tree's ready-for-bake and chopped events. The private overload walks a node tree and collects its renderers and attachments. |
| <Link id="m-regenerateleavesatendofframe" /><code>{"void RegenerateLeavesAtEndOfFrame()"}</code> | Empty. |
| <Link id="m-regeneratelod0atendofframe" /><code>{"void RegenerateLod0AtEndOfFrame()"}</code> | Schedules one `RegenerateLod0` at the end of the frame if not already scheduled. |

<details>
<summary>11 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-clear" /><code>{"private void Clear(ref Mesh[] meshes)"}</code> | Cleans up an array of baked meshes and nulls it. |
| <Link id="m-delayregenerateleaves" /><code>{"private IEnumerator DelayRegenerateLeaves() (iterator)"}</code> | Coroutine that regenerates leaves at the end of the frame. Not started anywhere. |
| <Link id="m-delayregeneratelod0" /><code>{"private IEnumerator DelayRegenerateLod0() (iterator)"}</code> | Coroutine that rebakes the damaged LOD 0 mesh at the end of the frame. |
| <Link id="m-generate" /><code>{"private void Generate()"}</code> | Creates the baked meshes, bakes the damaged LOD 0 mesh and points the third attachment LOD at the second one's mesh. |
| <Link id="m-initialize-2" /><code>{"private void Initialize("}<Link to="/game-api/types/alta-crafting/woodcuttree-mapnode">{"WoodcutTree.MapNode"}</Link>{" node, List<Renderer>[] renderersToModify)"}</code> | On clients, hooks `Setup` to the tree's ready-for-bake and chopped events. The private overload walks a node tree and collects its renderers and attachments. |
| <Link id="m-nodemodified" /><code>{"private void NodeModified("}<Link to="/game-api/types/global-c-d/colormodelcore-tr-tg-tb-ta">{"ColorModelCore"}</Link>{"<"}<Link to="/game-api/types/global-m-o/nullcolormodelpoint">{"NullColorModelPoint"}</Link>{", "}<Link to="/game-api/types/global-m-o/nullcolormodelpoint">{"NullColorModelPoint"}</Link>{", "}<Link to="/game-api/types/global-m-o/nullcolormodelpoint">{"NullColorModelPoint"}</Link>{", "}<Link to="/game-api/types/global-t-x/woodcutpointdata">{"WoodcutPointData"}</Link>{"> core)"}</code> | When a node's colours change, adds it to the damaged bake and schedules a rebake, or updates its colours in place if already baked. |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | Cleans up all baked meshes. |
| <Link id="m-regenerateleaves" /><code>{"private void RegenerateLeaves()"}</code> | Only clears the leaves modified flag; leaf rebaking is not done here. |
| <Link id="m-regeneratelod0" /><code>{"private void RegenerateLod0(bool isGeneratingUndamaged)"}</code> | Bakes all damaged nodes into the damaged LOD mesh, hides their own first renderers and copies their colours in. |
| <Link id="m-remove" /><code>{"private void Remove("}<Link to="/game-api/types/alta-crafting/treeattachment">{"TreeAttachment"}</Link>{" attachment)"}</code> | Removes a broken or moved attachment from the baker and the LOD group. |
| <Link id="m-setup" /><code>{"private void Setup()"}</code> | Clears the previous bake, walks the tree from its root to rebuild LOD renderer lists, then calls `Generate`. |

</details>
