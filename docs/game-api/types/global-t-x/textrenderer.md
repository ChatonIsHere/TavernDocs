---
title: "TextRenderer"
description: "Draws 3D text in the world (signs, labels, dock counts) by building a mesh per letter from a TextFont."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TextRenderer

A **class** in `Root.Township`, no namespace.

Draws 3D text in the world (signs, labels, dock counts) by building a mesh per letter from a `TextFont`. Client side visuals only: on a headless server setting `Text` stores the string but builds nothing.

- **Listed in** [No namespace: T to X](/game-api/types/global-t-x)
- **Inherits or implements** `MonoBehaviour`, [`IBakeable`](/game-api/types/global-i-l/ibakeable), [`IBuildRendererBakeable`](/game-api/types/assembly-other/ibuildrendererbakeable), [`IBuildBakeable`](/game-api/types/assembly-other/ibuildbakeable)
- **Nested types** [`AndroidTextRendererQueue`](/game-api/types/global-t-x/textrenderer-androidtextrendererqueue), [`TextRendererDistanceChecker`](/game-api/types/global-t-x/textrenderer-textrendererdistancechecker), [`TextVerticalAlignment`](/game-api/types/global-t-x/textrenderer-textverticalalignment)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"TextRenderer()"}</code> |

## Fields

