/**
 * Initialize your data structure here. Set the size of the queue to be k.
 * @param {number} k
 */
 var MyCircularQueue = function(k) {
    this.queue = new Array(k).fill(undefined);
    this.size = k;
    this.front = -1;
    this.rear = -1;
};

/**
 * Insert an element into the circular queue. Return true if the operation is successful. 
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function(value) {
    if (this.isFull()) {
        return false;
    }
    
    if (this.front === -1) {
        this.front = 0
    }
    
    this.rear = (this.rear + 1) % this.size;
    this.queue[this.rear] = value;
    
    return true;
};

/**
 * Delete an element from the circular queue. Return true if the operation is successful.
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function() {
    if (this.isEmpty()) {
        return false;
    }
    
    if (this.front === this.rear) {
        // reset the pointers when only one item in the queue
        this.front = -1;
        this.rear = -1;
    } else {
        // otherwise, move head to the next position
        this.front = (this.front + 1) % this.size;
    }
    
    return true;
};

/**
 * Get the front item from the queue.
 * @return {number}
 */
MyCircularQueue.prototype.Front = function() {
    if (this.isEmpty()) {
        return -1;
    }
    return this.queue[this.front];
};

/**
 * Get the last item from the queue.
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function() {
    if (this.isEmpty()) {
        return -1;
    }
    return this.queue[this.rear];
};

/**
 * Checks whether the circular queue is empty or not.
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function() {
    return this.front === -1;
        
};

/**
 * Checks whether the circular queue is full or not.
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function() {
    if (this.front === 0 && this.rear == this.size - 1) {
        return true;
    }
    if (this.front === this.rear + 1) {
        return true;
    }
    return false;
};

/** 
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */ 

