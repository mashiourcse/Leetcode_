function ListNode(val,next){
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
  }
  function traverseList(head){
    
    let current = head;
    var len = 0;
    
    while(current !== null){
      current = current.next;
      len++;
    }
    //console.log("Length: " + len);
    let middle = (len%2 == 0)? (len/2) : Math.floor(len/2);
    //console.log("Middle: " + middle);
    current = head;
    for(var i=0; i<middle; i++){
      
      current = current.next;
      console.log(current.val);
    }
    return current;
    
  }
  
  const node1 = new ListNode(1);
  const node2 = new ListNode(2);
  const node3 = new ListNode(3);
  const node4 = new ListNode(4);
  const node5 = new ListNode(5);
  const node6 = new ListNode(6);
  node1.next = node2;
  node2.next = node3;
  node3.next = node4;
  node4.next = node5;
  //node5.next = node6;
  
  
  
  console.log(traverseList(node1));