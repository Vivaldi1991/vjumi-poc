import { FlatTreeControl } from '@angular/cdk/tree';
import { Component } from '@angular/core';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';

/**
 * Food data with nested structure.
 * Each node has a name and an optional list of children.
 */
interface FoodNode {
    name: string;
    children?: FoodNode[];
}

const TREE_DATA: FoodNode[] = [
    {
        name: 'Elektronik',
        children: [
            {
                name: 'Reparaturhandbücher',
                children: [{ name: 'Web' }, { name: 'PDF' }],
            },
            {
                name: 'Vesa-komponenten',
                children: [{ name: 'Vesa' }, { name: 'Komponenten' }],
            },
        ],
    },
];

/** Flat node with expandable and level information */
interface ExampleFlatNode {
    expandable: boolean;
    name: string;
    level: number;
}

/**
 * @title Tree with flat nodes
 */
@Component({
    selector: 'app-infocard-tree',
    templateUrl: './infocard-tree.component.html',
    styleUrls: ['./infocard-tree.component.scss']
})
export class InfocardTreeComponent {
    private _transformer = (node: FoodNode, level: number) => {
        return {
            expandable: !!node.children && node.children.length > 0,
            name: node.name,
            level: level,
        };
    };

    treeControl = new FlatTreeControl<ExampleFlatNode>(
        node => node.level,
        node => node.expandable,
    );

    treeFlattener = new MatTreeFlattener(
        this._transformer,
        node => node.level,
        node => node.expandable,
        node => node.children,
    );

    dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

    constructor() {
        this.dataSource.data = TREE_DATA;
    }

    hasChild = (_: number, node: ExampleFlatNode) => node.expandable;

}