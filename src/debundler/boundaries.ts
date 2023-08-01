export interface BundleInfo {
    ast: any;
    title: string;
    parent: any;
};

export class Boundaries {
    private boundaries: Map<any, BundleInfo>;

    constructor() {
        this.boundaries = new Map();
    }

    set(key: any[], value: BundleInfo) {
        this.boundaries.set(key, value);
    }

    isNotEmpty(): boolean {
        return this.boundaries.size > 0;
    }

    // FIXME: after each run of debundler AST will be transformed.
    // It's bad idea to iterate over the boundaries from first initialization.
    *overHeadNodes(): IterableIterator<BundleInfo | undefined > {
        while (this.isNotEmpty()) {
            yield this.getCurrentOverHeadNode();
        }
    }

    getCurrentOverHeadNode(): BundleInfo | undefined {
        let overheadNodeKey = this.boundaries.keys().next().value;
        for (const key of this.boundaries.keys()) {
            if (key[0] < overheadNodeKey[0] && key[1] > overheadNodeKey[1]) {
                overheadNodeKey = key;
            }
        }

        const bundleInfo = this.boundaries.get(overheadNodeKey);
        this.boundaries.delete(overheadNodeKey);

        return bundleInfo;
    }
};
