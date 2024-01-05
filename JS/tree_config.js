treeConfig = {
    // svgSrc: '/demo/demo_resources/tree.svg',
    imgDir: './images/',
    jsonSrc: '/JSON/tech_tree.json',
    treeWidth: 900,
    treeHeight: 900,


    closeTooltip: 'onmouseout',  // x-button || onmouseout
    openTooltip: 'onmouseover',  // onclick, onmouseover, or any svg attr
    showNodeNames: false,  // boolean
    showImages: true,
    futureTechFog: 'none',  // [ none || aesthetic || partial(not implemented) || complete(not implemented) ] sets to what degree unresearched tech should be shown
	// TODO: add toggle buttons (or sliders) for the following :
    tooltipH: 200,
    tooltipW: 400,
    tooltipTextLineCount: 12,  // approx number of lines of description text in the tooltip
    nodeSize: 70,  // [px]
    transitionTime: 2000    // ms used for transitions

};