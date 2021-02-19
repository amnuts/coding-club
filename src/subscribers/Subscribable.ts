export class Subscribable
{
    protected domElements: Array<HTMLDivElement> = [];

    public constructor(domIds: Array<string>)
    {
        domIds.forEach(e => {
            let node = document.getElementById(e);
            if (node) {
                this.domElements.push(node as HTMLDivElement)
            }
        });
    }
}