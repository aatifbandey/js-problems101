// JSBIN https://jsbin.com/xiqepufedu/2/edit?html,js,console,output

function sumLargest(arr){
  let fl = 0;
  let fs = arr[0];
  for (let k = 0; k < arr.length; k++) {
    if(arr[k] > fl) {
      fl = arr[k];
    } 
    if( arr[k] <fs && fl != fs) {
    
      fs = arr[k]
    }
  }
  console.log(fl,fs)
  return fl - fs
  
}
// NEED To check again 34,35, 36
// sum of two matrix
function sumThreeElems(arr1, sum) {
  let m = 0;
  let sumPair = [];
  let arr = arr1.sort();
  let r = arr.length -1;
  
  for (let k = 0; k < arr.length -2; k++) {
    m = k+1;
    
    while (m < r) {
      if(arr[k] + arr[m] + arr[r] === sum) {
        sumPair.push([arr[k], arr[m], arr[r]]);
        break;
      } else if(arr[k] + arr[m] + arr[r] < sum) {
        m = m+1
      } else {
        r = r-1
      }
    }
    
  }
  
  console.log(sumPair);
  return sumPair;
  
}


function quickSort(items, left, right) {

  let temp;
  let i=left;
  let j = right;
  let pivotIdx = (left+right)/2
  let pivot = parseInt(items[pivotIdx.toFixed()]);
  while(i <=j) {
   
    while(items[i] < pivot) {
      i++;
    }
     while(items[j] > pivot) {
      j--;
    }
    if(i<=j) {
      temp = items[i];
      items[i] = items[j];
      items[j] = temp;
      i++;
      j--;
    }
  }
  if(left < j) {
    quickSort(items, left, j)
  }
  if(i < right) {
    quickSort(items, i, right)
  }
  return items
}

function checkRotation(str1, str2) {
  let temp = str1+str1;
  let stringFinal = '';
  let found = false;
  for(let k=0; k < str2.length; k++) {
    
    for (let m =0; m<temp.length; m++) {
      if(temp[m] === str2[k]) {
        stringFinal = stringFinal + str2[k];
        k = k+1;
      } else if(stringFinal) {
        break
      }
      if(stringFinal.length === str2.length) {
        found = true;
        break;
      }
      
    }
  }
  return found;
}

function mergeArr(a,b) {
  let temp =[];
  while(a.length || b.length) {
    if(typeof a[0] === 'undefined') {
      temp.push(b[0]);
      b.splice(0,1)
    } else if(a[0] > b[0]) {
      temp.push(b[0]);
      b.splice(0,1)
    } else {
       temp.push(a[0]);
       a.splice(0,1)
    }
  }
  return temp;
}


//document.write(array);


function  mergeSort(arr)
{
  
  if(arr.length < 2) {
    return arr;
  }
	let pivotidx = (arr.length) / 2; 
	var pivot = parseInt(pivotidx.toFixed());  
	const sort_l = arr.splice(0, pivot)
		const sort_a = mergeSort(sort_l)
			const sort_b = mergeSort(arr)
			return mergeArr(sort_a, sort_b);
}
function mergeSortFunc(a,b) {
  let c = [];
  while(a.length && b.length) {
    if(a[0] > b[0]) {
      c.push(b[0]);
      b.shift()
      
    }else{
      c.push(a[0]);
      a.shift()
      
    }
  }
  while(a.length) {
    c.push(a[0])
    a.shift();
    
  }
  while(b.length) {
    c.push(b[0])
    b.shift()
    
  }
  return [...c, ...a, ...b]
  
}

function zigZag(arr) {
  arr=arr.sort();
  for(let k = 1; k<arr.length; k=k+2) {
    
    if(k === arr.length - 1) {
      break
    }
    let temp = arr[k];
    arr[k] = arr[k+1];
    arr[k+1] = temp
  }
  return arr
}

