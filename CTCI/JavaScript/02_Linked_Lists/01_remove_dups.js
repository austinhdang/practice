/**
 * Problem:
 * Write code to remove duplicates from an unsorted linked list.
 * 
 * Follow Up:
 * How would you solve this problem if a temporary buffer is not allowed?
 * 
 * @param {LinkedList} list The unsorted linked list to remove from
 * @return {LinkedList} The linked list without duplicates
 */

function removeDuplicates(list) {
  if (!list) return null;

  let curr = list;
  const seen = new Set();
  // add the head to set
  seen.add(curr);
  while (curr.next) {
    if (seen.has(curr.next.val)) {
      // skip seen node
      curr.next = curr.next.next;
    } else {
      seen.add(curr.next);
      curr = curr.next;
    }
  }
  return list;
}

function removeDuplicatesFollowUp(list) {
  if (!list) return null;

  let curr = list;
  let runner;
  while (curr) {
    runner = curr;
    while (runner.next) {
      if (runner.next.val == curr.val) {
        runner.next = runner.next.next;
      } else {
        runner = runner.next;
      }
    }
    curr = curr.next;
  }
  return list;
}
