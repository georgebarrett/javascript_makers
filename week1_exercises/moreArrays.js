const addToBatch = (batch, id) => {  
    if (batch.length >= 5) {
        return batch
    } else {
        return batch.concat(id)
    }
};

console.log(addToBatch([1, 2, 3, 4,], 10));