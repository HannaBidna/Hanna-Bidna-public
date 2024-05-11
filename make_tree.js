//Ялинка повертається. Створити функцію makeTree(h) яка повертає обʼєкт з властивістю tree і методом showTree()

function makeTree(height){
    let obj = {
        tree: [],
        showTree: function() {
          console.log(this.tree.join('\n'));
        }
    };
  
    for (let i = 0; i < height; i += 1) {
      let stars = '*'.repeat(2 * i + 1);
      let space = ' '.repeat(height - i - 1);
      obj.tree.push(space + stars + space);
  }
  return obj;
  }
  
  const treeObj3 = makeTree(3);
  console.log(treeObj3.tree); 
  
  const treeObj5 = makeTree(5);
  treeObj5.showTree(); 