function Node(val) {
    this.val = val;
    this.next = null;
}

var MyLinkedList = function() {
    this.head = null;
    this.size = 0;
}

MyLinkedList.prototype.addAtHead = function(val) {
    let newNode = new Node(val);
    newNode.next = this.head;
    this.head = newNode;
    this.size++;
}

MyLinkedList.prototype.addAtTail = function(val) {
    let newNode = new Node(val);
    let cur = this.head;
    if (cur == null) {
        this.head = newNode;
    } else {
        while(cur.next !== null) {
            cur = cur.next;
        }
        cur.next = newNode;
    }
    this.size++;
}

MyLinkedList.prototype.addAtIndex = function(index, val) {
    if (index == 0) {
        this.addAtHead(val);
        return;
    } else if (index == this.size) {
        this.addAtTail(val);
        return;
    } else {
        let newNode = new Node(val);
        let cur = this.head;
        for (let i = 0; i < index - 1; i++) {
            cur = cur.next;
        }
        newNode.next = cur.next;
        cur.next = newNode;
    }
    this.size++;
}

MyLinkedList.prototype.get = function(index) {
    if (index < 0 || index >= this.size) return -1;

    let cur = this.head;
    for (let i = 0; i < index; i++) {
        cur = cur.next;
    }
    return cur.val;
}

MyLinkedList.prototype.deleteAtIndex = function(index) {
    if (index < 0 || index >= this.size) return;
    if (index == 0) {
        this.head = this.head.next;
    } else {
        let cur = this.head;
        for (let i = 0; i < index - 1; i++) {
            cur = cur.next;
        }
    
        cur.next = cur.next.next;
    }
    this.size--;
    console.log(this);
}

var obj = new MyLinkedList();

obj.addAtHead(5);
obj.addAtTail(7);
obj.addAtIndex(1, 18);
console.log(obj.get(2));
obj.deleteAtIndex(2);