let regularQueue = [];
let vipQueue = [];

// Function to add customer to the queue
function addToQueue() {
    const name = document.getElementById('name').value;
    const priority = document.getElementById('priority').value;

    if (name === '') {
        alert('Please enter a name');
        return;
    }

    if (priority === 'vip') {
        vipQueue.push(name);
    } else {
        regularQueue.push(name);
    }

    document.getElementById('name').value = '';  //to Clear the input
    updateQueueDisplay();
}

// Function to update the queue display
function updateQueueDisplay() {
    const queueList = document.getElementById('queue-list');
    queueList.innerHTML = '';  // Cleared the current list

    // First show VIP queue
    vipQueue.forEach((name) => {
        const listItem = document.createElement('li');
        listItem.className = 'vip';
        listItem.textContent = `VIP - ${name}`;
        queueList.appendChild(listItem); // append vip  elem to array 
    }) ;

    // Then show Regular queue
    regularQueue.forEach((name) => {
        const listItem = document.createElement('li');
        listItem.className = 'regular';
        listItem.textContent = `Regular - ${name}`;
        queueList.appendChild(listItem); // append regular elemints to array 
    });
}

// Function to  next customer
//shift removes first  elememt in the array 
 
function serveCustomer() {
    if (vipQueue.length > 0) {
        vipQueue.shift();  //  first VIP customer
    } else if (regularQueue.length > 0) {
        regularQueue.shift();  // first regular customer
    } else {
        alert('No customers in the queue');
    }

    updateQueueDisplay();
}