<details>
<summary>43 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-activecolor" /><code>{"private Color activeColor"}</code> | Colour applied to letters as they're built; colour tags change it mid-line. |
| <Link id="m-actualtext" /><code>{"private string actualText"}</code> | The text currently built, so a refresh with the same text is skipped. |
| <Link id="m-alignment" /><code>{"private TextAlignment alignment"}</code> | Backing field for `Alignment`. |
| <Link id="m-androidmaterial" /><code>{"private Material androidMaterial"}</code> | Material used on Android. |
| <Link id="m-androidtintcolor" /><code>{"private Color androidTintColor"}</code> | Tint used on Android. |
| <Link id="m-bestfittowidth" /><code>{"private bool bestFitToWidth"}</code> | Single-line only: scales the text to fit `maxWidth`, within `minScale` and `maxScale`. |
| <Link id="m-cachedtransform" /><code>{"private Transform cachedTransform"}</code> | Cached transform, used by the distance checker. |
| <Link id="m-coloredmaterials" /><code>{"private static readonly Dictionary<int, Material> coloredMaterials"}</code> | Shared cache of tinted material copies, keyed by material and colour. |
| <Link id="m-coloredmeshes" /><code>{"private static readonly Dictionary<int, Mesh> coloredMeshes"}</code> | Shared cache of vertex-coloured mesh copies, keyed by mesh and colour. |
| <Link id="m-currentcenter" /><code>{"private Vector2 currentCenter"}</code> | Backing field for `CurrentCenter`. |
| <Link id="m-font" /><code>{"private "}<Link to="/game-api/types/global-t-x/textfont">{"TextFont"}</Link>{" font"}</code> | Backing field for `Font`. |
| <Link id="m-generated" /><code>{"private List<Mesh> generated"}</code> | Meshes made by this renderer, cleaned on destroy. |
| <Link id="m-haslinelimit" /><code>{"private bool hasLineLimit"}</code> | Multi-line only: whether `maxLines` applies. |
| <Link id="m-htmltagregex" /><code>{"private static readonly Regex htmlTagRegex"}</code> | Regex that finds `<c:colour>` and closing tags in the text. |
| <Link id="m-ignoredchars" /><code>{"private static readonly char[] ignoredChars"}</code> | Characters that don't log a warning when the font lacks them. |
| <Link id="m-isdelayingineditor" /><code>{"private bool isDelayingInEditor"}</code> | Editor: makes the first refresh call wait, so edits are batched. |
| <Link id="m-ismerging" /><code>{"private bool isMerging"}</code> | Builds each line as one merged mesh instead of an object per letter. Always on for baked text. |
| <Link id="m-ismono" /><code>{"private bool isMono"}</code> | True while inside a `\u0002` monospace section. |
| <Link id="m-ismultiline" /><code>{"private bool isMultiLine"}</code> | Wraps the text onto several lines at `lineWidth`. |
| <Link id="m-isrefreshing" /><code>{"private bool isRefreshing"}</code> | Inspector button that calls `DebugRefresh`. |
| <Link id="m-isstatic" /><code>{"private bool isStatic"}</code> | The text never moves, so the distance checker caches its position. |
| <Link id="m-isstatictext" /><code>{"private bool isStaticText"}</code> | Bakes the text during prefab bake and deletes the component. |
| <Link id="m-linespacing" /><code>{"private float lineSpacing"}</code> | Vertical gap between lines. |
| <Link id="m-linewidth" /><code>{"private float lineWidth"}</code> | Wrap width for multi-line text, before scale. |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> | NLog logger for this class. |
| <Link id="m-material" /><code>{"private Material material"}</code> | Material used on non-Android platforms. |
| <Link id="m-maxlines" /><code>{"private int maxLines"}</code> | Most lines shown when `hasLineLimit` is on. |
| <Link id="m-maxlodlevel" /><code>{"private int maxLODLevel"}</code> | How many LOD levels of `staticBatchedLODGroup` the baked text joins. |
| <Link id="m-maxrenderdistancesquared" /><code>{"private float maxRenderDistanceSquared"}</code> | Squared distance from the local player beyond which the text hides; 0 means always shown. |
| <Link id="m-maxscale" /><code>{"private float maxScale"}</code> | Largest scale best fit may use. |
| <Link id="m-maxwidth" /><code>{"private float maxWidth"}</code> | Width best fit scales the text to. |
| <Link id="m-meshcoloring" /><code>{"private static readonly List<Color> meshColoring"}</code> | Scratch list of vertex colours used by `GetMeshForColor`. |
| <Link id="m-minscale" /><code>{"private float minScale"}</code> | Smallest scale best fit may use. |
| <Link id="m-renderers" /><code>{"private readonly HashSet<Renderer> renderers"}</code> | Renderers created for the current text. |
| <Link id="m-scale" /><code>{"private float scale"}</code> | Backing field for `Scale`. |
| <Link id="m-shadowcastingmode" /><code>{"private ShadowCastingMode shadowCastingMode"}</code> | Shadow mode for the letter renderers. |
| <Link id="m-spacing" /><code>{"private float spacing"}</code> | Extra space added to each character's advance. |
| <Link id="m-staticbatchedlodgroup" /><code>{"private LODGroup staticBatchedLODGroup"}</code> | LOD group the baked text renderers are added to during static batching. |
| <Link id="m-supportshtmltags" /><code>{"private bool supportsHTMLTags"}</code> | Backing field for `SupportsHtmlTags`; enables `<c:colour>` tags, which need a vertex colour material. |
| <Link id="m-text" /><code>{"private string text"}</code> | Backing field for `Text`. |
| <Link id="m-tintcolor" /><code>{"private Color tintColor"}</code> | Tint used on non-Android platforms. |
| <Link id="m-useparentlayer" /><code>{"private bool useParentLayer"}</code> | Puts the generated objects on this object's layer. |
| <Link id="m-verticalalignment" /><code>{"private "}<Link to="/game-api/types/global-t-x/textrenderer-textverticalalignment">{"TextRenderer.TextVerticalAlignment"}</Link>{" verticalAlignment"}</code> | Multi-line only: top, centre or bottom alignment of the block. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-alignment-2" /><code>{"TextAlignment Alignment { get; set; }"}</code> | Horizontal alignment (left, centre, right). Takes effect on the next refresh. |
| <Link id="m-color" /><code>{"Color Color { get; set; }"}</code> | Tint colour (a separate value on Android). Setting a new colour forces a rebuild. |
| <Link id="m-currentcenter-2" /><code>{"Vector2 CurrentCenter { get; }"}</code> | Centre of the rendered text in local space, worked out on the last rebuild. |
| <Link id="m-currentheight" /><code>{"float CurrentHeight { get; private set; }"}</code> | Height of the rendered text after scaling, from the last rebuild. |
| <Link id="m-currentlinewidth" /><code>{"float CurrentLineWidth { get; private set; }"}</code> | Width of the rendered line before scaling, from the last rebuild. |
| <Link id="m-currentlinewidthscaled" /><code>{"float CurrentLineWidthScaled { get; }"}</code> | `CurrentLineWidth` times `Scale`. |
| <Link id="m-editormaterial" /><code>{"Material EditorMaterial { set; }"}</code> | Write only. Sets both the normal and Android material. |
| <Link id="m-editortintcolor" /><code>{"Color EditorTintColor { set; }"}</code> | Write only. Sets both the normal and Android tint colour. |
| <Link id="m-font-2" /><code><Link to="/game-api/types/global-t-x/textfont">{"TextFont"}</Link>{" Font { get; set; }"}</code> | The `TextFont` used to build letters. |
| <Link id="m-isduringeditorbake" /><code>{"bool IsDuringEditorBake { get; set; }"}</code> | Set while the text is being baked into static meshes at build time. Clearing is skipped during it. |
| <Link id="m-isqueued" /><code>{"bool IsQueued { get; private set; }"}</code> | Android only: true while the text waits in the shared queue that spreads rebuilds over frames. |
| <Link id="m-isvisible" /><code>{"bool IsVisible { get; private set; }"}</code> | Whether the text is shown. With a max render distance set, it turns off when the local player is far away. |
| <Link id="m-material-2" /><code>{"Material Material { get; }"}</code> | Material for the letters, with a separate one on Android. |
| <Link id="m-maxlines-2" /><code>{"int MaxLines { get; set; }"}</code> | Line limit for multi-line text. Unlimited unless the line limit option is on. |
| <Link id="m-maxscale-2" /><code>{"float MaxScale { get; set; }"}</code> | Largest scale best fit to width may use. |
| <Link id="m-maxwidth-2" /><code>{"float MaxWidth { get; set; }"}</code> | Width best fit to width scales the text into. |
| <Link id="m-minscale-2" /><code>{"float MinScale { get; set; }"}</code> | Smallest scale best fit to width may use. |
| <Link id="m-renderers-2" /><code>{"IEnumerable<Renderer> Renderers { get; }"}</code> | The renderers of the generated letters. |
| <Link id="m-scale-2" /><code>{"float Scale { get; set; }"}</code> | Text scale. Takes effect on the next refresh. |
| <Link id="m-supportshtmltags-2" /><code>{"bool SupportsHtmlTags { get; set; }"}</code> | When on, `c` colour tags in the text are applied. Needs a vertex colour material. |
| <Link id="m-text-2" /><code>{"string Text { get; set; }"}</code> | The text to show. Setting it unescapes sequences such as `\n` and refreshes. |