function minimumOfPlatform(arr, dep, n) {
  let platforms = 1;
  let result = 1;
  let i = 1;
  let j=0;
  arr = arr.sort();
  dep = dep.sort();
  while(i<n && j < n) {
    if(arr[i] < dep[j]) {
      platforms++;
      i++
      
    } else {
      platforms--;
      j++
    }
    result = Math.max(result, platforms);
  }
  return result
  
}
function flatMatrix(input, result) {
  if(!input.length) {
    return input
  }
  result = result.concat(input.shift());
  input.forEach((rightEnd)=> {
    result.push(rightEnd.pop())
  })
  result = result.concat((input.pop()).reverse())
  let tmp = [];
  input.forEach((leftEnd)=> {
    tmp.push(leftEnd.shift())
  });
  result = result.concat(tmp.reverse());
  return flatMatrix(input, result);
  
}

function firstMissing(arr) {
  let smallNumber = null;
  for(let k =0; k<arr.length; k++) {
    const firstMissValue = arr[k];
    const matchValue = k+1;
    if(firstMissValue !== matchValue && firstMissValue <arr.length) {
      const tempV = arr[firstMissValue];
      if(tempV) {
        const shiftValue = firstMissValue - 1;
        const newTempValue = arr[shiftValue];
        
        arr[shiftValue] = arr[k];
        arr[k] = newTempValue;
      }
    }
  }
  for(let j=0; j <arr.length;j++) {
    if(j+1 !== arr[j]) {
      smallNumber = j+1;
      break
    }
  }
  if(smallNumber === null) {
    smallNumber = arr.length+1;
  }
  return smallNumber;
}

function rotateArr(arr, k) {
  for (let j = arr.length -1; j >=0; j--) {
    arr[j+k] = arr[j];
  }
  for(let j = k-1; j >=0; j--) {
    arr[j] = arr.pop()
  }
  return arr;
}

function getNumberOfIsland(grid) {
  const visited = grid.map(((row)=>row.map((cell)=>false)));
  

  const dfs = (i,j,grid,visited) => {
    let islandSize = 0;
    const stack = [[i,j]];
   
    while(stack.length) {
     
      const currentNode = stack.pop();
       
      let [i,j] = currentNode;
      if(visited[i][j])continue;
        visited[i][j] = true;
     
      
       if(grid[i][j] == "0")continue;
       islandSize++;
       
      
      const adjNeighbour = getAdjNeighbour(i,j,grid,visited)
      
      stack.push(...adjNeighbour)
    }
    return islandSize > 0 ? true: false
  }
  
   
  const getAdjNeighbour = (i,j,grid,visited) => {
    const adjNeigh = [];
    if(i > 0 && !visited[i-1][j]) {
      adjNeigh.push([i-1, j]);
    }
    
    if(i < grid.length -1 && !visited[i+1][j]) {
      adjNeigh.push([i+1, j]);
    }
    
    if(j > 0 && !visited[i][j-1]) {
      adjNeigh.push([i, j-1]);
    }
    if(j < grid[0].length-1 && !visited[i][j+1]) {
      adjNeigh.push([i, j+1]);
    }
    return adjNeigh;
    
  }
  
  let islandNumber = 0;
  for(let i =0; i<grid.length;i++) {
    for(let j=0; j<grid[i].length; j++) {
      if(dfs(i, j, grid, visited)) {
          islandNumber += 1;
      }
    }
  }
  return islandNumber;
 
}
// How many elements are sorted in reverse sorted array
function findRsa(arr){
  let left = 0;
  let right = arr.length-1;
  let midIdx = (left+right)/2;
  let mid = parseInt(midIdx.toFixed());
  
  if(arr[left] <= arr[mid]) {
    left = mid+1;
    right = arr.length-1;
  }
  if(arr[right] >= arr[mid]) {
    left = 0;
    right = mid;
  }
  
  if(arr[left] < arr[left-1] && arr[left] < arr[left+1]) {
    return left;
  }
  
  while(left <= right) {
    let midNidx = (left+right)/2;
    let midN = parseInt(midNidx.toFixed()); 
    let skip = false;
//     console.log("oloo", left, right)
    // check for last element
    if(arr[midN+1] === undefined) {
      
      skip = true;
    }
    // both sides should be smaller
    if(arr[midN] < arr[midN-1] && (arr[midN] < arr[midN+1] || skip)) {
      return midN;
    }
    if(arr[left] <= arr[midN]) {
      left = midN+1
    }
    if(arr[mid] <= arr[right]) {
      right = midN-1
    }
     
  }
 return -1;
}
// Search Index of elem in RSA
function searchInRsa(arr, target) {
  let minValue = findRsa(arr);
  
  const search = (arr, start, end) => {
    for(let k=start; k<end;k++) {
      if(arr[k] === target) {
        return k;
      }
    }
    return -1;
  }
  
  const sort_l = search(arr, 0, minValue);
  const sort_r = search(arr, minValue, arr.length);
  
  if(sort_l !== -1) {
    return sort_l;
  }
  if(sort_r !== -1) {
    return sort_r;
  }
  return -1;
} 

