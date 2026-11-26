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

- **Listed in** [Crafting and making](/mod/game-api/types/alta-crafting)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"WoodcutTreeBaker()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>19 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-attachmentdefinitions" /><code>{"private "}<Link to="/mod/game-api/types/alta-utilities/atlasdefinition">{"AtlasDefinition"}</Link>{"[] attachmentDefinitions"}</code> | <span className="api-desc">Atlas definitions for attachment renderers.</span> |
| <Link id="m-attachmentlodfilters" /><code>{"private MeshFilter[] attachmentLodFilters"}</code> | <span className="api-desc">Mesh filters for baked attachment LODs.</span> |
| <Link id="m-attachmentlodrenderers" /><code>{"private MeshRenderer[] attachmentLodRenderers"}</code> | <span className="api-desc">Renderers for baked attachment LODs.</span> |
| <Link id="m-attachmentlods" /><code>{"private Mesh[] attachmentLods"}</code> | <span className="api-desc">Baked attachment meshes.</span> |
| <Link id="m-attachments" /><code>{"private HashSet<"}<Link to="/mod/game-api/types/alta-crafting/treeattachment">{"TreeAttachment"}</Link>{"> attachments"}</code> | <span className="api-desc">Attachments currently included in the bake.</span> |
| <Link id="m-damaged" /><code>{"private List<"}<Link to="/mod/game-api/types/alta-crafting/woodcuttree-mapnode">{"WoodcutTree.MapNode"}</Link>{"> damaged"}</code> | <span className="api-desc">Nodes with changed colours that are baked into the damaged mesh.</span> |
| <Link id="m-damagedlod" /><code>{"private Mesh[] damagedLod"}</code> | <span className="api-desc">Baked damaged-node meshes.</span> |
| <Link id="m-damagedlodfilter" /><code>{"private MeshFilter[] damagedLodFilter"}</code> | <span className="api-desc">Mesh filters that show the damaged bake.</span> |
| <Link id="m-damagedlodrenderer" /><code>{"private MeshRenderer[] damagedLodRenderer"}</code> | <span className="api-desc">Renderers that show the damaged bake.</span> |
| <Link id="m-damagedvertexoffset" /><code>{"private List<int> damagedVertexOffset"}</code> | <span className="api-desc">Start vertex of each damaged node within the damaged mesh.</span> |
| <Link id="m-distancelodgroup" /><code>{"private "}<Link to="/mod/game-api/types/global-c-d/distancelodgroup">{"DistanceLODGroup"}</Link>{" distanceLODGroup"}</code> | <span className="api-desc">The tree's distance LOD group that renderers are added to and removed from.</span> |
| <Link id="m-isleavesmodified" /><code>{"private bool isLeavesModified"}</code> | <span className="api-desc">Leaves dirty flag.</span> |
| <Link id="m-islod0modified" /><code>{"private bool isLod0Modified"}</code> | <span className="api-desc">Set while a LOD 0 rebake is scheduled.</span> |
| <Link id="m-lodfilters" /><code>{"private MeshFilter[] lodFilters"}</code> | <span className="api-desc">Mesh filters for trunk LODs. Not used in this class.</span> |
| <Link id="m-lodrenderers" /><code>{"private MeshRenderer[] lodRenderers"}</code> | <span className="api-desc">Renderers for trunk LODs. Not used in this class.</span> |
| <Link id="m-lods" /><code>{"private Mesh[] lods"}</code> | <span className="api-desc">Trunk LOD meshes. Cleaned up on destroy but never created in this class.</span> |
| <Link id="m-nodes" /><code>{"private HashSet<"}<Link to="/mod/game-api/types/alta-crafting/woodcuttree-mapnode">{"WoodcutTree.MapNode"}</Link>{"> nodes"}</code> | <span className="api-desc">Tree nodes found during the last setup.</span> |
| <Link id="m-tree" /><code>{"private "}<Link to="/mod/game-api/types/alta-crafting/woodcuttree">{"WoodcutTree"}</Link>{" tree"}</code> | <span className="api-desc">The woodcut tree being baked.</span> |
| <Link id="m-trunkdefinitions" /><code>{"private "}<Link to="/mod/game-api/types/alta-utilities/atlasdefinition">{"AtlasDefinition"}</Link>{"[] trunkDefinitions"}</code> | <span className="api-desc">Atlas definitions for trunk renderers. Not used in this class.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-editorinitialize" /><code>{"void EditorInitialize()"}</code> | <span className="api-desc">Editor use: hooks `Setup` to the tree's ready-for-bake event.</span> |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | <span className="api-desc">On clients, hooks `Setup` to the tree's ready-for-bake and chopped events. The private overload walks a node tree and collects its renderers and attachments.</span> |
| <Link id="m-regenerateleavesatendofframe" /><code>{"void RegenerateLeavesAtEndOfFrame()"}</code> | <span className="api-desc">Empty.</span> |
| <Link id="m-regeneratelod0atendofframe" /><code>{"void RegenerateLod0AtEndOfFrame()"}</code> | <span className="api-desc">Schedules one `RegenerateLod0` at the end of the frame if not already scheduled.</span> |

