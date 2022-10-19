class Heap<T>{
    private harr : T[];
    private count : number;
    
    private max_heapify(i:number){
        let left = 2*i +1;
        let right = 2*i + 2;

        let greatest = i;
        if(left<this.count && this.harr[greatest]<this.harr[left])
            greatest = left;
        if(right<this.count && this.harr[greatest]<this.harr[right])
            greatest = right;

        if(greatest!==i){
            [this.harr[i],this.harr[greatest]] = [this.harr[greatest],this.harr[i]];
            this.max_heapify(greatest);
        }
    }

    private perlocateUp_max(i:number){
        let parent = Math.floor((i-1)/2);

        if(i>0 && this.harr[parent]<this.harr[i] ){
            [this.harr[parent],this.harr[i]] = [this.harr[i],this.harr[parent]];
            this.perlocateUp_max(parent);
        }
    }

    private buildHeap(arr:T[]){

    }

    constructor(arr?:T[]){
        this.count = 0;
        this.harr = []
        if(arr!==undefined){
            // buildHeap
        }
    }

    public push(elem: T):void{
        //push the element to the end.
        this.harr.push(elem);
        //perlocate
        this.perlocateUp_max(this.count);
        this.count++;
    }

    public pop():T|null{
        if(this.count===0)
            return null;

        //store the first element.
        let greatestElem = this.harr[0];
        //assign the last element to the first element.
        this.harr[0] = this.harr[this.count-1];
        this.harr.pop();
        //heapify the root.
        this.max_heapify(0);

        this.count--;
        return greatestElem;

    }


    public top():T|null{
        if(this.empty())
            return null
        return this.harr[0];
    }

    public size():number{
        return this.count;
    }

    public empty():boolean{
        return this.count===0;
    }

    public print(){
        console.log(this.harr)
    }
}


let heap = new Heap<number>();
heap.push(1);
heap.push(4);
heap.push(6);
heap.push(0);
heap.push(9);
heap.push(0);
heap.pop();


heap.print();