<details>
<summary>2 private and internal properties</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ibakeable-isbaked" /><code>{"private bool IBakeable.IsBaked { get; set; }"}</code> | Set once the prefab bake has run. |
| <Link id="m-ibuildrendererbakeable-sortingorder" /><code>{"private int IBuildRendererBakeable.SortingOrder { get; }"}</code> | Always 0. |

</details>

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-onfinishedrendering" /><code>{"event Action OnFinishedRendering"}</code> | Android only: raised when a queued rebuild finishes. |
| <Link id="m-onupdatedtext" /><code>{"event Action OnUpdatedText"}</code> | Raised after each rebuild of the text mesh. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-clear" /><code>{"void Clear()"}</code> | Removes the generated letters and empties the text. |
| <Link id="m-onvalidatesettext" /><code>{"void OnValidateSetText(string text)"}</code> | Sets the text without unescaping and refreshes. |
| <Link id="m-refresh" /><code>{"void Refresh(bool isForced = false)"}</code> | Rebuilds the letters if the text changed and the text is visible, or always when forced. Skipped on headless servers unless forced. |
| <Link id="m-setcolor" /><code>{"void SetColor(Color color)"}</code> | Changes the tint and swaps the material on existing letters without rebuilding them. |
| <Link id="m-setuptextandcolor" /><code>{"void SetupTextAndColor(string text, Color color)"}</code> | Sets the tint without a rebuild, then sets `Text`. If the text is unchanged the new colour does not show until a forced refresh. |
| <Link id="m-setvisibility" /><code>{"void SetVisibility(bool isVisible)"}</code> | Shows or hides the letter renderers, and refreshes when shown. |