function findGreatestToRight(arr) {
  let j = arr.length;
  let newArr = [];
  
  for(let k=arr.length-1; k >=0; k--) {
    console.log(arr[k])
    if(!newArr.length) {
      newArr.push(-1);
    } else if(newArr.length && arr[k] < arr[j]) {
      newArr.push(arr[j]);
    } else if(newArr.length && arr[k] >= arr[j]) {
      let found = false;
      for(let m =j; m < arr.length; m++) {
        if(arr[m] > arr[k]){
          newArr.push(arr[m])
          found = true;
          break;
        }
      }
      if(!found) {
        newArr.push(-1)
      }
    }
    j = j -1;
  }
  return newArr.reverse();
}

function findGreatestToLeft(arr) {
  let j = 0;
  let newArr = [];
  
  for(let k = 0; k< arr.length; k++) {
    if(!newArr.length) {
      newArr.push(-1)
    } else if(newArr.length && arr[k] < arr[j]) {
      newArr.push(arr[j])
    } else if(newArr.length && arr[k] >= arr[j]) {
      let found = false;
      for(let m =j; m>0; m--) {
        if(arr[m] > arr[k]){
          found = true;
          newArr.push(arr[m]);
          break;
        }
      }
      if(!found) {
        newArr.push(-1)
      }
    }
    j = j+1;
  }
  return newArr
}
console.log(findGreatestToLeft([1,7,2,3]))
console.log(findGreatestToRight([1,3,2,4]))

console.log(searchInRsa([7,8,9,11,2,5],5));

console.log(findRsa([7,8,9,11,13,15,2])); // 6 since 7,8,9,11,13,15
console.log(getNumberOfIsland([
  [1,0,0,1,0,0],
  [1,1,0,0,0,1],
  [0,0,0,1,1,0],
  [1,0,0,1,0,0],
  [1,0,0,0,0,0]
]))
console.log(rotateArr([5,6,1,4,2,8,9], 2))
console.log(firstMissing([4,6,2,1,5,3]))
console.log(flatMatrix([[1,2,3,4],[5,6,7,8],[9,10,11,12],
[13,14,15,16]], []))
console.log(minimumOfPlatform([900,950,1100], [910,
1120,1130], 4))
console.log(zigZag([4,2,7,9,3,1]));
console.log(mergeSort([1, 4, 2, 8, 3, 9, 123, 5, 232, 67, 44, 100, 44, 33, 45, 56, 28, 45, 67, 44]));
console.log(mergeArr([4,6,7,8],[1,3,5,9]));
console.log(checkRotation('abcd','cdab'));
console.log(quickSort([4,2,8,1,9], 0, 4));
console.log(sumLargest([4,2,8,1,9]));
console.log(sumThreeElems([4,2,7,1,9], 12))