<details className="api-private">
<summary>11 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-clear" /><code>{"private void Clear(ref Mesh[] meshes)"}</code> | <span className="api-desc">Cleans up an array of baked meshes and nulls it.</span> |
| <Link id="m-delayregenerateleaves" /><code>{"private IEnumerator DelayRegenerateLeaves() (iterator)"}</code> | <span className="api-desc">Coroutine that regenerates leaves at the end of the frame. Not started anywhere.</span> |
| <Link id="m-delayregeneratelod0" /><code>{"private IEnumerator DelayRegenerateLod0() (iterator)"}</code> | <span className="api-desc">Coroutine that rebakes the damaged LOD 0 mesh at the end of the frame.</span> |
| <Link id="m-generate" /><code>{"private void Generate()"}</code> | <span className="api-desc">Creates the baked meshes, bakes the damaged LOD 0 mesh and points the third attachment LOD at the second one's mesh.</span> |
| <Link id="m-initialize-2" /><code>{"private void Initialize("}<Link to="/mod/game-api/types/alta-crafting/woodcuttree-mapnode">{"WoodcutTree.MapNode"}</Link>{" node, List<Renderer>[] renderersToModify)"}</code> | <span className="api-desc">On clients, hooks `Setup` to the tree's ready-for-bake and chopped events. The private overload walks a node tree and collects its renderers and attachments.</span> |
| <Link id="m-nodemodified" /><code>{"private void NodeModified("}<Link to="/mod/game-api/types/global-c-d/colormodelcore-tr-tg-tb-ta">{"ColorModelCore"}</Link>{"<"}<Link to="/mod/game-api/types/global-m-o/nullcolormodelpoint">{"NullColorModelPoint"}</Link>{", "}<Link to="/mod/game-api/types/global-m-o/nullcolormodelpoint">{"NullColorModelPoint"}</Link>{", "}<Link to="/mod/game-api/types/global-m-o/nullcolormodelpoint">{"NullColorModelPoint"}</Link>{", "}<Link to="/mod/game-api/types/global-t-x/woodcutpointdata">{"WoodcutPointData"}</Link>{"> core)"}</code> | <span className="api-desc">When a node's colours change, adds it to the damaged bake and schedules a rebake, or updates its colours in place if already baked.</span> |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | <span className="api-desc">Cleans up all baked meshes.</span> |
| <Link id="m-regenerateleaves" /><code>{"private void RegenerateLeaves()"}</code> | <span className="api-desc">Only clears the leaves modified flag; leaf rebaking is not done here.</span> |
| <Link id="m-regeneratelod0" /><code>{"private void RegenerateLod0(bool isGeneratingUndamaged)"}</code> | <span className="api-desc">Bakes all damaged nodes into the damaged LOD mesh, hides their own first renderers and copies their colours in.</span> |
| <Link id="m-remove" /><code>{"private void Remove("}<Link to="/mod/game-api/types/alta-crafting/treeattachment">{"TreeAttachment"}</Link>{" attachment)"}</code> | <span className="api-desc">Removes a broken or moved attachment from the baker and the LOD group.</span> |
| <Link id="m-setup" /><code>{"private void Setup()"}</code> | <span className="api-desc">Clears the previous bake, walks the tree from its root to rebuild LOD renderer lists, then calls `Generate`.</span> |

</details>