<details>
<summary>25 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-aligntextline" /><code>{"private void AlignTextLine(float lineWidth, int lineNumber, int lineCount, Transform lineParent)"}</code> | Scales and positions a finished line for the alignment, line number and vertical alignment; with `bestFitToWidth` it first sets `scale` to fit `maxWidth`. |
| <Link id="m-aligntextline-2" /><code>{"private void AlignTextLine(float lineWidth, int lineNumber, int lineCount, List<Vector3> vertices, int startIndex)"}</code> | Scales and positions a finished line for the alignment, line number and vertical alignment; with `bestFitToWidth` it first sets `scale` to fit `maxWidth`. |
| <Link id="m-bake" /><code>{"private void IBakeable.Bake()"}</code> | Prefab bake: builds the text as merged static meshes, adds them to the static LOD group, then removes this component. |
| <Link id="m-bake-2" /><code>{"private void IBuildRendererBakeable.Bake(bool isSaving)"}</code> | Prefab bake: builds the text as merged static meshes, adds them to the static LOD group, then removes this component. |
| <Link id="m-clean" /><code>{"private void IBuildRendererBakeable.Clean()"}</code> | Empty build-bake step. |
| <Link id="m-convertlinearscale" /><code>{"private Vector3 ConvertLinearScale()"}</code> | The line scale to use: uniform, but with z left at 1 on Android. |
| <Link id="m-createlettermesh" /><code>{"private float CreateLetterMesh(string text, float currentLineWidth, int i, GameObject letter, Mesh mesh, Material material, Transform letterTransform, float characterWidth)"}</code> | Adds one letter at the current line offset, either as its own renderer object or into the merged vertex lists, and returns the new line width. |
| <Link id="m-createlettermesh-2" /><code>{"private float CreateLetterMesh(string text, float currentLineWidth, int i, "}<Link to="/game-api/types/global-i-l/lettermesh">{"LetterMesh"}</Link>{" letterMesh, List<Vector3> vertices, List<Vector3> normals, List<int> indices, float characterWidth)"}</code> | Adds one letter at the current line offset, either as its own renderer object or into the merged vertex lists, and returns the new line width. |
| <Link id="m-createmultiline" /><code>{"private void CreateMultiline(Material instancedMaterial)"}</code> | Wraps the text into lines no wider than `lineWidth` (breaking on spaces and new lines), draws up to `MaxLines` of them and works out height and centre. |
| <Link id="m-createtextline" /><code>{"private float CreateTextLine(string text, int lineNumber, int lineCount, List<Vector3> vertices, List<Vector3> normals, List<int> indices, List<Color> colors)"}</code> | Adds one line's letters to the merged vertex, normal, index and colour lists, applying colour tags when `supportsHTMLTags` is on. |
| <Link id="m-debugrefresh" /><code>{"private void DebugRefresh()"}</code> | Inspector button: forces a refresh. |
| <Link id="m-drawgizmoline" /><code>{"private void DrawGizmoLine(float maxWidth)"}</code> | Draws the width guide line for the current alignment. |
| <Link id="m-drawtextline" /><code>{"private float DrawTextLine(string text, int lineNumber, int lineCount, Material material, out float height, out float maxHeight)"}</code> | Builds one line of text under a new `Line N` child, as one object per letter or one merged mesh, and returns its width. |
| <Link id="m-getcolorobjecthash" /><code>{"private int GetColorObjectHash(Object targetObject, Color color)"}</code> | Hash of an object and a colour, used as the key for the coloured material and mesh caches. |
| <Link id="m-getmaterialforcolor" /><code>{"private Material GetMaterialForColor(Material material, Color color)"}</code> | Returns a cached copy of the material tinted to the colour, making it on first use. |
| <Link id="m-getmeshforcolor" /><code>{"private Mesh GetMeshForColor(Mesh mesh, Color color)"}</code> | Returns a cached copy of the mesh with all vertex colours set to the colour. |
| <Link id="m-getwidth" /><code>{"private float GetWidth(char character)"}</code> | Advance width of a character in the font plus spacing. Character `\u0002` toggles monospace mode, in which every character takes a space's width. |
| <Link id="m-internalclear" /><code>{"private void InternalClear()"}</code> | Destroys the generated letter objects and forgets the rendered text. |
| <Link id="m-internalrefresh" /><code>{"private void InternalRefresh()"}</code> | Rebuilds the text meshes now, sets width, height and centre, and raises `OnUpdatedText` (and `OnFinishedRendering` after an Android queue wait). |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | Cleans up generated meshes. |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> | Clears the text objects and stops distance checks. |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> | Draws the best-fit or multi-line width guide. |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> | Registers for distance checks when it has a render distance; otherwise refreshes right away. |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | Keeps `maxWidth` non-negative and turns off `bestFitToWidth` when multi-line. |
| <Link id="m-reset" /><code>{"private void Reset()"}</code> | Editor: fills in the default Vinque font and metal material. |

