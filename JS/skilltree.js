(() => {
	const lockedColor = "#ccc";

	/* DATASET */
	let nodes = new vis.DataSet([
		{ id: 0, value: 50, level: 1, label: "Dawn of Civilization", text:"Dit is flavour text", color:"red" },
		{ id: 1, value: 20, level: 2, label: "Pottery", color: "cyan"},
		{ id: 2, value: 20, level: 2, label: "Seed Planting", color:"#2DE35F" },
		{ id: 3, value: 20, level: 2, label: "Wood working" },
		{ id: 4, value: 20, level: 2, label: "Permanent Homage" },
		{ id: 5, value: 20, level: 2, label: "War tactics" },
		{ id: 6, value: 20, level: 3, label: "Instruments" },
		{ id: 7, value: 20, level: 3, label: "Writing" },
		{ id: 8, value: 20, level: 3, label: "Long term storage" },
		{ id: 9, value: 20, level: 3, label: "Stronger clothing" },
		{ id: 10, value: 20, level: 3, label: "Agriculture" },
		{ id: 11, value: 20, level: 3, label: "Cooking" },
		{ id: 12, value: 20, level: 3, label: "Stone cutting" },
		{ id: 13, value: 20, level: 3, label: "Regional building" },
		{ id: 14, value: 20, level: 3, label: "Path creation" },
		{ id: 15, value: 20, level: 3, label: "Stronger as force" },
		{ id: 16, value: 20, level: 4, label: "Music creation" },
		{ id: 17, value: 20, level: 4, label: "Currency" },
		{ id: 18, value: 20, level: 4, label: "Boat Construction" },
		{ id: 19, value: 20, level: 4, label: "Crushing Wheel" },
		{ id: 20, value: 20, level: 4, label: "Animal Husbandry" },
		{ id: 21, value: 20, level: 4, label: "Irrigation" },
		{ id: 22, value: 20, level: 4, label: "Spices" },
		{ id: 23, value: 20, level: 4, label: "Masonry" },
		{ id: 24, value: 20, level: 4, label: "Stronger tools" },
		{ id: 25, value: 20, level: 4, label: "City Defenses" },
		{ id: 26, value: 20, level: 4, label: "Public buildings" },
		{ id: 27, value: 20, level: 4, label: "Weapon crafting" },
		{ id: 28, value: 20, level: 4, label: "Formation training" },
		{ id: 29, value: 20, level: 5, label: "Water works" },
		{ id: 30, value: 20, level: 5, label: "Effects outside Nature" },
		{ id: 31, value: 20, level: 5, label: "Great structures" },
		{ id: 32, value: 20, level: 5, label: "Copper working" },
		{ id: 33, value: 20, level: 5, label: "Fortified buildings" },
		{ id: 34, value: 20, level: 5, label: "Pikes for reach" },
		{ id: 35, value: 20, level: 5, label: "Ranged mastery" },
	]
	//.map(n => { n.label += " \n("+ n.id +")"; return n}) //Leave commented, makes it easier to see what node has which value
	);


	let edges = new vis.DataSet([
		{ from: 0, to: 1, arrows: "to" },
		{ from: 0, to: 2, arrows: "to" },
		{ from: 0, to: 3, arrows: "to" },
		{ from: 0, to: 4, arrows: "to" },
		{ from: 0, to: 5, arrows: "to" },
		{ from: 1, to: 6, arrows: "to" },
		{ from: 1, to: 7, arrows: "to" },
		{ from: 1, to: 8, arrows: "to" },
		{ from: 1, to: 9, arrows: "to" },
		{ from: 2, to: 10, arrows: "to" },
		{ from: 2, to: 11, arrows: "to" },
		{ from: 3, to: 12, arrows: "to" },
		{ from: 4, to: 13, arrows: "to" },
		{ from: 4, to: 14, arrows: "to" },
		{ from: 5, to: 15, arrows: "to" },
		{ from: 6, to: 16, arrows: "to" },
		{ from: 7, to: 17, arrows: "to" },
		{ from: 8, to: 18, arrows: "to" },
		{ from: 8, to: 19, arrows: "to" },
		{ from: 10, to: 19, arrows: "to" },
		{ from: 10, to: 20, arrows: "to" },
		{ from: 10, to: 21, arrows: "to" },
		{ from: 10, to: 22, arrows: "to" },
		{ from: 11, to: 22, arrows: "to" },
		{ from: 12, to: 23, arrows: "to" },
		{ from: 12, to: 24, arrows: "to" },
		{ from: 13, to: 25, arrows: "to" },
		{ from: 14, to: 26, arrows: "to" },
		{ from: 15, to: 27, arrows: "to" },
		{ from: 15, to: 28, arrows: "to" },
		{ from: 21, to: 29, arrows: "to" },
		{ from: 22, to: 30, arrows: "to" },
		{ from: 23, to: 29, arrows: "to" },
		{ from: 23, to: 31, arrows: "to" },
		{ from: 24, to: 31, arrows: "to" },
		{ from: 24, to: 32, arrows: "to" },
		{ from: 25, to: 33, arrows: "to" },
		{ from: 27, to: 34, arrows: "to" },
		{ from: 27, to: 35, arrows: "to" },
	]);

	/******************************************
	        NO EDITING UNDERNEATH
	******************************************/

	const container = document.getElementById("skilltree");
	const data = {
		nodes: nodes,
		edges: edges
	};
	var options = {
        height: '100%',
        width: '100%',
        interaction:{
            dragNodes:false,
            dragView: true,
            },
        nodes: {
            color: lockedColor,
            font: {
                face: "Raleway, Helvetica, Arial",
                size: 11,
                color: "#666"
            }
        },
        layout: {
            hierarchical: {
              direction: "UD"
            }
          }
    };
	let network = new vis.Network(container, data, options);


    const checkbox = document.getElementById('flexSwitchCheckDefault')
    checkbox.addEventListener('change', (event) => {
        let techTreeDir="";

        if (event.currentTarget.checked) {
            techTreeDir= 'LR';
        }else {
            techTreeDir= 'UD';
        }
        options.layout.hierarchical.direction=techTreeDir;
        network = new vis.Network(container, data, options);
    })

const buildGraphDisplay = function() {


    /* SUBTREE */
    /* glitch subtree */
    const getSubtree = nodeId => {
        let childs = network.getConnectedNodes(nodeId, "from");
        for (let i = 0; i < childs.length; i++) {
            childs = childs.concat(network.getConnectedNodes(childs[i], "from"));
        }
        return childs;
    };

    /* glitch parentTree */
    const getParentstree = nodeId => {
        let parents = network.getConnectedNodes(nodeId, "to");
        for (let i = 0; i < parents.length; i++) {
            parents = parents.concat(network.getConnectedNodes(parents[i], "to"));
        }
        return parents;
    };

    nodes.getIds().forEach(nodeId => {
        let currNode = nodes.get(nodeId);

        // updating nodes with subtree
        // example using reduce
        currNode.requiredSubtree = getSubtree(nodeId).reduce( (requiredNodes, id) => {
            const childNode = nodes.get(id);
            (childNode.selected !== true && typeof requiredNodes.find(o => o.id === childNode.id) === "undefined" && requiredNodes.push(childNode));
            return requiredNodes;
        }, []);

        // updating nodes with parentspath
        // example with forEach
        let selectedParents = [];
        getParentstree(nodeId).forEach(node => {
            const parentNode = nodes.get(node);
            (parentNode.selected === true && typeof selectedParents.find(o => o.id === parentNode.id) === "undefined" && selectedParents.push(parentNode));
        });
        currNode.selectedParents = selectedParents;

        currNode.title = currNode.label;

        if(currNode.text!=null){
        currNode.title += ": "+currNode.text ;
        }

        nodes.update(currNode);
    });
};

	/* EVENTS HANDLING */
	/**
		init
	**/
	network.once("stabilized", () => {
		buildGraphDisplay();
	});
})();