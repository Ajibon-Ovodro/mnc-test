const counterFunc = (arr, r) => {
    let second_elm = {}
    let third_elm = {}
    let count = 0;
    arr.map((item,index) => {
      const curr_val = arr[index];
      if(third_elm[curr_val]){
        count += third_elm[curr_val];
      }
      if(second_elm[curr_val]){
        third_elm[curr_val*r] = third_elm[curr_val*r] + second_elm[curr_val] || second_elm[curr_val];
      }
      second_elm[curr_val*r] = second_elm[curr_val*r]+1 || 1;
    });

    return count;
}

console.log(counterFunc([1,5,5,25,125], 5));