</details>

## Used in

Members of other types that take, return or hold a `TextRenderer`:

[`AchievementBoard.title`](/game-api/types/global-a-b/achievementboard#m-title), [`AchievementItem.textRenderer`](/game-api/types/global-a-b/achievementitem#m-textrenderer), [`CaveTeleporter.costRenderer`](/game-api/types/alta-world-generation/caveteleporter#m-costrenderer), [`CosmeticRotatingSlot.indexText`](/game-api/types/alta-customization/cosmeticrotatingslot#m-indextext), [`MainMenuShopInterface.accountBalanceText`](/game-api/types/alta-customization/mainmenushopinterface#m-accountbalancetext), [`MainMenuShopItem.costText`](/game-api/types/alta-customization/mainmenushopitem#m-costtext), [`MainMenuShopItem.itemName`](/game-api/types/alta-customization/mainmenushopitem#m-itemname), [`ShopInterface.balanceText`](/game-api/types/alta-customization/shopinterface#m-balancetext), [`ShopInterface.totalCost`](/game-api/types/alta-customization/shopinterface#m-totalcost), [`ShopInterfaceItem.costText`](/game-api/types/alta-customization/shopinterfaceitem#m-costtext), [`ShopInterfaceItem.nameText`](/game-api/types/alta-customization/shopinterfaceitem#m-nametext), [`CommunalStorage.localAllowance`](/game-api/types/alta-items/communalstorage#m-localallowance), [`DockVisual.countLabel3D`](/game-api/types/alta-items/dockvisual#m-countlabel3d), [`PooledDockVisual.countLabel3D`](/game-api/types/alta-items/pooleddockvisual#m-countlabel3d), [`PooledDockVisual.CountLabel3D`](/game-api/types/alta-items/pooleddockvisual#m-countlabel3d-2), [`InfoBoard.renderer`](/game-api/types/alta-world/infoboard#m-renderer), [`AssistedSpawnCommandAction.progressText`](/game-api/types/alta-menus/assistedspawncommandaction#m-progresstext), [`CustomScroller.textSides`](/game-api/types/alta-menus/customscroller#m-textsides), [`CustomScroller.valueText`](/game-api/types/alta-menus/customscroller#m-valuetext), [`EnumMenuSettingBase.valueText`](/game-api/types/alta-menus/enummenusettingbase#m-valuetext), [`MenuGameSetting<T>.displayNameText`](/game-api/types/alta-menus/menugamesetting-t#m-displaynametext), [`ScrollerEnumMenuSetting.textSides`](/game-api/types/alta-menus/scrollerenummenusetting#m-textsides), [`ScrollerSelector.textSides`](/game-api/types/alta-menus/scrollerselector#m-textsides), [`ServerCommandAction.buttonText`](/game-api/types/alta-menus/servercommandaction#m-buttontext), [`ServerMultiCommandAction.buttonText`](/game-api/types/alta-menus/servermulticommandaction#m-buttontext), [`StandardFloatAsEnum.textSides`](/game-api/types/alta-menus/standardfloatasenum#m-textsides), [`StandardFloatAsEnum.valueText`](/game-api/types/alta-menus/standardfloatasenum#m-valuetext), [`UserToken.username`](/game-api/types/alta-menus/usertoken#m-username), [`ConfirmPopupPanel.messageText`](/game-api/types/alta-menus/confirmpopuppanel#m-messagetext), [`InputField.textVisuals`](/game-api/types/alta-menus/inputfield#m-textvisuals), [`ListElementWithButtonAndExtraText.extraText`](/game-api/types/alta-menus/listelementwithbuttonandextratext#m-extratext), [`ListElementWithButtonAndExtraText.ExtraText`](/game-api/types/alta-menus/listelementwithbuttonandextratext#m-extratext-2), [`OptionsPanel.text`](/game-api/types/alta-menus/optionspanel#m-text), [`RecentPlayerPanelListElement.thirdLine`](/game-api/types/alta-menus/recentplayerpanellistelement#m-thirdline), [`CreateServerPanel.canCreateText`](/game-api/types/alta-menus/createserverpanel#m-cancreatetext), [`FriendsInvitesPanel.emptyListText`](/game-api/types/alta-menus/friendsinvitespanel#m-emptylisttext), [`FriendsListPanel.emptyListText`](/game-api/types/alta-menus/friendslistpanel#m-emptylisttext), [`FriendsRequestsPanel.emptyListText`](/game-api/types/alta-menus/friendsrequestspanel#m-emptylisttext), [`GroupInfoTab.infoText`](/game-api/types/alta-menus/groupinfotab#m-infotext), [`GroupMembersPage.emptyListText`](/game-api/types/alta-menus/groupmemberspage#m-emptylisttext), [`GroupMembersPage.tooManyMembersText`](/game-api/types/alta-menus/groupmemberspage#m-toomanymemberstext), [`InboxPanel.infoText`](/game-api/types/alta-menus/inboxpanel#m-infotext), [`IncomingGroupRequestPage.emptyListText`](/game-api/types/alta-menus/incominggrouprequestpage#m-emptylisttext), [`OculusFriendsListPanel.emptyListText`](/game-api/types/alta-menus/oculusfriendslistpanel#m-emptylisttext), [`OutgoingGroupInvitesPage.emptyListText`](/game-api/types/alta-menus/outgoinggroupinvitespage#m-emptylisttext), [`PlayerReportInboxInfoPanel.actionTakenAtText`](/game-api/types/alta-menus/playerreportinboxinfopanel#m-actiontakenattext), [`PlayerReportInboxInfoPanel.actionTakenByText`](/game-api/types/alta-menus/playerreportinboxinfopanel#m-actiontakenbytext), [`PlayerReportInboxInfoPanel.actionTakenText`](/game-api/types/alta-menus/playerreportinboxinfopanel#m-actiontakentext), [`PlayerReportInboxInfoPanel.reasonText`](/game-api/types/alta-menus/playerreportinboxinfopanel#m-reasontext), [`PlayerReportInboxInfoPanel.reportedUserText`](/game-api/types/alta-menus/playerreportinboxinfopanel#m-reportedusertext), [`PlayerReportInboxInfoPanel.reporterText`](/game-api/types/alta-menus/playerreportinboxinfopanel#m-reportertext), [`PlayerReportInboxInfoPanel.serverText`](/game-api/types/alta-menus/playerreportinboxinfopanel#m-servertext), [`PlayerReportInboxInfoPanel.timeText`](/game-api/types/alta-menus/playerreportinboxinfopanel#m-timetext), [`PlayerReportSummaryPanel.actionTakenAtText`](/game-api/types/alta-menus/playerreportsummarypanel#m-actiontakenattext), [`PlayerReportSummaryPanel.actionTakenByText`](/game-api/types/alta-menus/playerreportsummarypanel#m-actiontakenbytext), [`PlayerReportSummaryPanel.actionTakenText`](/game-api/types/alta-menus/playerreportsummarypanel#m-actiontakentext), [`PlayerReportSummaryPanel.reasonText`](/game-api/types/alta-menus/playerreportsummarypanel#m-reasontext), [`PlayerReportSummaryPanel.reportedUserText`](/game-api/types/alta-menus/playerreportsummarypanel#m-reportedusertext), [`PlayerReportSummaryPanel.reporterText`](/game-api/types/alta-menus/playerreportsummarypanel#m-reportertext), [`PlayerReportSummaryPanel.serverText`](/game-api/types/alta-menus/playerreportsummarypanel#m-servertext) and 88 more.
